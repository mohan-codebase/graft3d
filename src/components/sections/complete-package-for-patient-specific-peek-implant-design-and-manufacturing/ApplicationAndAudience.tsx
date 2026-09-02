import Image from "next/image";
import { ChevronsRight } from "lucide-react";

export default function ApplicationAndAudience() {
    return (
        <section className="w-full bg-white py-8 lg:py-16">
            <div className="container-fluid mx-auto px-4 lg:px-12 xl:px-18">
                <div className="flex flex-col xl:flex-row gap-12 items-stretch">
                    
                    {/* Left Div */}
                    <div className="flex-1 flex flex-col">
                        <h2 className="text-center text-[#1F88DD] font-semibold text-[1.375rem] mb-2">
                            Clinical Applications
                        </h2>
                        <p className="text-center text-[#252525] font-normal text-[1rem] whitespace-pre-line mb-10">
                            {"The Patient-Specific Implant Package supports\na wide range of specialties, including:"}
                        </p>

                        <div className="flex flex-col md:flex-row items-stretch gap-8 md:gap-0 mt-4 grow">
                            {/* Column 1 */}
                            <div className="flex-1 flex flex-col items-center">
                                <div className="h-20 flex items-center justify-center mb-4">
                                    <Image src="/images/complete-package-for-patient-specific-peek-implant-design-and-manufacturing/application-1.svg" alt="Cranio-Maxillofacial Surgery" width={64} height={64} />
                                </div>
                                <h3 className="text-center text-black font-medium text-[1.25rem] whitespace-pre-line mb-6 h-14">
                                    {"Cranio-Maxillofacial\nSurgery"}
                                </h3>
                                <ul className="flex flex-col gap-4 w-full px-2 lg:px-4">
                                    {[
                                        "Cranial defect reconstruction",
                                        "Mandibular reconstruction",
                                        "Maxillary reconstruction",
                                        "Facial trauma reconstruction"
                                    ].map((text, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <ChevronsRight className="text-[#1F88DD] w-5 h-5 shrink-0 mt-0.5" />
                                            <span className="text-[#252525] font-normal text-[1rem]">{text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Divider */}
                            <div className="hidden md:block w-px self-stretch mx-2 lg:mx-4" style={{ background: "linear-gradient(180deg, rgba(31, 136, 221, 0) 0%, #1F88DD 25%, #1F88DD 75%, rgba(31, 136, 221, 0) 100%)" }}></div>

                            {/* Column 2 */}
                            <div className="flex-1 flex flex-col items-center">
                                <div className="h-20 flex items-center justify-center mb-4">
                                    <Image src="/images/complete-package-for-patient-specific-peek-implant-design-and-manufacturing/application-2.svg" alt="Orthopedic Surgery" width={64} height={64} />
                                </div>
                                <h3 className="text-center text-black font-medium text-[1.25rem] whitespace-pre-line mb-6 h-14">
                                    {"Orthopedic\nSurgery"}
                                </h3>
                                <ul className="flex flex-col gap-4 w-full px-2 lg:px-4">
                                    {[
                                        "Bone defect reconstruction",
                                        "Complex fracture reconstruction",
                                        "Pelvic reconstruction",
                                        "Limb salvage procedures"
                                    ].map((text, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <ChevronsRight className="text-[#1F88DD] w-5 h-5 shrink-0 mt-0.5" />
                                            <span className="text-[#252525] font-normal text-[1rem]">{text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Divider */}
                            <div className="hidden md:block w-px self-stretch mx-2 lg:mx-4" style={{ background: "linear-gradient(180deg, rgba(31, 136, 221, 0) 0%, #1F88DD 25%, #1F88DD 75%, rgba(31, 136, 221, 0) 100%)" }}></div>

                            {/* Column 3 */}
                            <div className="flex-1 flex flex-col items-center">
                                <div className="h-20 flex items-center justify-center mb-4">
                                    <Image src="/images/complete-package-for-patient-specific-peek-implant-design-and-manufacturing/application-3.svg" alt="Medical Device Manufacturing" width={64} height={64} />
                                </div>
                                <h3 className="text-center text-black font-medium text-[1.25rem] whitespace-pre-line mb-6 h-14">
                                    {"Medical Device\nManufacturing"}
                                </h3>
                                <ul className="flex flex-col gap-4 w-full px-2 lg:px-4">
                                    {[
                                        "Patient-specific implant development",
                                        "Implant prototyping",
                                        "Design validation",
                                        "Clinical evaluation"
                                    ].map((text, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <ChevronsRight className="text-[#1F88DD] w-5 h-5 shrink-0 mt-0.5" />
                                            <span className="text-[#252525] font-normal text-[1rem]">{text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Div */}
                    <div className="xl:w-[50%] 2xl:w-[45%] bg-[#F2F9FF] border-[0.5px] border-[#E6E6E6] rounded-2xl p-6 lg:p-10 flex flex-col">
                        <h2 className="text-center text-[#1F88DD] font-semibold text-[1.375rem] mb-2">
                            Ideal For
                        </h2>
                        <p className="text-center text-[#252525] font-normal text-[1rem] mb-10">
                            This package is designed for:
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4 grow">
                            {[
                                { img: "ideal-1.png", text: "Multi-specialty\nhospitals" },
                                { img: "ideal-2.png", text: "Cranio-maxillofacial\ncenters" },
                                { img: "ideal-3.png", text: "Orthopedic\nhospitals" },
                                { img: "ideal-4.png", text: "Neurosurgical\ncenters" },
                                { img: "ideal-5.png", text: "Dental\nhospitals" },
                                { img: "ideal-6.png", text: "Medical device\nmanufacturers" },
                                { img: "ideal-7.png", text: "Research\ninstitutions" },
                                { img: "ideal-8.png", text: "Academic\nmedical centers" },
                            ].map((item, idx) => (
                                <div key={idx} className="flex flex-col items-center">
                                    <div className="relative w-full aspect-16/11 rounded-lg overflow-hidden mb-3 shadow-sm border border-gray-100">
                                        <Image 
                                            src={`/images/complete-package-for-patient-specific-peek-implant-design-and-manufacturing/${item.img}`} 
                                            alt={item.text.replace('\n', ' ')} 
                                            fill 
                                            className="object-cover" 
                                        />
                                    </div>
                                    <span className="text-center text-[#252525] font-normal text-[0.875rem] lg:text-[1rem] whitespace-pre-line leading-tight">
                                        {item.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}
