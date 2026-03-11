"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const generalBenefits = [
    'Highly accurate face matching artificial prosthesis can be made.',
    'Made by face 3D Scanning, Bio CAD & 3D Printing Technology.',
    'End Facial Prosthetics will Matches with human skin tone.',
    'Non contact human friendly face 3D scanning technology.',
    'Both the Implantable & detachable prosthesis can be modeled and printed.',
];

const Benefits = () => {
    return (
        <section className="py-14 bg-[#f4f9ff]">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-10 items-start">

                    {/* Left content */}
                    <div className="w-full lg:w-[58%]">
                        <h2 className="text-[22px] md:text-[26px] font-extrabold text-gray-900 mb-8 leading-snug">
                            <span className="text-[#166aaf]">Benefits Of Setting up</span> 3D Printing Package For Facial Prosthesis
                        </h2>

                        {/* Benefits list */}
                        <ul className="flex flex-col gap-4">
                            {generalBenefits.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-3 text-gray-700 text-[13px] leading-relaxed">
                                    <span className="text-[#166aaf] text-[16px] leading-none mt-0.5 flex-shrink-0">◆</span>
                                    {benefit}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right decorative image */}
                    <div className="w-full lg:w-[42%] flex justify-center items-center">
                        <div className="relative w-full max-w-[340px] h-[340px]">
                            <Image
                                src="https://graft3d.com/wp-content/uploads/2023/08/image-7.png"
                                alt="Benefits illustration"
                                fill
                                unoptimized
                                className="object-contain rounded-2xl"
                            />
                            {/* Blue overlay curve decorations */}
                            <div className="absolute -right-3 top-8 w-14 h-full rounded-3xl bg-[#166aaf]/20 -z-10" />
                            <div className="absolute -right-6 top-16 w-14 h-[80%] rounded-3xl bg-[#166aaf]/10 -z-10" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Benefits;
