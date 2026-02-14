import Link from 'next/link';

export default function VspMandibularRelatedSection() {
    return (
        <section className="mt-12 border-t border-gray-200 pt-8">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wide text-gray-600">You Might Also Like</h4>
            <Link
                href="/artificial-nasal-prosthesis-case-study"
                className="inline-block text-base font-semibold text-primary hover:underline"
            >
                Nasal Prosthesis
            </Link>
            <p className="mt-1 text-xs text-gray-500">August 6, 2022</p>
        </section>
    );
}
