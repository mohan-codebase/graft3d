import React from "react";

const VirtualSurgicalPlanning = () => {
    return (
        <section className="w-full py-16 bg-white">
            <div className="container mx-auto px-4 md:px-8 max-w-5xl">
                <div className="flex flex-col items-center text-center mb-12">
                    <h2 className="text-3xl font-bold text-[#005696] mb-6">3D Printing in Virtual Surgical Planning</h2>
                    <p className="text-lg leading-relaxed text-gray-700 max-w-4xl">
                        3D Printing and VSP have revolutionized craniofacial reconstruction in a way providing surgeons with a digital-to-clinical workflow that enhances precision and predictability.
                    </p>
                </div>

                <div className="mt-8 rounded-[40px] border border-[#e6f3ff] bg-[#f8fbff] p-8 md:p-12 shadow-sm relative overflow-hidden">

                    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 items-center">

                        {/* Left Badge */}
                        <div className="flex justify-center md:justify-end md:pr-8 border-b md:border-b-0 md:border-r border-[#005696]/20 pb-8 md:pb-0">
                            <h3 className="text-[#00a6eb] text-4xl font-bold leading-tight select-none">
                                Key<br />Applications
                            </h3>
                        </div>

                        {/* Right Content */}
                        <div className="space-y-6">
                            <ul className="space-y-6">
                                <li className="flex flex-col space-y-2">
                                    <div className="flex items-start">
                                        <span className="mr-3 mt-2 flex size-1.5 shrink-0 items-center justify-center rounded-full bg-gray-800"></span>
                                        <span className="text-lg font-bold text-gray-800">3D-Printed Resection/Cutting Guides:</span>
                                    </div>
                                    <p className="text-lg text-gray-700 ml-4">
                                        Facilitate precise resection margins and accurate fibular osteotomies, ensuring accurate execution of the surgical plan from the digital plan.
                                    </p>
                                </li>

                                <li className="flex flex-col space-y-2">
                                    <div className="flex items-start">
                                        <span className="mr-3 mt-2 flex size-1.5 shrink-0 items-center justify-center rounded-full bg-gray-800"></span>
                                        <span className="text-lg font-bold text-gray-800">Custom Titanium Cranioplasty Plates:</span>
                                    </div>
                                    <p className="text-lg text-gray-700 ml-4">
                                        Designed using preoperative CT scans, these plates provide rigid stabilization, restore anatomical morphology, and eliminate the requirement of bending plates during surgery.
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
