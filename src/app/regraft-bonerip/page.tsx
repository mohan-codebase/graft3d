import BoneripHero from '@/components/sections/regraft/BoneripHero';
import BoneripAbout from '@/components/sections/regraft/BoneripAbout';
import BoneripFeatures from '@/components/sections/regraft/BoneripFeatures';
import BoneripHealthcareBranches from '@/components/sections/regraft/BoneripHealthcareBranches';
import BoneripBlogs from '@/components/sections/regraft/BoneripBlogs';
import BoneripFAQ from '@/components/sections/regraft/BoneripFAQ';

export const metadata = {
    title: 'ReGraft Bonerip | 3D-Printed Anatomical Models | Graft3D',
    description: 'High-quality custom and standard 3D-printed anatomical models designed for training, simulation, and mock-up surgeries.',
};

export default function RegraftBoneripPage() {
    return (
        <main>
            <BoneripHero />
            <BoneripAbout />
            <BoneripFeatures />
            <BoneripBlogs />
            <BoneripHealthcareBranches />
            <BoneripFAQ />
            {/* Additional sections can be added here later */}
        </main>
    );
}
