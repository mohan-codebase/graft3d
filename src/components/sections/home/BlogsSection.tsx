"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

const blogs = [
    {
        id: 1,
        title: "OralCase Study on replacing Cancer infected Nose with Artificial Nose Prosthesis",
        date: "June 21, 2021",
        image: "/images/home/blogs/blog-1.png",
        link: "/blogs/case-study-nose-prosthesis"
    },
    {
        id: 2,
        title: "OralCase Study on replacing Cancer infected Nose with Artificial Nose Prosthesis",
        date: "June 21, 2021",
        image: "/images/home/blogs/blog-2.png",
        link: "/blogs/case-study-nose-prosthesis"
    },
    {
        id: 3,
        title: "OralCase Study on replacing Cancer infected Nose with Artificial Nose Prosthesis",
        date: "June 21, 2021",
        image: "/images/home/blogs/blog-3.png",
        link: "/blogs/case-study-nose-prosthesis"
    },
];

const BlogsSection = () => {
    return (
        <section className="w-full py-16 bg-white">
            <div className="container mx-auto px-4">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="flex flex-col gap-4 group">
                            {/* Image Container */}
                            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col gap-2">
                                <h3 className="text-black font-bold text-lg leading-tight group-hover:text-primary transition-colors">
                                    {blog.title}
                                </h3>
                                <p className="text-gray-500 text-sm">
                                    {blog.date}
                                </p>
                                <Button
                                    asChild
                                    className="w-fit mt-2"
                                >
                                    <Link href={blog.link} className="flex items-center gap-1">
                                        Read More
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default BlogsSection;
