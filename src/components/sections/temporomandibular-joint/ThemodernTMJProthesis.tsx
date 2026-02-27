import React from "react";
import Image from "next/image";

const TheModernTMJProthesis = () => {
    return (
        <section className="w-full py-16 bg-[#f4fbff]">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

                    {/* Left Content */}
                    <div className="flex flex-col space-y-6">
                        <h2 className="text-3xl font-bold text-[#005696] mb-2">The modern TMJ prosthesis is composed of two primary components</h2>


                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="mr-3 mt-1 flex size-2 shrink-0 items-center justify-center rounded-full bg-[#005696]"></span>
                                <span className="text-lg text-gray-700">Condylar Component: It is made of titanium alloy (Ti-6Al-4V) through high-precision additive manufacturing, possessing superior biocompatibility, good load bearing capacity, customized to the anatomy of the patient.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 mt-1 flex size-2 shrink-0 items-center justify-center rounded-full bg-[#005696]"></span>
                                <span className="text-lg text-gray-700">Glenoid Fossa Component:  Fabricated from Ultra High Molecular Weight Polyethylene (UHMWPE), it is designed to mimic the gliding interface of the human joint, facilitating smooth and effective biomechanics while improving longevity.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Right Image */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative aspect-[4/3] w-full max-w-[500px]">
                            {/* Background blue blob/shape matching design */}
                            <div className="absolute inset-0 bg-[#005696] rounded-2xl transform translate-x-4 translate-y-4 -z-10"></div>
                            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                                <Image
                                    src="/images/temporomandibular-joint-imgs/tmj.png"
                                    alt="The Modern TMJ"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TheModernTMJProthesis;
