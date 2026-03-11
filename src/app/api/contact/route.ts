import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  city: string;
  message: string;
  subject: string;
};

type RateLimitBucket = {
  count: number;
  resetAt: number;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[0-9+\-() ]{6,25}$/;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 12;

const rateLimitStore = new Map<string, RateLimitBucket>();

function sanitizeString(value: unknown): string {
  if (typeof value !== "string") {
    return "";
  }
  return value.replace(/[\u0000-\u001F\u007F]/g, " ").trim();
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }

  const realIp = req.headers.get("x-real-ip");
  if (realIp) {
    return realIp.trim();
  }

  return "unknown";
}

function exceedsRateLimit(ip: string): boolean {
  const now = Date.now();
  const currentBucket = rateLimitStore.get(ip);

  if (!currentBucket || currentBucket.resetAt <= now) {
    rateLimitStore.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return false;
  }

  currentBucket.count += 1;
  rateLimitStore.set(ip, currentBucket);
  return currentBucket.count > RATE_LIMIT_MAX_REQUESTS;
}

async function parseBody(req: NextRequest): Promise<Record<string, unknown>> {
  const contentType = req.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    return (await req.json()) as Record<string, unknown>;
  }

  if (
    contentType.includes("application/x-www-form-urlencoded") ||
    contentType.includes("multipart/form-data")
  ) {
    const formData = await req.formData();
    const entries = Array.from(formData.entries()).map(([key, value]) => [
      key,
      typeof value === "string" ? value : value.name,
    ]);
    return Object.fromEntries(entries);
  }

  return {};
}

function normalizePayload(rawBody: Record<string, unknown>): ContactPayload | { error: string } {
  const name = sanitizeString(rawBody.name) || "Website Visitor";
  const email = sanitizeString(rawBody.email);
  const phone = sanitizeString(rawBody.phone);
  const city = sanitizeString(rawBody.city);
  const message = sanitizeString(rawBody.message);
  const subject = sanitizeString(rawBody.subject) || `New Website Enquiry from ${name}`;
  const honeypot = sanitizeString(rawBody.honeypot);

  if (honeypot) {
    return {
      name,
      email,
      phone,
      city,
      message,
      subject,
    };
  }

  if (!message || message.length < 3) {
    return { error: "Please provide a valid message." };
  }

  if (!email && !phone) {
    return { error: "Please provide at least an email address or phone number." };
  }

  if (email && !EMAIL_REGEX.test(email)) {
    return { error: "Please provide a valid email address." };
  }

  if (phone && !PHONE_REGEX.test(phone)) {
    return { error: "Please provide a valid phone number." };
  }

  if (subject.length > 150) {
    return { error: "Subject is too long." };
  }

  if (message.length > 8000) {
    return { error: "Message is too long." };
  }

  return {
    name: name.slice(0, 120),
    email: email.slice(0, 120),
    phone: phone.slice(0, 40),
    city: city.slice(0, 120),
    message,
    subject,
  };
}

function buildEmailHtml(payload: ContactPayload): string {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <h2 style="color: #1e73be;">New Website Enquiry Received</h2>
      <p>You have received a new enquiry from the Graft3D website.</p>
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; width: 140px;">Name</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${escapeHtml(payload.name)}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${escapeHtml(payload.email || "Not provided")}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Phone</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${escapeHtml(payload.phone || "Not provided")}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">City</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${escapeHtml(payload.city || "Not provided")}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; vertical-align: top;">Message</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${escapeHtml(payload.message).replace(/\n/g, "<br>")}</td>
        </tr>
      </table>
      <p style="margin-top: 30px; font-size: 12px; color: #777;">This email was generated automatically from the website.</p>
    </div>
  `;
}

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req);
    if (exceedsRateLimit(ip)) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please try again in a few minutes." },
        { status: 429 }
      );
    }

    let rawBody: Record<string, unknown>;
    try {
      rawBody = await parseBody(req);
    } catch {
      return NextResponse.json(
        { success: false, message: "Invalid request payload." },
        { status: 400 }
      );
    }
    const payload = normalizePayload(rawBody);
    if ("error" in payload) {
      return NextResponse.json({ success: false, message: payload.error }, { status: 400 });
    }

    const emailUser = process.env.EMAIL_USER;
    const emailAppPassword = process.env.EMAIL_APP_PASSWORD;

    if (!emailUser || !emailAppPassword) {
      console.error("Missing email credentials: EMAIL_USER / EMAIL_APP_PASSWORD");
      return NextResponse.json(
        { success: false, message: "Email service is not configured." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailAppPassword,
      },
    });

    await transporter.sendMail({
      from: emailUser,
      to: emailUser,
      replyTo: payload.email || undefined,
      subject: payload.subject,
      html: buildEmailHtml(payload),
      text: [
        `Subject: ${payload.subject}`,
        `Name: ${payload.name}`,
        `Email: ${payload.email || "Not provided"}`,
        `Phone: ${payload.phone || "Not provided"}`,
        `City: ${payload.city || "Not provided"}`,
        "",
        "Message:",
        payload.message,
      ].join("\n"),
    });

    return NextResponse.json(
      { success: true, message: "Your request has been submitted successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send your request. Please try again later." },
      { status: 500 }
    );
  }
}
