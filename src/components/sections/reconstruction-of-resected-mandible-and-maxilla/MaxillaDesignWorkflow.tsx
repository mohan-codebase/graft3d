import React from "react";

const workflowSteps = [
    {
        title: "Imaging and Virtual Planning",
        content: "The basis of virtual surgical planning is the high-resolution CT scan. Defective areas are outlined and 3D models with details of the defect are prepared to be used for preoperative planning. This yields valuable information for planning reconstruction of mandibular defects and maxillary defects treatment."
    },
    {
        title: "Imaging and Virtual Planning",
        content: "The basis of virtual surgical planning is the high-resolution CT scan. Defective areas are outlined and 3D models with details of the defect are prepared to be used for preoperative planning. This yields valuable information for planning reconstruction of mandibular defects and maxillary defects treatment."
    },
    {
        title: "Reconstruction of Single-Sided Defects",
        content: "For mandibular and maxillary resections, the unaffected side is digitally mirrored. This guarantees an ideal anatomical fit and provides for normal facial balance in mandibular reconstruction and maxillary reconstruction cases."
    },
    {
        title: "Base Plate and Fixation Design",
        content: "A baseplate is then custom designed to fit the residual bone. Trajectory screws are well planed, without any passage to critical structures like canals or dental roots in order to ensure safety and stability."
    },
    {
        title: "Biomechanical Optimization",
        content: "Finite element analysis is performed before final fabrication for the evaluation of stresses and strains in the implant. Load bearing areas such as the mandibular angle, parasymphysis and condylar regions are provided with added strength. This mechanism guarantees biomechanical dependability for activities of mastication and speech, critical in trauma-related mandibular resection with the use of PSIs."
    }
];

const MaxillaDesignWorkflow = () => {
    return (
        <section className="w-full py-16 bg-white">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                <h2 className="text-3xl md:text-5xl font-bold text-[#005696] mb-12 max-w-2xl leading-tight">
                    Design Workflow for 3D-<br />Printed Implants
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                    {/* First 3 cards - top row on desktop */}
                    {workflowSteps.slice(0, 3).map((step, index) => (
                        <div
                            key={index}
                            className="md:col-span-2 flex flex-col p-8 rounded-[32px] bg-[#f8fbff] border border-[#e6f3ff] shadow-sm hover:shadow-md transition-shadow"
                        >
                            <h3 className="text-xl font-bold text-[#005696] mb-4">
                                {step.title}
                            </h3>
                            <p className="text-gray-700 leading-relaxed text-[15px]">
                                {step.content}
                            </p>
                        </div>
                    ))}

                    {/* Next 2 cards - bottom row on desktop */}
                    {workflowSteps.slice(3).map((step, index) => (
                        <div
                            key={index + 3}
                            className="md:col-span-3 flex flex-col p-8 rounded-[32px] bg-[#f8fbff] border border-[#e6f3ff] shadow-sm hover:shadow-md transition-shadow"
                        >
                            <h3 className="text-xl font-bold text-[#005696] mb-4">
                                {step.title}
                            </h3>
                            <p className="text-gray-700 leading-relaxed text-[15px]">
                                {step.content}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MaxillaDesignWorkflow;
