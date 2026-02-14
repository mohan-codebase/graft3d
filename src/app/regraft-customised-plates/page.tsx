import type { Metadata } from 'next';
import RegraftCustomisedPlatesHero from '@/components/sections/regraft-customised-plates/RegraftCustomisedPlatesHero';
import RegraftCustomisedPlatesProducts from '@/components/sections/regraft-customised-plates/RegraftCustomisedPlatesProducts';

export const metadata: Metadata = {
    title: 'Regraft Customised Plates | Virtual Surgical Planning | Graft3D',
    description: 'VSP plates combine 3D imaging simulation and CAD/CAM technology for precision in jaw repositioning and facial trauma procedures.',
};

export default function RegraftCustomisedPlatesPage() {
    return (
        <main className="min-h-screen">
            <RegraftCustomisedPlatesHero />
            <RegraftCustomisedPlatesProducts />
        </main>
    );
}
