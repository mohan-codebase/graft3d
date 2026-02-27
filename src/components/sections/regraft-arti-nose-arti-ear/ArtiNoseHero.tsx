"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const ArtiNoseHero = () => {
    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#dfeef7] via-[#f4f9fc] to-[#dfeef7] py-20 lg:py-28">
            <div className="container mx-auto px-6 lg:px-20 max-w-[1500px]">

                <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

                    {/* Left Content Area */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start z-20">
                        {/* Logo */}
                        <div className="relative w-[240px] h-[65px] mb-4">
                            <Image
                                src="/images/regraft/regraft-text.png"
                                alt="ReGraft Logo"
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </div>

                        {/* Headings */}
                        <h1 className="text-3xl lg:text-[40px] font-extrabold text-black mb-2 leading-tight tracking-tight">
                            Artificial Nose, Ear & Eyes
                        </h1>
                        <p className="text-black text-base lg:text-[19px] font-bold mb-8">
                            Safe, Comfortable & aesthetic Artificial Nose, Eyes, Ears
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <Button asChild className="rounded bg-[#3b6dcc] hover:bg-[#2d56a6] text-white font-semibold px-7 py-5 w-fit shadow-md text-[15px] transition-colors">
                                <Link href="/get-quote">Enquire now</Link>
                            </Button>
                            <Button asChild className="rounded bg-[#3b6dcc] hover:bg-[#2d56a6] text-white font-semibold px-7 py-5 w-fit shadow-md text-[15px] transition-colors">
                                <Link href="#Appointment">Book 3D Scanning Appointment</Link>
                            </Button>
                        </div>
                    </div>

                    {/* Right Image Area */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end z-10 mt-12 lg:mt-0 relative">
                        <div className="relative w-full max-w-[550px] aspect-[4/3] mr-0 lg:mr-10">
                            <Image
                                src="/images/regraft-arti-nose-arti-ear/Group-12-e1768385774467.png"
                                alt="Artificial Nose, Ear and Eye Prosthetics on Pedestal"
                                fill
                                className="object-contain drop-shadow-2xl mix-blend-multiply"
                                priority
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ArtiNoseHero;
