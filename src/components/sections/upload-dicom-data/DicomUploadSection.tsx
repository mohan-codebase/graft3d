"use client";

import React, { useState } from 'react';

const DicomUploadSection = () => {
    const [activeTab, setActiveTab] = useState<'email' | 'link'>('email');

    return (
        <section className="w-full bg-white py-16 px-4">
            <div className="max-w-[960px] mx-auto">

                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-widest text-[#1a3a6b] uppercase mb-4">
                        Upload DICOM Data
                    </h1>
                    <p className="text-[#1a78c2] font-semibold text-base mb-2">
                        Upload the files up to 5 GB – Secure and fast delivery of 3d models
                    </p>
                    <p className="text-[#1a78c2] text-sm max-w-[520px] mx-auto">
                        Upload Dicom files with following parameters, You can also upload in a cloud and share us as link
                    </p>
                </div>

                {/* Tabs only */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    <div className="flex">
                        <button
                            onClick={() => setActiveTab('email')}
                            className={`flex-1 flex items-center justify-center gap-2 py-4 text-sm font-semibold transition-all duration-200 ${activeTab === 'email'
                                    ? 'bg-[#1a3a6b] text-white'
                                    : 'bg-white text-gray-600 hover:bg-gray-50 border-b-2 border-gray-200'
                                }`}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Send as email
                        </button>
                        <button
                            onClick={() => setActiveTab('link')}
                            className={`flex-1 flex items-center justify-center gap-2 py-4 text-sm font-semibold transition-all duration-200 ${activeTab === 'link'
                                    ? 'bg-[#1a3a6b] text-white'
                                    : 'bg-white text-gray-600 hover:bg-gray-50 border-b-2 border-gray-200'
                                }`}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg>
                            Send as link
                        </button>
                    </div>
                </div>

      

            </div>
        </section>
    );
};

export default DicomUploadSection;
