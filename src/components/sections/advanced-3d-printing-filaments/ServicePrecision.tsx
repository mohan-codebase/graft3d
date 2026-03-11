"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Video } from 'lucide-react';

const services = [
    {
        title: 'Digital implant design consultation',
        image: '/images/advanced-3d-printing-filaments-for-medical-3d-printing/image-9941.png',
    },
    {
        title: 'Custom filament fabrication',
        image: '/images/advanced-3d-printing-filaments-for-medical-3d-printing/image-9942.png',
    },
    {
        title: '3D printing parameters and process optimization',
        image: '/images/advanced-3d-printing-filaments-for-medical-3d-printing/image-9943.png',
    },
    {
        title: 'Medical-grade certifications and documentation',
        image: '/images/advanced-3d-printing-filaments-for-medical-3d-printing/image-9944.png',
    },
];

const ServicePrecision = () => {
    return (
        <section className="w-full bg-[#f5f5f5] py-16">
            <div className="container mx-auto px-4 lg:px-20 max-w-[1400px]">

                <div className="mb-6">
                    <h2 className="text-2xl lg:text-[28px] font-bold text-[#1a1a1a] mb-4">
                        From Digital Design to Clinical Precision
                    </h2>
                    <p className="text-[#444] text-[15px] leading-relaxed max-w-3xl">
                        Partner with India&apos;s Trusted Experts in Medical 3D Printing. Bring precision healthcare to life with Graft 3D. Whether you&apos;re a surgeon, biomedical engineer, or researcher, our team provides personalized technical support for:
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                    {services.map((service) => (
                        <div key={service.title} className="flex flex-col items-center text-center">
                            <div className="relative w-full rounded-2xl overflow-hidden shadow-sm" style={{ aspectRatio: '4/3' }}>
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <p className="mt-4 text-[#1a1a1a] font-bold text-[15px] text-center">{service.title}</p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="flex justify-center">
                    <Button asChild className="rounded-full bg-[#166AAF] hover:bg-[#124e87] text-white font-bold px-12 py-7 shadow-lg text-[16px] transition-all flex items-center gap-2">
                        <Link href="https://us02web.zoom.us/j/5903189768?pwd=T3VucDArMUY1NGxNRU1NMnJMYnVuQT09" target="_blank" className="flex items-center gap-2">
                            Meet Us Live Online <Video className="w-5 h-5" />
                        </Link>
                    </Button>
                </div>

            </div>
        </section>
    );
};

export default ServicePrecision;
