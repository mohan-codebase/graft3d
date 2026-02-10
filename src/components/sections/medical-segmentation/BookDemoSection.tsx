"use client";

import React from 'react';
import { Button } from '@/components/ui/Button';

const BookDemoSection = () => {
    return (
        <section className="w-full py-16 bg-white">
            <div className="container mx-auto px-4 max-w-[1200px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Left Side: Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold text-black">
                                Book A Free Online Demo
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                Set up an online meeting with our team to explore the medical scan
                                segmentation process and pricing alternatives, whether it's a one-
                                time project or a recurring monthly service
                            </p>
                        </div>

                        <div className="bg-[#f0f9ff] p-8 rounded-xl border-l-4 border-[#0f6cbd] text-gray-700 leading-relaxed space-y-4">
                            <p>
                                Thank you for showing interest in our medical image segmentation process, which primarily uses Dicom to Print software. </p>
                            <p>
                                You can pick up the preferred demo timing that suits your schedule. The initial demo will be 30 mins to 1 hour, which will take place in our Zoom virtual meeting space accessible through our website. </p>
                            <p>We will conduct a live demonstration, gain insights into your unique application, and engage in a pricing discussion tailored to your project’s scale.</p>
                            <p>We Look forward to meeting you during the demo. </p>
                            <p>Thanks</p>
                            <p>Team Graft3D Healthcare.</p>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="bg-[#f0f9ff] p-8 rounded-2xl w-full">
                        <form className="space-y-4">
                            <div className="space-y-1">
                                <label className="text-gray-500 text-sm pl-1">Name:</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-100 bg-white focus:outline-none focus:ring-2 focus:ring-[#0f6cbd]"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-gray-500 text-sm pl-1">Hospital | Company name :</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-100 bg-white focus:outline-none focus:ring-2 focus:ring-[#0f6cbd]"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-gray-500 text-sm pl-1">Email Address:</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-100 bg-white focus:outline-none focus:ring-2 focus:ring-[#0f6cbd]"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-gray-500 text-sm pl-1">Mobile number :</label>
                                <input
                                    type="tel"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-100 bg-white focus:outline-none focus:ring-2 focus:ring-[#0f6cbd]"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-gray-500 text-sm pl-1">Choose Date:</label>
                                <input
                                    type="date"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-100 bg-white focus:outline-none focus:ring-2 focus:ring-[#0f6cbd]"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-gray-500 text-sm pl-1 text-red-500">Choose Timing: *</label>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                                    <div className="space-y-1">
                                        <label className="text-xs text-gray-400 pl-1">Hours</label>
                                        <select className="w-full px-4 py-3 rounded-lg border border-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0f6cbd] bg-white">
                                            <option>Select</option>
                                            {[...Array(12)].map((_, i) => (
                                                <option key={i} value={i + 1}>{i + 1}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs text-gray-400 pl-1">Minutes</label>
                                        <select className="w-full px-4 py-3 rounded-lg border border-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0f6cbd] bg-white">
                                            <option>Select</option>
                                            {[...Array(60)].map((_, i) => (
                                                <option key={i} value={i.toString().padStart(2, '0')}>{i.toString().padStart(2, '0')}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs text-gray-400 pl-1 opacity-0">AM/PM</label>
                                        <select className="w-full px-4 py-3 rounded-lg border border-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0f6cbd] bg-white">
                                            <option>AM</option>
                                            <option>PM</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4 flex justify-center">
                                <Button className="bg-[#1EA0D9] hover:bg-[#188ac0] text-white px-12 py-3 text-lg rounded font-medium">
                                    Book Now
                                </Button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BookDemoSection;
