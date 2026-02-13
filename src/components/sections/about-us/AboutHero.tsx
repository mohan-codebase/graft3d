import React from 'react';
import Image from 'next/image';

const AboutHero = () => {
    return (
        <section className="relative w-full h-[300px] md:h-[450px] lg:h-[550px] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/about-us/Group-137.png"
                    alt="About Us Hero"
                    fill
                    className="object-cover object-center"
                    priority
                />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl md:text-5xl font-bold text-[#166AAF] tracking-tight">
                        ABOUT US
                    </h1>
                    <div className="mt-2 w-24 h-1.5 bg-[#166AAF] mx-auto rounded-full"></div>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
