"use client";
import Image from "next/image";
import { ArrowRight, Upload } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
    const [file, setFile] = useState<File | null>(null);
    const [phone, setPhone] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value.replace(/[^0-9+]/g, '');
        setPhone(val);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus(null);

        const formData = new FormData(e.currentTarget);
        if (file) {
            formData.set("file", file); // Ensure the file state is appended if they selected via middle block
        }

        try {
            const res = await fetch("/api/polymer-part-contact", {
                method: "POST",
                body: formData,
            });
            const data = await res.json();
            
            if (data.success) {
                setStatus({ type: 'success', message: data.message });
                e.currentTarget.reset();
                setFile(null);
                setPhone("");
            } else {
                setStatus({ type: 'error', message: data.message });
            }
        } catch {
            setStatus({ type: 'error', message: "Something went wrong. Please try again." });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="w-full bg-[#166AAF1A] py-8 lg:py-16">
            <div className="container-fluid mx-auto px-4 lg:px-12 xl:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    
                    {/* Left Column */}
                    <div className="lg:col-span-5 flex flex-col pr-0 lg:pr-8">
                        <h2 className="text-[#166AAF] font-bold text-[2rem] lg:text-[2.5rem] leading-tight mb-4 whitespace-pre-line">
                            {"Bring Us Your Most\nDifficult Polymer Part"}
                        </h2>
                        <p className="text-[#1E1E1E] font-normal text-[1.125rem] lg:text-[1.25rem] mb-8">
                            We&apos;ll help you make it better, faster and stronger.
                        </p>
                        
                        <div className="flex flex-col gap-6 mb-12">
                            {[
                                { icon: "contact-icon-1.svg", text: "Material & design feasibility review" },
                                { icon: "contact-icon-2.svg", text: "Sample printing & performance\nvalidation" },
                                { icon: "contact-icon-3.svg", text: "Optimized solution for production" },
                                { icon: "contact-icon-4.svg", text: "Expert support from concept to\npart" },
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-lg border border-[#374151] bg-[#1F2937] flex items-center justify-center shrink-0">
                                        <Image src={`/images/310-for-medical-use/${item.icon}`} alt="" width={24} height={24} />
                                    </div>
                                    <span className="text-[#1E1E1E] font-semibold text-[1rem] lg:text-[1.125rem] whitespace-pre-line">
                                        {item.text}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-col gap-6">
                            {/* Phone */}
                            <div className="flex items-center gap-4">
                                <Image src="/images/310-for-medical-use/phone-icon.png" alt="Phone" width={48} height={48} className="shrink-0" />
                                <div className="flex flex-col">
                                    <span className="text-black font-semibold text-[1.25rem]">Call us now</span>
                                    <div className="text-black font-bold text-[1rem]">
                                        <a href="tel:+919840478347" className="hover:text-[#166AAF] transition-colors">+91 98404 78347</a>
                                        <span className="mx-2">|</span>
                                        <a href="tel:+916374406179" className="hover:text-[#166AAF] transition-colors">+91 63744 06179</a>
                                    </div>
                                </div>
                            </div>
                            {/* Email */}
                            <div className="flex items-center gap-4">
                                <Image src="/images/310-for-medical-use/mail-icon.png" alt="Email" width={48} height={48} className="shrink-0" />
                                <div className="flex flex-col">
                                    <span className="text-black font-semibold text-[1.25rem]">Email us</span>
                                    <div className="text-black font-bold text-[1rem]">
                                        <a href="mailto:sm@precise3dm.com" className="hover:text-[#166AAF] transition-colors">sm@precise3dm.com</a>
                                        <span className="mx-2">|</span>
                                        <a href="mailto:sales@precise3dm.com" className="hover:text-[#166AAF] transition-colors">sales@precise3dm.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Middle Column (Upload Box) */}
                    <div className="lg:col-span-3 flex items-center justify-center lg:justify-end lg:pr-4">
                        <label className="w-full max-w-70 aspect-square lg:aspect-auto lg:h-87.5 bg-[#166AAF] border border-[#374151] rounded-xl p-6 flex items-center justify-center shadow-lg cursor-pointer hover:brightness-110 transition-all group">
                            <input type="file" className="hidden" accept=".step,.stl" onChange={handleFileChange} />
                            <div className="w-full h-full bg-[#0A0A0ACC] border-2 border-dashed border-[#6B7280] backdrop-blur-xs rounded-lg flex flex-col items-center justify-center transition-colors group-hover:bg-[#0A0A0AE6]">
                                <Upload className="text-white w-8 h-8 mb-4" />
                                <span className="text-white font-semibold text-[1rem]">Upload CAD</span>
                                <span className="text-[#6B7280] font-normal text-[0.875rem] mt-1">(.STEP / .STL)</span>
                            </div>
                        </label>
                    </div>

                    {/* Right Column (Form) */}
                    <div className="lg:col-span-4 bg-[#0A0A0A] border border-[#1F2937] rounded-xl p-6 lg:p-8 shadow-xl">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div className="grid grid-cols-2 gap-4">
                                <input type="text" name="name" required placeholder="Name" className="w-full bg-[#111827] border border-[#374151] rounded-lg px-4 py-3 text-white placeholder-[#6B7280] focus:outline-none focus:border-[#166AAF] transition-colors" />
                                <input type="text" name="city" placeholder="City" className="w-full bg-[#111827] border border-[#374151] rounded-lg px-4 py-3 text-white placeholder-[#6B7280] focus:outline-none focus:border-[#166AAF] transition-colors" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <input type="text" name="company" placeholder="Company" className="w-full bg-[#111827] border border-[#374151] rounded-lg px-4 py-3 text-white placeholder-[#6B7280] focus:outline-none focus:border-[#166AAF] transition-colors" />
                                <input type="text" name="requiredMaterial" placeholder="Required Material" className="w-full bg-[#111827] border border-[#374151] rounded-lg px-4 py-3 text-white placeholder-[#6B7280] focus:outline-none focus:border-[#166AAF] transition-colors" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <input type="tel" name="phone" required placeholder="Phone" value={phone} onChange={handlePhoneChange} className="w-full bg-[#111827] border border-[#374151] rounded-lg px-4 py-3 text-white placeholder-[#6B7280] focus:outline-none focus:border-[#166AAF] transition-colors" />
                                <div className="relative">
                                    <select name="application" className="w-full bg-[#111827] border border-[#374151] rounded-lg px-4 py-3 text-[#6B7280] focus:outline-none focus:border-[#166AAF] transition-colors appearance-none cursor-pointer" defaultValue="">
                                        <option value="" disabled hidden>Application</option>
                                        <option value="medical">Medical</option>
                                        <option value="dental">Dental</option>
                                        <option value="other">Other</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1.5L6 6.5L11 1.5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <input type="email" name="email" required placeholder="Email" className="w-full bg-[#111827] border border-[#374151] rounded-lg px-4 py-3 text-white placeholder-[#6B7280] focus:outline-none focus:border-[#166AAF] transition-colors" />
                            
                            <label className="relative w-full cursor-pointer group block">
                                <input type="file" name="file" className="hidden" accept=".step,.stl" onChange={handleFileChange} />
                                <div className="w-full bg-[#111827] border border-[#374151] rounded-lg px-4 py-3 group-hover:border-[#166AAF] transition-colors flex items-center justify-between">
                                    <span className={`truncate ${file ? "text-white" : "text-[#6B7280]"}`}>
                                        {file ? file.name : "Upload CAD File"}
                                    </span>
                                    <div className="bg-[#374151] group-hover:bg-[#4B5563] text-white text-sm px-4 py-1.5 rounded-sm transition-colors shrink-0 ml-2">
                                        Choose File
                                    </div>
                                </div>
                            </label>

                            <button disabled={isSubmitting} type="submit" className="w-full mt-2 bg-[#166AAF] hover:bg-[#125A9C] disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold text-[1.125rem] rounded-md py-3.5 flex items-center justify-center gap-2 transition-colors">
                                {isSubmitting ? "Submitting..." : "Get My Application Evaluated"}
                                {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                            </button>

                            {status && (
                                <div className={`text-sm text-center p-2 rounded ${status.type === 'success' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                                    {status.message}
                                </div>
                            )}

                            <p className="text-[#6B7280] font-normal text-[0.75rem] text-center mt-2">
                                We respect your privacy. Your information is secure.
                            </p>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
