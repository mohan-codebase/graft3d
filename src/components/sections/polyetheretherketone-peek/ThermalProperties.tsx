import Image from "next/image";

const transitions = [
  {
    label: "Glass transition",
    value: "143°C",
    icon: "/images/polyetheretherketone-peek/thermal-glass-transition.png",
  },
  {
    label: "Melt temperature",
    value: "343°C",
    icon: "/images/polyetheretherketone-peek/thermal-melt-temperature.png",
  },
  {
    label: "Flow temperature",
    value: "400°C",
    icon: "/images/polyetheretherketone-peek/thermal-flow-temperature.png",
  },
  {
    label: "Recrystallization",
    value: "280–320°C",
    icon: "/images/polyetheretherketone-peek/thermal-recrystallization.png",
  },
];

const ThermalProperties = () => {
  return (
    <section className="w-full py-16 bg-[#f5f9ff]">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-3xl font-bold text-black mb-2">Thermal Properties of PEEK</h2>
        <p className="text-gray-600 mb-8">Displays four main thermal transitions</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {transitions.map((item) => (
            <div key={item.label} className="bg-white rounded-2xl shadow-sm p-6 text-center">
              <div className="relative w-16 h-16 mx-auto mb-4">
                <Image src={item.icon} alt={item.label} fill className="object-contain" />
              </div>
              <p className="text-black font-semibold">{item.label}</p>
              <p className="text-primary font-bold text-lg">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThermalProperties;
