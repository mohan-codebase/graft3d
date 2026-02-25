"use client";
import React, { useEffect } from "react";

const BookingSection = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <section className="bg-white py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    {/* Left Column: Content */}
                    <div className="flex flex-col space-y-8">
                        <h2 className="text-2xl font-bold leading-tight text-gray-900 md:text-4xl">
                            Experience the functionality of the Einscan H2 Human Body & Body Parts 3D Scanner by scheduling an online demonstration
                        </h2>
                        <div className="relative rounded-l-2xl bg-[#F0F8FF] p-8 md:p-12 border-r-[10px] border-[#1D70B8]">
                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                <p>
                                    Thank you for showing interest in our Human Body & Body Parts 3D Scanner.
                                </p>
                                <p>
                                    You can pick up the preferred demo timing that suits your schedule. The initial demo will be 30 mins to 1 hour, which will take place in our Zoom virtual meeting space accessible through our website.
                                </p>
                                <p>
                                    Kindly inform us of your specific interests and applications to make the demo as informative as possible.
                                </p>
                                <p>
                                    Thank you for considering Team Graft3D. We look forward to the opportunity to assist you in achieving your goals and advancing your medical 3D printing projects.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Calendly Widget */}
                    <div className="flex justify-center">
                        <div
                            className="calendly-inline-widget w-full h-[650px] md:h-[700px] rounded-2xl overflow-hidden shadow-md border border-gray-100"
                            data-url="https://calendly.com/webdeveloper-precise3dm"
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingSection;
