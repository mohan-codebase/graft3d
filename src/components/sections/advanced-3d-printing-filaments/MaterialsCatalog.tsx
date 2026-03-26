"use client";

import React from 'react';
import Image from 'next/image';
import { FlaskConical, Zap, Settings, Thermometer, Eye, ShieldCheck, Microscope } from 'lucide-react';

const materials = [
    {
        badge: 'PEEK (Polyether Ether Ketone)',
        features: [
            { icon: FlaskConical, label: 'Biocompatible & Radiolucent' },
            { icon: Zap, label: 'Superior Strength-to-Weight Ratio' },
        ],
        image: '/images/advanced-3d-printing-filaments-for-medical-3d-printing/image-9937.png',
        imageAlt: 'PEEK Filament Spool',
        contentRight: false,
        bgColor: 'bg-[#166AAF]'
    },
    {
        badge: 'PMMA (Polymethyl Methacrylate)',
        features: [
            { icon: FlaskConical, label: 'Excellent Biocompatibility' },
            { icon: Settings, label: 'Customization & Aesthetic Advantage' },
        ],
        image: '/images/advanced-3d-printing-filaments-for-medical-3d-printing/image-9937-1.png',
        imageAlt: 'PMMA Filament Spool',
        contentRight: true,
        bgColor: 'bg-[#166AAF]'
    },
];

const MaterialsCatalog = () => {
    return (
        <div className="flex flex-col">
            {/* Intro Section - white background */}
            <section className="w-full bg-white pt-2 pb-16">
                <div className="container mx-auto px-4 lg:px-20 max-w-[1400px]">
                    <h2 className="text-3xl lg:text-[34px] font-extrabold text-[#166AAF] mb-6">
                        Precision. Performance. Biocompatibility.
                    </h2>
                    <div className="max-w-4xl space-y-4">
                        <p className="text-[#333] text-[17px] leading-relaxed">
                            At Graft 3D, we&apos;re transforming the future of craniofacial and orthopedic reconstruction through high performance 3D printing filaments engineered for safety, strength, and seamless biological integration.
                        </p>
                        <p className="text-[#333] text-[17px] leading-relaxed">
                            Our medical grade polymers, Polyether Ether Ketone (PEEK), Polycarbonate (PC), and Polymethyl Methacrylate (PMMA) are optimized for additive manufacturing in surgical applications, helping create patient specific implants that combine durability with precision.
                        </p>
                    </div>
                </div>
            </section>

            {/* Materials Cards Section */}
            <section className="w-full bg-white pb-20">
                <div className="container mx-auto px-4 lg:px-20 max-w-[1400px]">

                    {/* Section Header */}
                    <div className="mb-12">
                        <h2 className="text-2xl lg:text-[30px] font-bold text-[#1a1a1a]">
                            Next-Generation 3D Printing Materials <span className="text-[#166AAF]">for Medical Applications</span>
                        </h2>
                    </div>

                    {/* Materials Cards */}
                    <div className="flex flex-col gap-8">
                        {materials.map((mat) => (
                            <div
                                key={mat.badge}
                                className="relative rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-slate-100 group min-h-[400px] lg:min-h-[480px]"
                            >
                                {/* Full-card background image */}
                                <div className="absolute inset-0">
                                    <Image
                                        src={mat.image}
                                        alt={mat.imageAlt}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 1400px"
                                    />
                                    {/* Sublte overlay for text readability */}
                                    <div className={`absolute inset-0 bg-gradient-to-r ${mat.contentRight ? 'from-transparent via-white/40 to-white/90' : 'from-white/90 via-white/40 to-transparent'} lg:opacity-60`} />
                                </div>

                                {/* Content overlay */}
                                <div
                                    className={`relative z-10 flex flex-col lg:flex-row h-full min-h-[400px] lg:min-h-[480px] ${mat.contentRight ? 'lg:flex-row-reverse' : ''}`}
                                >
                                    {/* Text content side */}
                                    <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 lg:p-14">
                                        {/* Badge/Title Header */}
                                        <div className={`${mat.bgColor} text-white text-[16px] lg:text-[18px] font-bold px-8 py-3 rounded-tr-3xl rounded-bl-3xl mb-8 inline-block w-fit shadow-lg transform -translate-x-2`}>
                                            {mat.badge}
                                        </div>

                                        {/* Feature Tiles */}
                                        <div className="flex flex-col gap-4">
                                            {mat.features.map((feature) => {
                                                const Icon = feature.icon;
                                                return (
                                                    <div
                                                        key={feature.label}
                                                        className="flex items-center gap-5 bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-sm border border-slate-100 hover:shadow-md transition-shadow group/item"
                                                        style={{ maxWidth: '420px' }}
                                                    >
                                                        <div className="bg-[#166AAF] rounded-xl p-2.5 shrink-0 shadow-inner group-hover/item:scale-110 transition-transform">
                                                            <Icon className="w-5 h-5 text-white" />
                                                        </div>
                                                        <span className="text-[#1a1a1a] font-bold text-[15px] lg:text-[16px]">{feature.label}</span>
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        {/* Explore Button */}
                                        {/* <button className="mt-10 text-[#166AAF] font-bold flex items-center gap-2 hover:translate-x-2 transition-transform w-fit group/btn">
                                            Explore Applications <div className="bg-[#166AAF] text-white rounded-full p-1 group-hover/btn:rotate-45 transition-transform"><Settings className="w-4 h-4" /></div>
                                        </button> */}
                                    </div>

                                    {/* Empty side (image shows through) */}
                                    <div className="hidden lg:block w-full lg:w-1/2" />
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </div>
    );
};

export default MaterialsCatalog;
