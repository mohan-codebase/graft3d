import Hero from "@/components/sections/polyetheretherketone-peek/Hero";
import Overview from "@/components/sections/polyetheretherketone-peek/Overview";
import KeyFeatures from "@/components/sections/polyetheretherketone-peek/KeyFeatures";
import MechanicalProperties from "@/components/sections/polyetheretherketone-peek/MechanicalProperties";
import ThermalProperties from "@/components/sections/polyetheretherketone-peek/ThermalProperties";
import Biocompatibility from "@/components/sections/polyetheretherketone-peek/Biocompatibility";
import PrintingProcessability from "@/components/sections/polyetheretherketone-peek/PrintingProcessability";
import ChemicalResistance from "@/components/sections/polyetheretherketone-peek/ChemicalResistance";
import Applications from "@/components/sections/polyetheretherketone-peek/Applications";
import Certifications from "@/components/sections/polyetheretherketone-peek/Certifications";
import Sterilisation from "@/components/sections/polyetheretherketone-peek/Sterilisation";
import FaqSection from "@/components/sections/polyetheretherketone-peek/FaqSection";
import CtaSection from "@/components/sections/polyetheretherketone-peek/CtaSection";

export const metadata = {
  title: "Polyetheretherketone PEEK for Advanced Medical Use",
  description:
    "Polyetheretherketone PEEK is a high-performance medical-grade material used for implants and healthcare applications. Meet Us Live Online or Get a Quote Now!",
};

export default function PolyetheretherketonePeekPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Overview />
      <KeyFeatures />
      <MechanicalProperties />
      <ThermalProperties />
      <Biocompatibility />
      <PrintingProcessability />
      <ChemicalResistance />
      <Applications />
      <Certifications />
      <Sterilisation />
      <CtaSection />
            <FaqSection />

    </main>
  );
}
