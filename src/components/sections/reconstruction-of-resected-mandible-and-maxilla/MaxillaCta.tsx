"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const MaxillaCta = () => {
    return (
        <section className="w-full py-24 bg-white">
            <div className="container mx-auto px-4 max-w-[1200px]">
                <div className="flex flex-col lg:flex-row items-stretch rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-[#1a5b9e]">

                    {/* Left: Image Block */}
                    <div className="w-full lg:w-1/2 relative min-h-[350px] lg:min-h-[450px]">
                        <Image
                            src="/images/reconstruction-of-resected-mandible-and-maxilla/Frame-427319434.png"
                            alt="3D Printed Patient-Specific Implants"
                            fill
                            className="object-cover"
                        />
                        {/* Overlay to ensure image blends well if needed */}
                        <div className="absolute inset-0 bg-black/10"></div>
                    </div>

                    {/* Right: CTA Details Area */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center items-start p-12 lg:p-20 relative text-left text-white">
                        <div className="relative z-10 w-full max-w-[450px]">
                            <p className="text-sm font-semibold text-blue-200 tracking-widest uppercase mb-4">
                                Contact Us & Get details for
                            </p>
                            <h2 className="text-3xl lg:text-4xl font-extrabold mb-8 leading-tight">
                                3D-Printed Patient-Specific Implants in Mandibular and Maxillary Reconstruction
                            </h2>
                            <Button asChild className="rounded-full bg-white hover:bg-gray-100 text-[#1a5b9e] font-bold px-10 py-7 w-fit shadow-lg text-[16px] transition-colors">
                                <Link href="/contact-us">
                                    Get a Quote Now
                                </Link>
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MaxillaCta;
