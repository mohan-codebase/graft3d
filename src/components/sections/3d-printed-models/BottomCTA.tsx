"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

const BottomCTA = () => {
    return (
        <section className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row">
                {/* Left - Blue background with jaw model image */}
                <div
                    className="w-full lg:w-1/2 flex items-center justify-center relative overflow-hidden"
                    style={{
                        background: 'linear-gradient(135deg, #1565c0 0%, #1e88e5 50%, #1976d2 100%)',
                        minHeight: '420px',
                    }}
                >
                    <Image
                        src="/images/3d-printed-models-in-the-medical-field/Frame-427319419-2-1.png"
                        alt="3D Printed Jaw Model"
                        width={520}
                        height={420}
                        className="object-contain max-h-[380px] w-auto"
                    />
                </div>

                {/* Right - Light background with CTA card */}
                <div
                    className="w-full lg:w-1/2 flex items-center justify-center px-10 py-16 lg:px-16"
                    style={{ background: '#f0f4f8' }}
                >
                    <div
                        className="rounded-2xl border border-[#c8dff0] p-10 w-full max-w-[520px]"
                        style={{ background: '#eef4fb' }}
                    >
                        <p className="text-[#555] text-[14px] font-medium mb-4">
                            Contact Us &amp; Get details for
                        </p>
                        <h2 className="text-[26px] lg:text-[28px] font-extrabold text-[#166AAF] mb-3 leading-snug">
                            3D-Printed Models in the<br />Medical Field:
                        </h2>
                        <p className="text-[#1a1a1a] font-bold text-[16px] mb-7">
                            Diagnostic and Surgical Applications
                        </p>
                        <Button
                            asChild
                            className="rounded-full bg-[#166AAF] hover:bg-[#124e87] text-white font-bold px-10 py-6 w-fit shadow-md text-[15px] transition-all"
                        >
                            <Link href="/get-quote">
                                Get a Quote Now
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BottomCTA;
