import React from "react";
import ArtiboneHero from "@/components/sections/regraft-artibone/ArtiboneHero";
import TmjSection from "@/components/sections/regraft-artibone/TmjSection";
import RrtcSection from "@/components/sections/regraft-artibone/RrtcSection";
import ObrSection from "@/components/sections/regraft-artibone/ObrSection";
import CvrSection from "@/components/sections/regraft-artibone/CvrSection";
import RrmmSection from "@/components/sections/regraft-artibone/RrmmSection";
import BaSection from "@/components/sections/regraft-artibone/BaSection";
import FdSection from "@/components/sections/regraft-artibone/FdSection";
import MaterialsSection from "@/components/sections/regraft-artibone/MaterialsSection";

export const metadata = {
    title: "Regraft Artibone - Graft 3D",
    description: "Artibone represents the next generation of digitally planned, patient-specific bone regrafts designed to restore anatomy, function, and aesthetics.",
};

export default function RegraftArtibonePage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between w-full font-poppins">
            <ArtiboneHero />
            <TmjSection />
            <RrtcSection />
            <ObrSection />
            <CvrSection />
            <RrmmSection />
            <BaSection />
            <FdSection />
            <MaterialsSection />
        </main>
    );
}
