import React from 'react';
import Image from 'next/image';
import { ArrowRightCircle } from 'lucide-react';

const cases = [
    {
        title: 'Virtual Surgical Planning Assists With Full Face Transplant',
        image: 'https://graft3d.com/wp-content/uploads/2021/12/CaseStudy1.jpg'
    },
    {
        title: 'Geomagic Freeform Puts a Face To Missing Children',
        image: 'https://graft3d.com/wp-content/uploads/2021/12/CaseStudy2.jpg'
    },
    {
        title: 'Geomagic Phantom Haptic Devices Allow Surgeons To Practice',
        image: 'https://graft3d.com/wp-content/uploads/2021/12/casestudy3.jpg'
    },
];

const CaseStudies = () => {
    return (
        <div className="py-16 border-b border-gray-100">
            <h2 className="text-3xl font-extrabold text-[#1171bd] mb-10 uppercase tracking-tight">
                Case Study
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {cases.map((item, index) => (
                    <div key={index} className="flex flex-col group">
                        <div className="relative aspect-[16/9] w-full mb-6 overflow-hidden rounded-sm shadow-sm group-hover:shadow-md transition-shadow">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </div>
                        <h3 className="text-[17px] text-[#777777] italic font-medium leading-relaxed mb-6 min-h-[3rem]">
                            {item.title}
                        </h3>
                        <button className="flex items-center gap-2 w-fit bg-transparent border-2 border-[#1e73be] text-[#1e73be] px-5 py-2.5 rounded-full font-bold text-[15px] hover:bg-[#1e73be] hover:text-white transition-all group-hover:scale-105 transform">
                            Read More <ArrowRightCircle size={18} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CaseStudies;
