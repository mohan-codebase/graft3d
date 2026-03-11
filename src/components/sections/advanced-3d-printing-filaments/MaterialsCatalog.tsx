"use client";

import React from 'react';
import Image from 'next/image';
import { FlaskConical, Zap, Settings, Thermometer, Eye } from 'lucide-react';

const materials = [
    {
        badge: 'PEEK (Polyether Ether Ketone)',
        features: [
            { icon: FlaskConical, label: 'Biocompatible & Radiolucent' },
            { icon: Zap, label: 'Superior Strength-to-Weight Ratio' },
        ],
        image: '/images/advanced-3d-printing-filaments-for-medical-3d-printing/image-9937.png',
        imageAlt: 'PEEK Filament Spool',
        contentRight: false, // content on left, image on right
    },
    {
        badge: 'PMMA (Polymethyl Methacrylate)',
        features: [
            { icon: FlaskConical, label: 'Excellent Biocompatibility' },
            { icon: Settings, label: 'Customization & Aesthetic Advantage' },
        ],
        image: '/images/advanced-3d-printing-filaments-for-medical-3d-printing/image-9937-1.png',
        imageAlt: 'PMMA Filament Spool',
        contentRight: true, // content on right, image on left
    },
    {
        badge: 'PC (Polycarbonate)',
        features: [
            { icon: Eye, label: 'Impact Resistant & Transparent' },
            { icon: Thermometer, label: 'Thermally Stable' },
        ],
        image: '/images/advanced-3d-printing-filaments-for-medical-3d-printing/image-9937-2.png',
        imageAlt: 'Polycarbonate PC Filament',
        contentRight: false, // content on left, image on right
    },
];

const MaterialsCatalog = () => {
    return (
        <>
            {/* Intro Section - white background */}
            <section className="w-full bg-white py-12">
                <div className="container mx-auto px-4 lg:px-20 max-w-[1400px]">
                    <h2 className="text-2xl lg:text-[28px] font-bold text-[#1a1a1a] mb-4">
                        Precision. Performance. Biocompatibility.
                    </h2>
                    <p className="text-[#333] text-[15px] leading-relaxed mb-2">
                        At Graft 3D, we&apos;re transforming the future of craniofacial and orthopedic reconstruction through high performance 3D printing filaments engineered for safety, strength, and seamless biological integration.
                    </p>
                    <p className="text-[#333] text-[15px] leading-relaxed">
                        Our medical grade polymers, Polyether Ether Ketone (PEEK), Polycarbonate (PC), and Polymethyl Methacrylate (PMMA) are optimized for additive manufacturing in surgical applications, helping create patient specific implants that combine durability with precision.
                    </p>
                </div>
            </section>

            {/* Materials Cards Section */}
            <section className="w-full bg-[#f0f4f8] py-16">
                <div className="container mx-auto px-4 lg:px-20 max-w-[1400px]">

                    {/* Section Header */}
                    <div className="mb-10">
                        <h2 className="text-2xl lg:text-[28px] font-bold text-[#1a1a1a] mb-2">
                            Next-Generation 3D Printing Materials{' '}
                            <span className="text-[#166AAF]">for Medical Applications</span>
                        </h2>
                    </div>

                    {/* Materials Cards */}
                    <div className="flex flex-col gap-6">
                        {materials.map((mat) => (
                            <div
                                key={mat.badge}
                                className="relative rounded-2xl overflow-hidden shadow-sm"
                                style={{ minHeight: '460px' }}
                            >
                                {/* Full-card background image */}
                                <div className="absolute inset-0">
                                    <Image
                                        src={mat.image}
                                        alt={mat.imageAlt}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 1400px"
                                    />
                                </div>

                                {/* Content overlay */}
                                <div
                                    className={`relative z-10 flex flex-col lg:flex-row h-full ${mat.contentRight ? 'lg:flex-row-reverse' : ''}`}
                                    style={{ minHeight: '260px' }}
                                >
                                    {/* Text content side */}
                                    <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 lg:p-10">
                                        {/* Badge */}
                                        <span className="bg-[#1a56b0] text-white text-[14px] font-bold px-5 py-2.5 rounded-full mb-6 inline-block w-fit shadow-md">
                                            {mat.badge}
                                        </span>

                                        {/* Feature Tiles */}
                                        <div className="flex flex-col gap-3">
                                            {mat.features.map((feature) => {
                                                const Icon = feature.icon;
                                                return (
                                                    <div
                                                        key={feature.label}
                                                        className="flex items-center gap-4 bg-[#2563ab] rounded-xl px-5 py-3.5 shadow"
                                                        style={{ maxWidth: '380px' }}
                                                    >
                                                        <div className="bg-[#1a4d8f] rounded-lg p-2 shrink-0">
                                                            <Icon className="w-5 h-5 text-white" />
                                                        </div>
                                                        <span className="text-white font-semibold text-[14px]">{feature.label}</span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    {/* Empty side (image shows through) */}
                                    <div className="hidden lg:block w-full lg:w-1/2" />
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    );
};

export default MaterialsCatalog;
