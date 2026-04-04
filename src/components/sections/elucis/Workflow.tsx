"use client"
import React from "react";
import Image from "next/image";

/**
 * Updated Workflow Section for Elucis
 * Uses specific SVG assets (1-5.svg) and matches the exact vertical alternating layout.
 */
const Workflow = () => {
    const steps = [
        {
            number: 1,
            boldText: "Upload patient CT or MRI",
            normalText: "imaging data into the software",
            side: "left",
            icon: "/images/elucis/icons/1.svg",
        },
        {
            number: 2,
            boldText: "Convert imaging data",
            normalText: "into detailed 3D anatomical models",
            side: "right",
            icon: "/images/elucis/icons/2.svg",
        },
        {
            number: 3,
            boldText: "Perform segmentation",
            normalText: "and virtual exploration of anatomical structures",
            side: "left",
            icon: "/images/elucis/icons/3.svg",
        },
        {
            number: 4,
            boldText: "Review and refine",
            normalText: "surgical plans in real time",
            side: "right",
            icon: "/images/elucis/icons/4.svg",
        },
        {
            number: 5,
            boldText: "Utilise finalised plans",
            normalText: "to guide precise clinical procedures",
            side: "left",
            icon: "/images/elucis/icons/5.svg",
        }
    ];

    return (
        <section id="workflow" className="w-full py-32 bg-white relative overflow-hidden font-poppins">
            <div className="max-w-[1200px] mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#166AAF] tracking-tight leading-tight">
                        Workflow
                    </h2>
                </div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Central Connecting Line */}
                    <div className="absolute left-1/2 top-10 bottom-10 -ml-[1px] w-[2px] bg-[#dbeafe] hidden md:block"></div>

                    {/* Step Rows */}
                    <div className="space-y-16 md:space-y-0">
                        {steps.map((step, index) => (
                            <div key={index} className="relative flex flex-col md:flex-row items-center md:min-h-[260px]">
                                
                                {/* Left Side Context */}
                                <div className="flex-1 w-full order-2 md:order-1 flex justify-end items-center">
                                    <div className={`w-full max-w-md md:pr-16 ${step.side === 'left' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                                        <div className="space-y-3">
                                            <div className="w-9 h-9 rounded-full bg-[#166AAF] flex items-center justify-center text-white text-lg font-bold shadow-md">
                                                {step.number}
                                            </div>
                                            <div>
                                                <p className="text-primary text-2xl lg:text-3xl font-bold leading-tight">
                                                    {step.boldText}
                                                </p>
                                                <p className="text-gray-500 text-lg lg:text-xl leading-snug mt-1">
                                                    {step.normalText}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Central Icon Section */}
                                <div className="z-10 order-1 md:order-2 my-8 md:my-0 flex shrink-0">
                                    <div className="relative group">
                                        {/* Soft Blue Glow Background */}
                                        <div className="absolute -inset-4 bg-blue-400/5 rounded-full blur-2xl group-hover:bg-blue-400/10 transition-all duration-500"></div>
                                        <div className="absolute -inset-1 bg-blue-400/10 rounded-full blur-xl"></div>
                                        
                                        {/* Main Icon Circle */}
                                        <div className="relative w-40 h-40 md:w-48 md:h-48 bg-white rounded-full border border-blue-200 shadow-[0_10px_30px_rgba(59,130,246,0.1)] flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-blue-200/50">
                                            {/* Subtle Inner Highlight */}
                                            <div className="absolute inset-2 border-[0.5px] border-blue-50/50 rounded-full bg-gradient-to-tr from-blue-50/20 to-transparent"></div>
                                            
                                            <div className="relative w-24 h-24 md:w-28 md:h-28">
                                                <Image
                                                    src={step.icon}
                                                    alt={`Step ${step.number} Icon`}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side Context */}
                                <div className="flex-1 w-full order-3 md:order-3 flex justify-start items-center">
                                    <div className={`w-full max-w-md md:pl-16 ${step.side === 'right' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                                        <div className="space-y-3">
                                            <div className="w-9 h-9 rounded-full bg-[#166AAF] flex items-center justify-center text-white text-lg font-bold shadow-md">
                                                {step.number}
                                            </div>
                                            <div>
                                                <p className="text-primary text-2xl lg:text-3xl font-bold leading-tight">
                                                    {step.boldText}
                                                </p>
                                                <p className="text-gray-500 text-lg lg:text-xl leading-snug mt-1">
                                                    {step.normalText}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Workflow;
