import React from 'react';
import Image from 'next/image';

const Overview = () => {
    return (
        <div className="py-2 border-b border-gray-100 mb-8">
            <h2 className="text-3xl font-extrabold text-[#1171bd] mb-8 uppercase tracking-tight">
                Overview
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                <div className="text-gray-700 space-y-4 leading-relaxed">
                    <p>
                        D2P (Dicom to Print) is a stand-alone modular software package that is designed to address and consolidate all 3D model preparation steps into one workstation. The software relies on unique automatic segmentation tools that minimizes the effort and time associated with the creation of a patient-specific model.
                    </p>
                    <p>
                        DICOM images are imported into the D2P stand-alone modular software package that consolidates all 3D model segmentation and preparation steps into one workstation. D2P is a cleared medical device intended for pre-operative surgical planning and the production of 3D-printed anatomic models for diagnostic purposes.
                    </p>
                    <p>
                        The unique image segmentation tool set and its advanced virtual reality (VR) visualization allow clinicians and point-of-care (POC) staff to minimize the effort and time associated with the creation of patient-specific anatomic models. Digital models exported from the D2P software can be used in a wide variety of applications including 3D printers, VR devices, surgical planning software, and CAD software.
                    </p>
                    <p className="font-semibold text-[#1e73be]">
                        Comprehensive solution for quick 3D digital model creation making 3D printing more accessible than ever.
                    </p>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-100">
                    <Image
                        src="https://graft3d.com/wp-content/uploads/2021/12/D2pIMG-1.png"
                        alt="D2P Software User Interface"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                        unoptimized
                    />
                </div>
            </div>

            <div className="mt-20">
                <h3 className="text-3xl font-extrabold text-[#1171bd] mb-8 uppercase tracking-tight">
                    End-to-end solution for 3D digital model creation
                </h3>
                <p className="text-gray-600 mb-12 leading-relaxed max-w-5xl">
                    FDA 510(K) clearance of D2P software for healthcare applications allows surgeons, radiologists, lab technicians and device designers to quickly create accurate, digital 3D anatomical models from medical imaging data.
                </p>
                <div className="flex justify-center">
                    <Image
                        src="https://graft3d.com/wp-content/uploads/2021/12/2021-12-17-10_07_48-D2p.png"
                        alt="End-to-End Solution Flowchart"
                        width={1000}
                        height={400}
                        className="w-full h-auto max-w-4xl"
                        unoptimized
                    />
                </div>
            </div>
        </div>
    );
};

export default Overview;
