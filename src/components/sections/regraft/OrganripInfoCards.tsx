import React from 'react';

const cardsData = [
    {
        title: "The Workflow Process",
        items: [
            "Patient imaging data from CT scan is used to create digital organ models",
            "Additive manufacturing techniques produce lifelike soft organ replicas",
            "Transparent, rubber-like plastic materials are used instead of rigid plastics"
        ]
    },
    {
        title: "Benefits",
        items: [
            "Surgical rehearsal for complex procedures such as kidney and heart transplants",
            "Preoperative planning to identify challenges before live surgery",
            "Enhances surgical planning accuracy and workflow consistency",
            "Reduces intraoperative risk through better preparation",
            "Allows realistic handling, deformation, and visibility",
            "Provides clear anatomical reference points during simulation",
            "Used for advanced training procedures and in educational labs"
        ]
    }
];

const OrganripInfoCards = () => {
    return (
        <section className="w-full bg-white py-16 md:py-24">
            <div className="container max-w-5xl mx-auto px-4 space-y-12">
                {cardsData.map((card, index) => (
                    <div
                        key={index}
                        className={`w-full border border-[#2B73B9] rounded-xl overflow-hidden shadow-sm ${index === 1 ? 'bg-[#F4F5F7]' : 'bg-[#E6F0FA]'
                            }`}
                    >
                        <div className="p-6 md:p-8">
                            <h3 className="text-2xl md:text-3xl font-bold text-[#2B73B9] mb-4">
                                {card.title}
                            </h3>
                            <div className="w-full h-px bg-black/20 mb-6"></div>
                            <ul className="space-y-4">
                                {card.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full bg-[#2B73B9] mt-2.5 shrink-0"></div>
                                        <p className="text-gray-900 font-medium text-base md:text-lg leading-relaxed">
                                            {item}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OrganripInfoCards;
