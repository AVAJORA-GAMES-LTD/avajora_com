import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { COMPANY as CO } from "@/lib/company";

export const metadata: Metadata = {
    title: "Imprint — AVAJORA GAMES LTD",
    description:
        "Legal entity information, company registration details, and contact information for AVAJORA GAMES LTD.",
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["WebPage", "AboutPage"],
    name: "Imprint",
    headline: "Imprint — AVAJORA GAMES LTD",
    description:
        "Legal entity information, company registration details, and contact information for AVAJORA GAMES LTD.",
    publisher: {
        "@type": "Organization",
        name: CO.name,
        url: CO.url,
    },
    datePublished: "2026-02-17",
    dateModified: "2026-02-17",
    inLanguage: "en",
    mainEntity: {
        "@type": "Organization",
        name: CO.name,
        legalName: CO.name,
        url: CO.url,
        address: {
            "@type": "PostalAddress",
            streetAddress: "71-75 Shelton Street, Covent Garden",
            addressLocality: "London",
            postalCode: "WC2H 9JQ",
            addressCountry: "GB",
        },
        contactPoint: {
            "@type": "ContactPoint",
            email: "contact@avajora.com",
            contactType: "customer service",
        },
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
                    {/* Header */}
                    <header className="mb-10">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 leading-tight">
                            Imprint
                        </h1>
                        <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
                            Legal entity information and contact details
                        </p>
                    </header>

                    <hr className="mb-10 border-neutral-200" />

                    {/* Company Information */}
                    <section className="space-y-8">
                        {/* Legal Entity Name - Big */}
                        <div className="text-center py-8">
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-900">
                                {CO.name}
                            </h2>
                        </div>

                        {/* Company Details Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full text-base border-collapse">
                                <tbody>
                                    <tr className="border-b border-neutral-200">
                                        <td className="py-4 pr-6 text-neutral-500 font-medium align-top whitespace-nowrap w-48">
                                            Legal Entity Name
                                        </td>
                                        <td className="py-4 text-neutral-900 font-semibold text-lg">
                                            {CO.name}
                                        </td>
                                    </tr>
                                    <tr className="border-b border-neutral-200">
                                        <td className="py-4 pr-6 text-neutral-500 font-medium align-top whitespace-nowrap">
                                            Trading As
                                        </td>
                                        <td className="py-4 text-neutral-900">
                                            {CO.trade}
                                        </td>
                                    </tr>
                                    <tr className="border-b border-neutral-200">
                                        <td className="py-4 pr-6 text-neutral-500 font-medium align-top whitespace-nowrap">
                                            Entity Type
                                        </td>
                                        <td className="py-4 text-neutral-900">
                                            {CO.type}
                                        </td>
                                    </tr>
                                    <tr className="border-b border-neutral-200">
                                        <td className="py-4 pr-6 text-neutral-500 font-medium align-top whitespace-nowrap">
                                            Company Registration Number
                                        </td>
                                        <td className="py-4 text-neutral-900">
                                            {CO.reg}
                                        </td>
                                    </tr>
                                    <tr className="border-b border-neutral-200">
                                        <td className="py-4 pr-6 text-neutral-500 font-medium align-top whitespace-nowrap">
                                            D-U-N-S© Number
                                        </td>
                                        <td className="py-4 text-neutral-900">
                                            {CO.duns}
                                        </td>
                                    </tr>
                                    <tr className="border-b border-neutral-200">
                                        <td className="py-4 pr-6 text-neutral-500 font-medium align-top whitespace-nowrap">
                                            Incorporated In
                                        </td>
                                        <td className="py-4 text-neutral-900">
                                            {CO.country}
                                        </td>
                                    </tr>
                                    <tr className="border-b border-neutral-200">
                                        <td className="py-4 pr-6 text-neutral-500 font-medium align-top whitespace-nowrap">
                                            Registered Address
                                        </td>
                                        <td className="py-4 text-neutral-900">
                                            {CO.addr}
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
                                    <tr className="border-b border-neutral-200">
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

                        {/* Additional Contact Information */}
                        <div className="mt-12 pt-8 border-t border-neutral-200">
                            <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-6">
                                Departmental Contact Information
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <h4 className="font-semibold text-neutral-900">General Support</h4>
                                    <a
                                        href={`mailto:${CO.support}`}
                                        className="text-neutral-600 underline underline-offset-2 hover:text-neutral-900 block"
                                    >
                                        {CO.support}
                                    </a>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="font-semibold text-neutral-900">Legal Enquiries</h4>
                                    <a
                                        href={`mailto:${CO.legal}`}
                                        className="text-neutral-600 underline underline-offset-2 hover:text-neutral-900 block"
                                    >
                                        {CO.legal}
                                    </a>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="font-semibold text-neutral-900">Privacy &amp; Data Protection</h4>
                                    <a
                                        href={`mailto:${CO.privacy}`}
                                        className="text-neutral-600 underline underline-offset-2 hover:text-neutral-900 block"
                                    >
                                        {CO.privacy}
                                    </a>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="font-semibold text-neutral-900">Executive Office</h4>
                                    <a
                                        href={`mailto:${CO.ceo}`}
                                        className="text-neutral-600 underline underline-offset-2 hover:text-neutral-900 block"
                                    >
                                        {CO.ceo}
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Regulatory Information */}
                        <div className="mt-12 pt-8 border-t border-neutral-200">
                            <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">
                                Regulatory Information
                            </h3>
                            <p className="text-neutral-700 leading-relaxed">
                                {CO.name} is registered with Companies House (England and Wales) under
                                company number {CO.reg}. The company is subject to the laws and
                                regulations of England and Wales and operates as a private limited
                                company. Our D-U-N-S© Number is {CO.duns}.
                            </p>
                            <p className="mt-4 text-neutral-700 leading-relaxed">
                                We are committed to complying with all applicable regulations
                                including the UK General Data Protection Regulation (UK GDPR), the
                                Data Protection Act 2018, consumer protection legislation, and
                                industry-specific standards for mobile game publishing.
                            </p>
                        </div>
                    </section>

                    {/* Footer */}
                    <footer className="mt-16 pt-8 border-t border-neutral-200">
                        <p className="text-sm text-neutral-500 text-center">
                            © {new Date().getFullYear()} {CO.name}. All rights reserved.
                        </p>
                    </footer>
                </article>
            </main>
        </>
    );
}
