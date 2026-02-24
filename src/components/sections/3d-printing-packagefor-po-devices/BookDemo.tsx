"use client";

import React, { useState } from 'react';

const BookDemo = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        hours: '',
        minutes: '',
        ampm: 'AM',
        message: '',
    });

    const charLimit = 180;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (name === 'message' && value.length > charLimit) return;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    const inputClass = 'w-full bg-white border border-gray-200 rounded px-4 py-3 text-[13px] text-gray-600 placeholder-gray-400 focus:outline-none focus:border-[#166AAF]';

    return (
        <>
            {/* Blue brochure banner */}
            <div className="bg-[#1a5fa8] py-5 px-6">
                <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
                    <p className="text-white font-bold text-[16px] leading-snug">
                        Download 3D Printing Package<br />Devices Brochure
                    </p>
                    <a
                        href="#"
                        className="flex-shrink-0 bg-[#29a8e0] hover:bg-[#1e8fc0] text-white text-[13px] font-semibold px-5 py-2 rounded-full transition-colors flex items-center gap-2"
                    >
                        Download Brochure ⬇
                    </a>
                </div>
            </div>

            {/* Book A Demo form */}
            <section className="py-14 bg-[#d8ebf7] relative overflow-hidden">
                {/* Decorative blobs */}
                <div className="absolute left-0 top-10 w-24 h-36 bg-[#7bbde4] rounded-r-full opacity-60" />
                <div className="absolute right-0 bottom-10 w-24 h-36 bg-[#7bbde4] rounded-l-full opacity-60" />

                <div className="relative z-10 max-w-[600px] mx-auto px-4">
                    <h2 className="text-[28px] font-bold text-gray-900 text-center mb-8">Book A Demo</h2>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={form.name}
                            onChange={handleChange}
                            className={inputClass}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={form.email}
                            onChange={handleChange}
                            className={inputClass}
                            required
                        />
                        {/* Phone with India flag */}
                        <div className="relative">
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={form.phone}
                                onChange={handleChange}
                                className={`${inputClass} pr-10`}
                            />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[18px]">🇮🇳</span>
                        </div>

                        {/* Date with calendar icon */}
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[14px]">📅</span>
                            <input
                                type="date"
                                name="date"
                                value={form.date}
                                onChange={handleChange}
                                className={`${inputClass} pl-9 text-gray-400`}
                            />
                        </div>

                        {/* Time picker */}
                        <div>
                            <p className="text-[12px] text-gray-600 mb-1">
                                Choose a Time <span className="text-red-500">*</span>
                            </p>
                            <div className="flex gap-3 items-center">
                                <div className="flex flex-col gap-1 flex-1">
                                    <span className="text-[11px] text-gray-500">Hours</span>
                                    <input
                                        type="number"
                                        name="hours"
                                        min={1} max={12}
                                        value={form.hours}
                                        onChange={handleChange}
                                        className={`${inputClass} text-center`}
                                        placeholder=""
                                    />
                                </div>
                                <div className="flex flex-col gap-1 flex-1">
                                    <span className="text-[11px] text-gray-500">Minutes</span>
                                    <input
                                        type="number"
                                        name="minutes"
                                        min={0} max={59}
                                        value={form.minutes}
                                        onChange={handleChange}
                                        className={`${inputClass} text-center`}
                                        placeholder=""
                                    />
                                </div>
                                <div className="flex flex-col gap-1 flex-1">
                                    <span className="text-[11px] text-transparent select-none">AM/PM</span>
                                    <select
                                        name="ampm"
                                        value={form.ampm}
                                        onChange={handleChange}
                                        className={inputClass}
                                    >
                                        <option value="AM">AM</option>
                                        <option value="PM">PM</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Message */}
                        <div className="relative">
                            <textarea
                                name="message"
                                placeholder="Enter your message..."
                                value={form.message}
                                onChange={handleChange}
                                rows={5}
                                className={`${inputClass} resize-y`}
                            />
                            <span className="absolute bottom-2 right-3 text-[11px] text-gray-400">
                                {form.message.length} / {charLimit}
                            </span>
                        </div>

                        <div className="mt-1">
                            <button
                                type="submit"
                                className="bg-[#29a8e0] hover:bg-[#1e8fc0] text-white font-semibold px-8 py-2.5 rounded-sm text-[14px] transition-colors"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default BookDemo;
