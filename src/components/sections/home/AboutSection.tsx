import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

const AboutSection = () => {
    return (
        <section className="relative w-full py-16 lg:py-24 bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-4 items-center">

                    {/* Column 1: Content */}
                    <div className="bg-secondary/20 rounded-[40px] p-8 lg:p-16 flex flex-col justify-center">
                        <div className="inline-block bg-secondary text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 w-fit">
                            About Us
                        </div>

                        <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6 leading-tight">
                            Graft 3D is a healthcare solutions provider that partners with global technology firms.
                        </h2>

                        <p className="text-gray-600 text-sm lg:text-[15px] leading-relaxed mb-6">
                            To deliver Medical 3D printing-based products tailored for hospitals, surgeons, and patients. Leveraging the expertise of our in-house doctors and engineers, we also design, develop, and promote futuristic Medical 3D printing and scanning-based products. We are committed to advancing medical 3D Printing technology, improving patient outcomes, and driving the future of healthcare through cutting-edge 3D printing technologies. Discover how we're shaping the future of healthcare at Graft3D Healthcare.
                        </p>

                        <Link href="/about-us" className="mt-auto">
                            <Button variant="ghost" className="text-primary font-bold hover:underline p-0 flex items-center gap-1 h-auto">
                                Know More <span className="text-lg">›</span>
                            </Button>
                        </Link>
                    </div>

                    {/* Column 2: Image (Visual) */}
                    <div className="h-[400px] lg:h-full min-h-[400px] rounded-[40px] overflow-hidden relative">
                        <Image
                            src="/images/home/aboutus/about-1.png"
                            alt="Medical 3D Printing technology"
                            fill
                            className="object-cover position-top"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
