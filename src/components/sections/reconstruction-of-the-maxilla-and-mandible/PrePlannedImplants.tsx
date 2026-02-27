import React from "react";
import Image from "next/image";

const PrePlannedImplants = () => {
    return (
        <section className="w-full py-16 bg-[#f8fbff]">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

                    {/* Left Content */}
                    <div className="flex flex-col space-y-6 lg:order-1 order-2">
                        <h2 className="text-3xl font-bold text-[#005696] mb-2 leading-tight">
                            Pre Planned Dental Implants:<br />"Jaw in a Day" Approach
                        </h2>
                        <p className="text-lg leading-relaxed text-gray-700 font-medium pb-2">
                            One of the most significant developments in maxillofacial reconstruction has been the opportunity to combine intraoperative dental rehabilitation with the surgical reconstruction.
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="mt-2 flex size-1.5 shrink-0 items-center justify-center rounded-sm rotate-45 bg-[#005696]"></span>
                                <span className="text-lg text-gray-700">With VSP, occlusion and prosthetic requirements are established by the surgeon prior to surgery.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-2 flex size-1.5 shrink-0 items-center justify-center rounded-sm rotate-45 bg-[#005696]"></span>
                                <span className="text-lg text-gray-700">Dental implants are pre installed into the fibula segment through a 3D printed drill guide.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-2 flex size-1.5 shrink-0 items-center justify-center rounded-sm rotate-45 bg-[#005696]"></span>
                                <span className="text-lg text-gray-700">Implants are installed with the preoperatively designed occlusion following microvascular transfer.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Right Image */}
                    <div className="relative flex justify-center lg:justify-end lg:order-2 order-1">
                        <div className="relative aspect-square w-full max-w-[400px]">
                            {/* Decorative background slightly offset */}
                            <div className="absolute inset-0 bg-[#e6f3ff] rounded-2xl transform shadow-sm border border-white"></div>
                            <div className="absolute inset-2 bg-white rounded-2xl overflow-hidden shadow-md transform -translate-x-4 translate-y-4">
                                <Image
                                    src="/images/reconstruction-of-the-maxilla-and-mandible/Rectangle-41929.png"
                                    alt="Pre Planned Dental Implants"
                                    fill
                                    className="object-contain p-4"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PrePlannedImplants;
