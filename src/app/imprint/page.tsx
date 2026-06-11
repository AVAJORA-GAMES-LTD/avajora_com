import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { COMPANY as CO } from "@/lib/company";

export const metadata: Metadata = {
    title: "Contact — AVAJORA",
    description: "Contact information for AVAJORA.",
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["WebPage", "ContactPage"],
    name: "Contact",
    headline: "Contact — AVAJORA",
    description: "Contact information for AVAJORA.",
    publisher: {
        "@type": "Organization",
        name: CO.name,
        url: CO.url,
    },
};

export default function ImprintPage() {
    return (
        <>
            <Navbar />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <main className="min-h-screen bg-white pt-24 sm:pt-28 md:pt-32 pb-20 sm:pb-24 px-4 sm:px-6">
                <article className="mx-auto max-w-3xl">
                    <header className="mb-10">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 leading-tight">
                            AVAJORA
                        </h1>
                        <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
                            Contact information
                        </p>
                    </header>

                    <hr className="mb-10 border-neutral-200" />

                    <section className="space-y-8">
                        <div className="overflow-x-auto">
                            <table className="w-full text-base border-collapse">
                                <tbody>
                                    <tr className="border-b border-neutral-200">
                                        <td className="py-4 pr-6 text-neutral-500 font-medium align-top whitespace-nowrap w-48">
                                            Name
                                        </td>
                                        <td className="py-4 text-neutral-900 font-semibold text-lg">
                                            {CO.name}
                                        </td>
                                    </tr>
                                    <tr className="border-b border-neutral-200">
                                        <td className="py-4 pr-6 text-neutral-500 font-medium align-top whitespace-nowrap">
                                            Contact Email
                                        </td>
                                        <td className="py-4">
                                            <a
                                                href={`mailto:${CO.contact}`}
                                                className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600 font-medium"
                                            >
                                                {CO.contact}
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 pr-6 text-neutral-500 font-medium align-top whitespace-nowrap">
                                            Website
                                        </td>
                                        <td className="py-4">
                                            <a
                                                href={CO.url}
                                                className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {CO.web}
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </article>
            </main>
        </>
    );
}
