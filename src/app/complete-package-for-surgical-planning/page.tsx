import type { Metadata } from 'next';
import Hero from '@/components/sections/complete-package-for-surgical-planning/Hero';
import ACompleteWorkflow from '@/components/sections/complete-package-for-surgical-planning/ACompleteWorkflow';
import ClinicalApplication from '@/components/sections/complete-package-for-surgical-planning/ClinicalApplication';
import IdealFor from '@/components/sections/complete-package-for-surgical-planning/IdealFor';
import WhyGraft3DHealthcare from '@/components/sections/complete-package-for-surgical-planning/WhyGraft3DHealthcare';
import Faq from '@/components/sections/complete-package-for-surgical-planning/Faq';
import Contact from '@/components/sections/complete-package-for-surgical-planning/Contact';

export const metadata: Metadata = {
    title: 'Complete Package for Surgical Planning | Graft3D',
    description: 'The Graft3D Healthcare Surgical Planning Package combines industry-leading software, hardware, and 3D printing technologies into one seamless workflow.',
    robots: { index: true, follow: true },
};

export default function CompletePackageForSurgicalPlanningPage() {
    return (
        <main>
            <Hero />
            <ACompleteWorkflow />
            <ClinicalApplication />
            <IdealFor />
            <WhyGraft3DHealthcare />
            <Faq />
            <Contact />
        </main>
    );
}
