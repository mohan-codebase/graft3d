import Image from "next/image";

const methods = [
  "Ethylene Oxide (EtO): Effective for heat-sensitive materials.",
  "Hydrogen Peroxide Gas Plasma (HPGP): Strong microbicidal action, non-toxic.",
  "Gamma Irradiation (γ): Can enhance flexural strength by modifying surface wettability.",
];

const Sterilization = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="relative w-full h-[360px] lg:h-[520px]">
          <Image
            src="/images/polymethyl-methacrylate-pmma/DSC_4788-pmma-filament-spool-side-fla500.png"
            alt="Sterilization of PMMA devices"
            fill
            className="object-contain"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-black mb-4">Sterilization of PMMA Devices</h2>
          <p className="text-gray-700 mb-6">
            Not all sterilization methods are compatible with PMMA due to its thermal properties.
            Avoid autoclaving (steam/dry heat), since exceeding Tg can deform or fracture the
            material. It resists many chemicals but may be vulnerable to esters, ketones,
            chlorinated solvents, and aromatic hydrocarbons due to its ester groups. By selecting
            sterilization carefully, PMMA devices maintain mechanical integrity and
            biocompatibility.
          </p>
          <h4 className="text-lg font-semibold text-black mb-3">Recommended Methods</h4>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            {methods.map((method) => (
              <li key={method}>{method}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Sterilization;
