"use client";

import React from 'react';
import Image from 'next/image';

const VspOverview = () => {
    return (
        <section className="w-full py-16 bg-white">
            <div className="container mx-auto px-4 max-w-[1200px]">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left side: Image with light blue rounded background */}
                    <div className="w-full lg:w-[45%] flex justify-center">
                        <div className="relative w-full max-w-[400px] aspect-square bg-gradient-to-b from-[#b3dcf1] to-[#cae6f6] rounded-2xl p-6 shadow-sm overflow-hidden border border-[#b3dcf1]">
                            <Image
                                src="/images/virtual-surgical-planning-in-orthognathic-surgery/1-e1759564300946.png"
                                alt="VSP Skull Model Overview"
                                fill
                                className="object-contain p-6 mix-blend-multiply"
                            />
                        </div>
                    </div>

                    {/* Right side: Text Focus */}
                    <div className="w-full lg:w-[55%] flex flex-col">
                        <h2 className="text-3xl lg:text-[34px] font-bold text-[#1a5b9e] mb-6">
                            Overview
                        </h2>
                        <p className="text-gray-700 leading-loose text-[16px] font-medium text-justify">
                            Virtual Surgical Planning (VSP) plates are patient specific, pre bent titanium fixation
                            plates designed using advanced 3D imaging and computer aided design/manufacturing
                            (CAD/CAM) technologies. Virtual Surgical Planning plates have revolutionized orthognathic
                            surgery by merging advanced imaging, digital simulation, and precision manufacturing.
                            By incorporating digital planning into maxillofacial procedures, surgeons can achieve
                            greater accuracy, efficiency, and predictability compared to traditional techniques.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default VspOverview;
