import React from 'react';

const cardsData = [
    {
        title: "How Digiprun Works",
        items: [
            "Patient CT scan data is processed to create accurate 3D anatomical models",
            "Virtual surgical planning is used to define exact cutting planes and safe margins",
            "Customized cutting guides are digitally designed for each patient",
            "High-precision 3D printing produces surgical guides that fit accurately onto the bone during surgery"
        ]
    },
    {
        title: "Benefits",
        items: [
            "Precise bone removal reduces trauma and protects anatomical structures",
            "Preservation of healthy bone improves stability and supports natural healing",
            "Shorter surgical time minimizes anesthesia exposure and operative risks",
            "Guided accuracy ensures predictable surgical outcomes",
            "Improved implant positioning enhances functional and aesthetic results",
            "Fewer intraoperative adjustments lower the risk of surgical errors",
            "Reduced tissue disruption enables faster recovery and improved patient comfort"
        ]
    },
    {
        title: "Clinical Applications",
        items: [
            "Bone tumor resection and oncologic surgeries",
            "Maxillofacial and craniofacial reconstruction procedures",
            "Orthopedic surgeries requiring high cutting precision",
            "Complex cases where precise margin control is essential"
        ]
    }
];

const DigiprunInfoCards = () => {
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

export default DigiprunInfoCards;
