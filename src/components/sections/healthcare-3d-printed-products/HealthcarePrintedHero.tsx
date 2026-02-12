"use client";

import React from 'react';
import Image from 'next/image';

const HealthcarePrintedHero = () => {
    return (
        <section className="relative w-full h-[250px] md:h-[350px] lg:h-[450px] overflow-hidden bg-white mt-[80px] md:mt-[100px]">
            {/* Background Image with Products */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src="/images/healthcare-3d-printed-products/Coverphoto3DprintedProducts.png"
                    alt="Healthcare 3D Printed Products"
                    fill
                    className="object-cover object-left md:object-center"
                    priority
                />
            </div>

            {/* Content Container */}
            <div className="relative h-full max-w-[1400px] mx-auto px-4 flex items-center">
                <div className="flex items-center gap-4 md:gap-6">
                    {/* Vertical Line */}
                    <div className="w-1.5 md:w-2 lg:w-2.5 h-12 md:h-20 lg:h-24 bg-[#1a1a1a]" />

                    <div className="text-left">
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-[#1a1a1a] leading-tight tracking-tight max-w-[500px]">
                            HEALTHCARE 3D PRINTED<br />
                            PRODUCTS
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HealthcarePrintedHero;
