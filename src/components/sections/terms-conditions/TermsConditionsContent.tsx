const termsSections = [
    {
        title: 'WEBSITE TERMS OF USE',
        paragraphs: [
            `By accessing, browsing, and/or using this site ("Site"), you ("User") acknowledge that you have read, understood, and agree, to be bound by these terms and to comply with all applicable laws and regulations, including India's control laws and regulations. If you do not agree to these terms, do not use this Site. The material provided on this Site is protected by law, including, but not limited to, India Copyright Law and national treaties. This Site is controlled and operated by Precise 3D Metrology & Design Solutions Pvt. Ltd.`,
            `Graft3D makes no representation that materials in the Site are appropriate or available for use in other locations, and access to them from territories where their contents are illegal is prohibited. Those who choose to access this Site from other locations do so on their first initiative and are responsible for compliance with applicable local laws.`,
            `Any claim relating to, and the use of, this Site and the materials contained herein is governed by the laws of India.`,
        ],
    },
    {
        title: 'USE RESTRICTIONS',
        paragraphs: [
            `The copyright in all material provided on this Site is held by Graft3D and its subsidiaries, or by the original creator of the material. Except as stated herein, none of the material may be copied, reproduced, distributed, republished, downloaded, displayed, posted, or transmitted in any form or by any means, including, but not limited to, electronic, mechanical, photocopying, recording, or otherwise, without the prior written permission of Graft3D or the copyright owner. Permission is granted to display, copy, distribute and download the materials on this Site for personal, noncommercial use only, provided you do not modify the materials and that you retain all copyright and other proprietary notices contained in the materials. This permission terminates automatically if you breach any of these terms or conditions`,
            `Upon termination, you must immediately destroy any downloaded and printed materials. You also may not, without Graft3D permission, "mirror" any material contained on this Site on any other server. Any unauthorized use of any material contained on this Site may violate copyright laws, trademark laws, the laws of privacy and publicity, and communications regulations and statutes.`,
        ],
    },
    {
        title: 'LIMITATION OF LIABILITY',
        paragraphs: [
            `UNDER NO CIRCUMSTANCES, INCLUDING, BUT NOT LIMITED TO, NEGLIGENCE, SHALL Graft3D BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES, INCLUDING, BUT NOT LIMITED TO, LOSS OF DATA OR PROFIT, ARISING OUT OF THE USE, OR THE INABILITY TO USE, THE MATERIALS ON THIS SITE, EVEN IF Graft3D HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. IF YOUR USE OF MATERIALS FROM THIS SITE RESULTS IN THE NEED FOR SERVICING, REPAIR, OR CORRECTION OF EQUIPMENT OR DATA, YOU ASSUME ANY COSTS THEREOF. SOME STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU.`,
        ],
    },
    {
        title: 'TRANSMISSIONS',
        paragraphs: [
            `Any material, information, or idea you transmit to or post on this Site by any means will be treated as non-confidential and non-proprietary and may be disseminated or used by Graft3D for any purpose whatsoever, including, but not limited to, service and solutions provider and marketing products. Nonetheless the foregoing, all personal data provided to Graft3D online will be handled under the Graft3D Privacy Statement. You are prohibited from posting or transmitting to or from this Site any unlawful, threatening, libelous, defamatory, obscene, scandalous, inflammatory, pornographic, or profane material, or any other material that could give rise to any civil or criminal liability under the law`,
        ],
    },
    {
        title: 'TERM OF USE REVISIONS',
        paragraphs: [
            `Graft3D may at any time revise these Terms of Use by updating this posting. By using this Site, you agree to be bound by any such revisions and should therefore periodically visit this page to determine the then-current Terms of Use to which you are bound`,
        ],
    },
];

export default function TermsConditionsContent() {
    return (
        <section className="w-full bg-[#f5f6f8] py-14 md:py-20">
            <div className="mx-auto w-full max-w-[1050px] px-4">
                <h1 className="mb-10 text-center text-4xl font-bold uppercase tracking-wide text-[#58b5de] md:text-5xl">
                    Terms & Conditions
                </h1>

                <div className="space-y-14">
                    {termsSections.map((section) => (
                        <article key={section.title}>
                            <h2 className="mb-5 text-3xl font-bold uppercase text-[#0f2a59] md:text-2xl">
                                {section.title}
                            </h2>
                            <div className="space-y-5 text-lg leading-9 text-[#636870] md:text-[16px]">
                                {section.paragraphs.map((paragraph) => (
                                    <p key={paragraph}>{paragraph}</p>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
