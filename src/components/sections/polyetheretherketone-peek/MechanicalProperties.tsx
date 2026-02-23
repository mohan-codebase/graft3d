import Image from "next/image";

const metrics = [
  {
    title: "Flexural Strength",
    value: "151 MPa (ASTM D790)",
    icon: "/images/polyetheretherketone-peek/mechanical-flexural-strength.png",
  },
  {
    title: "Flexural Modulus",
    value: "3.57 GPa (ASTM D790)",
    icon: "/images/polyetheretherketone-peek/mechanical-flexural-modulus.png",
  },
  {
    title: "Excellent chemical resistance, especially to acids.",
    value: "",
    icon: "/images/polyetheretherketone-peek/mechanical-chemical-resistance.png",
  },
];

const MechanicalProperties = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="relative w-full h-[360px] lg:h-[520px]">
          <Image
            src="/images/polyetheretherketone-peek/mechanical-peek.png"
            alt="Outstanding mechanical properties"
            fill
            className="object-contain"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-black mb-6">Outstanding mechanical properties</h2>
          <div className="space-y-6">
            {metrics.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="relative w-10 h-10 flex-shrink-0">
                  <Image src={item.icon} alt={item.title} fill className="object-contain" />
                </div>
                <div>
                  <p className="text-base font-semibold text-black">{item.title}</p>
                  {item.value && <p className="text-gray-600 text-sm">{item.value}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MechanicalProperties;
