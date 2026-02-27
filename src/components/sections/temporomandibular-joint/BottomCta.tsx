import React from "react";
import Image from "next/image";
import Link from "next/link";

const BottomCta = () => {
    return (
        <section className="w-full py-16 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Left Image */}
                    <div className="relative flex justify-center w-full">
                        <div className="relative aspect-square w-full max-w-[450px] rounded-3xl bg-[#005696] overflow-hidden -ml-4 md:ml-0 shadow-lg">
                            <Image
                                src="/images/temporomandibular-joint-imgs/get-quote.png"
                                alt="3D Skull Model"
                                fill
                                className="object-cover translate-y-4 translate-x-4 scale-110"
                            />
                        </div>
                    </div>

                    {/* Right Action Box */}
                    <div className="flex flex-col justify-center">
                        <div className="rounded-[40px] border border-[#e6f3ff] bg-[#f4fbff] p-10 md:p-12 shadow-sm relative">
                            <p className="text-gray-600 text-sm font-semibold tracking-wider uppercase mb-2">Contact Us & Get details for</p>

                            <h2 className="text-3xl font-bold text-[#005696] mb-4 leading-tight">
                               Temporomandibular Joint (TMJ)<br/> Replacement with 3D-Printed Titanium Implants
                            </h2>

                            <Link
                                href="/contact-us"
                                className="inline-block rounded-full bg-[#005696] px-8 py-3 text-lg font-semibold text-white transition-all hover:bg-[#004274] hover:shadow-lg"
                            >
                                Get a Quote Now
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BottomCta;
