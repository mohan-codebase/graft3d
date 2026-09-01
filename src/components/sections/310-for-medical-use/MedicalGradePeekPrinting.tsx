import Image from "next/image";
import { Play } from "lucide-react";

const features = [
    {
        icon: "/images/310-for-medical-use/grade-1.svg",
        title: "Medical-Grade PEEK Printing",
        description: "Biocompatible, chemical resistant & sterilizable parts.",
    },
    {
        icon: "/images/310-for-medical-use/grade-2.svg",
        title: "Extreme Speed. Proven Quality",
        description: "Up to 200 mm/s with precision and reliability.",
    },
    {
        icon: "/images/310-for-medical-use/grade-3.svg",
        title: "Dual IDEX Advantage",
        description: "Duplicate, Mirror and Support-free printing for complex geometries.",
    },
    {
        icon: "/images/310-for-medical-use/grade-4.svg",
        title: "Engineered for Cleanroom Environments",
        description: "Heated chamber, active drying and smart monitoring.",
    },
    {
        icon: "/images/310-for-medical-use/grade-5.svg",
        title: "India Support You Can Count On",
        description: "Precise3DM – INTAMSYS Master Reseller in India.",
    },
];

export default function MedicalGradePeekPrinting() {
    return (
        <section className="w-full bg-white py-8 lg:py-16">
            <div className="container-fluid mx-auto px-4 lg:px-12 xl:px-20">
                {/* Header */}
                <div className="text-center mb-12 lg:mb-16">
                    <h2 className="text-[#01101B] font-bold text-[2rem] lg:text-[2.5rem] mb-3">
                        Medical-Grade PEEK Printing
                    </h2>
                    <p className="text-[#01101B] font-normal text-[1.1875rem]">
                        See APOLLO Print PEEK for Medical Applications
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
                    {/* Left Side: Video/Image Card */}
                    <div className="relative w-full min-h-100 h-full rounded-2xl overflow-hidden group cursor-pointer">
                        <Image
                            src="/images/310-for-medical-use/medical-grade-image.png"
                            alt="See APOLLO Print PEEK at Production Speed"
                            fill
                            className="object-cover"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-[#00000050] flex flex-col items-center justify-center p-6 transition-all duration-300 group-hover:bg-[#00000099]">
                            <h3 className="text-white font-bold text-[1.5rem] text-center mb-8 whitespace-pre-line">
                                {`See APOLLO Print PEEK at\nProduction Speed`}
                            </h3>
                            <div className="w-20 h-20 rounded-full border-2 border-[#166AAF] flex items-center justify-center bg-transparent transition-transform duration-300 group-hover:scale-110">
                                <Play fill="white" className="text-white ml-1" size={32} />
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Features List */}
                    <div className="flex flex-col gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-5">
                                {/* Icon Container */}
                                <div className="shrink-0 w-16 h-16 rounded-full bg-[#1B6DB1] flex items-center justify-center">
                                    <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center bg-transparent">
                                        <div className="relative w-6 h-6">
                                            <Image
                                                src={feature.icon}
                                                alt={feature.title}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* Text Content */}
                                <div className="flex flex-col pt-1">
                                    <h4 className="text-[#00101B] font-semibold text-[1.375rem] lg:text-[1.5rem] mb-1">
                                        {feature.title}
                                    </h4>
                                    <p className="text-[#00101B] font-normal text-[1.125rem]">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
