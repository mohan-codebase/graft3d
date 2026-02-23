import Image from 'next/image';

const benefits = [
    { icon: '/images/regraft-digilumin/01.png', text: 'Excellent fit with high accuracy with same-day implant' },
    { icon: '/images/regraft-digilumin/02.png', text: 'Designing surgical guides in less than an hour and conducting same-day implants.' },
    { icon: '/images/regraft-digilumin/03.png', text: 'Designing surgical guides in less than an hour and conducting same-day implants.' },
    { icon: '/images/regraft-digilumin/04.png', text: 'Flapless Insertion of Implants can take place using 3D printing.' },
    { icon: '/images/regraft-digilumin/05.png', text: 'Avoiding Bone Fracture in areas where the jaw is thin.' },
    { icon: '/images/regraft-digilumin/06.png', text: 'With the use of High-resolution 3D printing, we can precisely target the placement of implants during surgery. Drill sleeves may be inserted directly on the printed Guide, with an excellent fit' },
];

const Benefits = () => {
    return (
        <section className="py-16 bg-[#e8f0fa]">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-[36px] font-bold text-[#041b4d]">Benefits</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-4 p-4">
                            <div className="relative w-14 h-14 flex-shrink-0">
                                <Image
                                    src={benefit.icon}
                                    alt={`Benefit ${index + 1}`}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-[14px] text-gray-800 leading-relaxed pt-1">
                                {benefit.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
