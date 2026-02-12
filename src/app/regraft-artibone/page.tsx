import React from 'react';
import ArtiboneHero from '@/components/sections/regraft/ArtiboneHero';
import ArtiboneFeatures from '@/components/sections/regraft/ArtiboneFeatures';
import ArtiboneMaterials from '@/components/sections/regraft/ArtiboneMaterials';

export const metadata = {
    title: 'ReGraft Artibone | Patient-Specific Bone Reconstruction | Graft3D',
    description: 'Artibone represents the next generation of digitally planned, patient-specific bone regrafts designed to restore anatomy, function, and aesthetics.',
};

export default function RegraftArtibonePage() {
    return (
        <main>
            <ArtiboneHero />
            <ArtiboneFeatures />
            <ArtiboneMaterials />
            {/* Additional sections can be added here later */}
        </main>
    );
}
