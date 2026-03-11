"use client";

import React from 'react';
import Image from 'next/image';

const reasons = [
    'Medical grade polymers designed for additive manufacturing',
    'Regulatory compliant materials with validated biocompatibility',
    'Custom implant fabrication for research, prototyping, and clinical use',
    'End to end support from digital design to 3D printing and final delivery',
    'Trusted by surgeons, engineers, and research institutions across India',
];

const WhyChooseUs = () => {
    return (
        <section className="w-full bg-[#f5f5f5] py-16">
            <div className="container mx-auto px-4 lg:px-20 max-w-[1400px]">
                <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">

                    {/* Left: Content */}
                    <div className="w-full lg:w-3/5 flex flex-col items-start">
                        <h2 className="text-2xl lg:text-[28px] font-bold text-[#1a1a1a] mb-8">
                            Why Choose Graft 3D for{' '}
                            <span className="text-[#166AAF]">Medical 3D Printing Materials?</span>
                        </h2>
                        <ul className="flex flex-col gap-4">
                            {reasons.map((reason) => (
                                <li key={reason} className="flex items-start gap-2 text-[#333] text-[15px] font-medium">
                                    <span className="mt-1 text-[#333] select-none shrink-0">•</span>
                                    <span>{reason}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: Image */}
                    <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[360px] aspect-square rounded-2xl overflow-hidden shadow-sm">
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
