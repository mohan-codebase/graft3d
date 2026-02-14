export default function VspMandibularIntroSection() {
    return (
        <>
            <div className="mb-6 text-[12px] font-medium text-gray-500">
                <span>Graft3D</span>
                <span className="mx-2">&gt;</span>
                <time dateTime="2023-08-30">August 30, 2023</time>
                <span className="mx-2">&gt;</span>
                <span>Uncategorized</span>
                <span className="mx-2">&gt;</span>
                <span>0 Comments</span>
            </div>

            <h1 className="mb-6 text-2xl font-bold leading-tight text-primary md:text-3xl">
                Virtual Surgical Planning for Mandibular Reconstruct And Design Of Resection And Cutting Guides
            </h1>

            <div className="space-y-5 text-[15px] leading-7 text-gray-700">
                <p>
                    In recent years, there has been a significant use of CAD-CAM technology, particularly
                    advancements in additive manufacturing (AM), for mandibular restorations using autologous donated
                    bone or chimeric flaps after mandibular resection. Virtual surgical planning has evolved from
                    digital planning with cutting guides to patient-specific workflows. The latest development
                    includes replacing stock titanium reconstructive plates with patient-specific implants (PSIs),
                    reducing surgical duration, hospital stay, and overall recovery time while improving functional
                    and aesthetic outcomes.
                </p>
                <p>
                    The design process for mandibular reconstructive PSIs has mostly remained focused on replicating
                    the form and functionality of manually crafted stock titanium plates. Fibular or iliac crest free
                    flaps are commonly used to replace the inferior mandibular edge and are then connected to other
                    mandibular segments through PSI techniques until ossification is achieved. However, these flaps
                    often do not meet the cross-sectional requirements needed to restore the original mandibular
                    height.
                </p>
                <p>
                    Our proposed intervention uses a fibula free flap approach and a design workflow that includes
                    defect removal planning with resection guides (Figure 1), adaptation of fibula fragments at the
                    defected region (Figure 2), positioning fibular segments in a craniocaudal orientation using an
                    adaptation guide (Figure 3), a fibula cutting guide (Figure 4), and a patient-specific implant
                    (Figure 5). This approach helps reduce biomechanical stress issues and maintains predetermined
                    fibular alignment.
                </p>
                <p>
                    DICOM data from CT scans of the patient&apos;s head and neck, along with CT angiography of the legs,
                    was processed in D2P and Geomagic Freeform-Plus software. These tools were used to build a
                    virtual 3D model of patient anatomy, plan fibular free graft placement, and support precise
                    dental implant positioning based on anticipated prosthetic rehabilitation.
                </p>
            </div>
        </>
    );
}
