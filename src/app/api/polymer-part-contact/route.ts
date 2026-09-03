import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitizeString(value: unknown): string {
    if (typeof value !== "string") return "";
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

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        
        const name = sanitizeString(formData.get("name"));
        const city = sanitizeString(formData.get("city"));
        const company = sanitizeString(formData.get("company"));
        const requiredMaterial = sanitizeString(formData.get("requiredMaterial"));
        const phone = sanitizeString(formData.get("phone"));
        const application = sanitizeString(formData.get("application"));
        const email = sanitizeString(formData.get("email"));
        
        const file = formData.get("file") as File | null;
        
        if (!name || !email) {
             return NextResponse.json({ success: false, message: "Name and Email are required" }, { status: 400 });
        }
        
        if (!EMAIL_REGEX.test(email)) {
             return NextResponse.json({ success: false, message: "Invalid email format" }, { status: 400 });
        }

        const emailUser = process.env.EMAIL_USER;
        const emailAppPassword = process.env.EMAIL_APP_PASSWORD;

        if (!emailUser || !emailAppPassword) {
            console.error("Missing email credentials: EMAIL_USER / EMAIL_APP_PASSWORD");
            return NextResponse.json({ success: false, message: "Email service is not configured." }, { status: 500 });
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: emailUser,
                pass: emailAppPassword,
            },
        });
        
        const primaryColor = "#1e73be";
        const lightBgColor = "#F0F7FF";
        const textColor = "#1f2937";

        const html = `
        <div style="background-color: ${lightBgColor}; padding: 40px 10px; font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: ${textColor};">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
            <!-- Header -->
            <div style="background-color: ${primaryColor}; padding: 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: 0.5px;">New Polymer Part Enquiry</h1>
            </div>
    
            <!-- Body -->
            <div style="padding: 40px 30px;">
              <p style="margin-top: 0; font-size: 16px; line-height: 1.5;">You have received a new polymer part application through the <strong>Graft3D</strong> website.</p>
              
              <div style="margin-top: 30px; border: 1px solid #E5E7EB; border-radius: 8px; overflow: hidden;">
                <table style="width: 100%; border-collapse: collapse; background-color: #F9FAFB;">
                  <tr>
                    <td style="padding: 15px; border-bottom: 1px solid #E5E7EB; width: 150px; font-weight: 600; color: ${primaryColor}; font-size: 14px; text-transform: uppercase;">Name</td>
                    <td style="padding: 15px; border-bottom: 1px solid #E5E7EB; color: ${textColor}; font-size: 15px;">${escapeHtml(name)}</td>
                  </tr>
                  <tr>
                    <td style="padding: 15px; border-bottom: 1px solid #E5E7EB; font-weight: 600; color: ${primaryColor}; font-size: 14px; text-transform: uppercase;">Email</td>
                    <td style="padding: 15px; border-bottom: 1px solid #E5E7EB; color: ${textColor}; font-size: 15px;">${escapeHtml(email)}</td>
                  </tr>
                  <tr>
                    <td style="padding: 15px; border-bottom: 1px solid #E5E7EB; font-weight: 600; color: ${primaryColor}; font-size: 14px; text-transform: uppercase;">Phone</td>
                    <td style="padding: 15px; border-bottom: 1px solid #E5E7EB; color: ${textColor}; font-size: 15px;">${escapeHtml(phone)}</td>
                  </tr>
                  <tr>
                    <td style="padding: 15px; border-bottom: 1px solid #E5E7EB; font-weight: 600; color: ${primaryColor}; font-size: 14px; text-transform: uppercase;">City</td>
                    <td style="padding: 15px; border-bottom: 1px solid #E5E7EB; color: ${textColor}; font-size: 15px;">${escapeHtml(city || "Not provided")}</td>
                  </tr>
                  <tr>
                    <td style="padding: 15px; border-bottom: 1px solid #E5E7EB; font-weight: 600; color: ${primaryColor}; font-size: 14px; text-transform: uppercase;">Company</td>
                    <td style="padding: 15px; border-bottom: 1px solid #E5E7EB; color: ${textColor}; font-size: 15px;">${escapeHtml(company || "Not provided")}</td>
                  </tr>
                  <tr>
                    <td style="padding: 15px; border-bottom: 1px solid #E5E7EB; font-weight: 600; color: ${primaryColor}; font-size: 14px; text-transform: uppercase;">Material</td>
                    <td style="padding: 15px; border-bottom: 1px solid #E5E7EB; color: ${textColor}; font-size: 15px;">${escapeHtml(requiredMaterial || "Not provided")}</td>
                  </tr>
                  <tr>
                    <td style="padding: 15px; font-weight: 600; color: ${primaryColor}; font-size: 14px; text-transform: uppercase;">Application</td>
                    <td style="padding: 15px; color: ${textColor}; font-size: 15px;">${escapeHtml(application || "Not provided")}</td>
                  </tr>
                </table>
              </div>
              
              ${file && file.name ? `<p style="margin-top: 20px; font-size: 14px; color: #166AAF; font-weight: 600;">📎 CAD File Attached: ${escapeHtml(file.name)}</p>` : `<p style="margin-top: 20px; font-size: 14px; color: #6B7280;">No CAD File attached.</p>`}
            </div>
          </div>
        </div>
        `;

        const attachments = [];
        if (file && file.name) {
            const buffer = Buffer.from(await file.arrayBuffer());
            attachments.push({
                filename: file.name,
                content: buffer
            });
        }

        await transporter.sendMail({
            from: emailUser,
            to: "sales@graft3d.com",
            replyTo: email,
            subject: `New Polymer Part Enquiry from ${name}`,
            html: html,
            attachments: attachments
        });

        return NextResponse.json({ success: true, message: "Your application has been submitted successfully." }, { status: 200 });

    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ success: false, message: "Failed to send request." }, { status: 500 });
    }
}
