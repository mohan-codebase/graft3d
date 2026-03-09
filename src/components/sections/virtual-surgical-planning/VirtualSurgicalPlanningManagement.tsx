import React from "react";
import Image from "next/image";

export default function VirtualSurgicalPlanningManagement() {
    const listItems = [
        "High-resolution CT based virtual surgical planning enables the reconstruction of fractured fragments in exceptional quality.",
        "Surgeons are able to virtually reconstruct and manipulate bone fragments to subtitle millimeter precision, thereby producing a very accurate surgical template.",
        "This digitalized technique can reduce on-site guess work and increase preoperative understanding of the expected outcome.",
        "Patient Specific Implants such as individual titanium plates and meshes are fabricated according to the virtual planning case."
    ];

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Side: Text and List */}
                <div className="space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1f5f99] leading-tight pr-4">
                        Virtual Surgical Planning in Management of Facial Trauma
                    </h2>

                    <ul className="space-y-6">
                        {listItems.map((item, index) => (
                            <li key={index} className="flex items-start gap-4">
                                <div className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-[#1f5f99]"></div>
                                <p className="text-sm md:text-base font-medium text-gray-700 leading-relaxed">
                                    {item}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Side: Image in Blue Box */}
                <div className="flex justify-center lg:justify-end">
                    <div className="bg-[#1f5f99] w-full max-w-[500px] h-[400px] relative rounded-sm flex items-center justify-center p-6 shadow-xl overflow-hidden">
                        {/* The image goes inside the blue box */}
                        <div className="relative w-full h-[110%] overflow-visible scale-110">
                            <Image
                                src="/images/virtual/virtual3.png"
                                alt="Facial Trauma Management Model"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
