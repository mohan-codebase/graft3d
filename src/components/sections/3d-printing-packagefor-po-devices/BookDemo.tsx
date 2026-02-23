"use client";

import React, { useState } from 'react';

const BookDemo = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <section className="py-14 bg-[#f9f9f9]">
            <div className="max-w-[600px] mx-auto px-4">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Book A Demo</h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#166AAF]"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#166AAF]"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={form.phone}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#166AAF]"
                        />
                    </div>
                    <div>
                        <input
                            type="date"
                            name="date"
                            value={form.date}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#166AAF] text-gray-500"
                        />
                    </div>
                    <div>
                        <input
                            type="time"
                            name="time"
                            value={form.time}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#166AAF] text-gray-500"
                        />
                    </div>
                    <div>
                        <textarea
                            name="message"
                            placeholder="Message"
                            value={form.message}
                            onChange={handleChange}
                            rows={4}
                            className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#166AAF] resize-none"
                        />
                    </div>
                    <div className="flex justify-center mt-2">
                        <button
                            type="submit"
                            className="bg-[#166AAF] text-white font-semibold px-10 py-3 rounded hover:bg-[#115a95] transition-colors text-sm"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default BookDemo;
