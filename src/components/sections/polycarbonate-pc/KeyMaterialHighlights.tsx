const highlights = [
  "High Optical Transparency: Polycarbonate is naturally transparent and can transmit over 90% of visible light, making it suitable for applications where clarity is essential.",
  "Exceptional Impact Resistance: Recognized for outstanding toughness, PC offers very high impact resistance and is virtually unbreakable under normal usage conditions.",
  "High Rigidity and Structural Strength: Medical PC filament exhibits high flexural strength and modulus, providing rigid, dimensionally stable parts suitable for precision medical devices.",
  "Excellent Chemical Resistance: Resistant to most acids and many chemicals found in laboratory and medical environments, ensuring durability and safety in challenging applications.",
  "Heat and UV Resistance: Maintains mechanical properties and optical clarity at elevated temperatures (up to 135–147°C) and offers good resistance to degradation from ultraviolet light.",
];

const KeyMaterialHighlights = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="bg-[#EDF7FF] rounded-[48px] lg:rounded-[80px] px-6 py-10 lg:px-10 lg:py-14 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 items-center">
          <div className="bg-white rounded-[40px] px-6 py-8 text-center">
            <h2 className="text-3xl font-bold text-primary leading-tight">
              Key
              <br />
              Material
              <br />
              Highlights
            </h2>
          </div>
          <ul className="list-disc pl-6 text-[#464646] space-y-3">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default KeyMaterialHighlights;
