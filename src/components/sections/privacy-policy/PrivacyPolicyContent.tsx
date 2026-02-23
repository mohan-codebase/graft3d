const privacySections = [
    {
        title: 'INTRODUCTION',
        content: [
            'Graft 3D Healthcare Solutions pvt ltd, is committed to protecting your privacy. We publish our Privacy Policy so that you can understand our privacy practices and how they help protect your privacy.',
            'Graft3D is a 3D business and technical solution provider, equips companies with advanced disruptive technologies, software & hardware that help their day to day productivity.',
            'This privacy notice discloses the privacy practices for Graft3D . This privacy notice applies solely to information collected by this website. It will notify you of the following:',
        ],
        list: [
            'What personally identifiable information is collected from you through the website, how it is used, and with whom it may be shared.',
            'What choices are available to you regarding the use of your data.',
            'The security procedures in place to protect against the misuse of your information.',
            'How you can correct any inaccuracies in the information.',
            'Information collection, use, and sharing.',
        ],
        postListContent: [
            'We are the sole owners of the information collected on this site. We only have access to/collect information that you voluntarily give us via email or other direct contact from you. We will not sell or rent this information to anyone.',
            'We will use your information to respond to you, regarding the reason you contacted us. We will not share your information with any third party outside of our organization, other than as necessary to fulfill your request, e.g. to ship an order.',
            'Unless you ask us not to, we may contact you via email in the future to tell you about specials, products or services, or changes to this privacy policy.',
        ],
    },
    {
        title: 'SCOPE',
        content: [
            'This policy applies to all Information collected by Graft3D from which an individual can be identified ("Personal Information"). The Personal Information we collect includes the Employee information described below as well as certain information including names, email addresses, mailing and billing addresses, telephone and fax numbers, health and treatment information, and transaction information collected from customers, potential customers and end users of our products and services for sales, marketing, order fulfillment, and order delivery purposes. Additionally, in our section on Online Information, we also discuss how we gather and use all information gathered online even if it is not Personal Information. Graft3D will not deviate from this Policy even if applicable national laws are less stringent than this Policy.',
        ],
    },
    {
        title: 'CHOICE',
        content: [
            'We will always allow you to choose opt-out before your Personal Information is (1) disclosed to a third party (other than a Graft3D employee doing work at our direction), or (2) to be used for a purpose that is materially different than that for which it was originally collected or subsequently authorized by you. Although we do not ever anticipate providing sensitive Personal Information, such as Employee health information, to a non-agent third party or using it for a purpose other than that for which it was collected, we will never do so without first allowing the individual involved to affirmatively and expressly consent (opt-in) to such transfer or use. The only exception to this choice for both sensitive and non-sensitive Personal Information would be where we are required to disclose your Personal Information under governmental or judicial order, law, or regulation to meet national security or law enforcement requirements.',
            'At a minimum, you will always be able to opt-out from receiving marketing materials from Graft3D. Where applicable law requires that more stringent requirements (opt-in) be applied before you receive marketing material or other communications from us, we will implement the same.',
        ],
    },
    {
        title: 'SECURITY',
        content: [
            'We take precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline.',
            'Only employees who need the information to perform a specific job (for example, billing or customer service) are granted access to personally identifiable information. The computers/servers in which we store personally identifiable information are kept in a secure environment.',
        ],
    },
    {
        title: 'COOKIES',
        content: [
            'We use "cookies" on this site. A cookie is a piece of data stored on a site visitor\'s hard drive to help us improve your access to our site and identify repeat visitors to our site. For instance, when we use a cookie to identify you, you would not have to log in a password more than once, thereby saving time while on our site. Cookies can also enable us to track and target the interests of our users to enhance the experience on our site. Usage of a cookie is in no way linked to any personally identifiable information on our site.',
        ],
    },
    {
        title: 'DATA INTEGRITY AND PURPOSE LIMITATION',
        content: [
            'We will only collect and retain Personal Information which is relevant to the purposes for which the information is collected, and we will not use it in a way that is incompatible with such purposes unless such use has been subsequently authorized by you. We will take reasonable steps to ensure that Personal Information is reliable for its intended use, accurate, complete, and current. We may occasionally contact you to determine that your data is still accurate and current.',
        ],
    },
    {
        title: 'ACCESS AND OTHER RIGHTS',
        content: [
            'You have the right to access, free of charge, obtain a paper or electronic copy, review, correct and update all your Personal Information stored by us, notably to confirm its accuracy. Subject to any relevant legal requirements and exemptions, you may also oppose or limit the processing of your Personal Information or request that certain of your Personal Information be deleted from our files.',
            'Employees may review their personnel files and any Personal Information concerning them upon request by emailing hr@graft3d.com.',
        ],
    },
    {
        title: 'LINKS',
        content: [
            'This website contains links to other sites. Please be aware that we are not responsible for the content or privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of any other site that collects personally identifiable information.',
            'If you feel that we are not abiding by this privacy policy, you should contact us immediately via telephone at +91-6374 410 703 or via sales@graft3d.com .',
        ],
    },
];

export default function PrivacyPolicyContent() {
    return (
        <section className="w-full bg-[#f5f6f8] py-14 md:py-20">
            <div className="mx-auto w-full max-w-[1050px] px-4">
                <h1 className="mb-14 text-center text-4xl font-bold uppercase text-[#58b5de] md:text-5xl">
                    PRIVACY POLICY
                </h1>

                <div className="space-y-14">
                    {privacySections.map((section) => (
                        <article key={section.title}>
                            <h2 className="mb-5 text-xl font-bold uppercase text-[#0f2a59]">
                                {section.title}
                            </h2>
                            <div className="space-y-5 text-lg leading-9 text-[#636870] md:text-[16px]">
                                {section.content && section.content.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}

                                {section.list && (
                                    <ul className="list-disc pl-5 space-y-2">
                                        {section.list.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                )}

                                {section.postListContent && section.postListContent.map((paragraph, index) => (
                                    <p key={`post-${index}`}>{paragraph}</p>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
