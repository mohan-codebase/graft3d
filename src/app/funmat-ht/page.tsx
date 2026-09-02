import type { Metadata } from 'next';
import Hero from '@/components/sections/funmat-ht/Hero';
import HeroStat from '@/components/sections/funmat-ht/HeroStat';
import MedicalApplications from '@/components/sections/funmat-ht/MedicalApplications';
import TechnicalSpecification from '@/components/sections/funmat-ht/TechnicalSpecification';
import Materials from '@/components/sections/funmat-ht/Materials';
import DigitalToMedicalPart from '@/components/sections/funmat-ht/DigitalToMedicalPart';
import WhyChooseGraft3D from '@/components/sections/funmat-ht/WhyChooseGraft3D';
import TrustedSupport from '@/components/sections/funmat-ht/TrustedSupport';
import ContactSection from '@/components/sections/funmat-ht/ContactSection';

export const metadata: Metadata = {
    title: 'FUNMAT HT Medical 3D Printer | Graft3D',
    description: 'FUNMAT HT is a high-performance industrial 3D printer engineered for advanced medical applications.',
    robots: { index: true, follow: true },
};

export default function Page() {
    return (
        <main>
            <Hero />
            <HeroStat />
            <MedicalApplications />
            <TechnicalSpecification />
            <Materials />
            <DigitalToMedicalPart />
            <WhyChooseGraft3D />
            <TrustedSupport />
            <ContactSection />
        </main>
    );
}
