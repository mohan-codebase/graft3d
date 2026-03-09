"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export default function UploadBioDataSection() {
    const [activeTab, setActiveTab] = useState<"email" | "link">("email");

    return (
        <section className="w-full">
            {/* Hero Section */}
            <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
                <Image
                    src="/images/biocad-data/bio-cad1.png"
                    alt="BioCAD Data Workflow"
                    fill
                    className="object-cover object-top"
                    priority
                />
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#1f5f99] mb-4 uppercase tracking-wide">
                        Upload Biocad Data
                    </h1>
                    <p className="text-gray-600 mb-2">
                        Upload the files up to 5 GB - Secure and fast delivery of 3d models
                    </p>
                    <p className="text-[#3b82f6]">
                        Upload biocad files with following parameters, You can also upload in a cloud and share us as link
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex w-full mb-8 border-b-2 border-gray-200">
                    <button
                        onClick={() => setActiveTab("email")}
                        className={`flex-1 py-3 px-4 font-semibold flex items-center justify-center gap-2 transition-colors relative
              ${activeTab === "email"
                                ? "bg-[#1f5f99] text-white"
                                : "text-gray-600 hover:bg-gray-100"
                            }`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        Send as email
                        {activeTab === "email" && (
                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#1f5f99] rotate-45"></div>
                        )}
                    </button>
                    <button
                        onClick={() => setActiveTab("link")}
                        className={`flex-1 py-3 px-4 font-semibold flex items-center justify-center gap-2 transition-colors relative
              ${activeTab === "link"
                                ? "bg-[#1f5f99] text-white"
                                : "text-gray-600 hover:bg-gray-100"
                            }`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                        </svg>
                        Send as link
                        {activeTab === "link" && (
                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#1f5f99] rotate-45"></div>
                        )}
                    </button>
                </div>

                {/* Form Container */}
                <div className="bg-transparent rounded-lg">
                    <form className="space-y-6">

                        {/* Conditional Main Input */}
                        {activeTab === "email" ? (
                            <div className="space-y-4">
                                <input
                                    type="email"
                                    defaultValue="sales@graft3d.com"
                                    readOnly
                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-500"
                                />
                                <input
                                    type="email"
                                    placeholder="From (email)"
                                    className="w-full px-4 py-3 bg-white border border-blue-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                                <textarea
                                    placeholder="Write a message or drop the files here"
                                    rows={4}
                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
                                ></textarea>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <textarea
                                    placeholder="Add your link here..."
                                    rows={4}
                                    className="w-full px-4 py-3 bg-white border border-blue-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
                                ></textarea>
                            </div>
                        )}

                        {/* File Upload Button */}
                        <div className="pt-2">
                            <label className="block text-xs text-gray-600 mb-1">Upload file</label>
                            <div className="flex items-center gap-3">
                                <label className="bg-[#1f5f99] hover:bg-blue-800 text-white px-4 py-2 rounded cursor-pointer text-sm font-medium transition-colors">
                                    Choose File
                                    <input type="file" className="hidden" />
                                </label>
                                <span className="text-xs text-gray-500">No file chosen</span>
                            </div>
                        </div>

                        {/* Two Columns Information section */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                            {/* Contact Information */}
                            <div className="space-y-4">
                                <h3 className="text-[#1f5f99] text-xl font-bold mb-6">Contact Information</h3>
                                <input
                                    type="text"
                                    placeholder="Doctor name"
                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                                <input
                                    type="text"
                                    placeholder="Hospital name"
                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                                <input
                                    type="tel"
                                    placeholder="Mobile number"
                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                                <input
                                    type="text"
                                    placeholder="city"
                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                                <input
                                    type="text"
                                    placeholder="Patient Name"
                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                            </div>

                            {/* Additional Information */}
                            <div className="space-y-4">
                                <h3 className="text-[#1f5f99] text-xl font-bold mb-6">Additional Information</h3>
                                <input
                                    type="text"
                                    placeholder="Anatomy"
                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                                <select className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-500 appearance-none">
                                    <option value="" disabled selected>Specialization</option>
                                    <option value="orthopedics">Orthopedics</option>
                                    <option value="cardiology">Cardiology</option>
                                    <option value="neurology">Neurology</option>
                                    <option value="other">Other</option>
                                </select>
                                <select className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-500 appearance-none">
                                    <option value="" disabled selected>Application</option>
                                    <option value="surgical-guide">Surgical Guide</option>
                                    <option value="anatomical-model">Anatomical Model</option>
                                    <option value="implant">Implant</option>
                                    <option value="other">Other</option>
                                </select>
                                <input
                                    type="number"
                                    placeholder="Quantity you needed"
                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                                <input
                                    type="text"
                                    placeholder="Delivery date"
                                    onFocus={(e) => (e.target.type = "date")}
                                    onBlur={(e) => {
                                        if (!e.target.value) e.target.type = "text";
                                    }}
                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                                <textarea
                                    placeholder="Remarks"
                                    rows={4}
                                    className="w-full px-4 py-3 bg-white border border-blue-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
                                ></textarea>
                            </div>
                        </div>

                        {/* reCAPTCHA placeholder & Submit */}
                        <div className="pt-8">
                            <div className="mb-6 inline-block">
                                {/* Mockup for reCAPTCHA widget to match screenshot visually */}
                                <div className="flex items-center gap-4 bg-[#f9f9f9] border border-gray-300 rounded-sm p-3 pr-4 shadow-sm w-[300px]">
                                    <div className="w-7 h-7 bg-white border-2 border-gray-300 rounded-sm"></div>
                                    <span className="text-sm font-medium flex-1">I'm not a robot</span>
                                    <div className="flex flex-col items-center">
                                        <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="w-8 h-8 opacity-80" />
                                        <span className="text-[10px] text-gray-500 mt-1">reCAPTCHA</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="bg-[#2ebbf0] hover:bg-[#1f9edb] text-white px-8 py-3 rounded font-medium transition-colors"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    );
}
