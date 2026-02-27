"use client";

import React from 'react';
import Image from 'next/image';

const CranialOverview = () => {
    return (
        <section className="w-full py-16 bg-white">
            <div className="container mx-auto px-4 max-w-[1200px]">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    {/* Left side: Image Card */}
                    <div className="w-full lg:w-[35%] flex justify-center lg:justify-start">
                        <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-[30px] overflow-hidden shadow-sm bg-gradient-to-b from-[#a4d2f8] to-[#60a9e9]">
                            <Image
                                src="/images/cranial-vault-reconstruction/Group-1171275170.png"
                                alt="Overview of Cranial Vault Reconstruction"
                                fill
                                className="object-contain scale-90"
                            />
                        </div>
                    </div>

                    {/* Right side: Text Box */}
                    <div className="w-full lg:w-[65%] flex flex-col justify-center">
                        <h2 className="text-3xl lg:text-[42px] font-bold text-[#1a5b9e] mb-6">
                            Overview
                        </h2>
                        <div className="bg-transparent">
                            <p className="text-gray-800 leading-[1.8] text-[16px] font-medium text-justify">
                                Cranial vault reconstruction is a complicated procedure that aims to reconstruct the cranium after injury, tumor resection, congenital malformation, or infection to re-establish its integrity, shape and protective quality. The use of traditional plates or mesh for reconstruction often requires intraoperative adjustment, which prolongs operative time and can negatively impact functional and aesthetic results. 3D printing and patient-specific implants (PSIs) have revolutionized cranial reconstruction, making it an accurate technique with good aesthetic outcomes.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CranialOverview;
