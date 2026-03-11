import React from "react";
import Image from "next/image";

const Overview = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 md:px-8 lg:flex-row">
        {/* Text */}
        <div className="flex-1">
          <h2 className="mb-6 text-3xl font-bold text-[#005696]">Overview</h2>
          <p className="mb-4 text-lg leading-relaxed text-gray-700">
            Restoration of anatomical form and function in severely resorbed
            maxilla and mandible is challenging. Traditional grafting and
            plate-bending techniques often require extensive intraoperative
            adjustment, prolong surgery time and may lead to less predictable
            outcomes.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Patient specific implants (PSIs) use CT/CBCT-based virtual
            planning, CAD/CAM and 3D printing to create custom subperiosteal
            or framework implants that adapt precisely to the residual bone.
            This enables accurate transfer of the digital plan to the patient,
            improving stability, function and aesthetics in a single,
            well-controlled procedure.
          </p>
        </div>

        {/* Image */}
        <div className="flex flex-1 items-center justify-center">
          <div className="relative aspect-[4/3] w-full max-w-[360px] md:max-w-[420px]">
            <Image
              src="/images/patient-specific-implants-for-maxilla-and-mandible/Frame-427319434-1.png"
              alt="Overview of patient specific implants for maxilla and mandible"
              fill
              className="object-contain drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;

