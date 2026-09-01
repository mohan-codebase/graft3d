import Image from "next/image";
import { Check } from "lucide-react";

export default function FeatureBento() {
    return (
        <section className="w-full bg-white py-8 lg:py-16">
            <div className="container-fluid mx-auto px-4 lg:px-12 xl:px-16 space-y-6">
                
                {/* ROW 1 */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                    {/* Card 1 (3 cols) */}
                    <div className="lg:col-span-3 flex flex-col p-6 rounded-lg"
                         style={{ borderTop: '4px solid #166AAF', background: 'radial-gradient(806.52% 198.85% at 57.8% -42.13%, #88C9FF 0%, #F8FCFF 27.99%)' }}>
                        <h3 className="text-[#166AAF] font-bold text-[1.875rem] mb-2 leading-tight">
                            PEEK Materials for<br/>Medical Applications
                        </h3>
                        <p className="text-[#01101B] font-normal text-[1.18rem] mb-6">
                            Engineered for safety, strength and long-term reliability.
                        </p>
                        <div className="relative w-full aspect-4/3 mt-auto">
                            <Image src="/images/310-for-medical-use/features-bento-1.png" alt="PEEK Materials" fill className="object-contain object-bottom" />
                        </div>
                    </div>
                    
                    {/* Cards 2-5 (9 cols) */}
                    <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                        <MaterialCard 
                            title="PEEK"
                            subTitle="Medical Grade"
                            image="/images/310-for-medical-use/features-bento-2.png"
                            desc={"Biocompatible\nHigh Chemical Resistance\nSterilizable – Autoclave / ETO / Gamma\nRadiolucent (X-ray transparent)"}
                            badges={["Spinal Cage", "Dental", "Trauma Implants", "Patient-Specific Implants", "Orthopedic Prosthetics"]}
                        />
                        <MaterialCard 
                            title="PMMA"
                            subTitle="Polymethyl Methacrylate"
                            image="/images/310-for-medical-use/features-bento-3.png"
                            desc={"Optical Clarity\nHigh Biocompatibility\nLightweight\nImpact Resistant\nEasy to Finish/Polish"}
                            badges={["Dental Crowns", "Provisional Restorations", "Diagnostic Models", "Surgical Guides", "Clear Hearing Aid Shells"]}
                        />
                        <MaterialCard 
                            title="PLLA"
                            subTitle="Poly-L-lactic acid"
                            image="/images/310-for-medical-use/features-bento-4.png"
                            desc={"Bioabsorbable\nFully Resorbable\nExcellent Cell Adhesion\nTunable Degradation Rate\nHigh Initial Strength"}
                            badges={["Bone Anchors", "Fracture Pins", "Bioresorbable Scaffolds", "Dental Guided Bone Regeneration", "Tissue Engineering Constructs"]}
                        />
                        <MaterialCard 
                            title="Polycarbonate"
                            subTitle="Medical-Grade PC"
                            image="/images/310-for-medical-use/features-bento-5.png"
                            desc={"Excellent Impact Resistance\nMedical-Grade (USP Class VI)\nBiocompatible (non-toxic)\nHigh Heat Deflection (135°C+)\nGood Dimensional Stability"}
                            badges={["Surgical Instruments", "Medical Device Enclosures", "Diagnostic Equipment Components", "Fluid Management Connector", "Rigid Sterilization Trays"]}
                        />
                    </div>
                </div>

                {/* ROW 2 */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                    {/* Card 1 (4 cols) */}
                    <div className="lg:col-span-4 flex flex-col p-6 rounded-lg"
                         style={{ borderTop: '4px solid #166AAF', background: 'radial-gradient(806.52% 198.85% at 57.8% -42.13%, #88C9FF 0%, #F8FCFF 27.99%)' }}>
                        <h3 className="font-bold text-[1.875rem] mb-2 leading-tight">
                            <span className="text-[#166AAF]">4× Faster Medical</span><br/>
                            <span className="text-[#01101B]">Parts Production</span>
                        </h3>
                        <p className="text-[#01101B] font-normal text-[1.18rem] mb-6">
                            Print more patient-specific parts in less time.
                        </p>
                        <div className="relative w-full aspect-4/3 mt-auto">
                            <Image src="/images/310-for-medical-use/features-bento-6.png" alt="Faster Production" fill className="object-contain object-bottom" />
                        </div>
                    </div>
                    
                    {/* Card 2 (4 cols) */}
                    <div className="lg:col-span-4 flex flex-col p-6 rounded-lg"
                         style={{ borderTop: '4px solid #166AAF', background: 'radial-gradient(806.52% 198.85% at 57.8% -42.13%, #88C9FF 0%, #F8FCFF 27.99%)' }}>
                        <h3 className="font-bold text-[1.875rem] mb-6 leading-tight">
                            <span className="text-[#166AAF]">Dual IDEX – More</span><br/>
                            <span className="text-[#01101B]">Parts, Less Time</span>
                        </h3>
                        <div className="relative w-full grow min-h-50">
                            <Image src="/images/310-for-medical-use/features-bento-7.png" alt="Dual IDEX" fill className="object-contain object-bottom" />
                        </div>
                    </div>

                    {/* Cards 3 & 4 (4 cols, flex col) */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        <div className="flex-1 flex flex-col sm:flex-row items-center p-6 rounded-lg gap-6"
                             style={{ borderTop: '4px solid #166AAF', background: 'radial-gradient(806.52% 198.85% at 57.8% -42.13%, #88C9FF 0%, #F8FCFF 27.99%)' }}>
                            <div className="relative w-full sm:w-1/2 aspect-square">
                                <Image src="/images/310-for-medical-use/features-bento-8.png" alt="Automatic Nozzle Cleaning" fill className="object-contain" />
                            </div>
                            <div className="w-full sm:w-1/2 flex flex-col justify-center text-center">
                                <h3 className="text-[#01101B] font-bold text-[1.5rem] leading-tight mb-2">Automatic<br/>Nozzle Cleaning</h3>
                                <p className="text-[#01101B] font-normal text-[1rem]">Consistent print quality,<br/>less downtime.</p>
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col sm:flex-row items-center p-6 rounded-lg gap-6"
                             style={{ borderTop: '4px solid #166AAF', background: 'radial-gradient(806.52% 198.85% at 57.8% -42.13%, #88C9FF 0%, #F8FCFF 27.99%)' }}>
                            <div className="relative w-full sm:w-1/2 aspect-square">
                                <Image src="/images/310-for-medical-use/features-bento-9.png" alt="No Prime Tower" fill className="object-contain" />
                            </div>
                            <div className="w-full sm:w-1/2 flex flex-col justify-center text-center">
                                <h3 className="text-[#01101B] font-bold text-[1.5rem] leading-tight mb-2">No Prime Tower</h3>
                                <p className="text-[#01101B] font-normal text-[1rem]">Material saving, cleaner<br/>workflow.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ROW 3 */}
                <div className="w-full bg-[#1E1E1E] rounded-xl p-6 lg:p-8">
                    <h3 className="text-white font-bold text-[1.5rem] mb-6">Built for Continuous Production</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
                        
                        {/* Div 1 */}
                        <div className="lg:col-span-2 border border-[#374151] bg-[#1F2229] rounded-lg p-4 flex flex-col items-center justify-between gap-4">
                            <h4 className="text-[#E0E0E0] font-semibold text-[0.875rem] text-center">Dual 3 kg Dry Boxes</h4>
                            <div className="relative w-full aspect-4/3">
                                <Image src="/images/310-for-medical-use/features-bento-10.png" alt="Dry Boxes" fill className="object-contain" />
                            </div>
                            <p className="text-[#9CA3AF] font-normal text-[0.75rem] text-center">Keep filaments dry and ready.</p>
                        </div>
                        
                        {/* Div 2 */}
                        <div className="lg:col-span-2 border border-[#374151] bg-[#1F2229] rounded-lg p-4 flex flex-col items-center justify-between gap-4">
                            <h4 className="text-[#E0E0E0] font-semibold text-[0.875rem] text-center">65°C Active Drying</h4>
                            <div className="flex items-center gap-3">
                                <div className="relative w-6 h-12">
                                    <Image src="/images/310-for-medical-use/thermometer.svg" alt="Thermometer" fill className="object-contain" />
                                </div>
                                <span className="text-white font-bold text-[1.875rem]">65°C</span>
                            </div>
                            <p className="text-[#9CA3AF] font-normal text-[0.75rem] text-center">Stable, moisture-free printing.</p>
                        </div>

                        {/* Div 3 */}
                        <div className="lg:col-span-6 border border-[#374151] bg-[#1F2229] rounded-lg p-4 flex flex-col items-center justify-between gap-4">
                            <h4 className="text-[#E0E0E0] font-semibold text-[0.875rem] text-center">One-Week Unattended Production</h4>
                            <div className="w-full flex items-stretch border border-[#374151] rounded-lg overflow-hidden bg-transparent">
                                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                                    <div key={day} className={`flex-1 flex flex-col items-center py-3 ${i !== 6 ? 'border-r border-[#374151]' : ''}`}>
                                        <span className="text-white font-normal text-[0.75rem] mb-2">{day}</span>
                                        <Check className="text-[#166AAF]" size={16} strokeWidth={3} />
                                    </div>
                                ))}
                            </div>
                            <p className="text-[#9CA3AF] font-normal text-[0.75rem] text-center">Reliable long-duration jobs.</p>
                        </div>

                        {/* Div 4 */}
                        <div className="lg:col-span-2 border border-[#374151] bg-[#1F2229] rounded-lg p-4 flex flex-col items-center justify-between gap-4">
                            <h4 className="text-[#E0E0E0] font-semibold text-[0.875rem] text-center">RFID Filament Traceability</h4>
                            <div className="relative w-full aspect-4/3">
                                <Image src="/images/310-for-medical-use/features-bento-11.png" alt="RFID Traceability" fill className="object-contain" />
                            </div>
                            <p className="text-[#9CA3AF] font-normal text-[0.75rem] text-center">Smart filament identification.</p>
                        </div>

                    </div>
                </div>

                {/* ROW 4 */}
                <div className="w-full rounded-lg p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                     style={{ borderTop: '4px solid #166AAF', background: 'radial-gradient(806.52% 198.85% at 57.8% -42.13%, #88C9FF 0%, #F8FCFF 27.99%)' }}>
                    <div className="flex flex-col">
                        <h3 className="text-[#166AAF] font-bold text-[1.875rem] mb-4">INTAMQuality Dashboard</h3>
                        <p className="text-[#01101B] font-normal text-[1.1875rem] leading-relaxed">
                            INTAMQuality™ is a digital quality assurance software that continuously monitors and records real-time thermal, extrusion, and material data throughout a print. It generates automated process reports and batch-level traceability logs required for medical-grade device compliance and regulatory audits.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="relative w-full max-w-125 aspect-video mb-4">
                            <Image src="/images/310-for-medical-use/features-bento-12.png" alt="Dashboard" fill className="object-contain" />
                        </div>
                        <p className="text-black font-normal text-[1.25rem] text-center">
                            Real-time monitoring & alerts.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}

function MaterialCard({ title, subTitle, image, desc, badges }: { title: string, subTitle: string, image: string, desc: string, badges: string[] }) {
    return (
        <div className="flex flex-col p-5 rounded-lg h-full"
             style={{ borderTop: '4px solid #166AAF', background: 'radial-gradient(806.52% 198.85% at 57.8% -42.13%, #88C9FF 0%, #F8FCFF 27.99%)' }}>
            <h4 className="text-[#01101B] font-bold text-[1.5625rem] text-center">{title}</h4>
            <span className="text-[#01101B] font-normal text-[0.75rem] text-center block mb-4">{subTitle}</span>
            <div className="relative w-24 h-24 mx-auto mb-4 shrink-0">
                <Image src={image} alt={title} fill className="object-contain" />
            </div>
            <p className="text-[#01101B] font-normal text-[0.75rem] text-center whitespace-pre-line leading-relaxed mb-6">
                {desc}
            </p>
            <div className="mt-auto">
                <h5 className="text-[#01101B] font-bold text-[0.875rem] text-center mb-3">Applications</h5>
                <div className="flex flex-wrap gap-2 justify-center">
                    {badges.map((b, i) => (
                        <div key={i} className="bg-[#166AAF26] rounded-[50px] px-3 py-1">
                            <span className="text-[#166AAF] font-medium text-[0.75rem] text-center block leading-tight">{b}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
