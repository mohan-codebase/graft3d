import { ArrowRightCircle } from "lucide-react";

const points = [
  "PC medical filament is uniquely compatible with all major sterilization techniques, including autoclaving, due to its high thermal and dimensional stability.",
  "Unlike lower-temperature polymers, PC retains impact resistance and optical properties even after multiple sterilization cycles.",
  "The ability to use multiple sterilization methods allows flexible hospital workflows and broadens the use of PC parts for implants, surgical instruments, microfluidic devices, and other clinical applications.",
];

const Sterilisation = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary text-center mb-8">Sterilisation</h2>
        <ul className="space-y-4 text-[#464646]">
          {points.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <ArrowRightCircle className="mt-1 text-primary flex-shrink-0" size={20} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Sterilisation;
