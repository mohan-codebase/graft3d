import Image from "next/image";

export default function WhyChooseGraft3D() {
    const reasons = [
        {
            img: "why-1.png",
            text: "India’s trusted medical\n3D printing partner"
        },
        {
            img: "why-2.png",
            text: "End-to-end solutions\nfor hospitals & labs"
        },
        {
            img: "why-3.png",
            text: "Application engineering\nsupport"
        },
        {
            img: "why-4.png",
            text: "Training, installation &\nafter-sales service"
        },
        {
            img: "why-5.png",
            text: "Wide network across\nIndia"
        }
    ];

    return (
        <section className="w-full bg-[#F8FAFC] py-8 lg:py-16">
            <div className="container-fluid mx-auto px-4 lg:px-12 xl:px-24">
                <h2 className="text-center font-bold text-[1.75rem] md:text-[2rem] lg:text-[2.25rem]">
                    <span className="text-[#1E1E1E]">Why Choose </span>
                    <span className="text-[#166AAF]">Graft3D</span>
                    <span className="text-[#1E1E1E]">?</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 lg:gap-12 mt-12 lg:mt-16 max-w-420 mx-auto">
                    {reasons.map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            <div className="w-24 h-24 lg:w-30 lg:h-30 relative mb-6">
                                <Image 
                                    src={`/images/funmat-ht/${item.img}`} 
                                    alt="Why Choose Graft3D" 
                                    fill 
                                    className="object-contain" 
                                />
                            </div>
                            <h3 className="text-center text-[#1E1E1E] font-semibold text-[1.125rem] lg:text-[1.25rem] whitespace-pre-line leading-tight">
                                {item.text}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
