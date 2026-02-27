import React from "react";
import { CheckCircle2 } from "lucide-react";

const BenefitsAndImpact = () => {
    return (
        <section className="w-full py-16 bg-white">
            <div className="container mx-auto px-4 md:px-8 max-w-5xl">

                {/* Benefits Section */}
                <div className="flex flex-col items-center mb-16">
                    <h2 className="text-3xl font-bold text-[#005696] mb-8">Benefits</h2>

                    <div className="flex flex-col space-y-4 w-full max-w-2xl mx-auto">
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-[#f4fbff] transition-colors hover:bg-[#e6f3ff]">
                            <CheckCircle2 className="size-6 text-[#005696] shrink-0 mt-0.5" />
                            <span className="text-lg text-gray-800 font-medium">Immediate or early loading of the prosthesis, shortening treatment times.</span>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-[#f4fbff] transition-colors hover:bg-[#e6f3ff]">
                            <CheckCircle2 className="size-6 text-[#005696] shrink-0 mt-0.5" />
                            <span className="text-lg text-gray-800 font-medium">Precise registration of implants with opposing dentition.</span>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-[#f4fbff] transition-colors hover:bg-[#e6f3ff]">
                            <CheckCircle2 className="size-6 text-[#005696] shrink-0 mt-0.5" />
                            <span className="text-lg text-gray-800 font-medium">Quicker Recovery, no need for numerous staged surgeries.</span>
                        </div>
                    </div>
                </div>

                {/* Clinical Impact Section */}
                <div className="flex flex-col items-center text-center">
                    <h2 className="text-3xl font-bold text-[#005696] mb-6">Clinical Impact</h2>
                    <p className="text-lg leading-relaxed text-gray-700">
                        Fibula free flap reconstruction combined with 3D printing surgical templating, patient-specific plates, and pre-designed dental implants is the most advanced surgical modality in reconstructive maxillofacial surgery. This single session, computer-aided process makes it possible to obtain structural and functional restoration and facial aesthetics, which enables patients to recover more quickly and better in daily life.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default BenefitsAndImpact;
