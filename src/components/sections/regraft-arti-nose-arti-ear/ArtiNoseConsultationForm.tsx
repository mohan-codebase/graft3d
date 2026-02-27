"use client";

import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import Image from 'next/image';

const ArtiNoseConsultationForm = () => {
    const [messageLength, setMessageLength] = useState(0);

    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="container mx-auto px-4 max-w-[1400px]">

                <div className="max-w-xl mx-auto">
                    <h2 className="text-[28px] font-bold text-[#5bc0de] mb-8">
                        Book a Consultation
                    </h2>

                    <form className="flex flex-col gap-5">
                        {/* Name */}
                        <div>
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full bg-[#f9f9f9] text-gray-700 placeholder-gray-400 py-3.5 px-4 outline-none focus:ring-1 focus:ring-[#5bc0de] transition-shadow"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full bg-[#f9f9f9] text-gray-700 placeholder-gray-400 py-3.5 px-4 outline-none focus:ring-1 focus:ring-[#5bc0de] transition-shadow"
                            />
                        </div>

                        {/* Phone Number */}
                        <div className="relative">
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full bg-[#f9f9f9] text-gray-700 placeholder-gray-400 py-3.5 pl-4 pr-12 outline-none focus:ring-1 focus:ring-[#5bc0de] transition-shadow"
                            />
                            {/* Simple India Flag SVG inline */}
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none w-6 h-4">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 225 150">
                                    <path fill="#f93" d="M0 0h225v50H0z" />
                                    <path fill="#fff" d="M0 50h225v50H0z" />
                                    <path fill="#128807" d="M0 100h225v50H0z" />
                                    <circle cx="112.5" cy="75" r="20" fill="#000080" />
                                    <circle cx="112.5" cy="75" r="17.5" fill="#fff" />
                                    <path fill="#000080" d="M112.5 75L112.5 55L113.5 75z" />
                                </svg>
                            </div>
                        </div>

                        {/* Choose Date */}
                        <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                                <Calendar size={20} />
                            </div>
                            <input
                                type="text"
                                placeholder="Choose Date"
                                onFocus={(e) => e.target.type = 'date'}
                                onBlur={(e) => {
                                    if (!e.target.value) e.target.type = 'text';
                                }}
                                className="w-full bg-[#f9f9f9] text-gray-700 placeholder-gray-400 py-3.5 pl-12 pr-4 outline-none focus:ring-1 focus:ring-[#5bc0de] transition-shadow"
                            />
                        </div>

                        {/* Choose a Time Section */}
                        <div className="mt-2">
                            <label className="block text-[#666] font-bold text-[15px] mb-3">
                                Choose a Time <span className="text-red-500 font-normal">*</span>
                            </label>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-[#777] font-bold text-sm mb-1.5">Hours</label>
                                    <input
                                        type="number"
                                        min="1"
                                        max="12"
                                        defaultValue=""
                                        className="w-full bg-[#f9f9f9] text-gray-700 py-3.5 px-4 outline-none focus:ring-1 focus:ring-[#5bc0de] transition-shadow"
                                    />
                                </div>

                                <div>
                                    <label className="block text-[#777] font-bold text-sm mb-1.5">Minutes</label>
                                    <input
                                        type="number"
                                        min="0"
                                        max="59"
                                        defaultValue=""
                                        className="w-full bg-[#f9f9f9] text-gray-700 py-3.5 px-4 outline-none focus:ring-1 focus:ring-[#5bc0de] transition-shadow"
                                    />
                                </div>

                                <div>
                                    <div className="relative">
                                        <select className="w-full bg-[#eaeaea] appearance-none text-black font-medium text-lg py-3.5 px-4 outline-none cursor-pointer">
                                            <option value="AM">AM</option>
                                            <option value="PM">PM</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Message */}
                        <div className="mt-2 relative">
                            <textarea
                                placeholder="Enter your message..."
                                rows={6}
                                maxLength={180}
                                onChange={(e) => setMessageLength(e.target.value.length)}
                                className="w-full bg-[#f9f9f9] text-gray-700 placeholder-gray-400 py-4 px-4 outline-none focus:ring-1 focus:ring-[#5bc0de] transition-shadow resize-y"
                            />
                            <div className="text-right text-gray-500 text-sm mt-1">
                                {messageLength} / 180
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="mt-4">
                            <button
                                type="submit"
                                className="bg-[#1ca6ea] hover:bg-[#128bbc] text-white font-medium text-[15px] py-3 px-6 transition-colors"
                            >
                                Send Message
                            </button>
                        </div>

                    </form>
                </div>

            </div>
        </section>
    );
};

export default ArtiNoseConsultationForm;
