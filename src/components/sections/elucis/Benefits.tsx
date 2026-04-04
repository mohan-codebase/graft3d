"use client"
import React from "react";
import { ArrowUpRight } from "lucide-react";

/**
 * Benefits Section for Elucis
 * Features the minimalist, light-blue design requested in the design screenshot.
 */
const Benefits = () => {
    const benefits = [
        { bold: "Improved accuracy", normal: "in surgical planning and decision-making" },
        { bold: "Immersive 3D visualization", normal: "for superior anatomical understanding" },
        { bold: "Enhanced collaboration", normal: "across surgical teams" },
        { bold: "Streamlined workflow", normal: "with reduced planning time" },
        { bold: "Better patient education", normal: "using interactive 3D models" }
    ];

    return (
        <section id="benefits" className="w-full py-24  font-poppins">
            <div className="max-w-[1400px] mx-auto px-6 flex flex-col items-center">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#166AAF] tracking-tight">
                        Benefits
                    </h2>
                </div>

                {/* Benefits List Container - Fixed alignment */}
                <div className="w-full flex justify-center">
                    <div className="space-y-10 flex flex-col items-start animate-fade-in-up">
                        {benefits.map((benefit, index) => (
                            <div 
                                key={index} 
                                className="flex items-start gap-4 md:gap-8 group"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Blue Circle Icon with White Arrow */}
                                <div className="mt-1 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#166AAF] flex items-center justify-center text-white shrink-0 shadow-sm transition-transform group-hover:scale-110">
                                    <ArrowUpRight className="w-5 h-5 md:w-7 md:h-7" strokeWidth={3} />
                                </div>
                                
                                {/* Content Text */}
                                <div className="space-y-1">
                                    <p className="text-xl md:text-xl  leading-tight">
                                        <span className="font-bold text-[#333333]">{benefit.bold}</span>{" "}
                                        <span className="text-gray-500 font-normal">{benefit.normal}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Benefits;
