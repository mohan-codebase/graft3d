import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

const MaterialAdvantagesSection = () => {
    return (
        <section className="w-full py-16 bg-white">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

                    {/* Left Image */}
                    <div className="relative flex justify-center lg:justify-start">
                        <div className="relative aspect-square w-full max-w-[400px]">
                            <Image
                                src="/images/temporomandibular-joint-imgs/titanium-condylar.png"
                                alt="Advantages of a Digital Workflow"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="rounded-3xl border-2 border-[#e6f3ff] bg-white p-8 md:p-12 shadow-sm relative">
                        {/* Background blob for styling if needed, keeping it clean */}
                        <h2 className="text-3xl font-bold text-[#005696] mb-6">Titanium Condylar Component</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4">
                                <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded bg-[#005696] text-white">
                                    <span className="text-sm font-bold">✔</span>
                                </div>
                                <span className="text-lg text-gray-700 font-medium">Lightweight, but tough enough to be functional load bearing.</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded bg-[#005696] text-white">
                                    <span className="text-sm font-bold">✔</span>
                                </div>
                                <span className="text-lg text-gray-700 font-medium">Exhibits osseointegration, non-corrosive and biocompatible that maintains years of service.</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded bg-[#005696] text-white">
                                    <span className="text-sm font-bold">✔</span>
                                </div>
                                <span className="text-lg text-gray-700 font-medium">Safe for patients who may further undergo other imaging studies, such as MRI.</span>
                            </li>

                        </ul>
                    </div>

                </div>

                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

                    {/* Left Content */}
                    <div className="rounded-3xl border-2 border-[#e6f3ff] bg-white p-8 md:p-12 shadow-sm relative order-1 lg:order-1">
                        <h2 className="text-3xl font-bold text-[#005696] mb-6">
                            UHMWPE Glenoid Component
                        </h2>

                        <ul className="space-y-4">

                            <li className="flex items-start gap-4">
                                <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded bg-[#005696] text-white">
                                    ✔
                                </div>
                                <span className="text-lg text-gray-700 font-medium">
                                    Offers a wear-resistant, smooth surface for articulation, replicating the original joint.                        </span>
                            </li>

                            <li className="flex items-start gap-4">
                                <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded bg-[#005696] text-white">
                                    ✔
                                </div>
                                <span className="text-lg text-gray-700 font-medium">
                                    Reduces friction and wear particle generation, reducing the chance of implant failure.
                                </span>
                            </li>

                            <li className="flex items-start gap-4">
                                <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded bg-[#005696] text-white">
                                    ✔
                                </div>
                                <span className="text-lg text-gray-700 font-medium">
                                    Reduces stress transmitted to the adjacent bone, minimizing bone resorption and extending the life of the prosthesis.
                                </span>
                            </li>

                        </ul>
                    </div>

                    {/* Right Image */}
                    <div className="relative flex justify-center lg:justify-end order-2 lg:order-2">
                        <div className="relative aspect-square w-full max-w-[400px]">
                            <Image
                                src="/images/temporomandibular-joint-imgs/uhmwpe-glenoid.png"
                                alt="Advantages of a Digital Workflow"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                </div>

                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

                    {/* Left Image */}
                    <div className="relative flex justify-center lg:justify-start">
                        <div className="relative aspect-square w-full max-w-[400px]">
                            <Image
                                src="/images/temporomandibular-joint-imgs/functional-outcomes.png"
                                alt="Advantages of a Digital Workflow"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="rounded-3xl border-2 border-[#e6f3ff] bg-white p-8 md:p-12 shadow-sm relative">
                        {/* Background blob for styling if needed, keeping it clean */}
                        <h2 className="text-3xl font-bold text-[#005696] mb-6">Functional Outcomes</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4">
                                <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded bg-[#005696] text-white">
                                    <span className="text-sm font-bold">✔</span>
                                </div>
                                <span className="text-lg text-gray-700 font-medium">Patients exhibit a degree of immediate improvement in mandibular mobility with increased mouth opening and decreased pain.</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded bg-[#005696] text-white">
                                    <span className="text-sm font-bold">✔</span>
                                </div>
                                <span className="text-lg text-gray-700 font-medium">
                                    A stable occlusion and an enduring joint function are achieved with minimal complications.</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded bg-[#005696] text-white">
                                    <span className="text-sm font-bold">✔</span>
                                </div>
                                <span className="text-lg text-gray-700 font-medium">Safe for patients who may further undergo other imaging studies, such as MRI.</span>
                            </li>

                        </ul>
                    </div>

                </div>

                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

                    {/* Left Content */}
                    <div className="rounded-3xl border-2 border-[#e6f3ff] bg-white p-8 md:p-12 shadow-sm relative order-1 lg:order-1">
                        <h2 className="text-3xl font-bold text-[#005696] mb-6">
                            Surgical Advantages
                        </h2>

                        <ul className="space-y-4">

                            <li className="flex items-start gap-4">
                                <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded bg-[#005696] text-white">
                                    ✔
                                </div>
                                <span className="text-lg text-gray-700 font-medium">
                                    Pre operative digital planning minimizes the duration of the surgery, minimizes intraoperative trial and error, and results in predictable outcomes.    </span>
                            </li>

                            <li className="flex items-start gap-4">
                                <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded bg-[#005696] text-white">
                                    ✔
                                </div>
                                <span className="text-lg text-gray-700 font-medium">
                                    Customized implants avoid autogenous graft harvesting and potential donor site morbidity.                        </span>
                            </li>

                            <li className="flex items-start gap-4">
                                <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded bg-[#005696] text-white">
                                    ✔
                                </div>
                                <span className="text-lg text-gray-700 font-medium">
                                    TMJ replacement can be combined with orthognathic surgery, to optimize the final results.                        </span>
                            </li>

                        </ul>
                    </div>

                    {/* Right Image */}
                    <div className="relative flex justify-center lg:justify-end order-2 lg:order-2">
                        <div className="relative aspect-square w-full max-w-[400px]">
                            <Image
                                src="/images/temporomandibular-joint-imgs/surgical-advantages.png"
                                alt="Advantages of a Digital Workflow"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                </div>

                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

                    {/* Left Image */}
                    <div className="relative flex justify-center lg:justify-start">
                        <div className="relative aspect-square w-full max-w-[400px]">
                            <Image
                                src="/images/temporomandibular-joint-imgs/longevity-and-safety.png"
                                alt="Advantages of a Digital Workflow"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="rounded-3xl border-2 border-[#e6f3ff] bg-white p-8 md:p-12 shadow-sm relative">
                        {/* Background blob for styling if needed, keeping it clean */}
                        <h2 className="text-3xl font-bold text-[#005696] mb-6">Longevity and Safety</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4">
                                <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded bg-[#005696] text-white">
                                    <span className="text-sm font-bold">✔</span>
                                </div>
                                <span className="text-lg text-gray-700 font-medium">Clinical findings show survival rates of &gt;85–90% at long-term follow-up, supporting the safety and quality of the patient specific prostheses.</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded bg-[#005696] text-white">
                                    <span className="text-sm font-bold">✔</span>
                                </div>
                                <span className="text-lg text-gray-700 font-medium">
                                    They are best suited for adult patients because risk of growth related resorption is minimal as compared to biologic grafts.</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded bg-[#005696] text-white">
                                    <span className="text-sm font-bold">✔</span>
                                </div>
                                <span className="text-lg text-gray-700 font-medium">Long term patient satisfaction is favorable as a result of pain reduction and functional recovery.</span>
                            </li>

                        </ul>
                    </div>

                </div>

                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

                    {/* Left Content */}
                    <div className="rounded-3xl border-2 border-[#e6f3ff] bg-white p-8 md:p-12 shadow-sm relative order-1 lg:order-1">
                        <h2 className="text-3xl font-bold text-[#005696] mb-6">
                            Unilateral TMJ Replacement
                        </h2>

                        <ul className="space-y-4">

                            <li className="flex items-start gap-4">
                                <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded bg-[#005696] text-white">
                                    ✔
                                </div>
                                <span className="text-lg text-gray-700 font-medium">
                                    Favored treatment in cases where only one joint is involved, like localized ankyloses, trauma or tumor resection.   </span>
                            </li>

                            <li className="flex items-start gap-4">
                                <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded bg-[#005696] text-white">
                                    ✔
                                </div>
                                <span className="text-lg text-gray-700 font-medium">
                                    The adjacent joint remains biologically intact, allowing normal motion and proprioception.                     </span>
                            </li>

                            <li className="flex items-start gap-4">
                                <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded bg-[#005696] text-white">
                                    ✔
                                </div>
                                <span className="text-lg text-gray-700 font-medium">
                                    Necessary consideration of occlusal balance and mandibular function to address symmetry              </span>
                            </li>

                            <li className="flex items-start gap-4">
                                <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded bg-[#005696] text-white">
                                    ✔
                                </div>
                                <span className="text-lg text-gray-700 font-medium">

                                    Provides shortened operation time and reduced morbidity. </span>
                            </li>

                        </ul>
                    </div>

                    {/* Right Image */}
                    <div className="relative flex justify-center lg:justify-end order-2 lg:order-2">
                        <div className="relative aspect-square w-full max-w-[400px]">
                            <Image
                                src="/images/temporomandibular-joint-imgs/unilateral-tmj.png"
                                alt="Advantages of a Digital Workflow"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                </div>

                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

                    {/* Left Image */}
                    <div className="relative flex justify-center lg:justify-start">
                        <div className="relative aspect-square w-full max-w-[400px]">
                            <Image
                                src="/images/temporomandibular-joint-imgs/bilateral-tmj.png"
                                alt="Advantages of a Digital Workflow"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="rounded-3xl border-2 border-[#e6f3ff] bg-white p-8 md:p-12 shadow-sm relative">
                        {/* Background blob for styling if needed, keeping it clean */}
                        <h2 className="text-3xl font-bold text-[#005696] mb-6">Bilateral TMJ Replacement</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4">
                                <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded bg-[#005696] text-white">
                                    <span className="text-sm font-bold">✔</span>
                                </div>
                                <span className="text-lg text-gray-700 font-medium">Recommended when both joints are involved, like severe degenerative arthritis, bilateral ankylosis, or in cases of multiple failed reconstructions.</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded bg-[#005696] text-white">
                                    <span className="text-sm font-bold">✔</span>
                                </div>
                                <span className="text-lg text-gray-700 font-medium">
                                    Simultaneous reconstruction of both joints maintains equilibrium in mandibular length, occlusion, and mastication, and contributes to balanced activity in the masticatory system.</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded bg-[#005696] text-white">
                                    <span className="text-sm font-bold">✔</span>
                                </div>
                                <span className="text-lg text-gray-700 font-medium">Can be very successful for those with mandibular hypoplasia or micrognathia, often resulting in improved aesthetics.</span>
                            </li>

                            <li className="flex items-start gap-4">
                                <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded bg-[#005696] text-white">
                                    <span className="text-sm font-bold">✔</span>
                                </div>
                                <span className="text-lg text-gray-700 font-medium">Offers predictable long term results when both condyles need to be reconstructed.</span>
                            </li>

                        </ul>
                    </div>

                </div>

            </div>
        </section>



    );
};

export default MaterialAdvantagesSection;
