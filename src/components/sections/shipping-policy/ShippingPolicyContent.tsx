const shippingSections = [
    {
        title: '1. Processing Time:',
        paragraphs: [
            'All orders are processed within 3 business days (excluding weekends and holidays) after payment.',
        ],
    },
    {
        title: '2. Shipping Methods:',
        paragraphs: [
            'We offer various shipping options for your convenience, including standard, express, and overnight shipping. The available methods may vary depending on your location.',
        ],
    },
    {
        title: '3. Shipping Costs:',
        paragraphs: [
            'Free shipping for Standard mode. Extra shipping cost for express and overnight shipping.',
        ],
    },
    {
        title: '4. Estimated Delivery Time:',
        paragraphs: [
            'Delivery times vary depending on the shipping method and your location. Estimated delivery times will be provided during the checkout process. Please note that these are estimates, and actual delivery times may vary due to factors beyond our control.',
        ],
    },
    {
        title: '5. International Shipping:',
        paragraphs: [
            'We offer international shipping to many countries. Additional customs and import duties may apply, and these charges are the responsibility of the recipient. Please check with your local customs office for more information.',
        ],
    },
    {
        title: '6. International Shipping Restrictions:',
        paragraphs: [
            'Some 3D printed parts may be subject to shipping restrictions or regulations based on their materials or intended use. We will inform you of any such restrictions during the ordering process.',
        ],
    },
    {
        title: '7. Delivery Address:',
        paragraphs: [
            'Please ensure that your delivery address is accurate and complete. We are not responsible for delays or non-delivery due to incorrect or incomplete address information.',
        ],
    },
    {
        title: '8. Lost or Damaged Shipments:',
        paragraphs: [
            "In the event of a lost or damaged shipment, please contact our customer support team immediately within 24 hrs. We will work with the shipping carrier to resolve the issue and ensure you receive your order.",
        ],
    },
];

export default function ShippingPolicyContent() {
    return (
        <section className="w-full bg-[#f5f6f8] py-14 md:py-20">
            <div className="mx-auto w-full max-w-[1050px] px-4">
                <h1 className="mb-10 text-center text-4xl font-bold text-[#58b5de] md:text-5xl">
                    Shipping Policy
                </h1>

                <p className="mb-14 text-center text-lg leading-9 text-[#636870] md:text-[16px]">
                    At Graft3D, we understand the importance of timely and reliable delivery of your order. Our Shipping Policy outlines the key information you need to know when placing an order through our website.
                </p>

                <div className="space-y-14">
                    {shippingSections.map((section) => (
                        <article key={section.title}>
                            <h2 className="mb-5 text-xl font-bold text-[#0f2a59]">
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

                <div className="mt-14 space-y-5 text-lg leading-9 text-[#636870] md:text-[16px]">
                    <p>
                        By placing an order on our website, you agree to comply with and accept the terms outlined in this Shipping Policy. If you have any questions or require further assistance regarding shipping, please don't hesitate to contact our customer support team.
                    </p>
                    <p>
                        Graft3D is committed to providing you with a seamless and efficient shipping experience. We appreciate your trust in our services.
                    </p>
                </div>
            </div>
        </section>
    );
}
