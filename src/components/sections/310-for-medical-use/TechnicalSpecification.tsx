import Image from "next/image";

const specs = [
    {
        c1: "Build Volume (Single Nozzle)",
        c2: "305 × 260 × 260 mm",
        c3: "Number of Materials",
        c4: "35 (Open Material System)"
    },
    {
        c1: "Build Volume (Dual Nozzle)",
        c2: "260 × 260 × 260 mm",
        c3: "Nozzle Diameter",
        c4: "0.4 / 0.6 / 0.8 mm"
    },
    {
        c1: "Max Print Speed",
        c2: "Up to 500 mm/s",
        c3: "Filament Diameter",
        c4: "1.75 mm"
    },
    {
        c1: "Chamber Temperature",
        c2: "Up to 100°C",
        c3: "Machine Dimensions (W×D×H)",
        c4: "700 × 655 × 750 mm"
    },
    {
        c1: "Dry Boxes",
        c2: "2 × 3 kg, up to 65°C",
        c3: "Machine Weight",
        c4: "80 kg"
    }
];

export default function TechnicalSpecification() {
    return (
        <section className="w-full bg-white py-8 lg:py-16">
            <div className="container-fluid mx-auto px-4 lg:px-12 xl:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
                    
                    <div className="lg:col-span-3 flex flex-col h-full">
                        <h2 className="text-[#1A1A1A] font-bold text-[1.5rem] leading-tight mb-8 whitespace-pre-line shrink-0">
                            {"Technical\nSpecifications"}
                        </h2>
                        <div className="relative w-full grow min-h-62.5 rounded-lg overflow-hidden">
                            <Image
                                src="/images/310-for-medical-use/technical-specification-image.png"
                                alt="Technical Specifications"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="lg:col-span-9 overflow-x-auto rounded-lg border border-[#E5E7EB]">
                        <table className="w-full min-w-175 border-collapse">
                            <tbody>
                                {specs.map((row, idx) => (
                                    <tr key={idx}>
                                        <td className="border border-[#E5E7EB] bg-[#F9FAFB] p-4 lg:p-6 text-[#1A1A1A] font-bold text-[1rem] w-1/4 align-middle">
                                            {row.c1}
                                        </td>
                                        <td className="border border-[#E5E7EB] bg-[#FFFFFF] p-4 lg:p-6 text-[#1A1A1A] font-normal text-[1rem] w-1/4 align-middle">
                                            {row.c2}
                                        </td>
                                        <td className="border border-[#E5E7EB] bg-[#F9FAFB] p-4 lg:p-6 text-[#1A1A1A] font-bold text-[1rem] w-1/4 align-middle">
                                            {row.c3}
                                        </td>
                                        <td className="border border-[#E5E7EB] bg-[#FFFFFF] p-4 lg:p-6 text-[#1A1A1A] font-normal text-[1rem] w-1/4 align-middle">
                                            {row.c4}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </section>
    );
}
