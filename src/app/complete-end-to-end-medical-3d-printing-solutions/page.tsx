import type { Metadata } from 'next';
import Hero from '@/components/sections/complete-end-to-end-medical-3d-printing-solutions/Hero';
import HeroStat from '@/components/sections/complete-end-to-end-medical-3d-printing-solutions/HeroStat';
import TrustedMedicalWorkflow from '@/components/sections/complete-end-to-end-medical-3d-printing-solutions/TrustedMedicalWorkflow';
import Medical3DPrintingPackage from '@/components/sections/complete-end-to-end-medical-3d-printing-solutions/Medical3DPrintingPackage';
import Medical3DPrintingWorkflow from '@/components/sections/complete-end-to-end-medical-3d-printing-solutions/Medical3DPrintingWorkflow';
import OurMedical3DPrintingPackages from '@/components/sections/complete-end-to-end-medical-3d-printing-solutions/OurMedical3DPrintingPackages';
import TechnologyPartners from '@/components/sections/complete-end-to-end-medical-3d-printing-solutions/TechnologyPartners';
import Applications from '@/components/sections/complete-end-to-end-medical-3d-printing-solutions/Applications';
import Contact from '@/components/sections/complete-end-to-end-medical-3d-printing-solutions/Contact';

export const metadata: Metadata = {
    title: 'Complete End-to-End Medical 3D Printing Solutions | Graft3D',
    description: 'We design and deliver complete medical 3D printing packages that enable hospitals and healthcare innovators to create patient-specific, life-saving medical devices.',
    robots: { index: true, follow: true },
};

export default function CompleteEndToEndMedical3DPrintingSolutionsPage() {
    return (
        <main>
            <Hero />
            <HeroStat />
            <TrustedMedicalWorkflow />
            <Medical3DPrintingPackage />
            <Medical3DPrintingWorkflow />
            <OurMedical3DPrintingPackages />
            <TechnologyPartners />
            <Applications />
            <Contact />
        </main>
    );
}
