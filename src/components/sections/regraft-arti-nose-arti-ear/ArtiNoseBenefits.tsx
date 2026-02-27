import React from 'react';

const benefitsList = [
    "Highly accurate face matching artificial prosthesis",
    "Made by face 3D Scanning, Bio CAD & 3D Printing Technology",
    "Matches with human skin tone",
    "Made up of biocompatible material using Medical 3D Printing for Sacrificial casting",
    "Non contact human friendly face 3D scanning technology",
    "Implantable & detachable prosthesis ."
];

const ArtiNoseBenefits = () => {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="container mx-auto px-4 max-w-[1400px]">

                <h2 className="text-2xl font-bold text-[#5bc0de] mb-12">
                    Benefits
                </h2>

                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
                        {benefitsList.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-4">
                                {/* The Number Badge */}
                                <div className="flex-shrink-0 flex items-center justify-center relative w-[70px] h-[70px]">
                                    <div className="absolute inset-x-0 bottom-2 h-10 w-full rounded-[50%] opacity-20 bg-gradient-to-t from-gray-400 to-transparent shadow-xl pointer-events-none" />
                                    <span className="text-[48px] font-bold text-[#1a2b4c] leading-none z-10 block">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                </div>

                                {/* The text description */}
                                <p className="text-gray-700 text-[15px] pt-4 leading-snug font-medium">
                                    {benefit}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ArtiNoseBenefits;
