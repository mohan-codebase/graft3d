import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const blogs = [
    {
        id: 1,
        title: 'Case Study on Artificial Nasal Prosthesis for Cancer Patients',
        date: 'June 21, 2021',
        image: '/images/3d-printing-packagefor-po-devices/case-study.png',
        link: '/artificial-nasal-prosthesis-case-study',
    },
    {
        id: 2,
        title: 'Full Face Transplant – 3D Printed Prosthetics Case Study',
        date: 'August 12, 2021',
        image: '/images/3d-printing-packagefor-po-devices/caseStudy2.png',
        link: '#',
    },
];

const BlogsSection = () => {
    return (
        <section className="py-14 bg-white">
            <div className="max-w-[1100px] mx-auto px-4">
                <h2 className="text-[#4AC46E] font-bold text-lg uppercase mb-8 tracking-widest">
                    Our Blogs
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="flex flex-col gap-4 group">
                            {/* Image */}
                            <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden bg-gray-100">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col gap-2">
                                <h3 className="text-gray-800 font-bold text-base leading-snug group-hover:text-[#4AC46E] transition-colors">
                                    {blog.title}
                                </h3>
                                <p className="text-gray-500 text-sm">{blog.date}</p>
                                <Link
                                    href={blog.link}
                                    className="inline-flex items-center gap-1 bg-[#4AC46E] text-white text-xs font-semibold px-4 py-2 rounded hover:bg-[#3aaa5e] transition-colors w-fit mt-1"
                                >
                                    Read More →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogsSection;
