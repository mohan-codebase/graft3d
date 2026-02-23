import Image from "next/image";

const primaryFeatures = [
  {
    title: "High Temperature Capability for Medical Polymers",
    description:
      "Dual nozzles reaching 500°C, a build chamber heated up to 90°C, and a print bed up to 160°C enable stable processing of demanding biomaterials such as PEEK and PEEK-CF, ensuring mechanical performance, and biocompatibility for implant use.",
    icon: "/images/funmat-pro-410/tech-high-temp.png",
  },
  {
    title: "Implant Grade Accuracy & Strength",
    description:
      "The enclosed, uniformly heated chamber allows precise dimensional stability, critical when printing patient-matched implants which can affect surgical outcomes.",
    icon: "/images/funmat-pro-410/tech-accuracy.png",
  },
  {
    title: "Dual Extrusion for Biocompatible Support Structures",
    description:
      "Supports complex implant geometries with water-soluble support materials, leaving clean surfaces safe for patient contact without post processing damage.",
    icon: "/images/funmat-pro-410/tech-dual-extrusion.png",
  },
];

const secondaryFeatures = [
  {
    title: "Smart Monitoring & Fail safety",
    description:
      "Integrated nozzle clog detection, filament runout sensors, humidity control, and automated leveling improve print reliability, minimizing human error and reducing waste in regulated hospital environments.",
    icon: "/images/funmat-pro-410/tech-monitoring.png",
  },
  {
    title: "Sterilization & Compliance Focus",
    description:
      "Printed parts are compatible with common sterilization methods such as autoclaving, gamma irradiation, and ethylene oxide, supporting safe use in surgical settings.",
    icon: "/images/funmat-pro-410/tech-sterilization.png",
  },
];

const compliancePoints = [
  "ISO 13485 Ready – Supporting facilities working under certified medical device manufacturing environments.",
  "FDA Guidance – Suitable materials and processes for regulatory submission of additively manufactured implants.",
  "CE-Marking Support – Facilitates production aligned with European medical device directives.",
];

const TechnologyAdvantage = () => {
  return (
    <section className="w-full py-16 bg-[#f5f9ff]">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-3xl font-bold text-black mb-2">Technology Advantage</h2>
        <p className="text-gray-600 mb-10">Designed for Medical Grade Precision</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {primaryFeatures.map((item) => (
            <div key={item.title} className="bg-white rounded-2xl shadow-sm p-6">
              <div className="relative w-16 h-16 mb-4">
                <Image src={item.icon} alt={item.title} fill className="object-contain" />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {secondaryFeatures.map((item) => (
            <div key={item.title} className="bg-white rounded-2xl shadow-sm p-6">
              <div className="relative w-16 h-16 mb-4">
                <Image src={item.icon} alt={item.title} fill className="object-contain" />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="relative w-16 h-16">
              <Image src="/images/funmat-pro-410/tech-compliance.png" alt="Compliance and standards" fill className="object-contain" />
            </div>
            <h3 className="text-lg font-semibold text-black">Compliance & Standards in Medical 3D Printing</h3>
          </div>
          <p className="text-gray-600 mb-4">
            The FUNMAT PRO 410 enables hospitals and medical manufacturers to achieve compliance
            with international standards for medical device production:
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            {compliancePoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TechnologyAdvantage;
