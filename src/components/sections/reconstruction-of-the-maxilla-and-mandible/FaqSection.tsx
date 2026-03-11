import React from "react";
import FaqAccordion from '@/components/common/FaqAccordion';

const faqItems = [
  {
    question:
      "What are patient-specific implants (PSIs) for atrophic maxilla and mandible?",
    answer:
      "Patient-specific implants are custom-designed subperiosteal or framework implants created from CBCT/CT-based virtual planning to restore severely resorbed maxillary or mandibular bone where conventional endosseous implants are not feasible.",
  },
  {
    question:
      "In which clinical situations are PSIs preferred over bone grafting or zygomatic implants?",
    answer:
      "PSIs are ideal in cases of advanced ridge atrophy, failed grafts, compromised anatomy, or patients unsuitable for multi-stage grafting procedures, offering a single-stage, graft-less solution with immediate functional stability.",
  },
  {
    question: "How does virtual surgical planning improve accuracy and outcomes?",
    answer:
      "Virtual surgical planning enables precise adaptation of the implant to the patient’s residual bone anatomy, optimized fixation point placement, and prosthetic-driven positioning—resulting in high surgical predictability and reduced intraoperative adjustments.",
  },
  {
    question:
      "Do patient-specific implants reduce surgical time and morbidity?",
    answer:
      "Yes. Pre-planned, custom-fit implants significantly reduce operative time, eliminate extensive bone augmentation procedures, and minimize patient morbidity, leading to faster recovery and fewer surgical stages.",
  },
  {
    question:
      "How is long-term stability achieved in severely atrophic cases?",
    answer:
      "Stability is achieved through multi-point cortical fixation, load distribution over a wider anatomical area, and precise implant-bone adaptation—ensuring reliable long-term support for prosthetic rehabilitation.",
  },
  {
    question: "Can PSIs support immediate or early prosthetic loading?",
    answer:
      "Yes. In appropriately planned cases, PSIs can support immediate or early prosthetic loading, allowing faster functional and aesthetic rehabilitation while maintaining biomechanical stability.",
  },
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
