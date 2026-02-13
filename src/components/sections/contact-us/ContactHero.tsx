import React from 'react';
import Image from 'next/image';

const ContactHero = () => {
    return (
        <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/contact-us/bgbanner.png"
                    alt="Contact Us Background"
                    fill
                    className="object-cover object-center "
                    priority
                />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-white px-4">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl tracking-tight mb-4 drop-shadow-lg">
                        Contact us
                    </h1>
                    <div className="mt-2 w-24 h-1.5 bg-white mx-auto rounded-full shadow-lg"></div>
                </div>
            </div>
        </section>
    );
};

export default ContactHero;
