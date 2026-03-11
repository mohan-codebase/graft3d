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
  {
    id: 3,
    title:
      'Geomagic Phantom Haptic Devices Allow Surgeons to Practice Procedures Using Virtual Touch',
    date: 'June 28, 2021',
    image:
      '/images/3d-printing-package-for-facial-prosthesis/WhatsApp-Image-2023-07-25-at-15.13-3.png',
    link: '#',
  },
];

const BlogsSection = () => {
    return (
        <section className="py-16 bg-[#e6f3ff]">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#222223] mb-8">
          Our Blogs
        </h2>

        <div className="bg-white shadow-md rounded-lg px-4 sm:px-6 md:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {blogs.map((blog) => (
              <div key={blog.id} className="flex flex-col h-full">
                {/* Image */}
                <div className="relative w-full aspect-[4/3] rounded-t-lg overflow-hidden bg-gray-100">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col gap-2 pt-4">
                  <h3 className="text-sm md:text-base font-semibold text-[#166AAF] leading-snug">
                    {blog.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span>Admin</span>
                    <span>June 28 2021</span>
                  </div>
                  <div className="mt-4">
                    <Link
                      href={blog.link}
                      className="inline-block bg-[#166AAF] text-white text-xs md:text-sm font-semibold px-5 py-2 rounded hover:bg-[#0f4e7d] transition-colors"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    );
};

export default BlogsSection;
