"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Play } from 'lucide-react';

const tabs = [
    {
        id: 'dicom',
        title: 'DICOM Image Processing',
        icon: '/images/3d-service/Graft-01.png',
        heading: 'DICOM File Conversion',
        description: `Graft3D medical image conversion service makes it easy for doctors, surgeons, and hospitals to convert Dicom files from medical scanners into accurate, true-size 3D models of human anatomy such as soft tissues, hard tissues, and any part of the body. The resulting high-quality models can be used by anyone Who needs to generate 3D models for virtual surgical planning, healthcare 3d printing, and bio cad modeling applications.`,
        image: '/images/3d-service/tab1.png', // Placeholder, using landingPage or generic
    },
    {
        id: 'biocad',
        title: 'Bio CAD Modeling Services',
        icon: '/images/3d-service/Graft2-02.png',
        heading: 'Bio CAD Modeling Services',
        description: `Graft3D Online-Bio CAD modeling service supports highly advanced personalized healthcare solutions which can be used during surgical operations, patient rehabilitation, and functional restoration. Our online service uses uploaded patient medical scans files or 3d models of scanned human body parts directly from medical 3d scanners. Then in the backend, we can design and develop any medical devices that can be directly 3D printed for guided surgery or can be grafted in the human body as custom implants more precisely for the better operation outcome.`,
        image: '/images/3d-service/tab1.png', // Placeholder
    },
    {
        id: 'printing',
        title: 'Medical 3D Printing',
        icon: '/images/3d-service/Graft3-03.png',
        heading: 'Medical 3D Printing',
        description: `Our medical 3D printing services allow you to print patient-specific implants and surgical guides. Surgeons can upload 3D files of a human organ or CAD models of biomedical devices. We will get an instant quote online after reviewing the print time and material for medical 3D printing. This innovative concept is an excellent way to facilitate the quoting process for doctors and enable them to have door delivery of medical 3d printed parts.`,
        image: '/images/3d-service/tab1.png', // Placeholder
    },
];

const ServiceTabs = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    const activeContent = tabs.find((tab) => tab.id === activeTab);

    return (
        <section className="w-full relative z-20 -mt-24 pb-16">
            <div className="max-w-[1200px] mx-auto px-4">
                {/* Tabs Header */}
                <div className="flex flex-col md:flex-row w-full mb-12 shadow-lg">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-1 overflow-hidden flex flex-col items-center justify-center py-8 px-4 transition-all duration-300 relative group
                ${activeTab === tab.id
                                    ? 'bg-[#98cbf6] text-[#0f6cbd]' // Active: Darker Blue
                                    : 'bg-[#bfe0fd] text-gray-600 hover:bg-[#acd4fa]'}`} // Inactive: Lighter Blue
                        >
                            {/* Active Indicator Top Line (Optional, or full background change as per screenshot) */}

                            <div className="relative mb-4 w-28 h-28 opacity-80 group-hover:opacity-100 transition-opacity">
                                <Image
                                    src={tab.icon}
                                    alt={tab.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-sm md:text-base font-medium text-center">
                                {tab.title}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[400px]">
                    {/* Text Content */}
                    <div className="flex flex-col items-start animate-fade-in-up">
                        <h2 className="text-3xl font-bold text-[#0f6cbd] mb-6 relative">
                            {activeContent?.heading}
                            <span className="block h-1 w-12 bg-[#0f6cbd] mt-2 rounded-full"></span>
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-8 text-justify">
                            {activeContent?.description}
                        </p>
                        <div className="flex gap-4">
                            <Button variant="white" className="border border-[#0f6cbd] text-[#0f6cbd] hover:bg-[#0f6cbd] hover:text-white transition-colors">
                                Learn More
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                            </Button>
                            <Button className="bg-[#1e73be] hover:bg-[#155a96] text-white px-6 py-2 text-base font-semibold rounded shadow-sm">
                                <Play className="w-4 h-4 mr-2" />
                                Watch Video
                            </Button>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="relative h-[300px] md:h-[400px] w-full rounded-lg shadow-lg animate-fade-in overflow-hidden">
                        <Image
                            src={activeContent?.image || '/images/3d-service/landingPage.png'}
                            alt={activeContent?.title || ''}
                            fill
                            className="object-cover"
                        />

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceTabs;
