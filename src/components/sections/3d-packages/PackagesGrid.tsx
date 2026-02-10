"use client";

import React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const packages = [
    {
        title: "Digital Dentistry Package",
        image: "/images/home/our-3d-packages/image-1.png",
        features: [
            "Intraoral 3D Scanner",
            "Feeders",
            "Model 3D Printer"
        ]
    },
    {
        title: "PSI Package",
        image: "/images/home/our-3d-packages/image-2.png",
        features: [
            "Advantage Hardware",
            "Model 3D Printer"
        ]
    },
    {
        title: "Orthotic Device Package",
        image: "/images/home/our-3d-packages/image-3.png",
        features: [
            "Feedforward Height",
            "Pedal Size"
        ]
    },
    {
        title: "HD Prosthesis Package",
        image: "/images/home/our-3d-packages/image-1.png",
        features: [
            "Intraoral 3D Scanner",
            "Feeders (Arm Height)",
            "AC-PTC"
        ]
    },
    {
        title: "Anatomical Model Package",
        image: "/images/home/our-3d-packages/image-2.png",
        features: [
            "DZP",
            "Portable CAP (ARMA-M4 ARM3 M4 ARM3)",
            "Real-Time 3D Printer"
        ]
    },
    {
        title: "Surgical Planning & Guide Package",
        image: "/images/home/our-3d-packages/image-3.png",
        features: [
            "DZP - VR",
            "Feeders",
            "Real-Time 3D Printer"
        ]
    }
];

const PackagesGrid = () => {
    return (
        <section className="w-full py-12 md:py-20 bg-white">
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-[24px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                        >
                            {/* Package Image */}
                            <div className="w-full aspect-[4/3] bg-gradient-to-br from-[#D9EFFF]/50 to-white relative overflow-hidden">
                                <Image
                                    src={pkg.image}
                                    alt={pkg.title}
                                    fill
                                    className="object-contain p-6"
                                />
                            </div>

                            {/* Package Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-primary mb-4 min-h-[56px] flex items-center">
                                    {pkg.title}
                                </h3>

                                {/* Features List */}
                                <ul className="space-y-3 mb-6">
                                    {pkg.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Know More Button */}
                                <Button
                                    variant="default"
                                    size="lg"
                                    className="w-full rounded-lg font-semibold shadow-md hover:shadow-lg"
                                >
                                    Know More
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PackagesGrid;
