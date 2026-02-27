import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const FdSection = () => {
    return (
        <section className="w-full py-16 bg-[#f8fbff]">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

                    {/* Left Content */}
                    <div className="flex flex-col space-y-6 lg:order-1 order-2">
                        <h2 className="text-3xl font-bold text-[#005696] md:text-4xl leading-tight">
                            Regraft FD - Facial Deformities
                        </h2>

                        <p className="text-lg leading-relaxed text-gray-700">
                            By combining VSP with 3D printing, Regraft enables accurate evaluation, simulation, and correction of complex craniofacial deformities, supporting predictable surgical outcomes and improved facial harmony.
                        </p>

                        <div className="pt-4">
                            <Link
                                href="/asthi-bone-like-3d-printed-training-models"
                                className="group inline-flex items-center gap-2 text-lg font-semibold text-[#005696] transition-colors hover:text-[#004274]"
                            >
                                Know more
                                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative flex justify-center lg:justify-end lg:order-2 order-1">
                        <div className="relative aspect-video w-full max-w-[550px] rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-100 p-6">
                            <div className="relative w-full h-full">
                                <Image
                                    src="/images/regraft-artibone/arti-7.png"
                                    alt="Regraft FD - Facial Deformities"
                                    fill
                                    className="object-contain drop-shadow-md"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FdSection;
