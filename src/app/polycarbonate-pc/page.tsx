import Hero from "@/components/sections/polycarbonate-pc/Hero";
import Overview from "@/components/sections/polycarbonate-pc/Overview";
import KeyMaterialHighlights from "@/components/sections/polycarbonate-pc/KeyMaterialHighlights";
import MechanicalProperties from "@/components/sections/polycarbonate-pc/MechanicalProperties";
import Applications from "@/components/sections/polycarbonate-pc/Applications";
import PrintingProcessability from "@/components/sections/polycarbonate-pc/PrintingProcessability";
import Sterilisation from "@/components/sections/polycarbonate-pc/Sterilisation";
import Certifications from "@/components/sections/polycarbonate-pc/Certifications";
import CtaSection from "@/components/sections/polycarbonate-pc/CtaSection";
import FaqSection from "@/components/sections/polycarbonate-pc/FaqSection";

export const metadata = {
  title: "Advanced Polycarbonate PC Material for 3D Printing",
  description:
    "Polycarbonate PC 3D print material with high impact resistance, transparency, and strength for medical 3D printing. Meet Us Live Online or Get a Quote Now.",
};

export default function PolycarbonatePcPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Overview />
      <KeyMaterialHighlights />
      <MechanicalProperties />
      <Applications />
      <PrintingProcessability />
      <Sterilisation />
      <Certifications />
      <CtaSection />
      <FaqSection />
    </main>
  );
}
