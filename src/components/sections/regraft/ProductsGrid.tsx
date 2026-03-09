import React from 'react';
import Image from 'next/image';

const products = [
    { id: 1, title: 'Temporomandibular Joint', image: '/images/regraft-product/regraft-pro1.png' },
    { id: 2, title: 'Resection and reconstruction', image: '/images/regraft-product/regraft-pro2.png' },
    { id: 3, title: 'Anatomical models', image: '/images/regraft-product/regraft-pro3.png' },
    { id: 4, title: 'Cranial Vault Reconstruction', image: '/images/regraft-product/regraft-pro4.png' },
    { id: 5, title: 'Orbital Reconstruction', image: '/images/regraft-product/regraft-pro5.png' },
    { id: 6, title: 'Resected Mandible and Maxilla', image: '/images/regraft-product/regraft-pro6.png' },
    { id: 7, title: 'Plates for Facial Trauma', image: '/images/regraft-product/regraft-pro7.png' },
    { id: 8, title: 'Management of Facial Deformities', image: '/images/regraft-product/regraft-pro8.png' },
    { id: 9, title: 'Bone Augmentation', image: '/images/regraft-product/regraft-pro9.png' },
    { id: 10, title: 'PSI for Atrophic Maxilla and Mandible', image: '/images/regraft-product/regraft-pro10.png' },
    { id: 11, title: '(VSP) Plates in Orthognathic Surgery', image: '/images/regraft-product/regraft-pro11.png' },
];

const ProductsGrid = () => {
    return (
        <section className="w-full bg-white py-16 md:py-24">
            <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {products.map((product) => (
                        <div key={product.id} className="flex flex-col items-center group cursor-pointer">
                            {/* Image Container */}
                            <div className="w-full aspect-[4/3] relative bg-[#8CBDE4] overflow-hidden rounded-sm mb-4 transition-transform duration-300 group-hover:scale-[1.02] shadow-sm">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-contain p-4"
                                />
                            </div>
                            {/* Title Button */}
                            <div className="w-full sm:w-[90%] bg-[#1560A1] text-white text-center py-3 px-4 font-semibold text-sm md:text-base rounded-sm shadow-md transition-colors duration-300 group-hover:bg-[#114b80]">
                                {product.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductsGrid;
