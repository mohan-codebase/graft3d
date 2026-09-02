import Image from "next/image";
import Link from "next/link";

export default function ACompleteWorkflow() {
    const cards = [
        {
            topTitle: "Medical Image Conversion",
            image: "workflow-1.png",
            innerTitle: "Elucis GO & Elucis NEXT",
            description: "Advanced medical image visualization and segmentation solution that transforms CT, CBCT, MRI & 4D ECHO data into high quality 3D anatomical models."
        },
        {
            topTitle: "Bio CAD & Haptic Design Solution",
            image: "workflow-2.png",
            innerTitle: "Bio CAD & Haptic Design Solution",
            description: "Geomagic Freeform with Haptic Device Combine advanced medical CAD software with force-feedback haptic hardware to enable intuitive digital sculpting and precise patient-specific modeling."
        },
        {
            topTitle: "High-Performance Medical PEEK 3D Printing",
            image: "workflow-3.png",
            innerTitle: "FUNMAT PRO 410",
            description: "Medical grade high temperature 3D printer capable of manufacturing patient-specific implants and surgical components using medical grade polymers, including PEEK, PMMA, PC, PLLA."
        }
    ];

    return (
        <section className="w-full bg-white py-8 lg:py-16">
            <div className="container mx-auto px-4 lg:px-12 xl:px-24">
                <h2 className="text-center text-[#1E1E1E] font-bold text-[2.125rem] mb-12">
                    A Complete Workflow
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                    {cards.map((card, idx) => (
                        <div 
                            key={idx} 
                            className="flex flex-col bg-[#F2F9FF] border-[0.5px] border-[#E6E6E6] rounded-2xl overflow-hidden"
                        >
                            {/* Top Title */}
                            <div className="px-6 pt-6 pb-4 flex items-center justify-center min-h-17.5">
                                <h3 className="text-[#1F88DD] font-semibold text-[1.25rem] text-center whitespace-pre-line leading-tight">
                                    {card.topTitle}
                                </h3>
                            </div>

                            {/* Image */}
                            <div className="relative w-full h-45 sm:h-50 xl:h-60 px-6">
                                <div className="relative w-full h-full rounded-xl overflow-hidden">
                                    <Image 
                                        src={`/images/complete-package-for-patient-specific-peek-implant-design-and-manufacturing/${card.image}`}
                                        alt={card.innerTitle}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {/* Inner Title */}
                            <h4 className="text-black font-medium text-[1.25rem] text-left px-6 lg:px-8 mt-5">
                                {card.innerTitle}
                            </h4>

                            {/* Description */}
                            <p className="text-[#252525] font-normal text-[1rem] leading-relaxed text-left px-6 lg:px-8 mt-3 mb-8 grow">
                                {card.description}
                            </p>

                            {/* Button */}
                            <div className="px-6 lg:px-8 mb-8 mt-auto">
                                <Link 
                                    href="#" 
                                    className="block w-full bg-[#1F88DD] hover:bg-[#156EBA] text-white font-bold text-[1.25rem] text-center py-3.5 rounded-lg transition-colors"
                                >
                                    Know More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
