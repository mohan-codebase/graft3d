import Image from "next/image";

export default function MedicalApplications() {
    const cards = [
        {
            title: "Anatomical Models",
            img: "application-1.png",
            desc: "Patient-specific models for surgical\nplanning & education"
        },
        {
            title: "Surgical Guides",
            img: "application-2.png",
            desc: "Accurate and stable guides for precise\nimplant placement"
        },
        {
            title: "Orthopedic Implants",
            img: "application-3.png",
            desc: "Patient-matched implants and\ninterbody cages"
        },
        {
            title: "Research & Development",
            img: "application-4.png",
            desc: "Functional prototypes and biomedical\nresearch models"
        },
        {
            title: "Dental Applications",
            img: "application-5.png",
            desc: "Jigs, surgical guides and dental models"
        },
        {
            title: "Custom Medical Devices",
            img: "application-6.png",
            desc: "Customized devices for specialized\npatient care"
        }
    ];

    return (
        <section className="w-full bg-[#F8FAFC] py-8 lg:py-16">
            <div className="container-fluid mx-auto px-4 lg:px-12 xl:px-24">
                
                {/* Title */}
                <div className="flex items-center gap-4 lg:gap-8 mb-12 lg:mb-16">
                    <div className="flex-1 h-0.5 bg-[#166AAF]"></div>
                    <h2 className="text-[#1E1E1E] font-bold text-[1.25rem] md:text-[1.5rem] text-center uppercase">
                        MEDICAL APPLICATIONS
                    </h2>
                    <div className="flex-1 h-0.5 bg-[#166AAF]"></div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cards.map((card, idx) => (
                        <div 
                            key={idx}
                            className="bg-white border border-[#F1F5F9] rounded-xl p-6 flex flex-col"
                            style={{ boxShadow: '0px 1px 2px 0px #0000000D, 0px 4px 4px 0px #00000040' }}
                        >
                            <h3 className="text-[#1E1E1E] font-bold text-[1.5rem] lg:text-[1.75rem] text-center mb-6 leading-tight">
                                {card.title}
                            </h3>
                            
                            <div className="w-full h-55 lg:h-65 relative mb-6">
                                <Image 
                                    src={`/images/funmat-ht/${card.img}`}
                                    alt={card.title}
                                    fill
                                    className="object-cover rounded-md"
                                />
                            </div>

                            <p className="text-[#1E1E1E] font-medium text-[1.125rem] lg:text-[1.25rem] text-center leading-snug whitespace-pre-line mt-auto">
                                {card.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
