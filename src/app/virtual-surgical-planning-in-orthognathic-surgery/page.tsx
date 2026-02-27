import React from 'react';
import VspHeroSection from '@/components/sections/virtual-surgical-planning-in-orthognathic-surgery/VspHeroSection';
import VspOverview from '@/components/sections/virtual-surgical-planning-in-orthognathic-surgery/VspOverview';
import VspHowItWorksGrid from '@/components/sections/virtual-surgical-planning-in-orthognathic-surgery/VspHowItWorksGrid';
import VspBenefits from '@/components/sections/virtual-surgical-planning-in-orthognathic-surgery/VspBenefits';
import VspCta from '@/components/sections/virtual-surgical-planning-in-orthognathic-surgery/VspCta';
import VspFaqs from '@/components/sections/virtual-surgical-planning-in-orthognathic-surgery/VspFaqs';

export const metadata = {
    title: 'Virtual Surgical Planning (VSP) Plates in Orthognathic Surgery',
    description: 'Virtual surgical planning with VSP plates for orthognathic surgery improves accuracy and outcomes. Get precise surgical guides and planning support.',
    openGraph: {
        title: 'Virtual Surgical Planning (VSP) Plates in Orthognathic Surgery',
        description: 'Virtual surgical planning with VSP plates for orthognathic surgery improves accuracy and outcomes. Get precise surgical guides and planning support.',
        images: [{ url: '/images/virtual-surgical-planning-in-orthognathic-surgery/1-e1759564300946.png' }],
    }
};

export default function VirtualSurgicalPlanningPage() {
    return (
        <main className="min-h-screen bg-white">
            <VspHeroSection />
            <VspOverview />
            <VspHowItWorksGrid />
            <VspBenefits />
            <VspCta />
            <VspFaqs />
        </main>
    );
}
