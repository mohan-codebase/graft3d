"use client";

import React from 'react';
import { User } from 'lucide-react';

const testimonials = [
    {
        name: "Arun",
        role: "Doctor",
        text: "We use advanced software to preprocess images, such as noise reduction or contrast enhancement. This step ensures the input image is of the best quality for segmentation."
    },
    {
        name: "Prasanna",
        role: "Doctor",
        text: "We use advanced software to preprocess images, such as noise reduction or contrast enhancement. This step ensures the input image is of the best quality for segmentation."
    }
];

const TestimonialsSection = () => {
    return (
        <section className="w-full py-20 bg-[#e6f4ff]">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-8">
                    <div className="lg:w-1/3">
                        <h3 className="text-black font-bold text-lg mb-2">Our Clients</h3>
                        <h2 className="text-[#1e73be] font-bold text-4xl">Testimonials</h2>
                    </div>
                    <div className="lg:w-2/3">
                        <p className="text-gray-600 text-base leading-relaxed max-w-3xl">
                            Our recent Healthcare 3D service projects, such as Medical 3D image segmentation and Bio CAD modeling for 3D printing, serve as a testament to our proficiency and dedication in providing outstanding 3D services. Whether you require image segmentation, bio CAD modeling, or comprehensive medical 3D printing solutions, we have all your needs covered.
                        </p>
                    </div>
                </div>

                {/* Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-[#eaf6ff] shadow-lg p-8 rounded-xl border border-blue-50 relative">
                            {/* Styling note: The screenshot shows a lighter card background, almost blending but distinct. 
                                 Using #eaf6ff which is slightly different or maybe just white with opacity? 
                                 Screenshot cards look slightly darker/more solid blueish-white than the main bg. 
                                 Let's try a very subtle blue tint or white with opacity. 
                                 Actually, looking at the screenshot, the cards look like they might be a slightly darker shade or have a shadow.
                                 Let's stick to a subtle distinct color.
                             */}
                            <div className="flex items-center gap-4 mb-6">
                                {/* Avatar Placeholder */}
                                <div className="w-16 h-16 rounded-full bg-[#1e73be] flex items-center justify-center text-white shrink-0">
                                    <User size={32} />
                                    {/* Ideally this would be a custom doctor icon or image */}
                                </div>
                                <div>
                                    <h4 className="text-black font-bold text-lg">{testimonial.name}</h4>
                                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                                </div>
                            </div>

                            <p className="text-gray-500 leading-relaxed text-sm">
                                {testimonial.text}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TestimonialsSection;
