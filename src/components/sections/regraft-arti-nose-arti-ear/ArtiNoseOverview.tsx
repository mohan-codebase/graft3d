import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ArtiNoseOverview = () => {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="container mx-auto px-4 max-w-[1400px]">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Column: Text Content */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                        <h2 className="text-2xl font-bold text-[#5bc0de] mb-6 uppercase tracking-wider">
                            OVERVIEW
                        </h2>

                        <p className="text-gray-600 text-[15px] leading-relaxed mb-8 text-justify font-bold pb-4">
                            Proface - A patient-specific facial prosthetic, artificial organ for your nose, eyes and ear. If you are someone who lost any of the facial features due to cancer surgery or post-black fungus operation, or any medical condition such as anotia microtia, we have a unique and disruptive face-matching silicon-based facial prosthetic, designed and fabricated using advanced digital technologies. You can book an initial 3D scan here in our page. We will come to your home and perform the 3D scan. After that, you can consult with our doctor online with your face 3D scan to understand what type of prosthetic will be suitable for you
                        </p>

                        <Link
                            href="/get-quote"
                            className="inline-block bg-[#5cb85c] hover:bg-[#4cae4c] text-white font-bold py-3 px-8 rounded shadow-sm transition-colors tracking-wide"
                        >
                            Enquire now
                        </Link>
                    </div>

                    {/* Right Column: Doctor Profile */}
                    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start pt-8 lg:pt-0">
                        <div className="relative w-full max-w-[350px] lg:max-w-[400px] h-[500px] lg:h-[600px] mb-6">
                            <Image
                                src="/images/regraft-arti-nose-arti-ear/IMG_4059-1.png"
                                alt="Dr. Sanketh K Reddy"
                                fill
                                className="object-contain object-bottom"
                                priority
                            />
                        </div>
                        <div className="text-left w-full px-4 lg:px-0 lg:pl-10">
                            <h3 className="text-[#5bc0de] font-bold text-lg lg:text-xl leading-snug mb-4 max-w-md">
                                Designed & Developed by Master Maxillofacial Prosthodontics & Leading Implantologist in the country
                            </h3>
                            <h4 className="text-[#5bc0de] font-bold text-xl lg:text-2xl mb-1">
                                Dr. Sanketh K Reddy
                            </h4>
                            <p className="text-[#5bc0de] text-sm lg:text-base opacity-90">
                                (MDS, DipClSc, MSD, MSc)
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ArtiNoseOverview;
