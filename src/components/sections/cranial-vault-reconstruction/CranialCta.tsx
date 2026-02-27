"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const CranialCta = () => {
    return (
        <section className="w-full py-16 bg-white">
            <div className="container mx-auto px-4 max-w-[1200px]">
                <div className="flex flex-col lg:flex-row items-stretch rounded-[30px] p-6 lg:p-8 bg-gradient-to-r from-[#e1f0fc] to-[#f4faff] shadow-sm">

                    {/* Left side: Image */}
                    <div className="w-full lg:w-[45%] flex justify-center items-center bg-[#1e61a5] rounded-tl-[24px] rounded-bl-[24px] rounded-tr-[24px] lg:rounded-tr-none px-8 py-12">
                        <div className="relative w-full max-w-[360px] aspect-[4/3]">
                            <Image
                                src="/images/cranial-vault-reconstruction/Frame-427319419-1-2.png"
                                alt="Cranial Vault Reconstruction Quote"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Right side: Content */}
                    <div className="w-full lg:w-[55%] flex flex-col justify-center items-center lg:items-start p-8 lg:p-16">
                        <p className="text-[#1a5b9e] text-[16px] font-semibold mb-3 uppercase tracking-wider">
                            Contact Us & Get details for
                        </p>
                        <h2 className="text-3xl lg:text-[40px] font-bold text-[#1a5b9e] mb-10 text-center lg:text-left leading-tight">
                            3D Printing in Cranial<br />Vault Reconstruction
                        </h2>
                        <Button asChild className="rounded-[40px] bg-[#1a5b9e] hover:bg-[#124275] text-white font-bold px-12 py-7 shadow-md text-[17px] transition-colors">
                            <Link href="/contact-us">
                                Get a Quote Now
                            </Link>
                        </Button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CranialCta;
