import React from 'react';
import Image from 'next/image';

const ProductsHero = () => {
    return (
        <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden bg-white flex items-center pt-20">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/regraft-product/regraft-pro-bg.png"
                    alt="ReGraft Products Background"
                    fill
                    className="object-cover object-center opacity-80"
                    priority
                />
            </div>

            <div className="container max-w-[1400px] mx-auto px-4 relative z-10">
                <div className="flex items-center gap-4">
                    <div className="w-1.5 h-10 md:h-12 bg-black"></div>
                    <h1 className="text-3xl md:text-5xl font-black text-[#1F2937] tracking-wider uppercase">
                        REGRAFT PRODUCTS
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default ProductsHero;
