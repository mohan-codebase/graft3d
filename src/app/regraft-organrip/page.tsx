import React from 'react';
import OrganripHero from '@/components/sections/regraft/OrganripHero';
import OrganripAbout from '@/components/sections/regraft/OrganripAbout';
import OrganripInfoCards from '@/components/sections/regraft/OrganripInfoCards';

export const metadata = {
  alternates: {
    canonical: '/regraft-organrip',
  },
    title: 'ReGraft Organrip | Soft Tissue Replicas | Graft3D',
    description: 'Organrip uses advanced 3D printing to create lifelike soft organ replicas for surgical simulation, preoperative planning, and educational training.',
    robots: { index: true, follow: true },
};

export default function RegraftOrganripPage() {
    return (
        <main>
            <OrganripHero />
            <OrganripAbout />
            <OrganripInfoCards />
        </main>
    );
}
