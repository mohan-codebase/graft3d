"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowRightCircle } from 'lucide-react';

const items = [
    'Designed in accordance with international standards for medical 3D imaging equipment with one year standard warranty',
    'Optical components use eye safe illumination within IEC 62471 safety limits.',
    'Software includes patient data encryption and GDPR compliant data handling.',
];

const ComplianceSafety = () => {
    return (
        <section className="py-0 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="bg-[#1a3585] rounded-3xl px-12 py-14 flex flex-col md:flex-row items-center gap-10">
                    {/* Left: Title + List */}
                    <div className="flex-1">
                        <h2 className="text-[36px] font-bold text-white mb-10 text-center md:text-left">
                            Compliance &amp; Safety
                        </h2>

                        <ul className="flex flex-col gap-5">
                            {items.map((item, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <ArrowRightCircle
                                        size={24}
                                        className="text-[#5ab4e8] flex-shrink-0 mt-0.5"
                                        strokeWidth={1.8}
                                    />
                                    <span className="text-[15px] text-white/90 leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: Device image */}
                    <div className="relative w-full md:w-[300px] h-[240px] flex-shrink-0">
                        <Image
                            src="/images/einscan-medixa/hero-device.png"
                            alt="EinScan Medixa Device"
                            fill
                            className="object-contain object-center drop-shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComplianceSafety;
