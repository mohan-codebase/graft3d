import React from 'react';
import MaxillaHeroSection from '@/components/sections/reconstruction-of-resected-mandible-and-maxilla/MaxillaHeroSection';
import MaxillaOverview from '@/components/sections/reconstruction-of-resected-mandible-and-maxilla/MaxillaOverview';
import MaxillaDesignWorkflow from '@/components/sections/reconstruction-of-resected-mandible-and-maxilla/MaxillaDesignWorkflow';
import MaxillaClinicalApplications from '@/components/sections/reconstruction-of-resected-mandible-and-maxilla/MaxillaClinicalApplications';
import MaxillaAdvantagesGrid from '@/components/sections/reconstruction-of-resected-mandible-and-maxilla/MaxillaAdvantagesGrid';
import MaxillaCta from '@/components/sections/reconstruction-of-resected-mandible-and-maxilla/MaxillaCta';
import MaxillaFaqs from '@/components/sections/reconstruction-of-resected-mandible-and-maxilla/MaxillaFaqs';

export const metadata = {
    title: 'Reconstruction of Resected Mandible and Maxilla',
    description: 'Reconstruction of resected mandible and maxilla with custom 3D-printed implants and surgical planning for precise anatomical restoration and better outcomes.',
    openGraph: {
        title: 'Reconstruction of Resected Mandible and Maxilla',
        description: 'Reconstruction of resected mandible and maxilla with custom 3D-printed implants and surgical planning for precise anatomical restoration and better outcomes.',
        images: [{ url: '/images/reconstruction-of-resected-mandible-and-maxilla/Frame-427319419.png' }],
    }
};

export default function ReconstructionOfResectedMandibleAndMaxillaPage() {
    return (
        <main className="min-h-screen bg-white">
            <MaxillaHeroSection />
            <MaxillaOverview />
            <MaxillaDesignWorkflow />
            <MaxillaClinicalApplications />
            <MaxillaAdvantagesGrid />
            <MaxillaCta />
            <MaxillaFaqs />
        </main>
    );
}
