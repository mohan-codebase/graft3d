import Hero from "@/components/sections/regraft-bonerip-patient-specific-3d-printed-models/Hero";
import OverviewBenefits from "@/components/sections/regraft-bonerip-patient-specific-3d-printed-models/OverviewBenefits";
import RangeSection from "@/components/sections/regraft-bonerip-patient-specific-3d-printed-models/RangeSection";
import VideosSection from "@/components/sections/regraft-bonerip-patient-specific-3d-printed-models/VideosSection";
import BlogsSection from "@/components/sections/regraft-bonerip-patient-specific-3d-printed-models/BlogsSection";
import FaqSection from "@/components/sections/regraft-bonerip-patient-specific-3d-printed-models/FaqSection";

export const metadata = {
  alternates: {
    canonical: '/regraft-bonerip-patient-specific-3d-printed-models',
  },
  title: "ReGraft Bonerip Patient-Specific 3D Printed Models",
  description: "ReGraft Bonerip patient-specific 3D printed models help surgeons visualize anatomy, plan complex procedures and practice surgical techniques.",
  robots: { index: true, follow: true },
};

export default function RegraftBoneripPatientSpecificPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <OverviewBenefits />
      <RangeSection />
      <VideosSection />
      <BlogsSection />
      <FaqSection />
    </main>
  );
}
