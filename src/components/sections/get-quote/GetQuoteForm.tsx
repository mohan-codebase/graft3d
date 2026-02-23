"use client";

import { useState } from "react";

const GetQuoteForm = () => {
  const [message, setMessage] = useState("");
  const maxLength = 180;

  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <div>
        <label className="block text-xs font-bold text-[#777771] mb-2">
          Name <span className="text-[#E04562]">*</span>
        </label>
        <input
          type="text"
          required
          placeholder="Name"
          className="w-full rounded-[10px] border border-[#777771] bg-[#EDEDED] px-4 py-3 text-base text-black placeholder:text-[#888888] focus:border-[#17A8E3] focus:bg-[#E6E6E6] focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-[#777771] mb-2">
          Email Address <span className="text-[#E04562]">*</span>
        </label>
        <input
          type="email"
          required
          placeholder="Email"
          className="w-full rounded-[10px] border border-[#777771] bg-[#EDEDED] px-4 py-3 text-base text-black placeholder:text-[#888888] focus:border-[#17A8E3] focus:bg-[#E6E6E6] focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-[#777771] mb-2">
          Phone Number <span className="text-[#E04562]">*</span>
        </label>
        <input
          type="tel"
          required
          placeholder="Phone Number"
          className="w-full rounded-[10px] border border-[#777771] bg-[#EDEDED] px-4 py-3 text-base text-black placeholder:text-[#888888] focus:border-[#17A8E3] focus:bg-[#E6E6E6] focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-[#777771] mb-2">
          City <span className="text-[#E04562]">*</span>
        </label>
        <input
          type="text"
          required
          placeholder="Your City"
          className="w-full rounded-[10px] border border-[#777771] bg-[#EDEDED] px-4 py-3 text-base text-black placeholder:text-[#888888] focus:border-[#17A8E3] focus:bg-[#E6E6E6] focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-[#777771] mb-2">
          Message <span className="text-[#E04562]">*</span>
        </label>
        <textarea
          required
          placeholder="Enter your message..."
          rows={6}
          maxLength={maxLength}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="w-full rounded-[10px] border border-[#777771] bg-[#EDEDED] px-4 py-3 text-base text-black placeholder:text-[#888888] focus:border-[#17A8E3] focus:bg-[#E6E6E6] focus:outline-none"
        />
        <p className="text-xs text-[#777771] mt-2">
          {message.length} / {maxLength}
        </p>
      </div>

      <div className="flex justify-center pt-2">
        <button
          type="submit"
          className="rounded-[10px] bg-[#17A8E3] px-12 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#008FCA]"
        >
          Enquire Now
        </button>
      </div>
    </form>
  );
};

export default GetQuoteForm;
