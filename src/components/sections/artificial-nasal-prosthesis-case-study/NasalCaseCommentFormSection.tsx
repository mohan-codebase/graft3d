"use client";

import { useLeadForm } from "@/lib/useLeadForm";

export default function NasalCaseCommentFormSection() {
    const { status, feedback, handleSubmit } = useLeadForm({
        subject: "Nasal Prosthesis Blog Comment",
        successMessage: "Thanks. Your comment request has been submitted for review.",
    });

    return (
        <section className="mt-12 border-t border-gray-200 pt-8">
            <h4 className="mb-4 text-xl font-semibold text-gray-800">Leave a Reply</h4>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <textarea
                    name="message"
                    required
                    placeholder="Your comment here..."
                    className="h-36 w-full rounded border border-gray-300 p-3 text-sm text-gray-800 outline-none transition-colors focus:border-primary"
                />
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Name (required)"
                        className="rounded border border-gray-300 p-3 text-sm text-gray-800 outline-none transition-colors focus:border-primary"
                    />
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="Email (required)"
                        className="rounded border border-gray-300 p-3 text-sm text-gray-800 outline-none transition-colors focus:border-primary"
                    />
                    <input
                        type="text"
                        name="website"
                        placeholder="Website"
                        className="rounded border border-gray-300 p-3 text-sm text-gray-800 outline-none transition-colors focus:border-primary"
                    />
                </div>
                <label className="flex items-center gap-2 text-sm text-gray-600">
                    <input type="checkbox" name="rememberMe" className="h-4 w-4" />
                    Save my name, email, and website in this browser for the next time I comment.
                </label>
                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="rounded bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
                >
                    {status === "loading" ? "Posting..." : "Post Comment"}
                </button>
                {feedback && (
                    <p className={`text-sm ${status === "error" ? "text-red-600" : "text-green-700"}`}>
                        {feedback}
                    </p>
                )}
            </form>
        </section>
    );
}
