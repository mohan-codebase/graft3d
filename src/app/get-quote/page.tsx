import Hero from "@/components/sections/get-quote/Hero";
import EnquirySection from "@/components/sections/get-quote/EnquirySection";

export const metadata = {
  title: "Get quote - Graft 3D",
  description: "For any information please Call us at +91-9840478347 | +91 6374 410 703",
};

export default function GetQuotePage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <div className="h-12" />
      <EnquirySection />
    </main>
  );
}
