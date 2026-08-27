import Hero from "@/components/sections/regraft-bonerip-bone-like-printed-training-models/Hero";
import OverviewBenefits from "@/components/sections/regraft-bonerip-bone-like-printed-training-models/OverviewBenefits";
import RangeSection from "@/components/sections/regraft-bonerip-bone-like-printed-training-models/RangeSection";
import VideosSection from "@/components/sections/regraft-bonerip-bone-like-printed-training-models/VideosSection";
import BlogsSection from "@/components/sections/regraft-bonerip-bone-like-printed-training-models/BlogsSection";
import FaqSection from "@/components/sections/regraft-bonerip-bone-like-printed-training-models/FaqSection";
import { Metadata } from "next";

export const metadata : Metadata = {
  alternates: {
    canonical: '/regraft-bonerip-bone-like-printed-training-models',
  },
  title: "ReGraft Bonerip Bone-Like 3D Printed Training Models",
  description: "ReGraft Bonerip is a bone-like 3D Printed standard Anatomical training model designed to provide medical professors and students with a lifelike and engaging surgical planning experience.",
  robots: { index: true, follow: true },
};

export default function RegraftBoneripTrainingModelsPage() {
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
