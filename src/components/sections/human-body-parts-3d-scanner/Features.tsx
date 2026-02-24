import React from 'react';
import Image from 'next/image';

const features = [
    {
        title: 'Quick Scan',
        description: 'Scan the entire human body in just 10 minutes with high efficiency.',
        icon: 'https://graft3d.com/wp-content/uploads/2021/12/Group-12.png'
    },
    {
        title: 'Portability',
        description: 'Lightweight and portable design allows you to scan at the patient’s place.',
        icon: 'https://graft3d.com/wp-content/uploads/2021/12/Group-13.png'
    },
    {
        title: 'Texture Scanning',
        description: 'Capture the exact color and texture of the human skin for realistic models.',
        icon: 'https://graft3d.com/wp-content/uploads/2021/12/Group-14.png'
    },
    {
        title: 'In-Built Software',
        description: 'Advanced algorithms to patch up mesh files and create water-tight 3D models.',
        icon: 'https://graft3d.com/wp-content/uploads/2021/12/Group-15.png'
    },
    {
        title: 'Export to Printable Files',
        description: 'Seamlessly export models for 3D printing and bio-CAD applications.',
        icon: 'https://graft3d.com/wp-content/uploads/2021/12/Group-16.png'
    },
    {
        title: 'Scanner Accuracy',
        description: 'Highly accurate data capture with precision up to 50 microns.',
        icon: 'https://graft3d.com/wp-content/uploads/2021/12/Group-17.png'
    }
];

const Features = () => {
    return (
        <div className="py-16 border-b border-gray-100">
            <h2 className="text-3xl font-extrabold text-[#1171bd] mb-10 uppercase tracking-tight">
                Features & Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="flex flex-col p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                        <div className="mb-6 w-16 h-16 relative">
                            <Image
                                src={feature.icon}
                                alt={feature.title}
                                fill
                                className="object-contain group-hover:scale-110 transition-transform"
                                unoptimized
                            />
                        </div>
                        <h3 className="text-xl font-bold text-[#1a365d] mb-3">{feature.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;
