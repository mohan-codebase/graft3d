import Herosection from "@/components/sections/orbital-reconstruction-secs/Herosection";
import Overview from "@/components/sections/orbital-reconstruction-secs/Overview";
import RoleOf3DPrinting from "@/components/sections/orbital-reconstruction-secs/RoleOf3DPrinting";
import BenefitsOf3DPrinting from "@/components/sections/orbital-reconstruction-secs/BenefitsOf3DPrinting";
import IndicationsForPatient from "@/components/sections/orbital-reconstruction-secs/IndicationsForPatient";
import FaqSection from "@/components/sections/orbital-reconstruction-secs/FaqSection";
import Bottomcta from "@/components/sections/orbital-reconstruction-secs/Bottomcta";

export const metadata = {
  title: "3D Printing in Orbital Reconstruction",
};

export default function OrbitalReconstruction() {
  return (
    <main className="min-h-screen bg-white">
      <Herosection />

      <Overview />

      <RoleOf3DPrinting />

      <IndicationsForPatient />

      <BenefitsOf3DPrinting />

      <FaqSection />

      <Bottomcta />
    </main>
  );
}
