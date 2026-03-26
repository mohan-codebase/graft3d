"use client";

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Microscope, Settings } from 'lucide-react';

const PolyurethaneCard = () => {
    return (
        <section className="w-full bg-white pb-20">
            <div className="container mx-auto px-4 lg:px-20 max-w-[1400px]">
                <div
                    className="relative rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-slate-100 group min-h-[400px] lg:min-h-[480px]"
                >
                    {/* Full-card background image */}
                    <div className="absolute inset-0">
                        <Image
                            src="/images/advanced-3d-printing-filaments-for-medical-3d-printing/image-9937-2.png"
                            alt="Poly polyurethane filament"
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 1400px"
                        />
                        {/* Sublte overlay for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent lg:opacity-60" />
                    </div>

                    {/* Content overlay */}
                    <div className="relative z-10 flex flex-col lg:flex-row h-full min-h-[400px] lg:min-h-[480px]">
                        {/* Text content side */}
                        <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 lg:p-14">
                            {/* Badge/Title Header */}
                            <div className="bg-[#166AAF] text-white text-[16px] lg:text-[18px] font-bold px-8 py-3 rounded-tr-3xl rounded-bl-3xl mb-8 inline-block w-fit shadow-lg transform -translate-x-2">
                                PU (Polyurethane)
                            </div>

                            {/* Feature Tiles */}
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-5 bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-sm border border-slate-100 hover:shadow-md transition-shadow group/item" style={{ maxWidth: '420px' }}>
                                    <div className="bg-[#166AAF] rounded-xl p-2.5 shrink-0 shadow-inner group-hover/item:scale-110 transition-transform">
                                        <ShieldCheck className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="text-[#1a1a1a] font-bold text-[15px] lg:text-[16px]">Impact Resistant & Transparent </span>
                                </div>
                                <div className="flex items-center gap-5 bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-sm border border-slate-100 hover:shadow-md transition-shadow group/item" style={{ maxWidth: '420px' }}>
                                    <div className="bg-[#166AAF] rounded-xl p-2.5 shrink-0 shadow-inner group-hover/item:scale-110 transition-transform">
                                        <Microscope className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="text-[#1a1a1a] font-bold text-[15px] lg:text-[16px]">Thermally Stable</span>
                                </div>
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
            </div>
        </section>
    );
};

export default PolyurethaneCard;
