"use client";

import { useCallback, useState, type FormEvent } from "react";

export type LeadFormStatus = "idle" | "loading" | "success" | "error";

type LeadFieldKey = "name" | "email" | "phone" | "city" | "message";

type LeadFormOptions = {
  subject: string;
  successMessage?: string;
  fieldAliases?: Partial<Record<LeadFieldKey, string[]>>;
  onSuccess?: () => void;
  resetOnSuccess?: boolean;
};

type ParsedLeadPayload = {
  name: string;
  email: string;
  phone: string;
  city: string;
  message: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const DEFAULT_ALIASES: Record<LeadFieldKey, string[]> = {
  name: ["name", "fullName", "firstName", "firstname", "doctorName", "patientName"],
  email: ["email", "businessEmail", "fromEmail"],
  phone: ["phone", "mobile", "mobileNumber"],
  city: ["city", "country", "address"],
  message: ["message", "comment", "remarks", "details", "link", "website"],
};

const LAST_NAME_ALIASES = ["lastName", "lastname"];

function normalizeKey(value: string): string {
  return value.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
}

function toDisplayLabel(value: string): string {
  const spaced = value.replace(/[_-]+/g, " ").replace(/\s+/g, " ").trim();
  if (!spaced) {
    return "Field";
  }
  return spaced.replace(/\b\w/g, (char) => char.toUpperCase());
}

function toSafeString(value: FormDataEntryValue): string {
  if (typeof value === "string") {
    return value.trim();
  }
  return value.name.trim();
}

function findFirst(entries: Array<{ normalizedKey: string; value: string }>, aliases: string[]): string {
  const normalizedAliases = new Set(aliases.map(normalizeKey));
  for (const entry of entries) {
    if (normalizedAliases.has(entry.normalizedKey) && entry.value) {
      return entry.value;
    }
  }
  return "";
}

function parseLeadPayload(
  formData: FormData,
  aliases: Record<LeadFieldKey, string[]>
): ParsedLeadPayload {
  const entries = Array.from(formData.entries())
    .map(([key, value]) => ({
      key,
      normalizedKey: normalizeKey(key),
      value: toSafeString(value),
    }))
    .filter((entry) => entry.value.length > 0);

  const firstName = findFirst(entries, ["firstName", "firstname"]);
  const lastName = findFirst(entries, LAST_NAME_ALIASES);
  const fullName = [firstName, lastName].filter(Boolean).join(" ").trim();
  const explicitName = findFirst(entries, aliases.name);

  const name = explicitName || fullName || "Website Visitor";
  const email = findFirst(entries, aliases.email);
  const phone = findFirst(entries, aliases.phone);
  const city = findFirst(entries, aliases.city);
  const primaryMessage = findFirst(entries, aliases.message);

  const consumedKeys = new Set(
    [
      ...aliases.name,
      ...aliases.email,
      ...aliases.phone,
      ...aliases.city,
      ...aliases.message,
      ...LAST_NAME_ALIASES,
      "firstName",
      "firstname",
      "honeypot",
    ].map(normalizeKey)
  );

  const additionalDetails = entries
    .filter((entry) => !consumedKeys.has(entry.normalizedKey))
    .map((entry) => `- ${toDisplayLabel(entry.key)}: ${entry.value}`);

  const messageParts = [primaryMessage];
  if (additionalDetails.length > 0) {
    messageParts.push(`Additional details:\n${additionalDetails.join("\n")}`);
  }

  return {
    name,
    email,
    phone,
    city,
    message: messageParts.filter(Boolean).join("\n\n").trim(),
  };
}

export function useLeadForm(options: LeadFormOptions) {
  const [status, setStatus] = useState<LeadFormStatus>("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const form = event.currentTarget;

      const aliases: Record<LeadFieldKey, string[]> = {
        name: options.fieldAliases?.name ?? DEFAULT_ALIASES.name,
        email: options.fieldAliases?.email ?? DEFAULT_ALIASES.email,
        phone: options.fieldAliases?.phone ?? DEFAULT_ALIASES.phone,
        city: options.fieldAliases?.city ?? DEFAULT_ALIASES.city,
        message: options.fieldAliases?.message ?? DEFAULT_ALIASES.message,
      };

      const payload = parseLeadPayload(new FormData(form), aliases);

      if (!payload.message) {
        setStatus("error");
        setFeedback("Please provide a message or request details before submitting.");
        return;
      }

      if (!payload.email && !payload.phone) {
        setStatus("error");
        setFeedback("Please provide at least an email address or phone number.");
        return;
      }

      if (payload.email && !EMAIL_REGEX.test(payload.email)) {
        setStatus("error");
        setFeedback("Please provide a valid email address.");
        return;
      }

      setStatus("loading");
      setFeedback("");

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...payload,
            subject: options.subject,
          }),
        });

        const data = (await response.json().catch(() => ({}))) as { message?: string };

        if (!response.ok) {
          throw new Error(data.message || "Failed to submit your request.");
        }

        if (options.resetOnSuccess ?? true) {
          form.reset();
        }
        options.onSuccess?.();

        setStatus("success");
        setFeedback(options.successMessage ?? "Thanks. Your request has been sent successfully.");

        setTimeout(() => {
          setStatus("idle");
          setFeedback("");
        }, 5000);
      } catch (error) {
        setStatus("error");
        const fallbackMessage =
          error instanceof Error ? error.message : "Unable to submit right now. Please try again later.";
        setFeedback(fallbackMessage);
      }
    },
    [options]
  );

  return { status, feedback, handleSubmit };
}
