import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Kushal Gupta",
        text: "I have lost my nose While fighting Cancer, It broke me completely and I was depressed and stopped coming out of the home. Meeting Graft and Dr Sanketh Reddy was the best thing happened to me after suffering from cancer. The prosthesis matches my skin color precisely. I am very happy to go anywhere with much confidence."
    },
    {
        name: "Arish Karthick",
        text: "I have met with an accident and lost my left ear and Loosing an ear at 21 had a huge mental toll. I Skipped college for a whole semester and I was no where near to meet new people. but with God's Grace I have met Graft3D and they had the helped me with Artificial prosthetic Ears and that looks very real and that has made life as good as before."
    }
];

const ArtiNoseTestimonials = () => {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="container mx-auto px-4 max-w-[1400px]">
                <div className="max-w-5xl mx-auto">

                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#1e73be] mb-4">
                            Testimonials
                        </h2>
                        <div className="w-24 h-1 bg-[#1e73be] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-gray-50 border border-gray-100 rounded-2xl p-8 relative shadow-sm hover:shadow-md transition-shadow">
                                <Quote className="absolute top-6 left-6 w-10 h-10 text-[#1e73be] opacity-20" />
                                <div className="pt-8">
                                    <p className="text-gray-700 text-lg leading-relaxed italic mb-8">
                                        "{testimonial.text}"
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-[#1e73be] text-white rounded-full flex items-center justify-center font-bold text-xl uppercase">
                                            {testimonial.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ArtiNoseTestimonials;
