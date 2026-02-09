"use client";

import React from 'react';
import Image from 'next/image';

const testimonials = [
    {
        id: 1,
        name: "Arun",
        title: "Doctor",
        image: "/images/home/testimonials/avatar.png",
        feedback: "We use advanced software to preprocess images, such as noise reduction or contrast enhancement. This step ensures the input image is of the best quality for segmentation."
    },
    {
        id: 2,
        name: "Prasanna",
        title: "Doctor",
        image: "/images/home/testimonials/avatar.png",
        feedback: "We use advanced software to preprocess images, such as noise reduction or contrast enhancement. This step ensures the input image is of the best quality for segmentation."
    }
];

const TestimonialsSection = () => {
    return (
        <section className="w-full py-16 lg:py-24 bg-[#eaf6ff]">
            <div className="container mx-auto px-4">

                {/* Header Content */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">
                    <div className="max-w-md">
                        <h3 className="text-black font-bold text-lg mb-1">Our Clients</h3>
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary">
                            Testimonials
                        </h2>
                    </div>
                    <div className="max-w-2xl">
                        <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                            Our recent Healthcare 3D service projects, such as Medical 3D image segmentation and Bio CAD modeling for 3D printing, serve as a testament to our proficiency and dedication in providing outstanding 3D services. Whether you require image segmentation, bio CAD modeling, or comprehensive medical 3D printing solutions, we have all your needs covered.
                        </p>
                    </div>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-[#dcf0fa] p-8 rounded-xl border border-blue-100 h-full flex flex-col gap-6 shadow-sm hover:shadow-md transition-shadow">

                            {/* Avatar & Info */}
                            <div className="flex items-center gap-4">
                                <div className="relative w-16 h-16 rounded-full overflow-hidden bg-white border-2 border-white shadow-sm flex-shrink-0">
                                    {/* Placeholder for when image is missing, or actual image */}
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-black font-bold text-lg">{testimonial.name}</h4>
                                    <p className="text-gray-500 text-sm">{testimonial.title}</p>
                                </div>
                            </div>

                            {/* Feedback */}
                            <div>
                                <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                                    {testimonial.feedback}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TestimonialsSection;
