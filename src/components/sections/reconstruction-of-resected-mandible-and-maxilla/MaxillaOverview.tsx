"use client";

import React from 'react';
import Image from 'next/image';

const MaxillaOverview = () => {
    return (
        <section className="w-full py-16 bg-white">
            <div className="container mx-auto px-4 max-w-[1200px]">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left side: Image */}
                    <div className="w-full lg:w-[45%] flex justify-center">
                        <div className="relative w-full max-w-[450px] aspect-square rounded-2xl overflow-hidden">
                            <Image
                                src="/images/reconstruction-of-resected-mandible-and-maxilla/1-3.png"
                                alt="Overview of Oral and Maxillofacial Surgery defects"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Right side: Text Focus */}
                    <div className="w-full lg:w-[55%] flex flex-col">
                        <h2 className="text-3xl lg:text-[34px] font-bold text-[#1a5b9e] mb-6">
                            Overview
                        </h2>
                        <p className="text-gray-700 leading-loose text-[16px] font-medium text-justify">
                            Reconstruction of the mandible and maxilla is one of the most challenging areas in oral and maxillofacial surgery. It is often necessary following resection for cancers, benign lesions, mucormycosis or severe trauma. These defects need to be addressed for skeletal continuity, and also for correction of occlusion, mastication, speech and facial aesthetics. Conventional reconstruction methods are associated with the drawbacks of donor site morbidity, unsatisfactory anatomical correspondence and longer operation time. The advent of 3D-printed patient-specific implants (PSIs) has transformed craniofacial reconstruction. By incorporating digital surgical planning, advanced imaging and biomechanical optimization with finite element analysis (FEA), these implants provide an accurate anatomical restoration and functional rehabilitation.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MaxillaOverview;
