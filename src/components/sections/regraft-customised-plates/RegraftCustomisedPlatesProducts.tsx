import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

const products = [
    {
        title: 'Regraft POS - Virtual Surgical Planning in Orthognathic Surgery',
        description:
            'VSP plates combine 3D imaging simulation and CAD/CAM technology to deliver precision in jaw repositioning procedures',
        image: '/images/regraft-customised-plates/image-2.png',
        alt: 'Regraft POS - Virtual Surgical Planning in Orthognathic Surgery',
        reverse: false,
        link: '/virtual-surgical-planning-in-orthognathic-surgery'
    },
    {
        title: 'Regraft PFT - Virtual Surgical Planning & Plates for Facial Trauma',
        description:
            'VSP and 3D Printed titanium plates are transforming facial trauma care with digitally guided reconstruction of complex mid-face fractures with sub-millimeter accuracy',
        image: '/images/regraft-customised-plates/image-1.png',
        alt: 'Regraft PFT - Virtual Surgical Planning & Plates for Facial Trauma',
        reverse: true,
        link: '/virtual-surgical-planning-in-orthognathic-surgery'
    },
];

export default function RegraftCustomisedPlatesProducts() {
    return (
        <section className="mx-auto max-w-[1400px] px-4 py-16">
            {products.map((product, index) => (
                <div key={product.title} className={index === 0 ? 'mb-20' : ''}>
                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                        <div className={product.reverse ? '' : 'order-1 lg:order-2'}>
                            <div className="relative h-[400px] overflow-hidden rounded-lg">
                                <Image
                                    src={product.image}
                                    alt={product.alt}
                                    fill
                                    className="bg-white p-5 object-contain"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </div>

                        <div className={product.reverse ? '' : 'order-2 lg:order-1'}>
                            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">{product.title}</h2>
                            <p className="mb-6 text-lg leading-relaxed text-gray-700">{product.description}</p>
                            <Link href={product.link || "/contact-us"}>
                                <Button className="px-8 py-3 text-lg font-semibold">Know more</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}
