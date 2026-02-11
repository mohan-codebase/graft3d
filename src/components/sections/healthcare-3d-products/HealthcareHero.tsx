"use client";

import React from 'react';
import Image from 'next/image';

const HealthcareHero = () => {
    return (
        <section className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden bg-white">
            {/* Background Image with Products */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src="/images/healthcare-3d-products/3D-Products2.png"
                    alt="Healthcare 3D Products"
                    fill
                    className="object-cover object-left md:object-center"
                    priority
                />
            </div>

            {/* Dark Overlay for better text readability on mobile if needed */}
            <div className="absolute inset-0 bg-transparent" />

            {/* Content Container */}
            <div className="relative h-full max-w-[1400px] mx-auto px-4 flex items-center justify-end">
                <div className="flex items-center gap-6 lg:gap-10">
                    <div className="text-right">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#1a1a1a] leading-tight tracking-tight">
                            HEALTHCARE<br />
                            3D PRODUCTS
                        </h1>

                        <div className="mt-4 flex items-center justify-end">
                            <div className="text-right mr-4 lg:mr-6">
                                <p className="text-sm md:text-xl lg:text-2xl font-bold text-[#1a1a1a] opacity-90 leading-tight">
                                    3D SCANNER | 3D PRINTER<br />
                                    | 3D SOFTWARE
                                </p>
                            </div>
                            {/* Vertical Line */}
                            <div className="w-1.5 md:w-2 lg:w-2.5 h-12 md:h-20 lg:h-24 bg-[#1a1a1a]" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HealthcareHero;
