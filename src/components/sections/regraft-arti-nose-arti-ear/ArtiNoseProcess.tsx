import React from 'react';
import Image from 'next/image';

const ArtiNoseProcess = () => {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="container mx-auto px-4 max-w-[1400px]">

                <h2 className="text-2xl font-bold text-[#5bc0de] mb-12 text-left">
                    The Process
                </h2>

                <div className="w-full max-w-5xl mx-auto flex justify-center mt-12 mb-8">
                    <div className="relative w-full h-[300px] md:h-[500px] lg:h-[700px]">
                        <Image
                            src="/images/regraft-arti-nose-arti-ear/Group-61-1.png"
                            alt="The Process Flow"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ArtiNoseProcess;
