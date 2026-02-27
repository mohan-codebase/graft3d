import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const BaSection = () => {
    return (
        <section className="w-full py-16 bg-white">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

                    {/* Left Image */}
                    <div className="relative flex justify-center lg:justify-start">
                        <div className="relative aspect-video w-full max-w-[550px] rounded-2xl overflow-hidden shadow-lg bg-[#f8fbff] border border-gray-100 p-6">
                            <div className="relative w-full h-full">
                                <Image
                                    src="/images/regraft-artibone/arti-6.png"
                                    alt="Regraft BA - Facial Bone Augmentation"
                                    fill
                                    className="object-contain drop-shadow-md"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="flex flex-col space-y-6">
                        <h2 className="text-3xl font-bold text-[#005696] md:text-4xl leading-tight">
                            Regraft BA - Facial Bone Augmentation
                        </h2>

                        <p className="text-lg leading-relaxed text-gray-700">
                            With digital design and biocompatible materials such as PEEK and porous titanium, surgeons can achieve precise augmentation, natural facial contours, and long-term stability customized for each patient’s anatomy.
                        </p>

                        <div className="pt-4">
                            <Link
                                href="/facial-bone-augmentation-using-3d-printing"
                                className="group inline-flex items-center gap-2 text-lg font-semibold text-[#005696] transition-colors hover:text-[#004274]"
                            >
                                Know more
                                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BaSection;
