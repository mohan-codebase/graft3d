import React from 'react';
import { ShieldCheck, Lightbulb, Puzzle, CheckCircle2 } from 'lucide-react';

const features = [
    {
        title: "Expertise that Matters",
        description: "At Graft3D, we bring decades of clinical experience in medical technology solutions, ensuring precision in every procedure. Our expertise spans medical image segmentation, 3D printing healthcare solutions, and comprehensive clinical reports that empower surgical teams with high confidence and precision.",
        icon: <ShieldCheck className="w-10 h-10 text-[#166AAF]" />
    },
    {
        title: "Pioneering Innovations",
        description: "Graft3D stands at the forefront of innovation, consistently introducing pioneering 3D printing technology and patient-specific medical solutions. From 3D printed surgical guides to anatomical models, our innovations are designed for the most complex medical procedures.",
        icon: <Lightbulb className="w-10 h-10 text-[#166AAF]" />
    },
    {
        title: "Tailored Solutions",
        description: "We understand the diverse needs of modern medicine, from surgery care to treatment planning and tailored solutions. Our range of specialized products is designed to seamlessly integrate into medical workflows and provide high clinical confidence.",
        icon: <Puzzle className="w-10 h-10 text-[#166AAF]" />
    },
    {
        title: "Quality Assurance",
        description: "Quality is at the core of everything we do, which is why we follow stringent quality checks to maintain precision and accuracy in every medical solution we provide. We are committed to achieving surgical excellence and patient satisfaction with absolute confidence.",
        icon: <CheckCircle2 className="w-10 h-10 text-[#166AAF]" />
    }
];

const WhyChoose = () => {
    return (
        <section className="relative w-full py-20 bg-secondary overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#dcecfc]/20 -skew-x-12 transform translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-[#166AAF]/5 -skew-x-12 transform -translate-x-1/2"></div>

            <div className="max-w-[1400px] mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
                        Why Choose Graft3D ?
                    </h2>
                    <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        At Graft3D, we are committed to providing the highest precision and innovation in medical technology solutions, ensuring precision in every procedure. Our expertise spans medical image segmentation, 3D printing healthcare solutions, and comprehensive clinical reports that empower surgical teams with high confidence and precision.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                    {features.map((feature, index) => (
                        <div key={index} className="flex gap-6 group">
                            <div className="flex-shrink-0">
                                <div className="p-4 bg-white rounded-2xl shadow-lg border border-gray-100 ">
                                    {feature.icon}
                                </div>
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-xl font-bold text-[#166AAF] group-hover:translate-x-1 transition-transform duration-300">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
