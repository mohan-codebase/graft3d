"use client";

import React from 'react';
import Image from 'next/image';

const steps = [
    {
        title: 'Scan Acquisition',
        description: 'Captures 3D anatomical data in less than 2 minutes per area with prospection and automatic optimization.',
        image: '/images/einscan-medixa/feature-1.png',
        align: 'left',
    },
    {
        title: 'Data Processing',
        description: 'Performs mesh generation, surface smoothing, and automatic hole filling within the in built processor.',
        image: '/images/einscan-medixa/feature-2.png',
        align: 'right',
    },
    {
        title: 'Design & Fabrication',
        description: 'Enables direct transfer to CAD/CAM or O&P design software for orthosis, prosthesis, and additive manufacturing processes.',
        image: '/images/einscan-medixa/feature-3.png',
        align: 'left',
    },
    {
        title: 'Clinical Documentation',
        description: 'Generates high resolution 3D records for patient tracking, fitting evaluation, and outcome analysis.',
        image: '/images/einscan-medixa/feature-4.png',
        align: 'right',
    },
];

const Workflow = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-[40px] font-bold text-[#0066b2]">Workflow Integration</h2>
                </div>

                {/* Steps */}
                <div className="relative flex flex-col gap-0">
                    {steps.map((step, index) => {
                        const isLeft = step.align === 'left';
                        const isLast = index === steps.length - 1;

                        return (
                            <div key={index} className="relative">
                                {/* Step Row */}
                                <div
                                    className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${isLeft ? '' : 'md:flex-row-reverse'
                                        }`}
                                >
                                    {/* Image */}
                                    <div
                                        className={`relative w-[220px] h-[180px] flex-shrink-0 rounded-[20px] overflow-hidden border border-[#d6eaff] bg-[#eef6ff] shadow-sm`}
                                    >
                                        <Image
                                            src={step.image}
                                            alt={step.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Text */}
                                    <div className="flex-1">
                                        <h3 className="text-[22px] font-bold text-gray-900 mb-3">{step.title}</h3>
                                        <p className="text-[15px] text-gray-600 leading-relaxed max-w-xs">{step.description}</p>
                                    </div>
                                </div>

                                {/* Connector between steps */}
                                {!isLast && (
                                    <div className={`flex ${isLeft ? 'justify-start pl-[100px]' : 'justify-center md:justify-end md:pr-[100px]'} mt-2 mb-2`}>
                                        <div className="flex flex-col items-center">
                                            {/* Top dot */}
                                            <div className="w-3 h-3 rounded-full bg-[#b3d9f5] border-2 border-[#5fb3e4]" />
                                            {/* Diagonal line rendered as a rotated div */}
                                            <div className="w-[1px] h-14 bg-[#a0cce8]" />
                                            {/* Bottom dot */}
                                            <div className="w-3 h-3 rounded-full bg-[#b3d9f5] border-2 border-[#5fb3e4]" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Workflow;
