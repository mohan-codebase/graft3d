import React from 'react';
import Image from 'next/image';
import { User, Calendar } from 'lucide-react';

const blogPosts = [
    {
        id: 1,
        title: 'Virtual Surgical Planning Assists With Full Face Transplant',
        author: 'Admin',
        date: 'June 28 2021',
        image: '/images/regraft-arti-nose-arti-ear/blogs/caseStudy2.png',
        order: 'image-first'
    },
    {
        id: 2,
        title: 'Case Study on replacing Cancer infected Nose with Artificial Nose Prosthesis',
        author: 'Admin',
        date: 'June 28 2021',
        image: '/images/regraft-arti-nose-arti-ear/blogs/case-study.png',
        order: 'text-first'
    },
    {
        id: 3,
        title: 'Geomagic Phantom Haptic Devices Allow Surgeons to Practice Procedures Using Virtual Touch',
        author: 'Admin',
        date: 'June 28 2021',
        image: '/images/regraft-arti-nose-arti-ear/blogs/Group-10.png',
        order: 'image-first'
    }
];

const BlogMeta = ({ author, date }: { author: string, date: string }) => (
    <div className="flex flex-col gap-4 mt-4">
        <div className="flex items-center gap-3 text-[#5bc0de]">
            <User size={36} fill="currentColor" strokeWidth={1} />
            <span className="font-bold text-[17px]">{author}</span>
        </div>
        <div className="flex items-center gap-3 text-[#5bc0de]">
            <Calendar size={36} strokeWidth={2} />
            <span className="font-bold text-[17px]">{date}</span>
        </div>
    </div>
);

const ArtiNoseBlogs = () => {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="container mx-auto px-4 max-w-[1400px]">

                <h2 className="text-[20px] font-bold text-[#5bc0de] mb-12">
                    Our Blogs
                </h2>

                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
                        {blogPosts.map((post) => (
                            <div key={post.id} className="flex flex-col gap-4">

                                {post.order === 'image-first' ? (
                                    <>
                                        <div className="relative w-full aspect-[4/3]">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className="object-contain object-top"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-[#5bc0de] font-bold text-[17px] leading-snug">
                                                {post.title}
                                            </h3>
                                            <BlogMeta author={post.author} date={post.date} />
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div>
                                            <h3 className="text-[#5bc0de] font-bold text-[17px] leading-snug">
                                                {post.title}
                                            </h3>
                                            <BlogMeta author={post.author} date={post.date} />
                                        </div>
                                        <div className="relative w-full aspect-[4/3] mt-2">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className="object-contain object-bottom"
                                            />
                                        </div>
                                    </>
                                )}

                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ArtiNoseBlogs;
