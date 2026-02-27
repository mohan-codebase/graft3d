"use client";
import React from "react";
import Image from "next/image";
import { Download, Calendar, ChevronRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="relative w-full overflow-hidden bg-[#E6F3FF] py-12 md:py-18">
            <div className="container relative z-10 mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                    {/* Left Column: Content */}
                    <div className="flex flex-col space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-3xl font-extrabold tracking-tight text-[#1D70B8] md:text-5xl lg:text-5xl">
                                EINSCAN H2 <span className="font-bold text-black">HUMAN BODY & <br className="hidden md:block" /> BODY PARTS 3D SCANNER</span>
                            </h1>
                            <p className="text-lg font-medium text-gray-700">
                                Exclusive HumanBody 3D scanner with advanced algorithm for body scan
                            </p>
                        </div>

                        <div className="flex flex-col space-y-4">
                            <div className="flex flex-wrap gap-4">
                                <button className="flex items-center gap-2 rounded-lg bg-[#1D70B8] px-6 py-3 text-base font-bold text-white transition-all hover:bg-[#165a94]">
                                    Book Online Meeting <Calendar className="size-5" />
                                </button>
                                <button className="flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-bold text-[#1D70B8] transition-all hover:bg-gray-50 border border-transparent">
                                  <Link href="https://graft3d.com/wp-content/uploads/2024/01/Graft3d.pdf">  Download Brochure <Download className="size-5" /></Link>
                                </button>
                            </div>
                            <div>
                                <button className="flex items-center gap-2 rounded-lg bg-[#1D70B8] px-10 py-3 text-base font-bold text-white transition-all hover:bg-[#165a94]">
                                    Buy Now <ChevronRight className="size-5" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="relative flex justify-end lg:-mr-8 xl:-mr-24">
                        <div className="relative aspect-[4/3] w-full max-w-[750px] transform transition-transform duration-500 hover:scale-105">
                            <Image
                                src="/images/einscan-h2/ein1.png"
                                alt="Einscan H2 3D Scanner"
                                fill
                                className="object-contain object-right"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
