import React from 'react';
import Image from 'next/image';

const Specifications = () => {
    return (
        <div className="py-16 border-b border-gray-100">
            <h2 className="text-3xl font-extrabold text-[#1171bd] mb-10 uppercase tracking-tight text-center">
                Technical Specifications
            </h2>
            <div className="w-full relative min-h-[500px] md:min-h-[800px] rounded-xl overflow-hidden border border-gray-200">
                <Image
                    src="/images/human-body-parts-3d-scanner/specification.png"
                    alt="Technical Specifications"
                    fill
                    className="object-contain"
                />
            </div>
        </div>
    );
};

export default Specifications;
