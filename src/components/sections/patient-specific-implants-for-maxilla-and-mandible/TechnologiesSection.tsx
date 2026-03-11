import React from "react";
import Image from "next/image";

const TechnologiesSection = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Digital and Manufacturing Technologies Used */}
          <div className="overflow-hidden rounded-3xl bg-gradient-to-b from-[#e3f1ff] to-[#9ac5ff] p-6 text-white shadow-md">
            <div className="relative mb-4 aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white/10">
              <Image
                src="/images/patient-specific-implants-for-maxilla-and-mandible/Frame-427319437.png"
                alt="Digital and manufacturing technologies used"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="mb-4 text-xl font-extrabold tracking-tight md:text-2xl">
              Digital and Manufacturing Technologies Used
            </h2>
            <ul className="space-y-3 text-sm md:text-base leading-relaxed">
              <li>
                <span className="font-semibold">
                  Preoperative Planning Tools:
                </span>{" "}
                Advanced imaging (CT/CBCT) and digital implant planning
                software for anatomical assessment and surgical simulation.
              </li>
              <li>
                <span className="font-semibold">3D Printing Devices:</span> Used
                to manufacture patient-specific guides and implants directly
                from segmented anatomical data.
              </li>
              <li>
                <span className="font-semibold">CAD/CAM Software:</span>{" "}
                Computer‑aided design and manufacturing platforms for implant
                customization and precise guide fabrication.
              </li>
            </ul>
          </div>

          {/* Armamentarium for Patient Specific Implants */}
          <div className="overflow-hidden rounded-3xl bg-gradient-to-b from-[#e3f1ff] to-[#9ac5ff] p-6 text-white shadow-md">
            <div className="relative mb-4 aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white/10">
              <Image
                src="/images/patient-specific-implants-for-maxilla-and-mandible/Frame-427319438.png"
                alt="Armamentarium for patient specific implants"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="mb-4 text-xl font-extrabold tracking-tight md:text-2xl">
              Armamentarium for Patient Specific Implants
            </h2>
            <ul className="space-y-3 text-sm md:text-base leading-relaxed">
              <li>
                <span className="font-semibold">
                  Surgical &amp; Osteotomy Instruments:
                </span>{" "}
                Scalpels, elevators, retractors, osteotomes, piezosurgery
                units, saws, burs and bone files for safe access and
                mobilisation.
              </li>
              <li>
                <span className="font-semibold">
                  PSI Placement &amp; Fixation Tools:
                </span>{" "}
                Custom cutting/drilling guides, patient‑specific plates or
                meshes, drills with depth control, torque‑limiting drivers and a
                range of monocortical and bicortical screws for rigid fixation.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;

