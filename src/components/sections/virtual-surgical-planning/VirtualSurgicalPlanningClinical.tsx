import React from "react";
import Image from "next/image";

export default function VirtualSurgicalPlanningClinical() {
    const applications = [
        {
            title: "Reconstruction of the orbital fracture (Orbital wall and rim fractures):",
            description: "3D-printed titanium plates completely reconstruct orbital structure with low risk of diplopia, enophthalmos & loss of vision."
        },
        {
            title: "Treatment of Zygomaticomaxillary Complex Fractures (ZMC fractures):",
            description: "Patient-specific titanium implants (PSI) restores midfacial projection, contour and symmetry. Digital preoperative planning aids in better positioning of the zygoma and maxilla than freehand techniques."
        },
        {
            title: "Fixation of Mandibular Fractures:",
            description: "Customized 3D printed titanium plates improve stability of the bone, occlusal alignment and jaw mobility."
        },
        {
            title: "Panfacial trauma reconstruction:",
            description: "In the cases of multiple lesions,3D imaging and use of patient-specific titanium plates and meshes revises craniofacial symmetry, simplifies operation and reduces the complications."
        }
    ];

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Side: Clinical Applications List */}
                <div className="space-y-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1f5f99] leading-tight">
                        Clinical Applications of Virtual Surgical Planning and 3D-Printed Implants
                    </h2>

                    <div className="space-y-8">
                        {applications.map((app, index) => (
                            <div key={index} className="space-y-3">
                                {/* Blue Divider Line */}
                                <div className="w-20 h-1 bg-[#2b6cb0]"></div>

                                <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-1 leading-tight">
                                    {app.title}
                                </h3>

                                <div className="flex items-start gap-3">
                                    <div className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-[#1f5f99]"></div>
                                    <p className="text-gray-700 text-sm md:text-base font-medium leading-relaxed">
                                        {app.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Image */}
                <div className="flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-[500px] h-[450px]">
                        <Image
                            src="/images/virtual/virtual5.png"
                            alt="Clinical Applications Clinical Model"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

            </div>
            <p className="text-center text-gray-700 text-sm md:text-base font-medium leading-relaxed mt-12">
                The combination of Virtual Surgical Planning with 3D-printed titanium implants has surpassed a new standard in the treatment of facial bone reconstruction. Through integration of advanced digital imaging and surgical planning with patient-specific implants, peak accuracy, efficiency and predictability can be attained during the reconstruction of craniofacial trauma.
            </p>
        </section>
    );
}
