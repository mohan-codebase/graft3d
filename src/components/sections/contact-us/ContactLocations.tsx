import React from 'react';
import { MapPin } from 'lucide-react';

const locations = [
    {
        city: "Chennai",
        type: "Head Office",
        address: "4/261, 1st Floor, Rajas Towers Medavakkam Main Road, Kovilambakkam, Chennai - 600129, Tamil Nadu, India.",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.663529340024!2d80.18731117589334!3d12.92931161580214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f00223ed729%3A0xe7819dd39c894f6e!2sGraft3D%20Healthcare%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
    },
    {
        city: "Mumbai",
        type: "Branch Office",
        address: "410, 4th Floor, Tex Centre Park, East Wing, Chandivali, Andheri East, Mumbai, Maharashtra 400072.",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.000000000000!2d72.88000000000001!3d19.110000000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c87700000001%3A0x0000000000000000!2sTex%20Centre%20Park!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
    },
    {
        city: "Bengaluru",
        type: "Branch Office",
        address: "No. 2501, IV Phase, 2nd Floor, 8th Cross Rd, Ganapathi Nagar, Phase 2, Peenya, Bengaluru, Karnataka 560058.",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.000000000000!3d13.010000000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d8800000001%3A0x0000000000000000!2sPeenya!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
    }
];

const ContactLocations = () => {
    return (
        <section className="w-full py-20 bg-primary">
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {locations.map((loc, index) => (
                        <div key={index} className="bg-white  overflow-hidden shadow-xl border border-blue-100 group hover:-translate-y-2 transition-transform duration-500">
                            {/* Map Placeholder */}
                            <div className="relative h-[250px] w-full overflow-hidden">
                                <iframe
                                    src={loc.mapUrl}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="grayscale group-hover:grayscale-0 transition-all duration-700"
                                ></iframe>
                            </div>

                            <div className="p-8 space-y-4">
                                <div>
                                    <div className="text-[#166AAF] font-bold text-sm uppercase tracking-wider mb-1">{loc.type}</div>
                                    <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                                        <MapPin className="w-6 h-6 text-[#166AAF]" /> {loc.city}
                                    </h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed text-[15px] font-medium min-h-[80px]">
                                    {loc.address}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContactLocations;
