import type { Metadata } from 'next';
import Hero from '@/components/sections/310-for-medical-use/Hero';
import HeroStat from '@/components/sections/310-for-medical-use/HeroStat';
import MedicalGradePeekPrinting from '@/components/sections/310-for-medical-use/MedicalGradePeekPrinting';
import FeatureBento from '@/components/sections/310-for-medical-use/FeatureBento';
import EngineeredForCriticalMedicalApplication from '@/components/sections/310-for-medical-use/EngineeredForCriticalMedicalApplication';
import TechnicalSpecification from '@/components/sections/310-for-medical-use/TechnicalSpecification';
import YourIndiaImplementationJourney from '@/components/sections/310-for-medical-use/YourIndiaImplementationJourney';
import WhyBuyFromGraft3D from '@/components/sections/310-for-medical-use/WhyBuyFromGraft3D';
import Faq from '@/components/sections/310-for-medical-use/Faq';
import ContactForm from '@/components/sections/310-for-medical-use/ContactForm';

export const metadata: Metadata = {
    title: 'FUNMAT PRO 310 APOLLO | Graft3D',
    description: 'Medical-Grade PEEK 3D Printing. Trusted for Life. High Performance. Clinical Confidence.',
    robots: { index: true, follow: true },
};

export default function FUNMATPro310Page() {
    return (
        <main>
            <Hero />
            <HeroStat />
            <MedicalGradePeekPrinting />
            <Faq />
            <FeatureBento />
            <EngineeredForCriticalMedicalApplication />
            <TechnicalSpecification />
            <YourIndiaImplementationJourney />
            <WhyBuyFromGraft3D />
            <ContactForm />
        </main>
    );
}
