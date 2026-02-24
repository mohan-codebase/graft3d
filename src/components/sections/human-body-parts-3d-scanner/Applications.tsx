import React from 'react';
import Image from 'next/image';

const items = [
    { title: 'Full Body Color 3D Scanning', image: 'https://graft3d.com/wp-content/uploads/2021/12/Group-24-2.png' },
    { title: '3D Scanning of Facial Prosthesis', image: 'https://graft3d.com/wp-content/uploads/2021/12/Group-25-2.png' },
    { title: 'Facial Prosthesis Fitting', image: 'https://graft3d.com/wp-content/uploads/2021/12/Group-26-1.png' },
    { title: '3D Scanning for Prosthetics', image: 'https://graft3d.com/wp-content/uploads/2021/12/Group-27-1.png' },
    { title: '3D Scanning of Body Parts', image: 'https://graft3d.com/wp-content/uploads/2021/12/Group-28-1.png' },
    { title: '3D Scanning of Human Face', image: 'https://graft3d.com/wp-content/uploads/2021/12/Group-30-2.png' },
];

const Applications = () => {
    return (
        <div className="py-16 border-b border-gray-100">
            <h2 className="text-3xl font-extrabold text-[#1171bd] mb-10 uppercase tracking-tight">
                Applications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((item, index) => (
                    <div key={index} className="flex flex-col bg-white rounded-md overflow-hidden shadow-[0_4px_15px_-3px_rgba(0,0,0,0.1)] border border-gray-100/50 hover:shadow-lg transition-all duration-300">
                        <div className="relative aspect-[4/3] w-full overflow-hidden">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </div>
                        <div className="p-5 bg-white flex items-center justify-center text-center">
                            <h3 className="text-[17px] font-bold text-gray-800 leading-tight">
                                {item.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Applications;
