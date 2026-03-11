import React from "react";

const VirtualSurgicalPlanning = () => {
    return (
        <section className="w-full py-10 bg-[#eff7ff]">
            <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                <div className="flex flex-col items-center text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#005696] mb-6">
                        3D Printing in Virtual Surgical Planning
                    </h2>
                    <div className="max-w-3xl space-y-1">
                        <p className="text-base md:text-lg font-semibold text-gray-700 leading-relaxed">
                            3D Printing and VSP have revolutionized craniofacial reconstruction in a way providing surgeons
                        </p>
                        <p className="text-base md:text-lg font-semibold text-gray-700 leading-relaxed">
                            with a digital-to-clinical workflow that enhances precision and predictability.
                        </p>
                    </div>
                </div>

                <div className="mx-auto max-w-5xl rounded-[50px] md:rounded-[80px] bg-white p-1 shadow-sm border border-white">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] items-stretch overflow-hidden rounded-[48px] md:rounded-[78px]">

                        {/* Left Key Applications Panel */}
                        <div className="flex items-center justify-center bg-[#eff7ff] py-8 px-6">
                            <h3 className="text-[#005696] text-2xl md:text-2xl font-bold leading-tight text-center md:text-left">
                                Key<br />Applications
                            </h3>
                        </div>

                        {/* Right Content Panel */}
                        <div className="flex items-center bg-white py-8 px-6 md:px-12">
                            <ul className="space-y-6">
                                <li className="relative pl-6">
                                    <span className="absolute left-0 top-2 size-2 rounded-full bg-[#005696]"></span>
                                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                        <span className="font-bold text-gray-800">3D-Printed Resection/Cutting Guides:</span> Facilitate precise resection margins and accurate fibular osteotomies, ensuring accurate execution of the surgical plan from the digital plan.
                                    </p>
                                </li>

                                <li className="relative pl-6">
                                    <span className="absolute left-0 top-2 size-2 rounded-full bg-[#005696]"></span>
                                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                        <span className="font-bold text-gray-800">Custom Titanium Cranioplasty Plates:</span> Designed using preoperative CT scans, these plates provide rigid stabilization, restore anatomical morphology, and eliminate the requirement of bending plates during surgery.
                                    </p>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default VirtualSurgicalPlanning;
