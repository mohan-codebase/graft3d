import Image from "next/image";

const dentalPoints = [
  "Prosthodontics: denture bases, artificial teeth, provisional crowns, retainers.",
  "Aesthetic advantages: Lightweight, natural looking, and cost effective compared to metallic alternatives.",
  "Cranial and maxillofacial surgery: Customized cranial implants for cranioplasty using CT based 3D models.",
  "3D printed implants for conditions such as gingival smile correction.",
];

const medicalPoints = [
  "Orthopedic solutions: Biocompatible bone cement and prosthetic devices.",
  "Ophthalmology: Intraocular lenses and contact lenses.",
  "Cardiovascular devices: Blood pumps, dialyzers, and microfluidic systems.",
  "Cancer & radiotherapy research: Fabrication of PMMA dosimeters to study radiation dosage distribution.",
];

const ClinicalApplications = () => {
  return (
    <section className="w-full py-16 bg-[#f5f9ff]">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-3xl font-bold text-black mb-10">Clinical Applications of PMMA</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="relative w-full h-[220px]">
              <Image
                src="/images/polymethyl-methacrylate-pmma/DSC_4809-pmma-filament-hand-5729x3000-1.png"
                alt="Dental applications"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-black mb-4">Dental Applications</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                {dentalPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="relative w-full h-[220px]">
              <Image
                src="/images/polymethyl-methacrylate-pmma/C3DE4849-C472-4DEB-949F-629565C267E0.png"
                alt="Medical and surgical applications"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-black mb-4">Medical & Surgical Applications</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                {medicalPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicalApplications;
