import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const ArtiNoseCaseStudy = () => {
    return (
        <section className="bg-[#f0f7ff] py-16 lg:py-20">
            <div className="container mx-auto px-4 max-w-[1400px]">
                <div className="max-w-5xl mx-auto">

                    <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-md border border-blue-50 flex flex-col md:flex-row items-center gap-8 md:gap-12">

                        {/* Image Side */}
                        <div className="w-full md:w-1/2 relative h-[250px] lg:h-[350px] rounded-xl overflow-hidden shadow-sm">
                            <Image
                                src="/images/regraft-arti-nose-arti-ear/case-study.png"
                                alt="Case Study on replacing Cancer infected Nose"
                                fill
                                className="object-cover object-center"
                            />
                        </div>

                        {/* Content Side */}
                        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 leading-relaxed">
                                Case Study on replacing Cancer infected Nose with Artificial Nose Prosthesis
                            </h2>

                            <Link
                                href="/artificial-nasal-prosthesis-case-study"
                                className="inline-flex items-center gap-2 bg-[#0066b2] hover:bg-[#005596] text-white font-semibold py-4 px-8 rounded-full transition-colors text-lg shadow-sm"
                            >
                                Read Full Case Study
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default ArtiNoseCaseStudy;
