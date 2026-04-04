"use client"
import React from "react";
import Image from "next/image";

/**
 * Product Variations Section for Elucis
 * Showcases Elucis Next and Elucis Go in a high-fidelity, alternating layout.
 */
const ProductVariations = () => {
    return (
        <section id="variations" className="w-full py-32 bg-white flex flex-col gap-32">
            
            {/* Elucis Next Row */}
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
                {/* Left: Image */}
                <div className="w-full flex justify-center lg:justify-end">
                    <div className="relative w-full aspect-square max-w-[550px] rounded-[2.5rem] overflow-hidden shadow-2xl">
                        <Image
                            src="/images/elucis/about-3.png"
                            alt="Elucis Next"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* Right: Content */}
                <div className="space-y-8 w-full max-w-xl lg:justify-self-start animate-fade-in-right">
                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-[#166AAF] tracking-tight">
                        Elucis Next
                    </h2>
                    
                    <ul className="space-y-4">
                        {[
                            "Full VR-based surgical case planning platform",
                            "Imports DICOM data (CT, MRI, CBCT, 3D/4D Echo)",
                            "Advanced image segmentation with 3D and 4D modeling",
                            "Image registration, measurements, editing, and media capture",
                            "Hosts multi-user collaborative VR sessions",
                            "Requires Windows PC with VR-ready GPU and headset",
                            "Ideal for 3D labs and surgical/imaging teams"
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-4 text-lg md:text-xl text-gray-700 font-medium leading-relaxed">
                                <div className="mt-2.5 w-2.5 h-2.5 rounded-full bg-[#166AAF] flex-shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Elucis Go Row */}
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
                {/* Left: Content (Order 2 on mobile, Order 1 on LG) */}
                <div className="order-2 lg:order-1 space-y-8 w-full max-w-xl lg:justify-self-end animate-fade-in-left">
                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-[#166AAF] tracking-tight">
                        Elucis Go
                    </h2>
                    
                    <ul className="space-y-4">
                        {[
                            "Standalone VR visualization and collaboration platform",
                            "View and interact with pre-generated static 3D models",
                            "Join live collaborative sessions with Elucis Next or Go users",
                            "Intuitive interface with mixed-reality features",
                            "Runs on standalone VR headset (no PC required for use)",
                            "Cost-effective access for clinicians and educators",
                            "Suitable for discussions, education, and patient engagement"
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-4 text-lg md:text-xl text-gray-700 font-medium leading-relaxed">
                                <div className="mt-2.5 w-2.5 h-2.5 rounded-full bg-[#166AAF] flex-shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right: Image (Order 1 on mobile, Order 2 on LG) */}
                <div className="order-1 lg:order-2 w-full flex justify-center lg:justify-start">
                    <div className="relative w-full aspect-square max-w-[550px] rounded-[2.5rem] overflow-hidden shadow-2xl">
                        <Image
                            src="/images/elucis/about-4.png"
                            alt="Elucis Go"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ProductVariations;
