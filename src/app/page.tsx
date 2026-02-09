import BannerCarousel from "../components/sections/home/BannerCarousel";
import AboutSection from "../components/sections/home/AboutSection";
import StatsSection from "../components/sections/home/StatsSection";
import ProductsSection from "../components/sections/home/ProductsSection";
import PackagesSection from "../components/sections/home/PackagesSection";
import ServicesSection from "../components/sections/home/ServicesSection";
import DemoSection from "../components/sections/home/DemoSection";
import ProcessSection from "../components/sections/home/ProcessSection";
import CustomersSection from "../components/sections/home/CustomersSection";
import TestimonialsSection from "../components/sections/home/TestimonialsSection";
import BlogsSection from "../components/sections/home/BlogsSection";
import HomeFaqSection from "../components/sections/home/HomeFaqSection";

export default function Home() {
  return (
    <main>
      <BannerCarousel  />
      <AboutSection />
      <StatsSection />
      <DemoSection />
      <ProductsSection />
      <PackagesSection />
      <ServicesSection />
      <ProcessSection />
      <CustomersSection />

      <TestimonialsSection />
      <BlogsSection />
      <HomeFaqSection />
    </main>
  );
}
