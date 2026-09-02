import Image from "next/image";

export default function TechnicalSpecification() {
    return (
        <section className="w-full bg-white py-8 lg:py-16">
            <div className="container-fluid mx-auto px-4 lg:px-12 xl:px-24">
                
                <div 
                    className="w-full bg-white rounded-lg flex flex-col lg:flex-row border border-[#E5E7EB]"
                    style={{ boxShadow: '5px 0px 0px 0px #0000000D, 0px 4px 4px 0px #00000040' }}
                >
                    
                    {/* Left Div */}
                    <div className="flex-1 p-6 lg:p-8 xl:p-10 flex flex-col gap-8 border-b lg:border-b-0 lg:border-r border-[#E5E7EB]">
                        <h2 className="text-[#1B6DB1] font-bold text-[1.5rem] text-center uppercase">
                            ADVANCED TECHNOLOGY
                        </h2>
                        
                        <div className="flex flex-col gap-8 mt-2">
                            {[
                                {
                                    img: "advanced-1.svg",
                                    title: "High-Temperature System",
                                    desc: "450°C nozzle, 90°C chamber and 160°C build plate for high-performance materials."
                                },
                                {
                                    img: "advanced-2.svg",
                                    title: "Industrial Reliability",
                                    desc: "Reinforced structure with precise motion control for consistent results."
                                },
                                {
                                    img: "advanced-3.svg",
                                    title: "Dual Extrusion Ready",
                                    desc: "Supports soluble and breakaway materials for complex geometries."
                                },
                                {
                                    img: "advanced-4.svg",
                                    title: "Smart Filament Management",
                                    desc: "Sealed filament chamber with active drying for consistent quality."
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="w-8 h-8 shrink-0 relative mt-1">
                                        <Image src={`/images/funmat-ht/${item.img}`} alt={item.title} fill className="object-contain" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="text-[#1E1E1E] font-semibold text-[1.25rem] mb-1 leading-snug">
                                            {item.title}
                                        </h3>
                                        <p className="text-[#4B5563] font-medium text-[1rem] leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Middle Div */}
                    <div className="flex-[1.2] p-6 lg:p-8 xl:p-10 flex flex-col gap-8 border-b lg:border-b-0 lg:border-r border-[#E5E7EB]">
                        <h2 className="text-[#1B6DB1] font-bold text-[1.5rem] text-center uppercase">
                            TECHNICAL SPECIFICATIONS
                        </h2>

                        <div className="w-full border border-[#F3F4F6] rounded-md overflow-hidden flex flex-col mt-2">
                            {[
                                { key: "Technology", val: "FFF (Fused Filament Fabrication)" },
                                { key: "Nozzle Temperature", val: "Max. 450 °C (842 °F)" },
                                { key: "Heated Chamber Temperature", val: "Max. 90 °C (194 °F)" },
                                { key: "Build Plate Temperature", val: "Max. 160 °C (320 °F)" },
                                { key: "Build Volume (W×D×H)", val: "260 × 260 × 260 mm (10.2 × 10.2 × 10.2 in)" },
                                { key: "Layer Resolution", val: "50 - 400 microns" },
                                { key: "Positioning Accuracy (XY)", val: "11 microns" },
                                { key: "Z-axis Accuracy", val: "2.5 microns" },
                                { key: "Extruder", val: "High performance dual gear extruder" },
                                { key: "Filament Diameter", val: "1.75 mm" },
                                { key: "Compatible File Format", val: "STL, OBJ, 3MF, STEP" },
                                { key: "Connectivity", val: "USB, Wi-Fi, Ethernet" },
                            ].map((row, idx) => (
                                <div 
                                    key={idx} 
                                    className={`flex flex-col sm:flex-row sm:items-center py-3 px-4 border-b border-[#F3F4F6] last:border-b-0 ${idx % 2 === 0 ? 'bg-white' : 'bg-[#F8F9FA]'}`}
                                >
                                    <div className="sm:w-[45%] text-[#374151] font-bold text-[1rem] pr-4">
                                        {row.key}
                                    </div>
                                    <div className="sm:w-[55%] text-[#1E1E1E] font-semibold text-[1rem] mt-1 sm:mt-0">
                                        {row.val}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Div */}
                    <div className="flex-1 p-6 lg:p-8 xl:p-10 flex flex-col gap-8">
                        <h2 className="text-[#1B6DB1] font-bold text-[1.5rem] text-center uppercase">
                            MACHINE PARAMETERS
                        </h2>

                        <div className="w-full relative aspect-square max-w-70 mx-auto mt-2">
                            <Image 
                                src="/images/complete-end-to-end-medical-3d-printing-solutions/hero-image.png" 
                                alt="Machine Parameters" 
                                fill 
                                className="object-contain" 
                            />
                        </div>

                        <div className="flex flex-col gap-4 mt-2">
                            {[
                                { key: "Machine Size\n(W×D×H):", val: "530 × 490 × 645 mm" },
                                { key: "Machine\nWeight:", val: "~68 kg" },
                                { key: "Power\nRequirement:", val: "200 - 240 VAC,\n50/60 Hz" },
                                { key: "Power\nConsumption:", val: "3.5 kW (Max)" }
                            ].map((row, idx) => (
                                <div key={idx} className="flex gap-4 items-start">
                                    <div className="w-[45%] text-[#1B6DB1] font-semibold text-[1rem] whitespace-pre-line leading-tight">
                                        {row.key}
                                    </div>
                                    <div className="w-[55%] text-[#1E1E1E] font-medium text-[1rem] whitespace-pre-line leading-tight">
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
