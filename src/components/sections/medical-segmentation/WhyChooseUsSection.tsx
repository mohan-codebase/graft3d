"use client";

import React from 'react';
import Image from 'next/image';
import {
    MonitorCheck,
    UserCheck,
    Zap,
    Layers,
    Headset,
    CreditCard,
    Globe
} from 'lucide-react';

const reasons = [
    {
        icon: <MonitorCheck className="w-6 h-6 text-[#0f6cbd]" />,
        text: "We use FDA Clearance Software."
    },
    {
        icon: <UserCheck className="w-6 h-6 text-[#0f6cbd]" />,
        text: "In-house Experienced medical Segmentation specialist"
    },
    {
        icon: <Zap className="w-6 h-6 text-[#0f6cbd]" />,
        text: "Instant segmentation and delivery"
    },
    {
        icon: <Layers className="w-6 h-6 text-[#0f6cbd]" />,
        text: "We can take on large-volume projects and deliver them within the specified timeline."
    },
    {
        icon: <Headset className="w-6 h-6 text-[#0f6cbd]" />,
        text: "Live online support during the segmentation"
    },
    {
        icon: <CreditCard className="w-6 h-6 text-[#0f6cbd]" />,
        text: "Pay after the service."
    },
    {
        icon: <Globe className="w-6 h-6 text-[#0f6cbd]" />,
        text: "Exclusive website for medical image conversion service"
    }
];

const WhyChooseUsSection = () => {
    return (
        <section className="w-full py-16 bg-[#e6f4ff]">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <h2 className="text-3xl md:text-3xl font-bold text-black leading-tight">
                            Why Graft3D Healthcare For Your <span className="text-[#0f6cbd]">3D Medical Image Segmentation?</span>
                        </h2>

                        <div className="space-y-6">
                            {reasons.map((item, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="mt-1 flex-shrink-0">
                                        {item.icon}
                                    </div>
                                    <p className="text-gray-700 text-lg">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
                        {/* Abstract Shape / Mask (Simulated with absolute divs or CSS if needed, purely decorative for now) */}
                        <div className="relative w-full max-w-md h-[500px]">
                            <Image
                                src="/images/medical-segmentation/why-img.png"
                                alt="Medical Segmentation Service"
                                fill
                                className="object-cover object-center rounded-2xl"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;
