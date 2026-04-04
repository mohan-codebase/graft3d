"use client"
import Image from "next/image";

/**
 * Updated Key Features Section for Elucis
 * Matches the requested layout: Bullet points on the left and UI-overlay image on the right.
 */
const Features = () => {
    const features = [
        "Import unlimited DICOM files",
        "Advanced image segmentation and 4D workflows",
        "Convert imaging data into detailed interactive 3D models",
        "Real-time image registration, measurements, and editing",
        "Device import and virtual fitting",
        "Multi-user collaborative VR sessions",
        "Media capture for documentation and case review"
    ];

    return (
        <section id="features" className="w-full py-24 bg-white flex items-center justify-center font-poppins">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
                
                {/* Left Side: Bullet Points */}
                <div className="space-y-12 w-full max-w-xl lg:justify-self-end animate-fade-in-left">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#166AAF] tracking-tight leading-tight">
                        Key Features
                    </h2>
                    
                    <ul className="space-y-8">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-5 text-xl md:text-[18px] lg:text-[20px] text-gray-700 font-medium leading-snug">
                                <div className="mt-3 w-3.5 h-3.5 rounded-full bg-[#166AAF] flex-shrink-0" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Side: UI-Overlay Image */}
                <div className="w-full flex justify-center lg:justify-start">
                    <div className="relative w-full aspect-square max-w-[600px] rounded-[3rem] overflow-hidden shadow-2xl border-2 border-gray-50">
                        <Image
                            src="/images/elucis/about-2.png"
                            alt="Elucis Software Key Features"
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

export default Features;
