import React from "react";
import FaqAccordion from '@/components/common/FaqAccordion';

const faqItems = [
    {
        question: "What is ReGraft™ TMJ and what clinical problem does it address?",
        answer: "ReGraft™ TMJ is a patient-specific, 3D-designed TMJ reconstruction solution developed for managing severe temporomandibular joint disorders. It is intended for cases where conventional treatments fail, including joint degeneration, trauma, ankylosis, or post-tumor resection defects."
    },
    {
        question: "In which clinical indications is ReGraft™ TMJ recommended?",
        answer: "ReGraft™ TMJ is recommended for end-stage TMJ disorders, TMJ ankylosis, degenerative joint disease, failed previous TMJ surgeries, congenital deformities, and complex craniofacial reconstructions requiring precise joint restoration."
    },
    {
        question: "How does ReGraft™ TMJ improve surgical accuracy?",
        answer: "The system is based on patient-specific anatomical data derived from medical imaging, allowing precise pre-surgical planning and customization. This results in improved joint alignment, predictable occlusion, and reduced intraoperative guesswork."
    },
    {
        question: "Is ReGraft™ TMJ a customized solution for each patient?",
        answer: "Yes. ReGraft™ TMJ is a fully customized, patient-specific solution, designed according to the individual’s anatomy. This customization helps achieve better functional outcomes, improved symmetry, and optimal joint biomechanics."
    },
    {
        question: "How does ReGraft™ TMJ integrate into the clinical workflow?",
        answer: "ReGraft™ TMJ supports a digital clinical workflow, from imaging and virtual surgical planning to guided reconstruction. This streamlines coordination between surgeons, engineers, and manufacturing teams, reducing overall treatment time."
    },
    {
        question: "Does ReGraft™ TMJ reduce surgical and operative time?",
        answer: "Yes. Preoperative planning and precise customization significantly reduce intraoperative adjustments, leading to shorter surgical time, improved efficiency, and reduced anesthesia exposure for the patient."
    },
    {
        question: "What are the functional outcomes expected after ReGraft™ TMJ reconstruction?",
        answer: "Patients can expect improved jaw function, enhanced mouth opening, reduced pain, and restored mandibular movement, depending on clinical condition and postoperative rehabilitation. The solution is designed to support long-term functional stability."
    },
     {
        question: "Is ReGraft™ TMJ suitable for complex and revision cases?",
        answer: "Yes. ReGraft™ TMJ is particularly beneficial for complex, asymmetrical, and revision TMJ cases, where conventional stock solutions may not provide adequate fit or functional restoration."
    }
];

const FaqSection = () => {
    return (
        <section className="w-full py-16 bg-[#f8fbff]">
            <div className="container mx-auto px-4 md:px-8 max-w-4xl">
                <h2 className="text-3xl font-bold text-[#005696] text-center mb-10">FAQs</h2>
                <FaqAccordion items={faqItems} />
            </div>
        </section>
    );
};

export default FaqSection;
