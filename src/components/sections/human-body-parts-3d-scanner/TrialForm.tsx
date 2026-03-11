"use client";

import React from 'react';
import { useLeadForm } from '@/lib/useLeadForm';

const TrialForm = () => {
    const { status, feedback, handleSubmit } = useLeadForm({
        subject: 'Human Body Scanner Free Trial Request',
        successMessage: 'Thanks. Your free-trial request has been submitted.'
    });

    return (
        <div className="py-16 border-b border-gray-100" id="get-quote">
            <h2 className="text-3xl font-extrabold text-[#1171bd] mb-8 uppercase tracking-tight">
                Request A Free Trial / Get Quote
            </h2>

            <form className="max-w-5xl" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-gray-700">First Name <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            name="firstName"
                            required
                            className="bg-gray-50 border border-gray-200 rounded p-3 focus:outline-none focus:border-[#1e73be] transition-colors"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-gray-700">Last Name <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            name="lastName"
                            required
                            className="bg-gray-50 border border-gray-200 rounded p-3 focus:outline-none focus:border-[#1e73be] transition-colors"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-gray-700">Business Email <span className="text-red-500">*</span></label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="bg-gray-50 border border-gray-200 rounded p-3 focus:outline-none focus:border-[#1e73be] transition-colors"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-gray-700">Mobile Number <span className="text-red-500">*</span></label>
                        <input
                            type="tel"
                            name="phone"
                            required
                            className="bg-gray-50 border border-gray-200 rounded p-3 focus:outline-none focus:border-[#1e73be] transition-colors"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-gray-700">Company Name</label>
                        <input
                            type="text"
                            name="company"
                            className="bg-gray-50 border border-gray-200 rounded p-3 focus:outline-none focus:border-[#1e73be] transition-colors"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-gray-700">Country</label>
                        <input
                            type="text"
                            name="country"
                            className="bg-gray-50 border border-gray-200 rounded p-3 focus:outline-none focus:border-[#1e73be] transition-colors"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-2 mb-6">
                    <label className="text-sm font-bold text-gray-700">Industry</label>
                    <input
                        type="text"
                        name="industry"
                        className="bg-gray-50 border border-gray-200 rounded p-3 focus:outline-none focus:border-[#1e73be] transition-colors w-full"
                    />
                </div>

                <div className="flex flex-col gap-2 mb-8">
                    <label className="text-sm font-bold text-gray-700">Comment</label>
                    <textarea
                        name="message"
                        rows={6}
                        className="bg-gray-50 border border-gray-200 rounded p-3 focus:outline-none focus:border-[#1e73be] transition-colors w-full resize-none"
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="bg-[#1e73be] hover:bg-[#165a94] text-white font-bold py-3 px-8 rounded transition-all shadow-sm uppercase text-[15px]"
                >
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
                {feedback && (
                    <p className={`mt-4 text-sm ${status === 'error' ? 'text-red-600' : 'text-green-700'}`}>
                        {feedback}
                    </p>
                )}
            </form>
        </div>
    );
};

export default TrialForm;
