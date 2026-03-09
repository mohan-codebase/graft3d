import React from 'react';

const DigiprunAbout = () => {
    return (
        <section className="w-full bg-[#05143A] py-16 md:py-24">
            <div className="container max-w-5xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    3D PRINTED Surgical Cutting Guides for High <br className="hidden md:block" /> Precision Bone Surgery
                </h2>
                <p className="text-base md:text-lg text-gray-200 leading-relaxed max-w-4xl mx-auto font-medium">
                    Digiprun is a digitally engineered, patient-specific surgical cutting guide developed to enhance precision and control in complex bone procedures. Digiprun enables surgeons to plan and execute bone resections with the help of advanced imaging and virtual surgical planning. Digiprun supports tissue preservation and improved surgical outcomes by guiding precise removal of affected or infected bone.
                </p>
            </div>
        </section>
    );
};

export default DigiprunAbout;
