const features = [
  "Produced with medical-grade PEEK resin and precise engineered processes to ensure absolute quality.",
  "Meets stringent requirements for permanent implant use.",
  "3D-printed PEEK components exhibit strength and durability on par with moulded parts.",
];

const KeyFeatures = () => {
  return (
    <section className="w-full py-16 bg-[#f5f9ff]">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-3xl font-bold text-black mb-6">Key Features</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-3">
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default KeyFeatures;
