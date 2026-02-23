import Image from "next/image";

const properties = [
  "Tensile Strength: 52 MPa",
  "Elongation at Break: 21%",
  "Flexural Strength: 82 MPa",
  "Flexural Modulus: 2193 MPa (2.193 GPa)",
  "Heat Deflection Temperature (HDT @ 66 psi): 143.7 °C",
  "Young’s Modulus: Approximately 2.13 to 2.25 GPa",
  "Impact Strength: 26.9 to 76.8 J/m",
];

const MechanicalProperties = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="relative w-full h-[320px] lg:h-[460px]">
          <Image
            src="/images/polycarbonate-pc/Group.png"
            alt="Mechanical properties of polycarbonate"
            fill
            className="object-contain"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-primary mb-6">Mechanical properties</h2>
          <ul className="list-disc pl-6 text-[#464646] space-y-3">
            {properties.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MechanicalProperties;
