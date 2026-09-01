import Image from "next/image";

const faqs = [
    {
        title: "Can it print\nimplantable parts?",
        description: "APOLLO processes medical-grade PEEK, producing biocompatible, sterilizable, and radiolucent parts suitable for permanent and temporary implantable applications.",
    },
    {
        title: "Is it fast enough\nfor clinical use?",
        description: "Equipped with a High-Flow extrusion system and Dual IDEX (Independent Dual Extruder) architecture, it prints PEEK at speeds up to 200 mm/s to meet tight surgical and clinical timelines without compromising mechanical integrity.",
    },
    {
        title: "Can it handle\ncomplex designs?",
        description: "Dual IDEX system enables support-free printing modes and multi-material capabilities, allowing for accurate fabrication of intricate, patient-specific geometries such as spinal cages, cranial plates, and maxillofacial implants.",
    },
    {
        title: "Can it run long\njobs unattended?",
        description: "Designed for continuous production, the system features dual 3 kg dry filament boxes, power-loss recovery, and precise thermal chamber control to reliably execute long, multi-day print cycles.",
    },
    {
        title: "Who supports\nit in India?",
        description: "Precise3DM – INTAMSYS Master Reseller provides sales, service, spares, training and application engineering across India.",
    },
];

export default function Faq() {
    return (
        <section className="w-full bg-white py-8 lg:py-16">
            <div className="container-fluid mx-auto px-4 lg:px-12 xl:px-16">
                <h2 className="text-[#01101B] font-bold text-[2rem] lg:text-[2.5rem] mb-12 text-left">
                    Frequently Asked Product Questions
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index}
                            className="flex flex-col p-6 rounded-lg"
                            style={{
                                border: '1px solid #1B6DB180',
                                background: 'radial-gradient(806.52% 198.85% at 57.8% -42.13%, #88C9FF 0%, #F8FCFF 27.99%)'
                            }}
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="shrink-0 relative w-8 h-8 lg:w-10 lg:h-10">
                                    <Image 
                                        src="/images/310-for-medical-use/faq-icon.svg"
                                        alt="FAQ Icon"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className="text-[#00101B] font-bold text-[1.125rem] xl:text-[1.25rem] leading-tight whitespace-pre-line pt-1">
                                    {faq.title}
                                </h3>
                            </div>
                            <p className="text-[#00101B] font-normal text-[1rem] leading-relaxed">
                                {faq.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
