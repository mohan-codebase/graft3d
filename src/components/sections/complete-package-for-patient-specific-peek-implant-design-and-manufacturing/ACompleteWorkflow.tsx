import Image from "next/image";
import Link from "next/link";

export default function ACompleteWorkflow() {
    const cards = [
        {
            topTitle: "Medical Image Conversion",
            image: "workflow-1.png",
            innerTitle: "Elucis GO & Elucis NEXT",
            description:
                "Advanced medical image visualization and segmentation solution that transforms CT, CBCT, MRI & 4D ECHO data into high quality 3D anatomical models.",
            link: "/elucis",
        },
        {
            topTitle: "Bio CAD & Haptic Design Solution",
            image: "workflow-2.png",
            innerTitle: "Bio CAD & Haptic Design Solution",
            description:
                "Geomagic Freeform with Haptic Device Combine advanced medical CAD software with force-feedback haptic hardware to enable intuitive digital sculpting and precise patient-specific modeling.",
            link: "/geomagic-freeform",
        },
        {
            topTitle: "High-Performance Medical PEEK 3D Printing",
            image: "workflow-3.png",
            innerTitle: "FUNMAT PRO 410",
            description:
                "Medical grade high temperature 3D printer capable of manufacturing patient-specific implants and surgical components using medical grade polymers, including PEEK, PMMA, PC, PLLA.",
            link: "/funmat-pro-410",
        },
    ];

    return (
        <section className="w-full bg-white py-8 lg:py-16">
            <div className="container mx-auto px-4 lg:px-12 xl:px-24">
                <h2 className="mb-12 text-center text-[2.125rem] font-bold text-[#1E1E1E]">
                    A Complete Workflow
                </h2>

                <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    {cards.map((card, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col overflow-hidden rounded-2xl border-[0.5px] border-[#E6E6E6] bg-[#F2F9FF]"
                        >
                            {/* Top Title */}
                            <div className="flex min-h-17.5 items-center justify-center px-6 pt-6 pb-4">
                                <h3 className="text-center text-[1.25rem] leading-tight font-semibold whitespace-pre-line text-[#1F88DD]">
                                    {card.topTitle}
                                </h3>
                            </div>

                            {/* Image */}
                            <div className="relative h-45 w-full px-6 sm:h-50 xl:h-60">
                                <div className="relative h-full w-full overflow-hidden rounded-xl">
                                    <Image
                                        src={`/images/complete-package-for-patient-specific-peek-implant-design-and-manufacturing/${card.image}`}
                                        alt={card.innerTitle}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {/* Inner Title */}
                            <h4 className="mt-5 px-6 text-left text-[1.25rem] font-medium text-black lg:px-8">
                                {card.innerTitle}
                            </h4>

                            {/* Description */}
                            <p className="mt-3 mb-8 grow px-6 text-left text-[1rem] leading-relaxed font-normal text-[#252525] lg:px-8">
                                {card.description}
                            </p>

                            {/* Button */}
                            <div className="mt-auto mb-8 px-6 lg:px-8">
                                <Link
                                    href={card.link}
                                    className="block w-full rounded-lg bg-[#1F88DD] py-3.5 text-center text-[1.25rem] font-bold text-white transition-colors hover:bg-[#156EBA]"
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
