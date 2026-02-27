import React from "react";

const AdvantagesOf3DPrintedTMJ = () => {
    return (
        <section className="w-full py-16 bg-white">
            <div className="container mx-auto px-4 md:px-8 max-w-5xl">
                <div className="flex flex-col items-center text-center mb-12">
                    <h2 className="text-3xl font-bold text-[#005696] mb-6">Advantages of 3D Printed Titanium TMJ Prosthesis</h2>
                    
                </div>

                <div className="mt-8 rounded-[40px] border border-[#e6f3ff] bg-[#f8fbff] p-8 md:p-12 shadow-sm relative overflow-hidden">

                    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 items-center">

                        {/* Left Badge */}
                        <div className="flex justify-center md:justify-end md:pr-8 border-b md:border-b-0 md:border-r border-[#005696]/20 pb-8 md:pb-0">
                            <h3 className="text-[#00a6eb] text-4xl font-bold leading-tight select-none">
                               Patient-Specific<br /> Design
                            </h3>
                        </div>

                        {/* Right Content */}
                        <div className="space-y-6">
                            <ul className="space-y-6">
                                <li className="flex flex-col space-y-2">
                                    <div className="flex items-start">
                                        <span className="mr-3 mt-2 flex size-1.5 shrink-0 items-center justify-center rounded-full bg-gray-800"></span>
                                    </div>
                                    <p className="text-lg text-gray-700 ml-4">
                                        Advanced imaging, such as CT scans and digital surgical planning, makes it possible to develop implants that mirror the exact anatomy of the patient.
                                    </p>
                                </li>

                                <li className="flex flex-col space-y-2">
                                    <div className="flex items-start">
                                        <span className="mr-3 mt-2 flex size-1.5 shrink-0 items-center justify-center rounded-full bg-gray-800"></span>
                                    </div>
                                    <p className="text-lg text-gray-700 ml-4">
                                        This helps to reestablish the joint anatomy, position and occlusion with optimized aesthetic and functional results.                                    </p>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdvantagesOf3DPrintedTMJ;
