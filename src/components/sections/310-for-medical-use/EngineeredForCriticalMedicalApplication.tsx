import Image from "next/image";

const applications = [
    {
        title: "Spinal Implants",
        description: "Cages, fusion\ndevices and\ninterbody implants.",
        image: "/images/310-for-medical-use/application-1.png",
    },
    {
        title: "Cranial & Maxillofacial",
        description: "Patient-specific cranial plates,\njaw & midface implants.",
        image: "/images/310-for-medical-use/application-2.png",
    },
    {
        title: "Surgical Instruments",
        description: "Custom surgical tools\nand guides.",
        image: "/images/310-for-medical-use/application-3.png",
    },
    {
        title: "Orthopedic Implants",
        description: "Trauma plates,\nscrews and fixation\ndevices.",
        image: "/images/310-for-medical-use/application-4.png",
    },
    {
        title: "Dental Applications",
        description: "Dental frameworks,\nimplant components.",
        image: "/images/310-for-medical-use/application-5.png",
    },
    {
        title: "Patient-Specific Guides",
        description: "Surgical guides, drill\nguides and positioning jigs.",
        image: "/images/310-for-medical-use/application-6.png",
    }
];

export default function EngineeredForCriticalMedicalApplication() {
    return (
        <section className="w-full bg-white py-8 lg:py-16">
            <div className="container-fluid mx-auto px-4 lg:px-12 xl:px-24">
                <h2 className="text-[#1A1A1A] font-bold text-[1.5rem] text-center mb-10">
                    Engineered for Critical Medical Application
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6">
                    {applications.map((app, index) => (
                        <div key={index} className="flex flex-col p-4 border border-[#E5E7EB] rounded-lg bg-white">
                            <div className="relative w-full aspect-4/3 rounded-md overflow-hidden mb-4">
                                <Image
                                    src={app.image}
                                    alt={app.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex flex-col grow justify-start items-center">
                                <h3 className="text-[#1A1A1A] font-bold text-[0.875rem] text-center mb-2 leading-snug">
                                    {app.title}
                                </h3>
                                <p className="text-[#4B5563] font-normal text-[0.75rem] text-center whitespace-pre-line leading-relaxed">
                                    {app.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
