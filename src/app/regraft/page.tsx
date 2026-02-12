import React from 'react';
import RegraftHero from '@/components/sections/regraft/RegraftHero';
import RegraftAbout from '@/components/sections/regraft/RegraftAbout';
import RegraftFeatures from '@/components/sections/regraft/RegraftFeatures';

export default function RegraftPage() {
    return (
        <main>
            <RegraftHero />
            <RegraftAbout />
            <RegraftFeatures />
        </main>
    );
}
