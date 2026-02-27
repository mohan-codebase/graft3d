import Image from "next/image";

const points = [
  "Custom fit: Customized orbital implants accurately mimic the patient's orbital anatomy.",
  "Symmetry restoration: The globe and orbit are correctly balanced with digital mirroring.",
  "Reduced surgical time: No need for intraoperative bending or adjusting during the orbital surgery.",
  "Functional recovery : Useful for improving diplopia, enophthalmos and the malposition of the eye.",
  "Cosmetic results: Provides a natural, lifted appearance and facial symmetry.",
];

const BenefitsOf3DPrinting = () => {
  return (
    <section className="w-full py-16 bg-white space-y-16">
      {/* Benefits Card */}
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="bg-[#f2f6ff] border border-blue-100 rounded-[2rem] p-8 md:p-12 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0056b3] mb-8 leading-tight">Benefits of 3D Printing in Orbital Surgery</h2>
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
                src="/images/orbital-reconstruction/benefits-of-3d-printing.png"
                alt="Benefits Of 3D Printing Orbital Surgery"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Materials and Future Trends Card */}
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="bg-[#f2f6ff] border border-blue-100 rounded-[2rem] p-8 md:p-12 overflow-hidden">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0056b3] mb-10 leading-tight">Materials in 3D Printing Orbital Implants</h2>
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_1.5fr] gap-12 items-start">
            <div className="relative w-full h-[400px] lg:h-[600px] xl:h-full min-h-[400px] bg-[#0056b3] rounded-3xl overflow-hidden flex items-center justify-center">
              <div className="relative w-[90%] h-[90%]">
                <Image
                  src="/images/orbital-reconstruction/materials-in-3d-printing.png"
                  alt="Materials In 3D Printing"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            <div className="space-y-10">
              {/* Titanium */}
              <div>
                <h3 className="text-2xl font-bold text-black mb-4">Titanium 3D Printed Implants</h3>
                <ul className="space-y-3">
                  {[
                    "Useful in large or weight bearing orbital wall defects.",
                    "Offer excellent strength, lasting durability and long term stability.",
                    "The porous structure of the titanium promotes the integration of tissue and inhibits migration of the implant.",
                    "Limitation: May produce imaging artifacts on CT/MRI."
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="min-w-1.5 min-h-1.5 max-w-1.5 max-h-1.5 mt-2 rounded-full bg-[#0056b3]" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* PEEK */}
              <div>
                <h3 className="text-2xl font-bold text-black mb-4">Polyetheretherketone (PEEK) 3D Printed Implants</h3>
                <ul className="space-y-3">
                  {[
                    "Light, radio translucent and biomechanically resemble the bone.",
                    "Ideal for cosmetically sensitive orbital reconstruction when postoperative imaging is essential.",
                    "Concave-convex surface increases friction force for a perfect fit and natural shape.",
                    "Limitations: Lower osseointegration than titanium implants."
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="min-w-1.5 min-h-1.5 max-w-1.5 max-h-1.5 mt-2 rounded-full bg-[#0056b3]" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Future Trends */}
              <div>
                <h3 className="text-2xl font-bold text-black mb-4">Future Trends in Orbital Reconstruction with 3D Printing</h3>
                <ul className="space-y-3 mb-6">
                  {[
                    "Hybrid orbital implants: Titanium mesh with PEEK for strength and aesthetics.",
                    "AI and AR/VR Reinforcement: Real time surgery navigation and AI assisted surgical planning for precision.",
                    "Bioactive scaffolds: Manufacturing of regenerating 3D printed orbital implants promotes faster bone healing and symmetry."
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="min-w-1.5 min-h-1.5 max-w-1.5 max-h-1.5 mt-2 rounded-full bg-[#0056b3]" />
                      <span className="text-gray-700" dangerouslySetInnerHTML={{ __html: point.replace(/^([^:]+):/, "<strong>$1:</strong>") }} />
                    </li>
                  ))}
                </ul>
                <p className="text-gray-700 text-sm italic border-t border-gray-200 pt-4">
                  The 3D printing in orbital reconstruction has changed the paradigm in maxillofacial surgery. Custom orbital implants like titanium and PEEK are allowing surgeons to achieve more accurate, symmetric and superior patient outcomes. In the future, hybrid orbital implant designs, AI assisted surgical planning and regenerative biomaterials will further drive coordinating function competence with excellent cosmetic results in the orbital reconstruction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsOf3DPrinting;
