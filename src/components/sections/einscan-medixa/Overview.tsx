"use client";

import React from 'react';
import Image from 'next/image';

const Overview = () => {
    return (
        <section className="py-20 relative bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Left Image Side */}
                    <div className="w-full lg:w-1/3 flex justify-center lg:justify-end relative">
                        <div className="relative w-full max-w-[300px] h-[350px] rounded-[30px] border-2 border-gray-100 overflow-hidden bg-white shadow-sm p-4">
                            <Image
                                src="/images/einscan-medixa/features-overview.png"
                                alt="EinScan Medixa Overview"
                                fill
                                className="object-contain p-6"
                            />
                        </div>
                    </div>

                    {/* Right Content Side */}
                    <div className="w-full lg:w-2/3 flex flex-col items-start space-y-6">
                        <h2 className="text-[40px] font-bold text-[#0066b2] leading-tight">Overview</h2>
                        <p className="text-[16px] text-gray-800 leading-relaxed font-medium">
                            EinScan Medixa is a next generation, all in one handheld medical 3D scanner developed for highly accurate and efficient analysis of patient anatomy to the highest level of clinical comfort.<br /><br />
                            Specifically designed for orthotics and prosthetics (O&P) applications, it integrates scanning, data processing, and export functions into a standalone system, without the need for an external computer.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Overview;
