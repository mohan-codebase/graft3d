import Hero from "@/components/sections/polymethyl-methacrylate-pmma/Hero";
import Overview from "@/components/sections/polymethyl-methacrylate-pmma/Overview";
import MechanicalProperties from "@/components/sections/polymethyl-methacrylate-pmma/MechanicalProperties";
import ClinicalApplications from "@/components/sections/polymethyl-methacrylate-pmma/ClinicalApplications";
import Sterilization from "@/components/sections/polymethyl-methacrylate-pmma/Sterilization";
import PrintingWithPmma from "@/components/sections/polymethyl-methacrylate-pmma/PrintingWithPmma";
import Certifications from "@/components/sections/polymethyl-methacrylate-pmma/Certifications";
import CtaSection from "@/components/sections/polymethyl-methacrylate-pmma/CtaSection";
import FaqSection from "@/components/sections/polymethyl-methacrylate-pmma/FaqSection";

export const metadata = {
  title: "Polymethyl Methacrylate PMMA 3D Print Material",
  description:
    "Polymethyl methacrylate PMMA 3D print material used for transparent, durable, and precise parts in medical, dental, and industrial 3D printing applications.",
};

export default function PolymethylMethacrylatePmmaPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Overview />
      <MechanicalProperties />
      <ClinicalApplications />
      <Sterilization />
      <PrintingWithPmma />
      <Certifications />
      <CtaSection />
      <FaqSection />
    </main>
  );
}
