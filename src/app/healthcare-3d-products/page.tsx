import React from 'react';
import type { Metadata } from 'next';
import PageHero from '@/components/common/PageHero';
import ProductCategories from '@/components/sections/healthcare-3d-products/ProductCategories';
import FeaturedProducts from '@/components/sections/healthcare-3d-products/FeaturedProducts';
import ProductTabs from '@/components/sections/healthcare-3d-products/ProductTabs';

export const metadata: Metadata = {
    title: 'Healthcare 3D Products | Medical 3D Scanners, Printers & Software | Graft3D',
    description: 'Explore our comprehensive range of healthcare 3D products including medical 3D scanners, 3D printers, and specialized software for hospitals and medical professionals.',
    openGraph: {
        title: 'Healthcare 3D Products | Graft3D',
        description: 'Medical 3D scanners, printers, and software for healthcare professionals.',
        images: [
            {
                url: '/opengraph-image.png',
                width: 1200,
                height: 630,
                alt: 'Healthcare 3D Products - Graft3D',
            },
        ],
    },
};

export default function Healthcare3DProductsPage() {
    return (
        <main className="w-full">
            {/* Hero Section */}
            <PageHero
                title="HEALTHCARE"
                titleAccent="3D PRODUCTS"
                description="3D SCANNER | 3D PRINTER | 3D SOFTWARE"
            />

            {/* Product Categories Section */}
            <ProductCategories />

            {/* Featured Products Section */}
            <FeaturedProducts />

            {/* Product Tabs Section */}
            <ProductTabs />

        </main>
    );
}
