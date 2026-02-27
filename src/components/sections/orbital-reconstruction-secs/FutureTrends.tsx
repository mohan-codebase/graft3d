import Image from "next/image";

const points = [
  "Hybrid orbital implants: Titanium mesh with PEEK for strength and aesthetics.",
"AI and AR/VR Reinforcement: Real time surgery navigation and AI assisted surgical planning for precision.",
"Bioactive scaffolds: Manufacturing of regenerating 3D printed orbital implants promotes faster bone healing and symmetry."
];

const FutureTrends = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-black mb-6">Future Trends in Orbital Reconstruction with 3D Printing</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-3">
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      <p>The 3D printing in orbital reconstruction has changed the paradigm in maxillofacial surgery. Custom orbital implants like titanium and PEEK are allowing surgeons to achieve more accurate, symmetric and superior patient outcomes. In the future, hybrid orbital implant designs, AI assisted surgical planning and regenerative biomaterials will further drive coordinating function competence with excellent cosmetic results in the orbital reconstruction.</p>
      </div>
    </section>
  );
};

export default FutureTrends;
