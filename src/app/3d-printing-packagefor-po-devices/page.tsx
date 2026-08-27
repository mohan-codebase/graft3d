import Benefits from "@/components/sections/3d-printing-packagefor-po-devices/Benefits";
import BlogsSection from "@/components/sections/3d-printing-packagefor-po-devices/BlogsSection";
import BookDemo from "@/components/sections/3d-printing-packagefor-po-devices/BookDemo";
import FaqSection from "@/components/sections/3d-printing-packagefor-po-devices/FaqSection";
import GallerySection from "@/components/sections/3d-printing-packagefor-po-devices/GallerySection";
import Hero from "@/components/sections/3d-printing-packagefor-po-devices/Hero";
import Overview from "@/components/sections/3d-printing-packagefor-po-devices/Overview";
import ProductBundles from "@/components/sections/3d-printing-packagefor-po-devices/ProductBundles";
import WorkflowPortfolio from "@/components/sections/3d-printing-packagefor-po-devices/WorkflowPortfolio";
import { Metadata } from "next";

export const metadata : Metadata = {
    alternates: {
        canonical: "/3d-printing-packagefor-po-devices",
    },
    title: "3D Printing Package for P&O Devices | Graft3D Healthcare",
    description:
        "Explore Graft3D's 3D Printing Package for PO Devices, delivering precise patient-specific orthotic and prosthetic solutions for improved comfort and fit.",
    robots: {
        index: true,
        follow: true,
    },
};

export default function PODevicesPage() {
    return (
        <main className="min-h-screen bg-white">
            <Hero />
            <Overview />
            <WorkflowPortfolio />
            <ProductBundles />
            <Benefits />
            <BookDemo />
            <BlogsSection />
            <GallerySection />
            <FaqSection />
        </main>
    );
}
