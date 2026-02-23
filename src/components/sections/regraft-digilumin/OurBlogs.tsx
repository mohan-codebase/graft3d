import Image from 'next/image';

const blogs = [
    {
        title: 'Virtual Surgical Planning Assists With Full Face Transplant',
        image: '/images/regraft-digilumin/blog-1.png',
        author: 'Admin',
        date: 'June 28 2021',
        href: '/virtual-surgical-planning-mandibular-reconstruction',
    },
    {
        title: 'Geomagic Freeform Puts a Face To Missing Children',
        image: '/images/regraft-digilumin/blog-2.png',
        author: 'Admin',
        date: 'June 28 2021',
        href: '#',
    },
    {
        title: 'Geomagic Phantom Haptic Devices Allow Surgeons to Practice Procedures Using Virtual Touch',
        image: '/images/regraft-digilumin/blog-3.png',
        author: 'Admin',
        date: 'June 28 2021',
        href: '#',
    },
];

const OurBlogs = () => {
    return (
        <section className="py-16 bg-[#e8f0fa]">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-10">
                    <h2 className="text-[36px] font-bold text-[#166aaf]">Our Blogs</h2>
                </div>

                {/* Mosaic grid matching screenshot layout */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                    {/* Row 1 */}
                    <div className="grid grid-cols-3 border-b border-gray-100">
                        {/* Large image left */}
                        <div className="relative h-[240px] col-span-1">
                            <Image
                                src={blogs[0].image}
                                alt={blogs[0].title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Text middle */}
                        <div className="col-span-1 p-6 flex flex-col justify-center border-x border-gray-100">
                            <a href={blogs[0].href} className="text-[15px] font-bold text-[#166aaf] hover:underline leading-snug mb-4">
                                {blogs[0].title}
                            </a>
                            <div className="flex items-center gap-2 text-gray-400 text-[13px] mb-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                {blogs[0].author}
                            </div>
                            <div className="flex items-center gap-2 text-gray-400 text-[13px]">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {blogs[0].date}
                            </div>
                        </div>
                        {/* Image right */}
                        <div className="relative h-[240px] col-span-1">
                            <Image
                                src={blogs[1].image}
                                alt={blogs[1].title}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-3">
                        {/* Text left */}
                        <div className="col-span-1 p-6 flex flex-col justify-center border-r border-gray-100">
                            <a href={blogs[1].href} className="text-[15px] font-bold text-[#166aaf] hover:underline leading-snug mb-4">
                                {blogs[1].title}
                            </a>
                            <div className="flex items-center gap-2 text-gray-400 text-[13px] mb-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                {blogs[1].author}
                            </div>
                            <div className="flex items-center gap-2 text-gray-400 text-[13px]">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {blogs[1].date}
                            </div>
                        </div>
                        {/* Center image */}
                        <div className="relative h-[240px] col-span-1 border-r border-gray-100">
                            <Image
                                src={blogs[2].image}
                                alt={blogs[2].title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Text right */}
                        <div className="col-span-1 p-6 flex flex-col justify-center">
                            <a href={blogs[2].href} className="text-[15px] font-bold text-[#166aaf] hover:underline leading-snug mb-4">
                                {blogs[2].title}
                            </a>
                            <div className="flex items-center gap-2 text-gray-400 text-[13px] mb-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                {blogs[2].author}
                            </div>
                            <div className="flex items-center gap-2 text-gray-400 text-[13px]">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {blogs[2].date}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default OurBlogs;
