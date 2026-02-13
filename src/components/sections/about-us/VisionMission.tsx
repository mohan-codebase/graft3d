"use client";

import React, { useState } from 'react';
import { UserCheck } from 'lucide-react';

const tabs = [
    {
        id: 'vision',
        label: 'Our Vision',
        content: 'To be the global leader in precision 3D healthcare solutions, transforming surgical outcomes through continuous innovation and clinical excellence. We envision a future where every complex surgery is meticulously planned and executed with the help of advanced 3D technology, ensuring the highest standards of patient safety and success.',
        icon: <UserCheck className="w-12 h-12 text-[#166AAF]" />
    },
    {
        id: 'mission',
        label: 'Our Mission',
        content: 'To empower surgical teams with accurate 3D models and integrated clinical reports, bridging the gap between medical imaging and surgical reality. We are dedicated to providing end-to-end 3D healthcare solutions that improve precision, reduce operating time, and enhance the overall quality of treatment for patients worldwide.',
        icon: <UserCheck className="w-12 h-12 text-[#166AAF]" />
    },
    {
        id: 'approach',
        label: 'Our Approach',
        content: 'Combining multi-faculty clinical expertise with state-of-the-art 3D technology to deliver evidence-based, patient-specific solutions. Our approach involves a deep understanding of patient case histories, providing detailed clinical reports that translate complex data into actionable surgical insights for medical professionals.',
        icon: <UserCheck className="w-12 h-12 text-[#166AAF]" />
    },
    {
        id: 'objective',
        label: 'Our Objective',
        content: 'By bringing the clinical experience of our multi-faculty doctors and surgeons together, Graft 3D has a unique vision with a focus on being a trusted partner of surgical team, from sensitive medical imaging to dynamic 3DP models for planning and preparation. We specialize in developing tailored 3D printing healthcare solutions for individual patient cases. Our clinical reports which were based on patient case records, we communicate integrated report to the surgeons, giving surgeons high clinical confidence and reducing time like operating surgical steps with absolute confidence.',
        icon: <UserCheck className="w-12 h-12 text-[#166AAF]" />
    }
];

const VisionMission = () => {
    const [activeTab, setActiveTab] = useState('objective');

    const activeContent = tabs.find(tab => tab.id === activeTab);

    return (
        <section className="w-full py-20 bg-gray-50/30 bg-secondary">
            <div className="max-w-[1400px] mx-auto px-4">
                {/* Header */}
                <h2 className="text-2xl md:text-3xl font-bold text-center text-[#166AAF] mb-12 flex flex-wrap justify-center items-center gap-2">
                    GRAFT 3D <span className="text-gray-900">IS A HEALTHCARE SOLUTIONS PROVIDER</span>
                </h2>

                {/* Tab Navigation */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-8 py-4 font-bold transition-all duration-300 min-w-[200px] shadow-sm ${activeTab === tab.id
                                    ? 'bg-[#166AAF] rounded text-white transform -translate-y-1'
                                    : 'bg-white rounded text-gray-600 hover:bg-gray-100 hover:text-[#166AAF]'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className=" p-8 md:p-12 border border-gray-100">
                    <div className="flex flex-col md:flex-row items-center gap-12 animate-fade-in-up">
                        <div className="flex-1">
                            <p className="text-gray-600 leading-relaxed text-lg  text-justify md:text-left">
                                {activeContent?.content}
                            </p>
                        </div>
                        <div className="hidden md:flex p-10 bg-gray-50 rounded-2xl border border-gray-100 shadow-inner">
                            {activeContent?.icon}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisionMission;
