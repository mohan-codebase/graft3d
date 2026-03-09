"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { InlineWidget } from "react-calendly";

const BookDemoContent = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
        phone: '',
        product: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <section className="w-full py-16 bg-white">
            <div className="max-w-[1400px] mx-auto px-4">
                <h1 className="text-2xl font-bold mb-12 text-[#166AAF] uppercase tracking-wide">Book Demo</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Side: Form */}
                    <div className="space-y-8">
                        <form className="space-y-6">
                            <div className="space-y-1">
                                <label className="text-sm text-gray-500">First Name *</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#166AAF] transition-colors"
                                    required
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm text-gray-500">Email Address *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#166AAF] transition-colors"
                                    required
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm text-gray-500">Phone Number *</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#166AAF] transition-colors"
                                    required
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm text-red-500">Select *</label>
                                <select
                                    name="product"
                                    value={formData.product}
                                    onChange={handleChange}
                                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#166AAF] transition-colors bg-transparent appearance-none"
                                    required
                                >
                                    <option value="" disabled>Select Products</option>
                                    <option value="3d-printing">3D Printing</option>
                                    <option value="software">Software</option>
                                    <option value="consulting">Consulting</option>
                                </select>
                            </div>

                            <Button
                                type="submit"
                                className="bg-[#00AEEF] hover:bg-[#00AEEF]/90 text-white rounded-none px-8 py-2 h-auto text-sm font-normal"
                            >
                                Send Message
                            </Button>
                        </form>
                    </div>

                    {/* Right Side: Calendly */}
                    <div className="h-[600px] border border-gray-100 rounded-lg overflow-hidden shadow-sm">
                        <InlineWidget
                            url="https://calendly.com/sales-graft3d/30min"
                            styles={{ height: '100%' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookDemoContent;
