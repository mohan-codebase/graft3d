"use client";

import React from 'react';
import Image from 'next/image';

const workflowSteps = [
    {
        title: "Imaging and Virtual Planning",
        description: "The basis of virtual surgical planning is the high-resolution CT scan. Defective areas are outlined and 3D models with details of the defect are prepared to be used for preoperative planning. This yields valuable information for planning reconstruction of mandibular defects and maxillary defects treatment.",
        bgClass: "bg-[#e8f3fc]"
    },
    {
        title: "Reconstruction of Single-Sided Defects",
        description: "For mandibular and maxillary resections, the unaffected side is digitally mirrored. This guarantees an ideal anatomical fit and provides for normal facial balance in mandibular reconstruction and maxillary reconstruction cases.",
        bgClass: "bg-[#f4f9fd]"
    },
    {
        title: "Base Plate and Fixation Design",
        description: "A baseplate is then custom designed to fit the residual bone. Trajectory screws are well planed, without any passage to critical structures like canals or dental roots in order to ensure safety and stability.",
        bgClass: "bg-[#e8f3fc]"
    },
    {
        title: "Biomechanical Optimization",
        description: "Finite element analysis is performed before final fabrication for the evaluation of stresses and strains in the implant. Load bearing areas such as the mandibular angle, parasymphysis and condylar regions are provided with added strength. This mechanism guarantees biomechanical dependability for activities of mastication and speech, critical in trauma-related mandibular resection with the use of PSIs.",
        bgClass: "bg-[#f4f9fd]"
    }
];

const MaxillaDesignWorkflow = () => {
    return (
        <section className="w-full py-20 bg-[#f8fbff]">
            <div className="container mx-auto px-4 max-w-[1200px]">

                <div className="text-center max-w-[800px] mx-auto mb-16">
                    <h2 className="text-3xl lg:text-[36px] font-extrabold text-[#1a5b9e] mb-6">
                        Design Workflow for 3D- Printed Implants
                    </h2>
                    <div className="w-24 h-1 bg-[#1a5b9e] mx-auto rounded-full"></div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

                    {/* Image Area */}
                    <div className="w-full lg:w-5/12 sticky top-24">
                        <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-blue-50">
                            <Image
                                src="/images/reconstruction-of-resected-mandible-and-maxilla/8-1.png"
                                alt="Design Workflow for 3D Printed Implants"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Steps Area */}
                    <div className="w-full lg:w-7/12 flex flex-col gap-6">
                        {workflowSteps.map((step, index) => (
                            <div key={index} className={`rounded-2xl p-8 lg:p-10 shadow-sm border border-gray-100 ${step.bgClass} hover:shadow-md transition-shadow relative overflow-hidden group`}>
                                <div className="absolute top-0 left-0 w-2 h-full bg-[#1a5b9e] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>

                                <span className="inline-block text-[#1a5b9e] font-black text-5xl mb-4 opacity-20">
                                    0{index + 1}
                                </span>
                                <h3 className="text-2xl font-bold text-[#1a5b9e] mb-4">
                                    {step.title}
                                </h3>
                                <p className="text-gray-700 leading-relaxed font-medium text-[16px]">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MaxillaDesignWorkflow;
