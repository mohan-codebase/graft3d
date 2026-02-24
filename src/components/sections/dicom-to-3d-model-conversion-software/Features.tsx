import React from 'react';
import Image from 'next/image';

const features = [
    { text: 'D2P minimizes the need for technical expertise.', icon: 'https://graft3d.com/wp-content/uploads/2021/12/Group-12.png' },
    { text: 'Ideal for pre-operative surgical planning and diagnostic evaluation.', icon: 'https://graft3d.com/wp-content/uploads/2021/12/Group-13.png' },
    { text: 'DICOM images can be viewed instantly in VR without segmentation.', icon: 'https://graft3d.com/wp-content/uploads/2021/12/Group-14.png' },
    { text: 'Effortless and instant 3D model segmentation using deep learning tools.', icon: 'https://graft3d.com/wp-content/uploads/2021/12/Group-15.png' },
    { text: 'One creation suite to support all model preparation steps.', icon: 'https://graft3d.com/wp-content/uploads/2021/12/Group-16.png' },
    { text: 'Create 3D model in minutes using automatic segmentation tools.', icon: 'https://graft3d.com/wp-content/uploads/2021/12/Group-17.png' },
    { text: 'Instant transfer of 3D files to various applications such as 3D printers and VR.', icon: 'https://graft3d.com/wp-content/uploads/2021/12/Group-18.png' },
    { text: 'Supports all popular 3D mesh formats for 3D printers, CAD and VR.', icon: 'https://graft3d.com/wp-content/uploads/2021/12/Group-19.png' },
    { text: 'Enhanced 3D visualization and complete freedom of model control in VR.', icon: 'https://graft3d.com/wp-content/uploads/2021/12/Group-20.png' },
    { text: 'Seamlessly connects to advanced 3D visualization technologies.', icon: 'https://graft3d.com/wp-content/uploads/2021/12/Group-21.png' },
    { text: 'Results are overlaid on patient scan to ensure precision.', icon: 'https://graft3d.com/wp-content/uploads/2021/12/Group-22.png' },
    { text: 'Intuitive editing tools including auto model coloration.', icon: 'https://graft3d.com/wp-content/uploads/2021/12/Group-23.png' },
    { text: 'Easy control of data management.', icon: 'https://graft3d.com/wp-content/uploads/2021/12/Group-24.png' },
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
                                unoptimized
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
