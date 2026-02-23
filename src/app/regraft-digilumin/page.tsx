import Hero from '@/components/sections/regraft-digilumin/Hero';
import Overview from '@/components/sections/regraft-digilumin/Overview';
import Benefits from '@/components/sections/regraft-digilumin/Benefits';
import TheProcess from '@/components/sections/regraft-digilumin/TheProcess';
import Testimonials from '@/components/sections/regraft-digilumin/Testimonials';
import OurBlogs from '@/components/sections/regraft-digilumin/OurBlogs';
import DigiluminFaq from '@/components/sections/regraft-digilumin/DigiluminFaq';

export const metadata = {
    title: 'Regraft Digilumin – Surgical Guide Implant | Graft3D',
    description: 'Regraft Digilumin surgical guides are custom-made, 3D-printed computer-guided tools for accurate dental implant placement and oral restorations.',
};

export default function RegraftDigiluminPage() {
    return (
        <main className="min-h-screen bg-white">
            <Hero />
            <Overview />
            <Benefits />
            <TheProcess />
            <Testimonials />
            <OurBlogs />
            <DigiluminFaq />
        </main>
    );
}
