"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Video, ArrowRight } from 'lucide-react';

const services = [
    {
        title: 'Segmentation & Design Simulation',
        image: '/images/advanced-3d-printing-filaments-for-medical-3d-printing/image-9941.png',
        desc: ''
    },
    {
        title: 'Custom Filament Preparation',
        image: '/images/advanced-3d-printing-filaments-for-medical-3d-printing/image-9942.png',
        desc: ''
    },
    {
        title: '3D Printing & Quality Control',
        image: '/images/advanced-3d-printing-filaments-for-medical-3d-printing/image-9943.png',
        desc: ''
    },
    {
        title: 'Medical Grade Sterilization and Clinical Intervention',
        image: '/images/advanced-3d-printing-filaments-for-medical-3d-printing/image-9944.png',
        desc: ''
    },
];

const ServicePrecision = () => {
    return (
        <section className="w-full bg-slate-50 py-16 lg:py-24">
            <div className="container mx-auto px-4 lg:px-20 max-w-[1400px]">

                <div className="mb-14">
                    <h2 className="text-3xl lg:text-[42px] font-extrabold text-[#0a2540] mb-6">
                        From Digital Design <span className="text-[#166AAF]">to Clinical Precision</span>
                    </h2>
                    <p className="text-[#697386] text-lg font-medium max-w-4xl leading-relaxed">
                        Partner with India&apos;s Trusted Experts in Medical 3D Printing. Bring precision healthcare to life with Graft 3D. We provide personalized technical support throughout the entire surgical workflow.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-24 max-w-5xl mx-auto">
                    {services.map((service, index) => (
                        <div key={service.title} className="flex flex-col group items-center text-center">
                            <div className="relative w-full rounded-[28px] overflow-hidden bg-white p-3 transition-all duration-300 border border-[#e6e9f0] group-hover:shadow-xl group-hover:border-[#166AAF]/20" style={{ aspectRatio: '1/1' }}>
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover rounded-[18px]"
                                />
                            </div>
                            <div className="mt-8 flex flex-col items-center">
                                <h3 className="text-[#0a2540] font-bold text-[19px] mb-3 group-hover:text-[#166AAF] transition-colors leading-tight">{service.title}</h3>
                                <p className="text-[#697386] text-[15px] font-medium leading-relaxed max-w-[260px]">{service.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicePrecision;
