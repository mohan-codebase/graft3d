import BannerCarousel from "../components/sections/home/BannerCarousel";
import AboutSection from "../components/sections/home/AboutSection";
import StatsSection from "../components/sections/home/StatsSection";
import ProductsSection from "../components/sections/home/ProductsSection";
import PackagesSection from "../components/sections/home/PackagesSection";
import ServicesSection from "../components/sections/home/ServicesSection";
import DemoSection from "../components/sections/home/DemoSection";

export default function Home() {
  return (
    <main>
      <BannerCarousel />
      <AboutSection />
      <StatsSection />
      <DemoSection />
      <ProductsSection />
      <PackagesSection />
      <ServicesSection />
    </main>
  );
}
