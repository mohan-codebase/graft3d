import React from "react";
import Image from "next/image";

const cards = [
  {
    title: "Exceptional Accuracy",
    description:
      "PSIs enable highly precise transfer of the virtual surgical plan to the patient, with minimal deviation in vertical, transverse and anteroposterior dimensions.",
    image: "/images/patient-specific-implants-for-maxilla-and-mandible/Frame-427319435.png",
  },
  {
    title: "Surgical Efficiency",
    description:
      "Pre-planned, custom-fit implants and guides streamline the procedure, reducing intraoperative adjustments, overall surgery time and fatigue.",
    image: "/images/patient-specific-implants-for-maxilla-and-mandible/Frame-427319435-1.png",
  },
  {
    title: "Rigid Fixation & Stability",
    description:
      "Custom titanium frameworks are adapted to optimal bone regions, allowing multi-point cortical fixation and improved load distribution.",
    image: "/images/patient-specific-implants-for-maxilla-and-mandible/Frame-427319437.png",
  },
  {
    title: "Enhanced Functional & Aesthetic Outcomes",
    description:
      "Accurate three‑dimensional reconstruction supports improved speech, swallowing and facial form, resulting in higher long‑term patient satisfaction.",
    image: "/images/patient-specific-implants-for-maxilla-and-mandible/Frame-427319438.png",
  },
  {
    title: "Better Adaptation in Defect Reconstruction",
    description:
      "Implant designs can be tailored for defects after tumour resection, radiation or scarring, ensuring intimate fit and stable prosthetic support.",
    image: "/images/patient-specific-implants-for-maxilla-and-mandible/Frame-427319439.png",
  },
  {
    title: "Reduced Donor Site Morbidity",
    description:
      "By avoiding extensive grafting and flap harvest in selected cases, PSIs help minimise donor-site complications and shorten overall rehabilitation.",
    image: "/images/patient-specific-implants-for-maxilla-and-mandible/Frame-427319440.png",
  },
];

const AdvantagesSection = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-center text-3xl font-bold text-[#005696]">
          Advantages of PSIs Over Traditional Methods
        </h2>

        <div className="space-y-8">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className={`flex flex-col overflow-hidden bg-white/90 backdrop-blur-sm shadow-sm ring-1 ring-[#e0edff]/70 md:flex-row ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Left side image */}
              <div className="relative w-full md:w-1/2">
                <div className="relative aspect-[4/3] w-full md:aspect-[4/3]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right side content */}
              <div className="flex w-full flex-1 items-center bg-[#f4f9ff] px-6 py-6 md:w-1/2 md:px-8 md:py-8">
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-[#005696] md:text-xl">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-700 md:text-base">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;

