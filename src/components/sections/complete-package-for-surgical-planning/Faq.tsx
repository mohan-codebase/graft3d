import FaqAccordion from "@/components/common/FaqAccordion";

const faqs = [
    {
        question: "1. What is included in the Surgical Planning Package?",
        answer: "The package includes medical image segmentation software, medical design software, a medical-grade 3D printer, compatible printing materials, workflow implementation, installation, training, and ongoing technical support.",
    },
    {
        question: "2. Which medical specialties can benefit from this package?",
        answer: "It is suitable for cranio-maxillofacial surgery, orthopedics, neurosurgery, spine surgery, plastic surgery, dental surgery, and medical education.",
    },
    {
        question: "3. What imaging modalities are supported by Elucis Next?",
        answer: "Elucis processes multi-dimensional DICOM scans—including CT, MRI, CBCT, and 3D/4D Echocardiography—into dynamic 3D/4D VR models.",
    },
    {
        question: "4. Is training provided?",
        answer: "Absolutely. Graft3D Healthcare provides installation, workflow implementation, hands-on training, and post-installation technical support.",
    },
    {
        question: "5. Can the package be customized?",
        answer: "Yes. We tailor each Surgical Planning Package based on your specialty, case volume, workflow requirements, and institutional goals.",
    },
];

const Faq = () => {
    return (
        <section className="py-20 md:py-28 bg-[#F8FAFC]">
            <div className="container mx-auto px-4 lg:px-12 xl:px-24">
                <div className="text-center mb-12">
                    <h2 className="text-[2.25rem] md:text-[2.5rem] font-bold text-[#1e1e1e] mb-6">
                        Frequently Asked Questions
                    </h2>
                </div>
                <div className="max-w-400 mx-auto">
                    <FaqAccordion items={faqs} />
                </div>
            </div>
        </section>
    );
};

export default Faq;
