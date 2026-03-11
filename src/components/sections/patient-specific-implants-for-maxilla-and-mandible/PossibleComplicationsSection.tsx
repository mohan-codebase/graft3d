import React from "react";
import Image from "next/image";

const PossibleComplicationsSection = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 md:px-8 lg:flex-row">
        {/* Image */}
        <div className="flex flex-1 items-center justify-center">
          <div className="relative aspect-[4/3] w-full max-w-[360px] md:max-w-[420px]">
            <Image
              src="/images/patient-specific-implants-for-maxilla-and-mandible/Frame-427319441.png"
              alt="3D visualisation of patient specific implant"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-1 flex-col justify-center">
          <h2 className="mb-6 text-3xl font-bold text-[#005696]">
            Possible Complications
          </h2>
          <ul className="space-y-4 text-lg leading-relaxed text-gray-700">
            <li>
              Soft tissue inflammation around the implant can occur, potentially
              leading to marginal bone loss if not managed with good hygiene and
              follow‑up.
            </li>
            <li>
              Other reported issues include local discomfort, bleeding,
              infection and delayed wound healing in medically compromised
              cases.
            </li>
            <li>
              High masticatory loads and unfavourable occlusion may reduce
              long‑term durability if the prosthetic plan is not carefully
              balanced.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PossibleComplicationsSection;

