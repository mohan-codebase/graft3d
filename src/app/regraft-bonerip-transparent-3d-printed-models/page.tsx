import Hero from "@/components/sections/regraft-bonerip-transparent-3d-printed-models/Hero";
import OverviewBenefits from "@/components/sections/regraft-bonerip-transparent-3d-printed-models/OverviewBenefits";
import RangeSection from "@/components/sections/regraft-bonerip-transparent-3d-printed-models/RangeSection";
import VideosSection from "@/components/sections/regraft-bonerip-transparent-3d-printed-models/VideosSection";
import BlogsSection from "@/components/sections/regraft-bonerip-transparent-3d-printed-models/BlogsSection";
import FaqSection from "@/components/sections/regraft-bonerip-transparent-3d-printed-models/FaqSection";
import { Metadata } from "next";

export const metadata : Metadata = {
  alternates: {
    canonical: '/regraft-bonerip-transparent-3d-printed-models',
  },
  title: "ReGraft Bonerip Transparent 3D Printed Anatomical Models",
  description: "Discover ReGraft Bonerip transparent 3D printed anatomical models for enhanced visualization, surgical training and understanding of complex anatomy.",
  robots: { index: true, follow: true },
};

export default function RegraftBoneripTransparentPage() {
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
