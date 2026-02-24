import Image from 'next/image';

export default function NasalCaseDetailsSection() {
    return (
        <>
            <h3 className="mb-4 text-xl font-bold uppercase text-primary">Who Is Graft 3D?</h3>

            <div className="space-y-4 text-[15px] leading-7 text-gray-700">
                <p>
                    Graft 3D Health Care Solution provides prosthesis for a missing part of the body like ear, nose,
                    eyes, limbs, fingers, and toes. We support people with congenital defects, traumatic injuries
                    like road accidents, or surgical removal of parts due to cancer and other medical conditions, with
                    prosthesis matching exact shape, color, skin tone, and texture using the latest 3D printing
                    technology.
                </p>
                <p>
                    We make nasal prosthesis with medical-grade soft silicone for nasal defects. In some cases, the
                    defect may extend to the cheek, eye orbit, forehead, and upper lips and may need a midfacial
                    prosthesis.
                </p>
                <p>
                    Our clinical maxillofacial prosthetics expert is Dr. Sanketh Kethireddy, MDS (Prosthodontics),
                    Dip.Cl.Sc (MFP &amp; Dental Oncology), MSD (MFP &amp; Dental Oncology), and Cert. Implantology
                    (UCLA). He is a core member of the Indian Prosthodontics Society and Secretary for the Tamil Nadu
                    branch.
                </p>
                <p>
                    Specialized in maxillofacial prosthetics, oncology, and implantology, Dr. Sanketh has conducted
                    various research studies and publications in this specialty.
                </p>
            </div>

            <div className="my-8 overflow-hidden rounded-sm border border-gray-200 bg-white">
                <Image
                    src="/images/artificial-nasal-prosthesis-case-study/case-before.jpeg"
                    alt="Patient before artificial nasal prosthesis"
                    width={1280}
                    height={706}
                    className="h-auto w-full"
                />
            </div>

            <div className="space-y-4 text-[15px] leading-7 text-gray-700">
                <p>
                    In this case, a young male patient from Chennai underwent surgery to remove his nose (rhinotomy)
                    due to nasopharyngeal carcinoma. The cancerous growth involved the nose, medial canthii of left
                    and right eye, and medial part of the lower eyelids.
                </p>
                <p>
                    Post-surgery, the social stigma and sudden change in facial appearance confined him indoors. He
                    had to quit his job and started facing psycho-social and economic distress, which led him to seek
                    our help.
                </p>
            </div>

            <div className="my-8 overflow-hidden rounded-sm border border-gray-200 bg-white">
                <Image
                    src="/images/artificial-nasal-prosthesis-case-study/case-prosthesis.jpeg"
                    alt="Patient with fitted nasal prosthesis"
                    width={1280}
                    height={706}
                    className="h-auto w-full"
                />
            </div>

            <p className="mb-8 text-[15px] leading-7 text-gray-700">
               Immediately We Went To His Doorstep With The Help Of Highly Accurate Advanced 3D Technology Silicone Prosthesis [Adhesive Retained Medical-Grade (MDX4-4210 RTV Silicone)] Was Made Which Is Made Up Of Biocompatible Material and attached With A Special Dermal Adhesive [Daro Hydrobond]. The Prosthesis Matches Accurate With The Person Skin Color Tone And Texture Which Was Overviewed By Our Doctor Personally, Dr. Sanketh K Reddy A Master Maxillofacial Prosthodontics And A Leading Implantologist In The Country.
            </p>
        </>
    );
}
