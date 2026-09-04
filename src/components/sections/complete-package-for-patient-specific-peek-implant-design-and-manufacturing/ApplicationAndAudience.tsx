import { ChevronsRight } from "lucide-react";
import Image from "next/image";

export default function ApplicationAndAudience() {
    return (
        <section className="w-full bg-white py-8 lg:py-16">
            <div className="container-fluid mx-auto px-4 lg:px-12 xl:px-18">
                <div className="flex flex-col items-stretch gap-12 xl:flex-row">
                    {/* Left Div */}
                    <div className="flex flex-1 flex-col">
                        <h2 className="mb-2 text-center text-[1.375rem] font-semibold text-[#1F88DD]">
                            Clinical Applications
                        </h2>
                        <p className="mb-10 text-center text-[1rem] font-normal whitespace-pre-line text-[#252525]">
                            {
                                "The Patient-Specific Implant Package supports\na wide range of specialties, including:"
                            }
                        </p>

                        <div className="mt-4 flex grow flex-col items-stretch gap-8 md:flex-row md:gap-0">
                            {/* Column 1 */}
                            <div className="flex flex-1 flex-col items-center">
                                <div className="mb-4 flex h-20 items-center justify-center">
                                    <Image
                                        src="/images/complete-package-for-patient-specific-peek-implant-design-and-manufacturing/application-1.svg"
                                        alt="Cranio-Maxillofacial Surgery"
                                        width={64}
                                        height={64}
                                    />
                                </div>
                                <h3 className="mb-6 h-14 text-center text-[1.25rem] font-medium whitespace-pre-line text-black">
                                    {"Cranio-Maxillofacial\nSurgery"}
                                </h3>
                                <ul className="flex w-full flex-col gap-4 px-2 lg:px-4">
                                    {[
                                        "Cranial defect reconstruction",
                                        "Mandibular reconstruction",
                                        "Maxillary reconstruction",
                                        "Facial trauma reconstruction",
                                    ].map((text, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-start gap-2"
                                        >
                                            <ChevronsRight className="mt-0.5 h-5 w-5 shrink-0 text-[#1F88DD]" />
                                            <span className="text-[1rem] font-normal text-[#252525]">
                                                {text}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Divider */}
                            <div
                                className="mx-2 hidden w-px self-stretch md:block lg:mx-4"
                                style={{
                                    background:
                                        "linear-gradient(180deg, rgba(31, 136, 221, 0) 0%, #1F88DD 25%, #1F88DD 75%, rgba(31, 136, 221, 0) 100%)",
                                }}
                            ></div>

                            {/* Column 2 */}
                            <div className="flex flex-1 flex-col items-center">
                                <div className="mb-4 flex h-20 items-center justify-center">
                                    <Image
                                        src="/images/complete-package-for-patient-specific-peek-implant-design-and-manufacturing/application-2.svg"
                                        alt="Orthopedic Surgery"
                                        width={64}
                                        height={64}
                                    />
                                </div>
                                <h3 className="mb-6 h-14 text-center text-[1.25rem] font-medium whitespace-pre-line text-black">
                                    {"Orthopedic\nSurgery"}
                                </h3>
                                <ul className="flex w-full flex-col gap-4 px-2 lg:px-4">
                                    {[
                                        "Bone defect reconstruction",
                                        "Complex fracture reconstruction",
                                        "Pelvic reconstruction",
                                        "Limb salvage procedures",
                                    ].map((text, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-start gap-2"
                                        >
                                            <ChevronsRight className="mt-0.5 h-5 w-5 shrink-0 text-[#1F88DD]" />
                                            <span className="text-[1rem] font-normal text-[#252525]">
                                                {text}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Divider */}
                            <div
                                className="mx-2 hidden w-px self-stretch md:block lg:mx-4"
                                style={{
                                    background:
                                        "linear-gradient(180deg, rgba(31, 136, 221, 0) 0%, #1F88DD 25%, #1F88DD 75%, rgba(31, 136, 221, 0) 100%)",
                                }}
                            ></div>

                            {/* Column 3 */}
                            <div className="flex flex-1 flex-col items-center">
                                <div className="mb-4 flex h-20 items-center justify-center">
                                    <Image
                                        src="/images/complete-package-for-patient-specific-peek-implant-design-and-manufacturing/application-3.svg"
                                        alt="Medical Device Manufacturing"
                                        width={64}
                                        height={64}
                                    />
                                </div>
                                <h3 className="mb-6 h-14 text-center text-[1.25rem] font-medium whitespace-pre-line text-black">
                                    {"Medical Device\nManufacturing"}
                                </h3>
                                <ul className="flex w-full flex-col gap-4 px-2 lg:px-4">
                                    {[
                                        "Patient-specific implant development",
                                        "Implant prototyping",
                                        "Design validation",
                                        "Clinical evaluation",
                                    ].map((text, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-start gap-2"
                                        >
                                            <ChevronsRight className="mt-0.5 h-5 w-5 shrink-0 text-[#1F88DD]" />
                                            <span className="text-[1rem] font-normal text-[#252525]">
                                                {text}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Div */}
                    <div className="flex flex-col rounded-2xl border-[0.5px] border-[#E6E6E6] bg-[#F2F9FF] p-6 lg:p-10 xl:w-[50%] 2xl:w-[45%]">
                        <h2 className="mb-2 text-center text-[1.375rem] font-semibold text-[#1F88DD]">
                            Ideal For
                        </h2>
                        <p className="mb-10 text-center text-[1rem] font-normal text-[#252525]">
                            This package is designed for:
                        </p>

                        <div className="grid grow grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4">
                            {[
                                {
                                    img: "ideal-1.png",
                                    text: "Multi-specialty\nhospitals",
                                },
                                {
                                    img: "ideal-4.png",
                                    text: "Cranio-maxillofacial\ncenters",
                                },
                                {
                                    img: "ideal-5.png",
                                    text: "Orthopedic\nhospitals",
                                },
                                {
                                    img: "ideal-6.png",
                                    text: "Neurosurgical\ncenters",
                                },
                                {
                                    img: "ideal-3.png",
                                    text: "Dental\nhospitals",
                                },
                                {
                                    img: "ideal-1.png",
                                    text: "Medical device\nmanufacturers",
                                },
                                {
                                    img: "ideal-8.png",
                                    text: "Research\ninstitutions",
                                },
                                {
                                    img: "ideal-2.png",
                                    text: "Academic\nmedical centers",
                                },
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex flex-col items-center"
                                >
                                    <div className="relative mb-3 aspect-16/11 w-full overflow-hidden rounded-lg border border-gray-100 shadow-sm">
                                        <Image
                                            src={`/images/complete-package-for-patient-specific-peek-implant-design-and-manufacturing/${item.img}`}
                                            alt={item.text.replace("\n", " ")}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <span className="text-center text-[0.875rem] leading-tight font-normal whitespace-pre-line text-[#252525] lg:text-[1rem]">
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
