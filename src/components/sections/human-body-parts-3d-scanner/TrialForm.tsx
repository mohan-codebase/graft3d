import React from 'react';

const TrialForm = () => {
    return (
        <div className="py-16 border-b border-gray-100" id="get-quote">
            <h2 className="text-3xl font-extrabold text-[#1171bd] mb-8 uppercase tracking-tight">
                Request A Free Trial / Get Quote
            </h2>

            <form className="max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-gray-700">First Name <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            required
                            className="bg-gray-50 border border-gray-200 rounded p-3 focus:outline-none focus:border-[#1e73be] transition-colors"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-gray-700">Last Name <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            required
                            className="bg-gray-50 border border-gray-200 rounded p-3 focus:outline-none focus:border-[#1e73be] transition-colors"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-gray-700">Business Email <span className="text-red-500">*</span></label>
                        <input
                            type="email"
                            required
                            className="bg-gray-50 border border-gray-200 rounded p-3 focus:outline-none focus:border-[#1e73be] transition-colors"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-gray-700">Mobile Number <span className="text-red-500">*</span></label>
                        <input
                            type="tel"
                            required
                            className="bg-gray-50 border border-gray-200 rounded p-3 focus:outline-none focus:border-[#1e73be] transition-colors"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-gray-700">Company Name</label>
                        <input
                            type="text"
                            className="bg-gray-50 border border-gray-200 rounded p-3 focus:outline-none focus:border-[#1e73be] transition-colors"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-gray-700">Country</label>
                        <input
                            type="text"
                            className="bg-gray-50 border border-gray-200 rounded p-3 focus:outline-none focus:border-[#1e73be] transition-colors"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-2 mb-6">
                    <label className="text-sm font-bold text-gray-700">Industry</label>
                    <input
                        type="text"
                        className="bg-gray-50 border border-gray-200 rounded p-3 focus:outline-none focus:border-[#1e73be] transition-colors w-full"
                    />
                </div>

                <div className="flex flex-col gap-2 mb-8">
                    <label className="text-sm font-bold text-gray-700">Comment</label>
                    <textarea
                        rows={6}
                        className="bg-gray-50 border border-gray-200 rounded p-3 focus:outline-none focus:border-[#1e73be] transition-colors w-full resize-none"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-[#1e73be] hover:bg-[#165a94] text-white font-bold py-3 px-8 rounded transition-all shadow-sm uppercase text-[15px]"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default TrialForm;
