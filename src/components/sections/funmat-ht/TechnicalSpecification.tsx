import Image from "next/image";

export default function TechnicalSpecification() {
    return (
        <section className="w-full bg-white py-8 lg:py-16">
            <div className="container-fluid mx-auto px-4 lg:px-12 xl:px-24">
                <div
                    className="flex w-full flex-col rounded-lg border border-[#E5E7EB] bg-white lg:flex-row"
                    style={{
                        boxShadow:
                            "5px 0px 0px 0px #0000000D, 0px 4px 4px 0px #00000040",
                    }}
                >
                    {/* Left Div */}
                    <div className="flex flex-1 flex-col gap-8 border-b border-[#E5E7EB] p-6 lg:border-r lg:border-b-0 lg:p-8 xl:p-10">
                        <h2 className="text-center text-[1.5rem] font-bold text-[#1B6DB1] uppercase">
                            ADVANCED TECHNOLOGY
                        </h2>

                        <div className="mt-2 flex flex-col gap-8">
                            {[
                                {
                                    img: "advanced-1.svg",
                                    title: "High-Temperature System",
                                    desc: "450°C nozzle, 90°C chamber and 160°C build plate for high-performance materials.",
                                },
                                {
                                    img: "advanced-2.svg",
                                    title: "Industrial Reliability",
                                    desc: "Reinforced structure with precise motion control for consistent results.",
                                },
                                {
                                    img: "advanced-3.svg",
                                    title: "Dual Extrusion Ready",
                                    desc: "Supports soluble and breakaway materials for complex geometries.",
                                },
                                {
                                    img: "advanced-4.svg",
                                    title: "Smart Filament Management",
                                    desc: "Sealed filament chamber with active drying for consistent quality.",
                                },
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="relative mt-1 h-8 w-8 shrink-0">
                                        <Image
                                            src={`/images/funmat-ht/${item.img}`}
                                            alt={item.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="mb-1 text-[1.25rem] leading-snug font-semibold text-[#1E1E1E]">
                                            {item.title}
                                        </h3>
                                        <p className="text-[1rem] leading-relaxed font-medium text-[#4B5563]">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Middle Div */}
                    <div className="flex flex-[1.2] flex-col gap-8 border-b border-[#E5E7EB] p-6 lg:border-r lg:border-b-0 lg:p-8 xl:p-10">
                        <h2 className="text-center text-[1.5rem] font-bold text-[#1B6DB1] uppercase">
                            TECHNICAL SPECIFICATIONS
                        </h2>

                        <div className="mt-2 flex w-full flex-col overflow-hidden rounded-md border border-[#F3F4F6]">
                            {[
                                {
                                    key: "Technology",
                                    val: "FFF (Fused Filament Fabrication)",
                                },
                                {
                                    key: "Nozzle Temperature",
                                    val: "Max. 160 °C (320 °F)",
                                },
                                {
                                    key: "Heated Chamber Temperature",
                                    val: "Max. 90 °C (194 °F)",
                                },
                                {
                                    key: "Build Plate Temperature",
                                    val: "Max. 160 °C (320 °F)",
                                },
                                {
                                    key: "Build Volume (W×D×H)",
                                    val: "260 × 260 × 260 mm (10.2 × 10.2 × 10.2 in)",
                                },
                                {
                                    key: "Layer Resolution",
                                    val: "50 - 400 microns",
                                },
                                {
                                    key: "Positioning Accuracy (XY)",
                                    val: "11 microns",
                                },
                                { key: "Z-axis Accuracy", val: "2.5 microns" },
                                {
                                    key: "Extruder",
                                    val: "High performance dual gear extruder",
                                },
                                { key: "Filament Diameter", val: "1.75 mm" },
                                {
                                    key: "Compatible File Format",
                                    val: "STL, OBJ, 3MF, STEP",
                                },
                                {
                                    key: "Connectivity",
                                    val: "USB, Wi-Fi, Ethernet",
                                },
                            ].map((row, idx) => (
                                <div
                                    key={idx}
                                    className={`flex flex-col border-b border-[#F3F4F6] px-4 py-3 last:border-b-0 sm:flex-row sm:items-center ${idx % 2 === 0 ? "bg-white" : "bg-[#F8F9FA]"}`}
                                >
                                    <div className="pr-4 text-[1rem] font-bold text-[#374151] sm:w-[45%]">
                                        {row.key}
                                    </div>
                                    <div className="mt-1 text-[1rem] font-semibold text-[#1E1E1E] sm:mt-0 sm:w-[55%]">
                                        {row.val}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Div */}
                    <div className="flex flex-1 flex-col gap-8 p-6 lg:p-8 xl:p-10">
                        <h2 className="text-center text-[1.5rem] font-bold text-[#1B6DB1] uppercase">
                            MACHINE PARAMETERS
                        </h2>

                        <div className="relative mx-auto mt-2 aspect-square w-full max-w-70">
                            <Image
                                src="/images/complete-end-to-end-medical-3d-printing-solutions/hero-image.png"
                                alt="Machine Parameters"
                                fill
                                className="object-contain"
                            />
                        </div>

                        <div className="mt-2 flex flex-col gap-4">
                            {[
                                {
                                    key: "Machine Size\n(W×D×H):",
                                    val: "530 × 490 × 645 mm",
                                },
                                { key: "Machine\nWeight:", val: "~68 kg" },
                                {
                                    key: "Power\nRequirement:",
                                    val: "200 - 240 VAC,\n50/60 Hz",
                                },
                                {
                                    key: "Power\nConsumption:",
                                    val: "3.5 kW (Max)",
                                },
                            ].map((row, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-start gap-4"
                                >
                                    <div className="w-[45%] text-[1rem] leading-tight font-semibold whitespace-pre-line text-[#1B6DB1]">
                                        {row.key}
                                    </div>
                                    <div className="w-[55%] text-[1rem] leading-tight font-medium whitespace-pre-line text-[#1E1E1E]">
                                        {row.val}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
