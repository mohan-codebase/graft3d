import Image from 'next/image';

const Hero = () => {
    return (
        <section className="relative w-full h-[340px] md:h-[420px] overflow-hidden">
            {/* Background banner image */}
            <Image
                src="/images/regraft-digilumin/banner.png"
                alt="Regraft Digilumin Surgical Guide Implant"
                fill
                className="object-cover object-left"
                priority
            />

            {/* Text content on the right */}
            <div className="absolute inset-0 flex items-center justify-end">
                <div className="pr-12 md:pr-24 lg:pr-32 text-right">
                    <h1 className="text-[40px] md:text-[54px] font-extrabold text-[#041b4d] leading-tight italic">
                        Surgical Guide
                        <br />
                        Implant
                    </h1>
                    <div className="mt-6">
                        <a
                            href="/contact-us"
                            className="inline-block bg-[#041b4d] text-white font-bold text-[15px] px-8 py-3 rounded-sm hover:bg-[#0a2d6e] transition-colors duration-200 shadow-md"
                        >
                            Enquire Now
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
