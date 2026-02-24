"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const hospitalBenefits = [
    'Provide personalized P&O devices, tailored to each patient\'s unique needs, resulting in improved patient comfort, functionality, and overall satisfaction.',
    'Eliminate the need for outsourcing, reduce lead times, and provide faster and more efficient services to patients.',
    'Eliminate costs associated with traditional manufacturing methods, such as casting, molding, and manual fabrication.',
    'Maintain control over the production process, ensuring quality standards and compliance with regulations.',
];

const patientBenefits = [
    'Receive fully customized prosthetics and orthotics tailored to their unique anatomy and functional requirements.',
    'Benefit from faster turnaround times, reducing waiting periods and improving access to mobility aids.',
    'Experience superior comfort and fit with devices designed specifically for their body measurements.',
    'Access innovative, high-quality devices manufactured in-house, ensuring consistent quality and durability.',
];

const Benefits = () => {
    const [activeTab, setActiveTab] = useState<'hospital' | 'patient'>('hospital');
    const benefits = activeTab === 'hospital' ? hospitalBenefits : patientBenefits;

    return (
        <section className="py-14 bg-[#f4f9ff]">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-10 items-start">

                    {/* Left content */}
                    <div className="w-full lg:w-[58%]">
                        <h2 className="text-[22px] md:text-[26px] font-extrabold text-gray-900 mb-8 leading-snug">
                            <span className="text-[#166aaf]">Benefits Of Setting Up</span> In-House Digital Manufacturing Of P&amp;O Devices
                        </h2>

                        {/* Tabs */}
                        <div className="flex gap-3 mb-7">
                            <button
                                onClick={() => setActiveTab('hospital')}
                                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-[14px] font-semibold transition-all border ${activeTab === 'hospital'
                                    ? 'bg-[#166aaf] text-white border-[#166aaf] shadow-md'
                                    : 'bg-white text-[#166aaf] border-[#c7dff0] hover:bg-[#eaf3fb]'
                                    }`}
                            >
                                🏥 For the Hospital
                            </button>
                            <button
                                onClick={() => setActiveTab('patient')}
                                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-[14px] font-semibold transition-all border ${activeTab === 'patient'
                                    ? 'bg-[#166aaf] text-white border-[#166aaf] shadow-md'
                                    : 'bg-white text-[#166aaf] border-[#c7dff0] hover:bg-[#eaf3fb]'
                                    }`}
                            >
                                🧑‍⚕️ For the Patients
                            </button>
                        </div>

                        {/* Benefits list */}
                        <ul className="flex flex-col gap-4">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-3 text-gray-700 text-[13px] leading-relaxed">
                                    <span className="text-[#166aaf] text-[16px] leading-none mt-0.5 flex-shrink-0">◆</span>
                                    {benefit}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right decorative image */}
                    <div className="w-full lg:w-[42%] flex justify-center items-center">
                        <div className="relative w-full max-w-[340px] h-[340px]">
                            <Image
                                src="https://graft3d.com/wp-content/uploads/2023/08/image-7.png"
                                alt="Benefits illustration"
                                fill
                                unoptimized
                                className="object-contain rounded-2xl"
                            />
                            {/* Blue overlay curve decorations */}
                            <div className="absolute -right-3 top-8 w-14 h-full rounded-3xl bg-[#166aaf]/20 -z-10" />
                            <div className="absolute -right-6 top-16 w-14 h-[80%] rounded-3xl bg-[#166aaf]/10 -z-10" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Benefits;
