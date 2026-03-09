import React from "react";
import Image from "next/image";

export default function VirtualSurgicalPlanningAdvantages() {
    const advantages = [
        {
            title: "Accuracy:",
            description: "Sub-millimeter restoration of the facial anatomy."
        },
        {
            title: "Efficiency:",
            description: "Reduced surgical time by avoiding intraoperative plate contouring."
        },
        {
            title: "Predictability:",
            description: "Enhanced control through digital preoperative planning."
        },
        {
            title: "Improved Outcomes:",
            description: "Customized fixation plates provide long term stability, reduced complications, and better functional and aesthetic results."
        }
    ];

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Side: Image */}
                <div className="flex justify-center lg:justify-start">
                    <div className="relative w-full max-w-[500px] h-[400px]">
                        <Image
                            src="/images/virtual/virtual4.png"
                            alt="Advantages of Virtual Surgical Planning"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Right Side: Text Features */}
                <div className="space-y-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1f5f99] leading-tight">
                        Advantages of Virtual Surgical Planning and 3D-Printed Implants
                    </h2>

                    <div className="space-y-8">
                        {advantages.map((adv, index) => (
                            <div key={index} className="space-y-2">
                                {/* Thick Blue Divider Line */}
                                <div className="w-16 h-1 bg-[#2b6cb0]"></div>

                                <h3 className="text-xl font-bold text-gray-900 pt-1 tracking-wide">
                                    {adv.title}
                                </h3>

                                <div className="flex items-start gap-3">
                                    <div className="mt-2 flex-shrink-0 w-2 h-2 rounded-full bg-[#1f5f99]"></div>
                                    <p className="text-gray-700 text-sm md:text-base font-medium leading-relaxed">
                                        {adv.description}
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
