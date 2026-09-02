import Image from "next/image";

export default function TrustedSupport() {
    const supports = [
        { img: "support-1.png", text: "Application\nConsultation" },
        { img: "support-2.png", text: "Installation &\nTraining" },
        { img: "support-3.png", text: "After-sales\nSupport" },
        { img: "support-4.png", text: "Service &\nMaintenance" },
    ];

    return (
        <section className="w-full bg-white py-8 lg:py-16">
            <div className="container-fluid mx-auto px-4 lg:px-12 xl:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 w-full max-w-450 mx-auto">
                    
                    {/* Left Div */}
                    <div className="lg:col-span-7 border border-[#1B6DB1] bg-[#F8FAFC] rounded-2xl p-6 flex flex-col items-center">
                        <h2 className="text-center font-bold text-[1.75rem] md:text-[2rem] mb-10 xl:mb-12">
                            <span className="text-[#1B6DB1]">Graft3D</span>
                            <span className="text-[#1E1E1E]"> Support</span>
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 xl:gap-8 w-full">
                            {supports.map((item, idx) => (
                                <div key={idx} className="flex flex-col items-center">
                                    <div className="w-20 h-20 xl:w-24 xl:h-24 relative mb-4 xl:mb-6">
                                        <Image src={`/images/funmat-ht/${item.img}`} alt={item.text.replace('\n', ' ')} fill className="object-contain" />
                                    </div>
                                    <h3 className="text-center text-[#1E1E1E] font-semibold text-[1.125rem] xl:text-[1.25rem] whitespace-pre-line leading-snug">
                                        {item.text}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Div */}
                    <div className="lg:col-span-5 border border-[#166AAF] bg-[#F8FAFC66] rounded-2xl p-6 flex flex-col items-center justify-center">
                        <h2 className="text-[#26211E] font-bold text-[1.75rem] md:text-[2rem] text-center mb-6">
                            Your Trusted Partner
                        </h2>
                        <p className="text-[#26211E] font-medium text-[1.125rem] xl:text-[1.25rem] text-center leading-relaxed">
                            Graft3D Healthcare Solutions is committed to empowering healthcare professionals with reliable 3D printing technology and expert support for better patient outcomes.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
