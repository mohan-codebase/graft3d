import React from 'react';
import Image from 'next/image';

const features = [
    { text: 'D2P minimizes the need for technical expertise.', icon: '/images/medical-segmentation/seg1.png' },
    { text: 'Ideal for pre-operative surgical planning and diagnostic evaluation.', icon: '/images/medical-segmentation/seg2.png' },
    { text: 'DICOM images can be viewed instantly in VR without segmentation.', icon: '/images/medical-segmentation/seg3.png' },
    { text: 'Effortless and instant 3D model segmentation using deep learning tools.', icon: '/images/medical-segmentation/seg4.png' },
    { text: 'One creation suite to support all model preparation steps.', icon: '/images/medical-segmentation/seg5.png' },
    { text: 'Create 3D model in minutes using automatic segmentation tools.', icon: '/images/medical-segmentation/seg6.png' },
    { text: 'Instant transfer of 3D files to various applications such as 3D printers and VR.', icon: '/images/medical-segmentation/seg7.png' },
    { text: 'Supports all popular 3D mesh formats for 3D printers, CAD and VR.', icon: '/images/medical-segmentation/seg1.png' },
    { text: 'Enhanced 3D visualization and complete freedom of model control in VR.', icon: '/images/medical-segmentation/seg2.png' },
    { text: 'Seamlessly connects to advanced 3D visualization technologies.', icon: '/images/medical-segmentation/seg3.png' },
    { text: 'Results are overlaid on patient scan to ensure precision.', icon: '/images/medical-segmentation/seg4.png' },
    { text: 'Intuitive editing tools including auto model coloration.', icon: '/images/medical-segmentation/seg5.png' },
    { text: 'Easy control of data management.', icon: '/images/medical-segmentation/seg6.png' },
];

const Features = () => {
    return (
        <div className="py-16 border-b border-gray-100">
            <h2 className="text-3xl font-extrabold text-[#1171bd] mb-10 uppercase tracking-tight">
                Features And Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 relative grayscale group-hover:grayscale-0 transition-all">
                            <Image
                                src={feature.icon}
                                alt={`Feature icon ${index + 1}`}
                                width={48}
                                height={48}
                                className="object-contain"
                            />
                        </div>
                        <p className="text-gray-700 text-[15px] pt-1 leading-relaxed">
                            {feature.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;
