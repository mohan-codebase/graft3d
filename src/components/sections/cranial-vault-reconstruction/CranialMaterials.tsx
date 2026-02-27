"use client";

import React from 'react';
import Image from 'next/image';

const CranialMaterials = () => {
    return (
        <section className="w-full py-16 bg-white">
            <div className="container mx-auto px-4 max-w-[1200px]">

                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-[40px] font-bold text-[#1a5b9e] mb-4">
                        Materials in 3D Printing<br />Orbital Implants
                    </h2>
                </div>

                <div className="flex flex-col gap-12 lg:gap-16 items-center">

                    {/* Titanium Implants List Row */}
                    <div className="w-full flex flex-col-reverse lg:flex-row items-center gap-12 max-w-[1000px]">
                        <div className="w-full lg:w-1/2 flex flex-col">
                            <h3 className="text-2xl font-bold text-[#1a5b9e] mb-6">
                                Titanium Implants
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "Titanium has high mechanical strength and biocompatibility.",
                                    "Fabrication of porous designs, which encourage osseointegration, can be produced by additive manufacturing (e.g. selective laser melting).",
                                    "It is well fitted for large, load bearing cranial vault defects.",
                                    "Minimal artifact shadows in the CT/MRI scans.",
                                    "Limitations: Possible cosmetic issues related to implant palpability and modified thermal conductivity."
                                ].map((item, i) => (
                                    <li key={i} className="flex text-gray-800 text-[15px] font-semibold leading-relaxed">
                                        <span className="text-[#3b82f6] mr-3 font-black text-lg">•</span>
                                        <span dangerouslySetInnerHTML={{ __html: item.replace(/([^:]+):/, '<strong>$1:</strong>') }} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full lg:w-1/2 flex justify-center">
                            <div className="relative w-full max-w-[300px] aspect-square">
                                <Image
                                    src="/images/cranial-vault-reconstruction/sds.png"
                                    alt="Titanium Implants"
                                    fill
                                    className="object-contain mix-blend-multiply"
                                />
                            </div>
                        </div>
                    </div>

                    {/* PEEK Implants Card Row */}
                    <div className="w-full flex flex-col lg:flex-row items-center gap-12 max-w-[1000px]">
                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                            <div className="relative w-full max-w-[300px] aspect-square">
                                <Image
                                    src="/images/cranial-vault-reconstruction/asd1.png"
                                    alt="Polyetheretherketone (PEEK) Implants"
                                    fill
                                    className="object-contain mix-blend-multiply"
                                />
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="bg-[#f0f7fb] rounded-2xl p-8 lg:p-10 shadow-sm border border-[#e0f0fa]">
                                <h3 className="text-2xl font-bold text-[#1a5b9e] mb-6">
                                    Polyetheretherketone (PEEK)<br />Implants
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        "PEEK exhibits high performance thermoplasticity with bone-like elasticity.",
                                        "Lightweight and provides excellent cosmetic enhancement of the cranial vault.",
                                        "Metal artifacts are not seen in CT/MRI.",
                                        "Used for cosmetic replacement in non-load bearing cranial defects.",
                                        "Limitations: Higher cost and slightly inferior osseointegration over porous titanium."
                                    ].map((item, i) => (
                                        <li key={i} className="flex text-gray-800 text-[15px] font-semibold leading-relaxed">
                                            <span className="text-[#3b82f6] mr-3 font-black text-lg">•</span>
                                            <span dangerouslySetInnerHTML={{ __html: item.replace(/([^:]+):/, '<strong>$1:</strong>') }} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Future Perspectives Card Row */}
                    <div className="w-full flex flex-col-reverse lg:flex-row items-center gap-12 max-w-[1000px]">
                        <div className="w-full lg:w-1/2">
                            <div className="bg-[#f0f7fb] rounded-2xl p-8 lg:p-10 shadow-sm border border-[#e0f0fa]">
                                <h3 className="text-2xl font-bold text-[#1a5b9e] mb-6">
                                    Future Perspectives in 3D-Printed<br />Cranial Reconstruction
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        "Development of bioresorbable implants for pediatric patients to accommodate cranial growth.",
                                        "Hybrid implant designs integrating titanium for structural strength and PEEK for aesthetic optimization.",
                                        "Application of AI assisted design algorithms to improve precision and predictability.",
                                        "Progress in bioprinting of bone scaffolds with stem cells, enabling regenerative approaches to cranial vault reconstruction."
                                    ].map((item, i) => (
                                        <li key={i} className="flex text-gray-800 text-[15px] font-semibold leading-relaxed">
                                            <span className="text-[#3b82f6] mr-3 font-black text-lg">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                            <div className="relative w-full max-w-[300px] aspect-square">
                                <Image
                                    src="/images/cranial-vault-reconstruction/5-1-1-e1762921248523.png"
                                    alt="Future Perspectives in 3D-Printed Cranial Reconstruction"
                                    fill
                                    className="object-contain mix-blend-multiply"
                                />
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Summary Text */}
                <div className="text-center max-w-[1000px] mx-auto mt-20">
                    <p className="text-gray-800 leading-relaxed text-[15px] font-semibold">
                        The integration of 3D printing in the cranial vault reconstruction has revolutionized the treatment of challenging cranioplasty cases. 3D-printed cranial implants enable decreased operative time and better cosmetic and functional results, when compared to conventional reconstruction techniques. Materials such as titanium and PEEK are versatile, strong and biocompatible and used in different clinical indications. With progress in AI design, hybrid implants and bioprinting technologies the future of personalized cranial reconstruction is on the verge of transitioning from structural restoration to actual regenerative solutions.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default CranialMaterials;
