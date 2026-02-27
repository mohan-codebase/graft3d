import Image from "next/image";

const points = [
  "Orbital fractures: In cases of correction of the orbital floor defects, medial or lateral wall and blow-out fracture.",
  "Secondary deformity reduction: Treatment of enophthalmos, hypoglobus and asymmetry post healing of the fracture.",
  "Congenital craniofacial diseases: Orbital reconstruction in conditions like crouzon syndrome and treacher collins syndromes.",
  "Oncologic resection: Orbital volume restoration post tumor removal.",
];

const IndicationsForPatient = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="bg-[#f2f6ff] border border-blue-100 rounded-[2rem] p-8 md:p-12 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0056b3] mb-8 leading-tight">Indications for Patient Specific Orbital Implants</h2>
              <ul className="space-y-6">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-4">
                    <span className="min-w-2 min-h-2 max-w-2 max-h-2 mt-2 rounded-full bg-[#0056b3]" />
                    <span className="text-gray-700 font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: point.replace(/^([^:]+):/, "<strong>$1:</strong>") }} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative w-full h-[360px] lg:h-[460px]">
              <Image
                src="/images/orbital-reconstruction/indications-for-patient.png"
                alt="Indications For Patient"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndicationsForPatient;
