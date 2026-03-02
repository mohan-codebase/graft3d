"use client";

import { useState } from "react";

const GetQuoteForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const maxLength = 180;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", city: "", message: "" });
        // Optional: Reset success message after a few seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Network error. Please try again later.");
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block text-xs font-bold text-[#777771] mb-2">
          Name <span className="text-[#E04562]">*</span>
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Name"
          className="w-full rounded-[10px] border border-[#777771] bg-[#EDEDED] px-4 py-3 text-base text-black placeholder:text-[#888888] focus:border-[#17A8E3] focus:bg-[#E6E6E6] focus:outline-none disabled:opacity-50"
          disabled={status === "loading"}
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-[#777771] mb-2">
          Email Address <span className="text-[#E04562]">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Email"
          className="w-full rounded-[10px] border border-[#777771] bg-[#EDEDED] px-4 py-3 text-base text-black placeholder:text-[#888888] focus:border-[#17A8E3] focus:bg-[#E6E6E6] focus:outline-none disabled:opacity-50"
          disabled={status === "loading"}
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-[#777771] mb-2">
          Phone Number <span className="text-[#E04562]">*</span>
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="Phone Number"
          className="w-full rounded-[10px] border border-[#777771] bg-[#EDEDED] px-4 py-3 text-base text-black placeholder:text-[#888888] focus:border-[#17A8E3] focus:bg-[#E6E6E6] focus:outline-none disabled:opacity-50"
          disabled={status === "loading"}
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-[#777771] mb-2">
          City <span className="text-[#E04562]">*</span>
        </label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
          placeholder="Your City"
          className="w-full rounded-[10px] border border-[#777771] bg-[#EDEDED] px-4 py-3 text-base text-black placeholder:text-[#888888] focus:border-[#17A8E3] focus:bg-[#E6E6E6] focus:outline-none disabled:opacity-50"
          disabled={status === "loading"}
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-[#777771] mb-2">
          Message <span className="text-[#E04562]">*</span>
        </label>
        <textarea
          name="message"
          required
          placeholder="Enter your message..."
          rows={6}
          maxLength={maxLength}
          value={formData.message}
          onChange={handleChange}
          className="w-full rounded-[10px] border border-[#777771] bg-[#EDEDED] px-4 py-3 text-base text-black placeholder:text-[#888888] focus:border-[#17A8E3] focus:bg-[#E6E6E6] focus:outline-none disabled:opacity-50"
          disabled={status === "loading"}
        />
        <p className="text-xs text-[#777771] mt-2">
          {formData.message.length} / {maxLength}
        </p>
      </div>

      {status === "success" && (
        <div className="p-4 rounded-[10px] bg-green-50 border border-green-200 text-green-700 text-sm font-medium text-center">
          Thank you! Your quote request has been sent successfully.
        </div>
      )}

      {status === "error" && (
        <div className="p-4 rounded-[10px] bg-red-50 border border-red-200 text-red-700 text-sm font-medium text-center">
          {errorMessage}
        </div>
      )}

      <div className="flex justify-center pt-2">
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="rounded-[10px] bg-[#17A8E3] px-12 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#008FCA] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Sending..." : "Enquire Now"}
        </button>
      </div>
    </form>
  );
};

export default GetQuoteForm;
