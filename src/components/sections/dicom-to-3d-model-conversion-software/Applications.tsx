import React from 'react';
import Image from 'next/image';

const apps = [
    { title: 'Tumor Segmentation', image: '/images/asthi-bone-like-3d-printed-training-models/Rectangle-25-q5h1xhcq50ulk4iwmc895ibfxpsfbqfyys4kx7f45g.png' },
    { title: 'Orthopedic', image: '/images/asthi-bone-like-3d-printed-training-models/Rectangle-11-q5h1x7yc8ohqc0wk585zgkotzv2r6renlhlq4ft1vo.png' },
    { title: 'Post Surgical Planning', image: '/images/asthi-bone-like-3d-printed-training-models/img.png' },
    { title: 'Vessel Segmentation', image: '/images/asthi-bone-like-3d-printed-training-models/image-22.png' },
    { title: 'Mandible Reconstruction', image: '/images/asthi-bone-like-3d-printed-training-models/Rectangle-12-q5h1x8w6fij0nmv6zqkm12gal8y4egidxm97lprnpg.png' },
    { title: 'Basilar aneurysm', image: '/images/asthi-bone-like-3d-printed-training-models/Rectangle-13-q5h1xarut6llausgordv61z7s0outupulvk6k9ovd0.png' },
    { title: 'Oral And Maxillo Facial', image: '/images/asthi-bone-like-3d-printed-training-models/Rectangle-15-q5h1xcnj6uo5y2pqds74b1i4ysfl98xba4v5itm30k.png' },
    { title: 'Virtual Reality', image: '/images/asthi-bone-like-3d-printed-training-models/Rectangle-18-q5h1xfh1rcs0wwlmxbf00isiqy1owc8iaitlynhwhw.png' },
    { title: 'Virtual Surgical Planning', image: '/images/asthi-bone-like-3d-printed-training-models/case-study.png' },
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
