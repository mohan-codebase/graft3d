import React from 'react';
import Image from 'next/image';

const apps = [
    { title: 'Tumor Segmentation', image: 'https://graft3d.com/wp-content/uploads/2021/12/Group-2.png' },
    { title: 'Orthopedic', image: 'https://graft3d.com/wp-content/uploads/2021/12/Group-3.png' },
    { title: 'Post Surgical Planning', image: 'https://graft3d.com/wp-content/uploads/2021/12/Group-4.png' },
    { title: 'Vessel Segmentation', image: 'https://graft3d.com/wp-content/uploads/2021/12/Group-5.png' },
    { title: 'Mandible Reconstruction', image: 'https://graft3d.com/wp-content/uploads/2021/12/Group-6.png' },
    { title: 'Basilar aneurysm', image: 'https://graft3d.com/wp-content/uploads/2021/12/Group-7.png' },
    { title: 'Oral And Maxillo Facial', image: 'https://graft3d.com/wp-content/uploads/2021/12/Group-8.png' },
    { title: 'Virtual Reality', image: 'https://graft3d.com/wp-content/uploads/2021/12/Group-9.png' },
    { title: 'Virtual Surgical Planning', image: 'https://graft3d.com/wp-content/uploads/2021/12/Group-10.png' },
];

const Applications = () => {
    return (
        <div className="py-16 border-b border-gray-100">
            <h2 className="text-3xl font-extrabold text-[#1171bd] mb-10 uppercase tracking-tight">
                Applications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {apps.map((app, index) => (
                    <div key={index} className="flex flex-col bg-white rounded-md overflow-hidden shadow-[0_4px_15px_-3px_rgba(0,0,0,0.1)] border border-gray-100/50 hover:shadow-lg transition-all duration-300">
                        <div className="relative aspect-[4/3] w-full overflow-hidden">
                            <Image
                                src={app.image}
                                alt={app.title}
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </div>
                        <div className="p-5 bg-white flex items-center justify-center text-center">
                            <h3 className="text-[17px] font-bold text-gray-800 leading-tight">
                                {app.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Applications;
