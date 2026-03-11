"use client";

import React from 'react';
import Image from 'next/image';

const Overview = () => {
    return (
        <section className="w-full">
            <div className="flex flex-col lg:flex-row">
                {/* Left - Blue background with skull image */}
                <div
                    className="w-full lg:w-1/2 flex items-center justify-center relative overflow-hidden"
                    style={{
                        background: '',
                        minHeight: '80px',
                    }}
                >
                    <div className="relative w-full h-full flex items-center justify-center p-8">
                        <Image
                            src="/images/3d-printed-models-in-the-medical-field/Frame-427319434-3.png"
                            alt="3D Printed Skull Model"
                            width={700}
                            height={700}
                            className="object-contain max-h-[700px] w-auto drop-shadow-2xl"
                        />
                    </div>
                </div>

                {/* Right - Light gray background with overview text */}
                <div
                    className="w-full lg:w-1/2 flex flex-col justify-center px-10 py-16 lg:px-16"
                    style={{ background: '#f0f4f8' }}
                >
                    <h2 className="text-3xl lg:text-[32px] font-extrabold text-[#166AAF] mb-6">
                        Overview
                    </h2>
                    <p className="text-[#333] text-[16px] leading-relaxed">
                        3D printing is revolutionizing healthcare by converting digital images into physical, patient-specific anatomical models. These models are crucial resources for clinicians and patients, as they improve diagnostic precision, preoperative planning and surgical performance. They are used in a wide variety of disciplines, such as orthopaedic surgery, neurosurgery, maxillofacial surgery, cardiology, plastic surgery and oncology. 3D printed models are making a real difference in the way complex medical conditions are comprehended and treated.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Overview;
