import React from 'react';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';

const ServiceHero = () => {
    return (
        <section className="relative w-full h-[500px] md:h-[600px] flex items-center bg-[#e6f4ff] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/3d-service/landingPage.png"
                    alt="Medical 3D Printing Service Background"
                    fill
                    className="object-cover object-center"
                    priority
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
                {/* Spacing for left side of image (Face/Ear) */}
                <div className="hidden md:block"></div>

                {/* Content on the right */}
                <div className="flex flex-col items-start justify-center max-w-xl pl-4 md:pl-0">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f6cbd] mb-4 leading-tight">
                        Healthcare 3D Printing Service
                    </h1>
                    <p className="text-base md:text-lg text-[#0f6cbd] mb-8 font-medium">
                        End to end medical 3d printing by in-house doctors and bio cad engineers
                    </p>
                    <Button className="bg-[#8abadd] hover:bg-[#7aa0c6] text-[#1a3b5c] px-8 py-2 text-base font-semibold rounded shadow-sm border border-[#7aa0c6]">
                        Explore
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ServiceHero;
