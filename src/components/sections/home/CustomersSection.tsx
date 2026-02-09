"use client";

import React from 'react';
import Image from 'next/image';

const customers = [
    {
        id: 1,
        name: "Gleneagles Global Hospitals",
        logo: "/images/home/our-customers/Gleneagles Global Hospitals Logo.png"
    },
    {
        id: 2,
        name: "Maher",
        logo: "/images/home/our-customers/Maher.png"
    },
    {
        id: 3,
        name: "SIMS Hospitals",
        logo: "/images/home/our-customers/SIMs-Hospitals.png"
    },
    {
        id: 4,
        name: "Stryker",
        logo: "/images/home/our-customers/Stryker.png"
    },
    {
        id: 5,
        name: "Venkateswara College",
        logo: "/images/home/our-customers/Venkateswara College Logo.png"
    }
];

const CustomersSection = () => {
    return (
        <section className="w-full py-16 bg-white">
            <div className="max-w-[1400px] mx-auto px-4">

                {/* Section Header */}
                <div className="text-center md:mb-22 mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-center  leading-tight text-black ">
                        Our Valuable <span className="text-primary">Customers</span>
                    </h2>

                </div>

                {/* Customers Logos */}
                <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
                    {customers.map((customer) => (
                        <div key={customer.id} className="relative w-32 h-20 lg:w-64 lg:h-38 hover:scale-105 transition-transform duration-300">
                            <Image
                                src={customer.logo}
                                alt={customer.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default CustomersSection;
