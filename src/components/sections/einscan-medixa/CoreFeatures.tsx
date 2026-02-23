"use client";

import React from 'react';
import Image from 'next/image';

const features = [
    {
        title: 'Dual Light Source Technology',
        description: 'Utilizes both white light and infrared VCSEL illumination for assessing various skin tones and surface types.',
        icon: '/images/einscan-medixa/icon-orthotics.png' // Utilizing existing icons for now, but will map correctly if needed
    },
    {
        title: 'Motion Compensation',
        description: 'Real time correction algorithm reduces artifacts caused by minor patient movements.',
        icon: '/images/einscan-medixa/icon-motion.png'
    },
    {
        title: 'High Resolution Texture Capture',
        description: '5 MP RGB camera ensures precise surface detailing for visualization, simulation, and clinical documentation.',
        icon: '/images/einscan-medixa/icon-texture.png'
    },
    {
        title: 'Automatic Alignment Modes',
        description: 'Offers feature, texture, and marker alignment for reliable data registration.',
        icon: '/images/einscan-medixa/icon-alignment.png'
    },
    {
        title: 'Contact Free Scanning',
        description: 'Provides a hygienic, non invasive scanning experience ideal for pediatric and sensitive applications.',
        icon: '/images/einscan-medixa/icon-contactfree.png'
    },
    {
        title: 'Preset Clinical Modes',
        description: 'Preconfigured scanning inputs for O&P applications including face, skull, torso, upper limb, lower limb, feet and socket.',
        icon: '/images/einscan-medixa/icon-preset.png'
    },
    {
        title: 'Compact & Portable',
        description: 'Lightweight and mobile design enables use in clinics, wards, or on site healthcare environments.',
        icon: '/images/einscan-medixa/icon-portable.png'
    }
];

// Re-map icons to match design
const correctFeatures = [
    { title: 'Dual Light Source Technology', desc: 'Utilizes both white light and infrared VCSEL illumination for assessing various skin tones and surface types.', iconPath: '/images/einscan-medixa/icon-orthotics.png' },
    { title: 'Motion Compensation', desc: 'Real time correction algorithm reduces artifacts caused by minor patient movements.', iconPath: '/images/einscan-medixa/icon-scan.png' },
    { title: 'High Resolution Texture Capture', desc: '5 MP RGB camera ensures precise surface detailing for visualization, simulation, and clinical documentation.', iconPath: '/images/einscan-medixa/icon-advantages.png' },
    { title: 'Automatic Alignment Modes', desc: 'Offers feature, texture, and marker alignment for reliable data registration.', iconPath: '/images/einscan-medixa/icon-prosthetics.png' },
    { title: 'Contact Free Scanning', desc: 'Provides a hygienic, non invasive scanning experience ideal for pediatric and sensitive applications.', iconPath: '/images/einscan-medixa/icon-rehab.png' },
    { title: 'Preset Clinical Modes', desc: 'Preconfigured scanning inputs for O&P applications including face, skull, torso, upper limb, lower limb, feet and socket.', iconPath: '/images/einscan-medixa/icon-maxillofacial.png' },
    { title: 'Compact & Portable', desc: 'Lightweight and mobile design enables use in clinics, wards, or on site healthcare environments.', iconPath: '/images/einscan-medixa/icon-research.png' }
];

const CoreFeatures = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-[40px] font-bold text-[#0066b2] mb-4">Core Features</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {correctFeatures.map((feature, index) => (
                        <div
                            key={index}
                            className={`bg-[#f4f7f9] rounded-2xl p-8 hover:shadow-md transition-shadow flex flex-col items-start ${index === 6 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}
                        >
                            <div className="w-14 h-14 bg-[#0066b2] rounded-full flex items-center justify-center mb-6 shadow-sm overflow-hidden flex-shrink-0">
                                <Image
                                    src={feature.iconPath}
                                    alt={feature.title}
                                    width={56}
                                    height={56}
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-[18px] font-bold text-gray-900 mb-3 leading-snug">{feature.title}</h3>
                            <p className="text-[15px] text-gray-700 leading-relaxed font-medium">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreFeatures;
