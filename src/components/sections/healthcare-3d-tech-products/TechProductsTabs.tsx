"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Play } from 'lucide-react';

const tabs = [
    {
        id: 'scanners',
        title: 'Healthcare 3D Scanners',
        icon: '/images/healthcare-3d-tech-products/einscan-medixa.png',
        heading: 'Healthcare 3D Scanners',
        description: `A human body scanner captures the geometry of patient body parts quickly to create accurate digital references for orthotics, prosthetics, and surgical planning. Graft3D offers Einscan Medixa with a Footstation as a healthcare 3D scanner option. A 3d full body scanner and printer setup is used to digitize patient anatomy, build printable models or device designs, and support faster customization.`,
        image: '/images/healthcare-3d-tech-products/einscan-medixa.png',
    },
    {
        id: 'conversion',
        title: 'Medical Image Conversion',
        icon: '/images/healthcare-3d-tech-products/d2p.jpg',
        heading: 'Medical Image Conversion',
        description: `In Healthcare 3D printing, teams capture anatomy with a Human Body 3D Scanner or CT/MRI Data, convert scan data into usable 3D files, then refine designs in bio-CAD before printing. Graft3D highlights D2P for conversion – Bone, Vascular, Teeth. This process streamlines digital workflows from imaging to clinical application.`,
        image: '/images/healthcare-3d-tech-products/d2p.jpg',
    },
    {
        id: 'modeling',
        title: 'Bio CAD Modeling',
        icon: '/images/healthcare-3d-tech-products/geomagic-freeform.jpg',
        heading: 'Bio CAD Modeling',
        description: `Bio-CAD tools help refine designs before printing. Graft3D highlights Geomagic Freeform for modeling. It allows for advanced personalized healthcare solutions which can be used during surgical operations, patient rehabilitation, and functional restoration.`,
        image: '/images/healthcare-3d-tech-products/geomagic-freeform.jpg',
    },
    {
        id: 'haptic',
        title: 'Haptic Devices',
        icon: '/images/healthcare-3d-tech-products/geomagic-touch.jpg',
        heading: 'Haptic Devices',
        description: `Graft3D offers haptic devices like Geomagic Touch & Touch X and Phantom Premium for advanced modeling and simulation. These devices provide force feedback that allows users to feel virtual objects, enhancing the design and training process for medical applications.`,
        image: '/images/healthcare-3d-tech-products/geomagic-touch.jpg',
    },
];

const TechProductsTabs = () => {
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
                            <div className="relative mb-4 w-20 h-20 opacity-80 group-hover:opacity-100 transition-opacity">
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
                    <div className="relative h-[300px] md:h-[400px] w-full rounded-lg shadow-lg animate-fade-in overflow-hidden bg-white flex items-center justify-center">
                        <Image
                            src={activeContent?.image || ''}
                            alt={activeContent?.title || ''}
                            fill
                            className="object-contain p-4"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechProductsTabs;
