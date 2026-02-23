import Image from "next/image";

const properties = [
  "Transparency: Light transmission of 92–93%, higher than polycarbonate’s 86–89%.",
  "Glass Transition Temperature (Tg): 100–130 °C",
  "Density: 1.20 g/cm³",
  "Compressive Strength: 85–110 MPa",
  "Tensile Strength: 30–50 MPa",
  "Young’s Modulus: 2.4–3.3 GPa",
  "Refractive Index: 1.490",
  "Water Absorbency: 0.3%",
];

const MechanicalProperties = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-black mb-4">Mechanical Properties of PMMA</h2>
          <p className="text-gray-700 mb-6">
            PMMA is a transparent, amorphous thermoplastic belonging to the acrylate family. Its
            molecular structure (C₅O₂H₈)n, can exist in isotactic, syndiotactic, or atactic forms.
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            {properties.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="relative w-full h-[360px] lg:h-[520px]">
          <Image
            src="/images/polymethyl-methacrylate-pmma/hand-cranial-implant.png"
            alt="Mechanical properties of PMMA"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default MechanicalProperties;
