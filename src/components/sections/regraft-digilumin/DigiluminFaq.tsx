import FaqAccordion from '@/components/common/FaqAccordion';

const faqs = [
    {
        question: 'What is a dental guide?',
        answer: (
            <div className="flex flex-col gap-3 text-gray-700 text-[15px]">
                <p>For designing and manufacturing patient-specific implants we require the following information from surgeon&apos;s side:</p>
                <p>1. Patient&apos;s radiological data (Usually CT)</p>
                <p>2. Filled order form, including specifications for implant design, delivery, etc. After contacting us, the surgeon will get an order form that has to be filled, and CT scanning protocols with recommendations for scanning parameters.</p>
            </div>
        ),
    },
    {
        question: 'What is the process of Patient Specific Implants ?',
        answer: 'Conversion of DICOM To STL > Virtually Planning and Designing Using Geomagic Freeform >3D Printing the Titanium implant > Post Operative OPG',
    },
    {
        question: 'What technology and materials are you using to produce patient-specific medical devices?',
        answer: 'Patient-specific implants are manufactured using the following technologies and materials: Additive manufacturing (3D printing) technology DMLS (Direct Metal Laser Sintering), material: medical titanium alloy Ti6Al4V ,FDM ( Fused Deposition Modeling) , Material : PEEK ( Poly-Ether-Ether-Ketone).',
    },
    {
        question: 'What is the average lead time for a patient-specific medical device?',
        answer: 'The lead time to design and manufacture a patient-specific implant or surgical guide depends on the complexity of a clinical case and the surgeon\'s requirements for the device. Typically, the delivery terms (after the surgeon approves the final design) are approximately 2 weeks for implants, and 1-2 weeks for surgical guides.',
    },
    {
        question: 'How can I send a patient\'s radiological data?',
        answer: 'There is a provision in our Web Page, where you can fill the Details of the patient and upload their DICOM files. ( Please Give the Link Of < Get Quote > )',
    },
];

const DigiluminFaq = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <FaqAccordion items={faqs} />
            </div>
        </section>
    );
};

export default DigiluminFaq;
