import React from 'react';
import Image from 'next/image';

const products = [
    {
        title: 'D2P - Bone,Vascular,Teeth',
        image: 'https://graft3d.com/wp-content/uploads/2022/02/D2P-Image-for-Related-Product.png',
        href: '/dicom-to-3d-model-conversion-software'
    },
    {
        title: 'Einscan HX',
        image: 'https://graft3d.com/wp-content/uploads/2022/03/Einscan-Hx-e1651750527325.png',
        href: '#'
    },
    {
        title: 'Haptic Device',
        image: 'https://graft3d.com/wp-content/uploads/2021/12/HapticDevice-1.jpg',
        href: '/geomagic-touch-x-haptic-device'
    }
];

const RelatedProducts = () => {
    return (
        <div className="py-16 bg-[#f4f7f9]" id="related-products">
            <div className="max-w-[1400px] mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#1171bd] mb-10 uppercase">
                    RELATED PRODUCTS
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="relative aspect-[4/3] w-full mb-6 relative">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-contain"
                                    unoptimized
                                />
                            </div>
                            <a
                                href={product.href}
                                className="bg-[#1e73be] hover:bg-[#165a94] text-white font-bold py-3 px-8 rounded-sm transition-all shadow-sm text-[16px] text-center"
                            >
                                {product.title}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RelatedProducts;
