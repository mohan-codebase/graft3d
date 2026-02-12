"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const features = [
    {
        title: "Regraft Bonerip - Bone like printed training models",
        description: "Our bone-like training models are made from a durable, bone-like material that closely mimics the texture and feel of real bone. These models are perfect for practising surgical techniques and procedures, as they provide a realistic simulation of human bone. Making it easier for medical professionals to study and understand human anatomy. Our models are available in various sizes and can be customised to meet your specific needs.",
        image: "/images/regraft-bonerip/bone-1.png", // Dummy image
    },
    {
        title: "Regraft Bonerip - Patient Specific 3D printed models",
        description: "3D-printed bone models made of human bone-like material are accurate and highly detailed, providing a realistic representation of the patient’s bone structure. Our models are ideal for surgical training and planning, allowing medical professionals to practice and perfect their skills before performing surgeries on real patients. as they provide a realistic simulation of human bone. Making it easier for medical professionals to study and understand human anatomy.",
        image: "/images/regraft-bonerip/bone-2.png", // Dummy image
    },
    {
        title: "Regraft Bonerip -Transparent 3D Printed Models",
        description: "Our transparent models are made from a clear, high-quality resin that allows you to see the internal structures of the human body. These models are perfect for studying the finer details of human anatomies, such as the location of blood vessels, nerves, and organs.\nThere are 206 bones in the human body. Here is a list of the major bones in the human body, grouped by region:",
        image: "/images/regraft-bonerip/bone-3.png", // Dummy image
    },
    {
        title: "Regraft Bonerip - Coloured 3D Printed material",
        description: "Our coloured models are designed to provide a more visual representation of human anatomy. They are available in various colours and are perfect for medical professionals who prefer a more visual learning style. These models are great for teaching, as the different colours make it easy to identify and study specific anatomies.",
        image: "/images/regraft-bonerip/bone-4.png", // Dummy image
    }
];

const BoneripFeatures = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container max-w-[1400px] mx-auto px-4">
                <div className="space-y-24">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Text Content */}
                            <div className="flex-1 space-y-6">
                                <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                                    {feature.title}
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed text-justify whitespace-pre-line">
                                    {feature.description}
                                </p>
                                <div className="pt-2">
                                    <Link href="/contact-us">
                                        <Button className="bg-[#1e73be] hover:bg-[#155a96] text-white px-8 py-3 text-lg rounded-md font-semibold transition-all shadow-md">
                                            Know more
                                        </Button>
                                    </Link>
                                </div>
                            </div>

                            {/* Image content */}
                            <div className="flex-1 relative w-full aspect-square max-w-lg mx-auto rounded-2xl overflow-hidden bg-gray-50 flex items-center justify-center p-4">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={feature.image}
                                        alt={feature.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BoneripFeatures;
