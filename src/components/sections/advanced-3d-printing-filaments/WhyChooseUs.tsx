"use client";

import React from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

const reasons = [
    'Medical grade polymers designed for additive manufacturing',
    'Regulatory compliant materials with validated biocompatibility',
    'Custom implant fabrication for research, prototyping, and clinical use',
    'End to end support from digital design to 3D printing and final delivery',
    'Trusted by surgeons, engineers, and research institutions across India',
];

const WhyChooseUs = () => {
    return (
        <section className="w-full bg-slate-50 py-20 overflow-hidden">
            <div className="container mx-auto px-4 lg:px-20 max-w-[1400px]">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left: Content */}
                    <div className="w-full lg:w-3/5 flex flex-col items-start relative z-10">
                        {/* <div className="inline-block px-4 py-1.5 bg-[#166AAF]/10 text-[#166AAF] rounded-full text-sm font-bold mb-6">
                            Expertise & Quality
                        </div> */}
                        <h2 className="text-3xl lg:text-[40px] font-extrabold text-[#1a1a1a] mb-10 leading-tight">
                            Why Choose <span className="text-[#166AAF]">Graft 3D</span> for<br />Medical 3D Printing Materials?
                        </h2>
                        <ul className="flex flex-col gap-6">
                            {reasons.map((reason, index) => (
                                <li key={index} className="flex items-start gap-4 group">
                                    <div className="mt-1 bg-white text-[#166AAF] rounded-full p-0.5 shadow-sm group-hover:scale-110 transition-transform">
                                        <CheckCircle2 className="w-6 h-6 fill-[#166AAF]/10" />
                                    </div>
                                    <span className="text-[#333] text-[17px] font-medium leading-relaxed">{reason}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: Image */}
                    <div className="w-full lg:w-2/5 flex justify-center lg:justify-end relative">
                        {/* Decorative circle background */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square bg-[#166AAF]/5 rounded-full blur-3xl pointer-events-none" />
                        
                        <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white transform rotate-2 hover:rotate-0 transition-all duration-700">
                            <Image
                                src="/images/advanced-3d-printing-filaments-for-medical-3d-printing/image-9937-3.png"
                                alt="Hand holding 3D printed medical implant"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
