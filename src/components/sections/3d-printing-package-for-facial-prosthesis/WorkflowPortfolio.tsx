"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const steps = [
    {
        id: 1,
        stepLabel: 'Step 1',
        label: '3D Facial Scanning',
        circleImage: '/images/3d-printing-package-for-facial-prosthesis/Group-25.png',
        description: 'Begin by 3D scanning the patient’s facial area that requires the prosthesis. This non-invasive process captures detailed and accurate data, serving as a reference for later design stages.',
    },
    {
        id: 2,
        stepLabel: 'Step 2',
        label: 'Custom Design Creation',
        circleImage: '/images/3d-printing-package-for-facial-prosthesis/Group-24.png',
        description: 'Utilize advanced CAD software, such as Geomagic Freeform, equipped with a haptic touch device. This combination enables our skilled designers to create patient-specific facial prostheses with precision and sensitivity to individual needs.',
    },
    {
        id: 3,
        stepLabel: 'Step 3',
        label: '3D Printing',
        circleImage: '/images/3d-printing-package-for-facial-prosthesis/Group-23-1.png',
        description: 'Creating Facial Prosthesis with the help of Eggshell- AMB- 10 material, that can help precisely tailored to match the individual’s unique facial anatomy and needs, ensuring a more comfortable and accurate fit',
    },
];

const WorkflowPortfolio = () => {
  const [activeStep, setActiveStep] = useState(1);
  const active = steps.find((s) => s.id === activeStep)!;

  return (
    <section className="bg-[#166AAF] py-16">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-white text-3xl font-bold mb-10">
          Workflow and Product Portfolio
        </h2>

        {/* Step circles row */}
        <div className="flex flex-wrap items-start justify-center gap-14 mb-12">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className="flex flex-col items-center gap-2 group"
            >
              <p className="text-white/80 text-xs mb-1">{step.stepLabel}</p>
              <div
                className={`relative flex items-center justify-center transition-transform duration-300 ${
                  activeStep === step.id ? "scale-110" : "scale-100 group-hover:scale-105"
                }`}
              >
                {/* Outer white ring */}
                <div className="flex items-center justify-center rounded-full border-[5px] border-white/90">
                  {/* Inner blue ring with image */}
                  <div className="relative w-24 h-24 rounded-full border-[3px] border-[#2B83D5] overflow-hidden bg-[#2B83D5]">
                    <Image
                      src={step.circleImage}
                      alt={step.label}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Active step content */}
        <div className="text-center">
          <h3 className="text-white font-bold text-xl mb-3">
            {active.label}
          </h3>
          <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
            {active.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkflowPortfolio;
