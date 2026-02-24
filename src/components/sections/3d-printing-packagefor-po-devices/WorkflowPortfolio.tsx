"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const steps = [
    {
        id: 1,
        stepLabel: 'Step 1',
        label: '3D SCANNING',
        circleImage: '/images/3d-printing-packagefor-po-devices/Group-25.png',
        description: 'Utilizing the Einscan-H 3D scanner, medical professionals can accurately capture the geometry and texture of body parts, including the face, hair, amputated limbs, and existing prosthetic and orthopaedic devices.',
    },
    {
        id: 2,
        stepLabel: 'Step 2',
        label: 'Custom Design',
        circleImage: '/images/3d-printing-packagefor-po-devices/Group-24.png',
        description: 'Utilize the Geomagic Freeform CAD system with a haptic touch device to create the patient-specific P&O Devices.',
    },
    {
        id: 3,
        stepLabel: 'Step 3',
        label: '3D PRINT',
        circleImage: '/images/3d-printing-packagefor-po-devices/Group-23.png',
        description: 'Print the designed P&O devices using the EXT 1070 Tital Pellet LT (ATLAS 2.5) industrial 3D printer. Produce up to 200–300 devices per month using PEBA flexible nylon and mineral-filled polypropylene pellets.',
    },
];

const WorkflowPortfolio = () => {
    const [activeStep, setActiveStep] = useState(1);
    const active = steps.find((s) => s.id === activeStep)!;

    return (
        <section className="bg-[#2272c3] py-14">
            <div className="max-w-[900px] mx-auto px-6 text-center">
                <h2 className="text-white text-[28px] font-bold mb-10">
                    Workflow and Product Portfolio
                </h2>

                {/* Step circles row */}
                <div className="flex items-start justify-center gap-16 mb-10">
                    {steps.map((step) => (
                        <button
                            key={step.id}
                            onClick={() => setActiveStep(step.id)}
                            className="flex flex-col items-center gap-2 group"
                        >
                            <p className="text-white/80 text-[12px] mb-1">{step.stepLabel}</p>
                            <div
                                className={`relative w-24 h-24 rounded-full overflow-hidden transition-all duration-300 ${activeStep === step.id ? 'ring-4 ring-white scale-110' : 'opacity-75 hover:opacity-100'}`}
                            >
                                <Image
                                    src={step.circleImage}
                                    alt={step.label}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </button>
                    ))}
                </div>

                {/* Active step content */}
                <div className="text-center">
                    <h3 className="text-white font-bold text-[18px] uppercase tracking-wide mb-3">
                        {active.label}
                    </h3>
                    <p className="text-white/90 text-[14px] leading-relaxed max-w-[620px] mx-auto">
                        {active.description}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WorkflowPortfolio;
