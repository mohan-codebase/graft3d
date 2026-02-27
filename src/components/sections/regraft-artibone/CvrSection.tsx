import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CvrSection = () => {
    return (
        <section className="w-full py-16 bg-white">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

                    {/* Left Image */}
                    <div className="relative flex justify-center lg:justify-start">
                        <div className="relative aspect-[4/3] w-full max-w-[550px] rounded-2xl overflow-hidden shadow-lg bg-[#f8fbff] border border-gray-100">
                            <Image
                                src="/images/regraft-artibone/arti-4.png"
                                alt="Regraft CVR - Cranial Vault"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="flex flex-col space-y-6">
                        <h2 className="text-3xl font-bold text-[#005696] md:text-4xl leading-tight">
                            Regraft CVR - Cranial Vault Reconstruction
                        </h2>

                        <p className="text-lg leading-relaxed text-gray-700">
                            Our patient-specific cranial implants offer high-precision reconstruction for defects caused by trauma, tumor resection, congenital deformities, or infection. Designed for optimal fit and stability, cranial implants restore protection, contour, and aesthetics.
                        </p>

                        <div className="pt-4">
                            <Link
                                href="/cranial-vault-reconstruction"
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

export default CvrSection;
