const faqs = [
    {
        question: 'What data does the surgeon have to transfer for making patient-specific implant order?',
        answer:
            "For designing and manufacturing patient-specific implants, we require the patient's radiological data (usually CT) and a filled order form with design and delivery specifications.",
    },
    {
        question: 'What is the process of Patient Specific Implants?',
        answer:
            'Conversion of DICOM to STL, virtual planning and design, 3D printing of the titanium implant, and post-operative review.',
    },
    {
        question: 'What technology and materials are you using to produce patient-specific medical devices?',
        answer:
            'We use additive manufacturing (DMLS) for medical titanium alloy Ti6Al4V and FDM process for PEEK (Poly-Ether-Ether-Ketone).',
    },
    {
        question: 'What is the average lead time for a patient-specific medical device?',
        answer:
            'After final design approval, implants typically take around 2 weeks, while surgical guides usually take 1-2 weeks.',
    },
    {
        question: "How can I send a patient's radiological data?",
        answer:
            'You can submit patient details and upload DICOM files through our online workflow after contacting our team.',
    },
    {
        question: 'Can you supply patient-specific implants for urgent cases?',
        answer:
            'Yes. We can support urgent timelines for special cases. Please contact our team with your requirements.',
    },
];

export default function PsiFaqSection() {
    return (
        <section className="bg-white py-12">
            <div className="mx-auto w-full max-w-[1200px] px-4">
                <h2 className="text-center text-4xl font-bold text-primary">FAQs</h2>
                <div className="mt-8 divide-y divide-gray-200 border-y border-gray-200">
                    {faqs.map((faq) => (
                        <details key={faq.question} className="group py-4">
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-[#1B6DB1] md:text-base">
                                <span>{faq.question}</span>
                                <span className="text-xl leading-none text-primary transition-transform group-open:rotate-45">
                                    +
                                </span>
                            </summary>
                            <p className="mt-3 pr-8 text-sm leading-7 text-gray-700 md:text-[15px]">
                                {faq.answer}
                            </p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
