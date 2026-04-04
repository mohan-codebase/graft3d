"use client"
import Image from "next/image";

/**
 * Updated Overview Section for Elucis
 * Features a high-detail XR lung model on the left and a descriptive card on the right.
 */
const Overview = () => {
    return (
        <section id="overview" className="w-full py-32 bg-white relative font-poppins">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
                
                {/* Left: XR Visualization Image */}
                <div className="w-full flex justify-center lg:justify-end">
                    <div className="relative w-full aspect-square max-w-[600px] rounded-[3rem] overflow-hidden shadow-2xl border-2 border-gray-50">
                        <Image
                            src="/images/elucis/about-1.png"
                            alt="Elucis Software Overview"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* Right: Descriptive Card */}
                <div className="w-full max-w-xl lg:justify-self-start p-12 md:p-16 rounded-[40px] bg-gray-50/70 border border-gray-100 shadow-sm space-y-8 animate-fade-in-right relative">
                    {/* Decorative slider circle from the design */}
                    <div className="absolute top-1/2 -right-5 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-gray-100 hidden lg:flex items-center justify-center">
                        <div className="w-4 h-4 text-gray-300"> {/* Placeholder for an arrow if needed */} </div>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#166AAF] tracking-tight">
                        Overview
                    </h2>
                    <div className="space-y-6 text-xl text-gray-700 leading-[1.6]">
                        <p>
                            Elucis is an advanced extended reality (XR) platform that transforms how medical professionals visualise, plan, collaborate and execute complex surgical cases. Built for immersive 3D pre-operative planning, Elucis allows clinicians to import unlimited CT and MRI image scans.
                        </p>
                        <p>
                            Elucis supports procedural planning, clearer team communication, and more engaging patient consultations with advanced image segmentation, 3D and 4D modeling capabilities, optimizing surgical workflows and enhancing anatomical clarity.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Overview;
