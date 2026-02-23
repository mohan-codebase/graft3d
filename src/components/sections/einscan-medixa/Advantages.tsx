"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowRightCircle } from 'lucide-react';

const advantages = [
    '80 % decrease in scan to design time compared to manual casting.',
    'Up to 400 % increase in patient engagement with faster outputs.',
    'Hygienic and non contact workflow.',
    'Enhanced accuracy for custom fit prosthetics and orthosis.',
    'Supports digital archiving and remote collaboration between clinicians and fabricators.',
];

const Advantages = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Title */}
                <div className="text-center mb-16">
                    <h2 className="text-[40px] font-bold text-[#0066b2]">Advantages in Clinical Practice</h2>
                </div>

                {/* Two-column layout: bullet list + device image */}
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Left: Advantage list */}
                    <ul className="flex-1 flex flex-col gap-5">
                        {advantages.map((adv, index) => (
                            <li key={index} className="flex items-start gap-4">
                                <ArrowRightCircle
                                    size={26}
                                    className="text-[#0066b2] flex-shrink-0 mt-0.5"
                                    strokeWidth={1.8}
                                />
                                <span className="text-[16px] text-gray-800 leading-snug">{adv}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Right: Device image */}
                    <div className="relative w-full md:w-[380px] h-[280px] flex-shrink-0">
                        <Image
                            src="/images/einscan-medixa/hero-device.png"
                            alt="EinScan Medixa Device"
                            fill
                            className="object-contain object-center drop-shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Advantages;
