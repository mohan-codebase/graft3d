"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { User, Calendar } from 'lucide-react';

const blogs = [
    {
        id: 1,
        title: "Virtual Surgical Planning Assists With Full Face Transplant",
        author: "Admin",
        date: "June 28 2021",
        image: "/images/regraft-bonerip/bone-blog1.png", // Using existing blog images for now
        link: "/blogs/virtual-surgical-planning-face-transplant"
    },
    {
        id: 2,
        title: "Case Study on replacing Cancer infected Nose with Artificial Nose Prosthesis",
        author: "Admin",
        date: "June 28 2021",
        image: "/images/regraft-bonerip/bone-blog2.png",
        link: "/blogs/case-study-nose-prosthesis"
    },
    {
        id: 3,
        title: "Geomagic Phantom Haptic Devices Allow Surgeons to Practice Procedures Using Virtual Touch",
        author: "Admin",
        date: "June 28 2021",
        image: "/images/regraft-bonerip/bone-blog3.png",
        link: "/blogs/geomagic-phantom-haptic-devices"
    }
];

const BoneripBlogs = () => {
    return (
        <section className="py-20 bg-[#e3f2fd]">
            <div className="container max-w-[1200px] mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1e73be] mb-12">
                    Our Blogs
                </h2>

                <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100 p-4">
                    <div className="grid grid-cols-1 md:grid-cols-3">

                        {/* Blog 1 Row 1 Col 1-2 */}
                        <div className="relative aspect-[4/3] md:aspect-auto">
                            <Image
                                src={blogs[0].image}
                                alt={blogs[0].title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-8 flex flex-col justify-center gap-4">
                            <Link href={blogs[0].link} className="hover:text-[#1e73be] transition-colors">
                                <h3 className="text-xl font-bold text-[#1e73be] leading-tight">
                                    {blogs[0].title}
                                </h3>
                            </Link>
                            <div className="flex flex-col gap-2 text-gray-400 text-sm">
                                <div className="flex items-center gap-2">
                                    <User size={16} />
                                    <span>{blogs[0].author}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} />
                                    <span>{blogs[0].date}</span>
                                </div>
                            </div>
                        </div>

                        {/* Blog 3 Row 1 Col 3 & Row 2 Col 2? No, let's follow the staggered grid from screenshot */}
                        {/* The screenshot shows Post 3 Image spanning across or in a specific spot */}
                        {/* Post 3 Image is in Col 3 Row 1 */}
                        <div className="relative aspect-[4/3] md:aspect-auto">
                            <Image
                                src={blogs[2].image}
                                alt={blogs[2].title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Row 2 */}
                        {/* Blog 2 Text Col 1 */}
                        <div className="p-8 flex flex-col justify-center gap-4 bg-white">
                            <Link href={blogs[1].link} className="hover:text-[#1e73be] transition-colors">
                                <h3 className="text-xl font-bold text-[#1e73be] leading-tight">
                                    {blogs[1].title}
                                </h3>
                            </Link>
                            <div className="flex flex-col gap-2 text-gray-400 text-sm">
                                <div className="flex items-center gap-2">
                                    <User size={16} />
                                    <span>{blogs[1].author}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} />
                                    <span>{blogs[1].date}</span>
                                </div>
                            </div>
                        </div>

                        {/* Blog 2 Image Col 2 */}
                        <div className="relative aspect-[4/3] md:aspect-auto">
                            <Image
                                src={blogs[1].image}
                                alt={blogs[1].title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Blog 3 Text Col 3 */}
                        <div className="p-8 flex flex-col justify-center gap-4 bg-white">
                            <Link href={blogs[2].link} className="hover:text-[#1e73be] transition-colors">
                                <h3 className="text-xl font-bold text-[#1e73be] leading-tight">
                                    {blogs[2].title}
                                </h3>
                            </Link>
                            <div className="flex flex-col gap-2 text-gray-400 text-sm">
                                <div className="flex items-center gap-2">
                                    <User size={16} />
                                    <span>{blogs[2].author}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} />
                                    <span>{blogs[2].date}</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default BoneripBlogs;
