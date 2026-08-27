import Hero from "@/components/sections/asthi-bone-like-3d-printed-training-models/Hero";
import OverviewBenefits from "@/components/sections/asthi-bone-like-3d-printed-training-models/OverviewBenefits";
import RangeSection from "@/components/sections/asthi-bone-like-3d-printed-training-models/RangeSection";
import VideosSection from "@/components/sections/asthi-bone-like-3d-printed-training-models/VideosSection";
import BlogsSection from "@/components/sections/asthi-bone-like-3d-printed-training-models/BlogsSection";
import FaqSection from "@/components/sections/asthi-bone-like-3d-printed-training-models/FaqSection";
import { Metadata } from "next";

export const metadata : Metadata = {
  alternates: {
    canonical: '/asthi-bone-like-3d-printed-training-models',
  },
  title: "Asthi - Bone-Like 3D Printed Training Models - Graft 3D",
  description: "Discover Asthi bone-like 3D printed training models for realistic surgical education, orthopedic training, medical simulation, and hands-on clinical practic",
  robots: { index: true, follow: true },
};

export default function AsthiTrainingModelsPage() {
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
