import React from "react";
import Image from "next/image";

const ImmediateFibulaSection = () => {
    return (
        <section className="w-full py-16 bg-[#f4fbff]">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

                    {/* Left Content */}
                    <div className="flex flex-col space-y-6">
                        <h2 className="text-3xl font-bold text-[#005696] mb-2">Immediate Fibula Free Flap in Jaw Reconstruction</h2>
                        <p className="text-lg leading-relaxed text-gray-700">
                            Fibula free flap is the gold standard for reconstruction of the mandible and maxilla. Its unique advantages include:
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="mr-3 mt-1 flex size-2 shrink-0 items-center justify-center rounded-full bg-[#005696]"></span>
                                <span className="text-lg text-gray-700">Sufficient bone to preserve continuity of the maxilla or mandible.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 mt-1 flex size-2 shrink-0 items-center justify-center rounded-full bg-[#005696]"></span>
                                <span className="text-lg text-gray-700">Reliable vascularity, ensuring graft survival.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 mt-1 flex size-2 shrink-0 items-center justify-center rounded-full bg-[#005696]"></span>
                                <span className="text-lg text-gray-700">Ease of use with availability of skin paddles for intraoral or external coverage.</span>
                            </li>
                        </ul>

                        <p className="text-lg leading-relaxed text-gray-700 pt-4">
                            Immediate reconstruction with the tumor resection offers the best functional and aesthetic reconstruction. It preserves the soft tissue envelope, minimises post-operative scarring, and facilitates earlier rehabilitation.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative aspect-[4/3] w-full max-w-[500px]">
                            {/* Background blue blob/shape matching design */}
                            <div className="absolute inset-0 bg-[#005696] rounded-2xl transform translate-x-4 translate-y-4 -z-10"></div>
                            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                                <Image
                                    src="/images/reconstruction-of-the-maxilla-and-mandible/Rectangle-41928.png"
                                    alt="Immediate Fibula Free Flap"
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

export default ImmediateFibulaSection;
