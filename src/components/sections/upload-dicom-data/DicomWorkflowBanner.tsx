import React from 'react';
import Image from 'next/image';

const DicomWorkflowBanner = () => {
    return (
        <section className="w-full bg-[#d8eef8] py-8 px-4">
            <div className="max-w-[1100px] mx-auto relative w-full aspect-[3.5/1]">
                <Image
                    src="/images/upload-dicom-data/FormCoverPic.png"
                    alt="Medical 3D Scanner → DICOM Images → 3D Bio Model Print Ready"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
        </section>
    );
};

export default DicomWorkflowBanner;
