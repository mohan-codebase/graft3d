const refundSections = [
    {
        title: 'Learn about refunds on Graft3D',
        paragraphs: [
            'Graft3D may provide refunds for 3D printed products listed for online sale. You can also contact support directly. If you are not satisfied with the product we provided and if necessary, request a refund from Graft3D.',
            'We do not accept refunds unless there is physical damage to the product. If you have any queries regarding the product, please contact us at sales@graft3d.com with details of the product.',
        ],
    },
    {
        title: 'Refund Process',
        paragraphs: [
            'Upon receipt of the refund request, we will fully examine your request and notify you via email, within a reasonable period of time, whether you are eligible to entitle a refund.',
            'All refunds will be processed in the same mode of payment you paid with. If your card has been cancelled or the account closed, please speak with your bank about how to access the refund or provide an alternative account. A verification process will be carried out before transferring the funds, if you have requested to transfer funds.',
            'Once you are eligible for a refund, you will receive a call from support to help you in returning the product. Once received, it will be processed within 7 to 10 business days. After processing, refunds usually take up to ten business days to appear on your statement. For credit card refunds, it could take up to 1-2 billing cycles for the refund to show up. International refunds can take even longer to reach you. Your financial institution will be able to tell you when to expect the refund and how it will be listed on your statement.',
        ],
    },
];

export default function RefundPolicyContent() {
    return (
        <section className="w-full bg-[#f5f6f8] py-14 md:py-20">
            <div className="mx-auto w-full max-w-[1050px] px-4">
                <h1 className="mb-10 text-center text-4xl font-bold text-[#58b5de] md:text-5xl">
                    Refund Policy
                </h1>

                <div className="space-y-14">
                    {refundSections.map((section) => (
                        <article key={section.title}>
                            <h2 className="mb-5 text-3xl font-bold text-[#0f2a59] md:text-2xl">
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
