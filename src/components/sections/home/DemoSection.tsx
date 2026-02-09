"use client";

import React from 'react';
import { Button } from '@/components/ui/Button';

const DemoSection = () => {
    return (
        <section className="w-full py-16 lg:py-24 bg-white">
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Column 1: Informative Text */}
                    <div className="flex flex-col gap-6">
                        <h2 className="text-3xl lg:text-4xl font-bold text-black">
                            Book A Free <span className="text-primary">Online Demo</span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Witness how we design Custom Medical Device 3D Printed Products using Geomagic Freeform and D2P.
                        </p>

                        <div className="bg-[#f0f9ff] border-l-4 border-primary p-6 rounded-r-lg mt-4">
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                Thank you for showing interest in our medical 3D printed product design process, which primarily uses medical image processing and bio-cad medical modeling.

                                You can pick up the preferred demo timing that suits your schedule. The initial demo will be 30 mins to 1 hour, which will take place in our Zoom virtual meeting space accessible through our website.  <br /><br />

                                Kindly inform us of your specific interests and applications to make the demo as informative as possible. Whether focusing on CMF implant design, surgical cutting or drill guide development, artificial limbs and custom facial prosthetics, we will tailor the demo to address your specific needs. <br /><br />

                                Following the demo, we’ll provide a complimentary benchmark session to showcase how our advanced software, including D2P and Freeform, can enhance your medical 3D printing endeavors. <br /><br />

                                Thank you for considering Team Graft3D. We look forward to the opportunity to assist you in achieving your goals and advancing your medical 3D printing projects.                            </p>

                        </div>
                    </div>

                    {/* Column 2: Booking Form */}
                    <div className="bg-[#EAF6FF] rounded-[30px] p-8 lg:p-10">
                        <form className="flex flex-col gap-5" onSubmit={(e) => { e.preventDefault(); window.location.href = '/contact-us'; }}>
                            <input
                                type="text"
                                placeholder="Name:"
                                className="w-full p-4 rounded-lg border border-transparent focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-gray-700 bg-white"
                            />
                            <input
                                type="text"
                                placeholder="Hospital | Company name :"
                                className="w-full p-4 rounded-lg border border-transparent focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-gray-700 bg-white"
                            />
                            <input
                                type="email"
                                placeholder="Email Address:"
                                className="w-full p-4 rounded-lg border border-transparent focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-gray-700 bg-white"
                            />
                            <input
                                type="tel"
                                placeholder="Mobile number :"
                                className="w-full p-4 rounded-lg border border-transparent focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-gray-700 bg-white"
                            />
                            <input
                                type="date"
                                placeholder="Choose Date:"
                                className="w-full p-4 rounded-lg border border-transparent focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-gray-700 bg-white"
                            />

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-gray-700">Choose Timing: <span className="text-red-500">*</span></label>
                                <div className="grid grid-cols-3 gap-3">
                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs font-medium text-gray-500">Hours</label>
                                        <select className="w-full p-3 rounded-lg bg-gray-100 border-none outline-none text-gray-700 appearance-none">
                                            <option>Select</option>
                                            {/* Add hours options */}
                                            {Array.from({ length: 12 }, (_, i) => i + 1).map(h => (
                                                <option key={h} value={h}>{h}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs font-medium text-gray-500">Minutes</label>
                                        <select className="w-full p-3 rounded-lg bg-gray-100 border-none outline-none text-gray-700 appearance-none">
                                            <option>Select</option>
                                            <option value="00">00</option>
                                            <option value="15">15</option>
                                            <option value="30">30</option>
                                            <option value="45">45</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs font-medium text-gray-500">&nbsp;</label>
                                        <select className="w-full p-3 rounded-lg bg-gray-100 border-none outline-none text-gray-700 appearance-none">
                                            <option>AM</option>
                                            <option>PM</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <Button type="submit" className="w-fit mx-auto mt-4 px-12 py-6 text-lg rounded-full shadow-lg shadow-blue-500/30">
                                Book Now
                            </Button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DemoSection;
