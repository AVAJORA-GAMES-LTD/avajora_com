import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import Link from "next/link";
import { COMPANY as CO } from "@/lib/company";

export const metadata: Metadata = {
    title: "Privacy Request — AVAJORA GAMES LTD",
    description:
        "Submit a data subject access request (DSAR). Exercise your GDPR, UK GDPR, CCPA/CPRA, and other privacy rights.",
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Request",
    description:
        "Submit a data subject access request (DSAR) to AVAJORA GAMES LTD.",
    publisher: {
        "@type": "Organization",
        name: CO.name,
        url: CO.url,
    },
    dateModified: "2026-02-17",
    inLanguage: "en",
};

const V = "1.0";
const UPDATED = "17 February 2026";

export default function PrivacyRequestPage() {
    return (
        <>
            <Navbar />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <main className="min-h-screen bg-white pt-24 sm:pt-28 md:pt-32 pb-20 sm:pb-24 px-4 sm:px-6">
                <article className="mx-auto max-w-3xl text-[15px] leading-[1.75] text-neutral-800 sm:text-base sm:leading-[1.8]">

                    <h1 className="text-[28px] sm:text-[32px] md:text-4xl font-bold text-neutral-900 leading-tight">
                        Privacy Request
                    </h1>
                    <p className="mt-2 text-neutral-900 font-medium">{CO.name}</p>
                    <p className="mt-4 text-sm text-neutral-500">
                        Version {V} &middot; Last Updated: {UPDATED}
                    </p>

                    <hr className="mt-6 mb-8 border-neutral-200" />

                    {/* Intro */}
                    <section>
                        <p>
                            You have privacy rights under the <strong>UK GDPR</strong>,{" "}
                            <strong>EU GDPR</strong>, the <strong>CCPA/CPRA</strong>, and other applicable
                            data protection laws. This page explains how to submit a formal privacy request
                            to {CO.name}.
                        </p>
                    </section>

                    {/* What you can request */}
                    <section className="mt-10">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">What You Can Request</h2>

                        <div className="overflow-x-auto mt-4 mb-6">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="border-b-2 border-neutral-200 text-left">
                                        <th className="py-2 pr-4 text-neutral-500 font-semibold">Right</th>
                                        <th className="py-2 pr-4 text-neutral-500 font-semibold">Description</th>
                                        <th className="py-2 text-neutral-500 font-semibold">Legal Basis</th>
                                    </tr>
                                </thead>
                                <tbody className="align-top">
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-3 pr-4 font-medium text-neutral-900">Access</td>
                                        <td className="py-3 pr-4">Obtain a copy of all personal data we hold about you.</td>
                                        <td className="py-3">GDPR Art. 15 / CCPA &sect; 1798.100</td>
                                    </tr>
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-3 pr-4 font-medium text-neutral-900">Deletion</td>
                                        <td className="py-3 pr-4">Request erasure of your personal data.</td>
                                        <td className="py-3">GDPR Art. 17 / CCPA &sect; 1798.105</td>
                                    </tr>
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-3 pr-4 font-medium text-neutral-900">Rectification</td>
                                        <td className="py-3 pr-4">Correct inaccurate personal data.</td>
                                        <td className="py-3">GDPR Art. 16 / CCPA &sect; 1798.106</td>
                                    </tr>
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-3 pr-4 font-medium text-neutral-900">Portability</td>
                                        <td className="py-3 pr-4">Receive your data in a structured, machine-readable format (JSON or CSV).</td>
                                        <td className="py-3">GDPR Art. 20</td>
                                    </tr>
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-3 pr-4 font-medium text-neutral-900">Restriction</td>
                                        <td className="py-3 pr-4">Pause processing of your data in certain circumstances.</td>
                                        <td className="py-3">GDPR Art. 18</td>
                                    </tr>
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-3 pr-4 font-medium text-neutral-900">Objection</td>
                                        <td className="py-3 pr-4">Object to processing based on legitimate interests or direct marketing.</td>
                                        <td className="py-3">GDPR Art. 21</td>
                                    </tr>
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-3 pr-4 font-medium text-neutral-900">Withdraw Consent</td>
                                        <td className="py-3 pr-4">Withdraw previously given consent at any time.</td>
                                        <td className="py-3">GDPR Art. 7(3)</td>
                                    </tr>
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-3 pr-4 font-medium text-neutral-900">Opt Out of Sale/Sharing</td>
                                        <td className="py-3 pr-4">Stop sharing of personal information for targeted advertising.</td>
                                        <td className="py-3">CCPA &sect; 1798.120</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* How to submit */}
                    <section className="mt-10">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">How to Submit a Request</h2>

                        <h3 className="mt-6 mb-3 text-lg font-bold text-neutral-900">Option 1 — Email (Primary)</h3>
                        <p>
                            Send an email to{" "}
                            <a
                                href={`mailto:${CO.privacy}?subject=Privacy%20Request`}
                                className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
                            >
                                {CO.privacy}
                            </a>{" "}
                            with the following information:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mt-3">
                            <li><strong>Subject line:</strong> &ldquo;Privacy Request — [Your Request Type]&rdquo;</li>
                            <li><strong>Full name</strong> (or in-game username)</li>
                            <li><strong>Email address</strong> associated with your account (if any)</li>
                            <li><strong>In-game user ID</strong> (found in Settings &gt; About within the game)</li>
                            <li><strong>Device type</strong> (iOS or Android)</li>
                            <li><strong>Request type</strong> (e.g., Access, Deletion, Portability, Opt-Out)</li>
                            <li><strong>Country / State of residence</strong> (to determine which law applies)</li>
                        </ul>

                        <h3 className="mt-8 mb-3 text-lg font-bold text-neutral-900">Option 2 — In-App</h3>
                        <p>
                            Open any of our games and navigate to:
                        </p>
                        <p className="mt-2 font-mono text-sm bg-neutral-50 border border-neutral-200 rounded px-4 py-3">
                            Settings &gt; Privacy &gt; Contact Us
                        </p>

                        <h3 className="mt-8 mb-3 text-lg font-bold text-neutral-900">Option 3 — Postal Mail</h3>
                        <p>
                            Write to us at: <strong>{CO.addr}</strong>
                        </p>
                    </section>

                    {/* Verification */}
                    <section className="mt-10">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">Identity Verification</h2>
                        <p>
                            To protect your privacy, we may need to verify your identity before processing
                            your request. We may ask you to:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mt-3">
                            <li>Confirm the email address associated with your account.</li>
                            <li>Provide your in-game user ID.</li>
                            <li>Respond to a verification email sent to your registered email address.</li>
                        </ul>
                        <p className="mt-4">
                            We will never ask for your password, credit card number, or government-issued ID
                            as part of the verification process.
                        </p>
                    </section>

                    {/* Response times */}
                    <section className="mt-10">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">Response Times</h2>
                        <div className="overflow-x-auto mt-4 mb-6">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="border-b-2 border-neutral-200 text-left">
                                        <th className="py-2 pr-4 text-neutral-500 font-semibold">Law</th>
                                        <th className="py-2 pr-4 text-neutral-500 font-semibold">Initial Response</th>
                                        <th className="py-2 text-neutral-500 font-semibold">Extension (Complex)</th>
                                    </tr>
                                </thead>
                                <tbody className="align-top">
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-3 pr-4 font-medium text-neutral-900">GDPR / UK GDPR</td>
                                        <td className="py-3 pr-4">30 calendar days</td>
                                        <td className="py-3">+2 months (with notice)</td>
                                    </tr>
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-3 pr-4 font-medium text-neutral-900">CCPA / CPRA</td>
                                        <td className="py-3 pr-4">45 calendar days</td>
                                        <td className="py-3">+45 days (with notice)</td>
                                    </tr>
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-3 pr-4 font-medium text-neutral-900">Other US States</td>
                                        <td className="py-3 pr-4">45 calendar days</td>
                                        <td className="py-3">Varies by state</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            All requests are processed <strong>free of charge</strong>, unless requests are
                            manifestly unfounded or excessive (GDPR Art. 12(5)).
                        </p>
                    </section>

                    {/* Authorised agents */}
                    <section className="mt-10">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">Authorised Agents</h2>
                        <p>
                            Under the CCPA, you may designate an authorised agent to submit a request on your
                            behalf. The agent must provide written authorisation or a valid power of attorney.
                            We may still verify your identity directly.
                        </p>
                    </section>

                    {/* Appeal */}
                    <section className="mt-10">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">Right to Appeal</h2>
                        <p>
                            If we deny your request, you have the right to appeal. Contact{" "}
                            <a
                                href={`mailto:${CO.privacy}?subject=Privacy%20Request%20Appeal`}
                                className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
                            >
                                {CO.privacy}
                            </a>{" "}
                            with the subject &ldquo;Privacy Request Appeal.&rdquo; We will respond within the
                            timeframes required by applicable law.
                        </p>
                        <p className="mt-4">
                            You also have the right to lodge a complaint with your relevant supervisory authority:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mt-3">
                            <li>
                                <strong>UK:</strong> Information Commissioner&rsquo;s Office (ICO) —{" "}
                                <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">ico.org.uk</a>
                            </li>
                            <li>
                                <strong>EEA:</strong> Your national Data Protection Authority —{" "}
                                <a href="https://edpb.europa.eu/about-edpb/about-edpb/members_en" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600 break-all">edpb.europa.eu</a>
                            </li>
                            <li>
                                <strong>California:</strong> Office of the Attorney General —{" "}
                                <a href="https://oag.ca.gov/privacy" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">oag.ca.gov/privacy</a>
                            </li>
                        </ul>
                    </section>

                    {/* Links */}
                    <section className="mt-10">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">Related Pages</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <Link href="/privacy-policy" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">Privacy Policy</Link> — full details of our data practices
                            </li>
                            <li>
                                <Link href="/do-not-sell" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">Do Not Sell or Share My Personal Information</Link> — opt out of ad-related sharing
                            </li>
                            <li>
                                <Link href="/advertising-partners" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">Advertising Partners</Link> — who receives your data
                            </li>
                            <li>
                                <Link href="/cookie-policy" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">Cookie Policy</Link> — website cookies
                            </li>
                        </ul>
                    </section>

                    <hr className="mt-14 mb-6 border-neutral-200" />
                    <p className="text-xs text-neutral-400">
                        &copy; {new Date().getFullYear()} {CO.name}. All rights reserved.
                    </p>
                </article>
            </main>
        </>
    );
}
