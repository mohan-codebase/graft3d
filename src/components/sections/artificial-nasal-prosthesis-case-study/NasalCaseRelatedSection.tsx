import Link from 'next/link';

export default function NasalCaseRelatedSection() {
    return (
        <section className="border-t border-gray-200 pt-8">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wide text-gray-600">You Might Also Like</h4>
            <Link
                href="/virtual-surgical-planning-mandibular-reconstruction"
                className="inline-block text-base font-semibold text-primary hover:underline"
            >
                Virtual Surgical Planning for Mandibular Reconstruction
            </Link>
            <p className="mt-1 text-xs text-gray-500">August 10, 2022</p>
        </section>
    );
}
