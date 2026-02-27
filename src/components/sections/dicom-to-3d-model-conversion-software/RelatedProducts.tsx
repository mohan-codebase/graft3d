import React from 'react';
import Image from 'next/image';

const products = [
    {
        title: 'Geomagic Freeform',
        image: 'https://graft3d.com/wp-content/uploads/2021/12/geomagic-freeform-01-3.png',
        href: '#'
    },
    {
        title: 'Einscan HX',
        image: 'https://graft3d.com/wp-content/uploads/2022/03/Einscan-Hx-e1651750527325.png',
        href: '/human-body-parts-3d-scanner'
    },
    {
        title: 'Haptic Device',
        image: 'https://graft3d.com/wp-content/uploads/2021/12/HapticDevice-1.jpg',
        href: '/geomagic-touch-x-haptic-device'
    }
];

const RelatedProducts = () => {
    return (
        <div className="py-16 border-b border-gray-100" id="related-products">
            <h2 className="text-3xl font-extrabold text-[#1171bd] mb-10 uppercase tracking-tight">
                Related Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {products.map((product, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="relative aspect-[4/3] w-full mb-6 bg-white rounded-lg overflow-hidden flex items-center justify-center p-4 shadow-sm border border-gray-100">
                            <Image
                                src={product.image}
                                alt={product.title}
                                fill
                                className="object-contain p-4"
                                unoptimized
                            />
                        </div>
                        <a
                            href={product.href}
                            className="bg-[#1e73be] hover:bg-[#165a94] text-white font-bold py-2.5 px-8 rounded transition-all shadow-sm text-[15px] min-w-[200px] text-center"
                        >
                            {product.title}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RelatedProducts;
