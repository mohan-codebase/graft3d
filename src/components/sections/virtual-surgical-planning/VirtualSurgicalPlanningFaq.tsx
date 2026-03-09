import React from 'react';
import FaqAccordion from '@/components/common/FaqAccordion';

const faqItems = [
    {
        question: "What is virtual surgical planning for facial trauma?",
        answer: "Virtual surgical planning uses high-resolution CT data to create a 3D representation of facial fractures. This allows surgeons to plan fracture reduction, alignment, and fixation accurately before entering the operating room."
    },
    {
        question: "What role do 3D printed implants play in facial trauma surgery?",
        answer: "Virtual surgical planning with 3D printed implants allows pre-designed plates or guides to match the patient’s anatomy. This helps achieve accurate fixation, better facial symmetry, and predictable reconstruction outcomes."
    },
    {
        question: "When are virtual surgical planning and plates preferred over conventional methods?",
        answer: "They are especially beneficial in complex facial trauma cases involving multiple fractures, comminuted bone segments, or delayed reconstruction, where conventional intraoperative bending may be less accurate."
    },
    {
        question: "How does virtual surgical planning benefit surgeons and hospitals?",
        answer: "Virtual surgical planning streamlines surgical workflows by reducing operating time, minimizing intraoperative adjustments, and improving coordination between surgical teams, which is valuable for high-volume trauma centers."
    },
    {
        question: "Is virtual surgical planning useful for both acute and delayed facial trauma cases?",
        answer: "Yes, it can be applied in both acute trauma management and delayed reconstruction, helping surgeons restore facial anatomy, occlusion, and symmetry even in complex secondary cases."
    },
    {
        question: "Who benefits most from virtual surgical planning with 3D printed implants?",
        answer: "This approach benefits facial trauma surgeons seeking precision, hospitals aiming for standardized workflows, and patients who require accurate restoration of facial form and function after injury."
    }
];

const VirtualSurgicalPlanningFaq = () => {
    return (
        <section className="w-full py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-center text-primary mb-12">
                    FAQs
                </h2>
                <FaqAccordion items={faqItems} />
            </div>
        </section>
    );
};

export default VirtualSurgicalPlanningFaq;
