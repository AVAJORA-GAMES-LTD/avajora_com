import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import Link from "next/link";
import { COMPANY as CO } from "@/lib/company";
import { LEGAL_VERSIONS } from "@/lib/legal-versions";
import { PrivacyRequestForm } from "./PrivacyRequestForm";

export const metadata: Metadata = {
    title: "Privacy Request — AVAJORA GAMES LTD",
    description:
        "Submit a data subject access request (DSAR). Exercise your GDPR, UK GDPR, CCPA/CPRA, and other privacy rights.",
};

const { version: V, updated: UPDATED } = LEGAL_VERSIONS.privacyRequest;

const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["WebPage", "Article"],
    name: "Privacy Request",
    headline: "Privacy Request — AVAJORA GAMES LTD",
    description:
        "Submit a data subject access request (DSAR) to AVAJORA GAMES LTD.",
    publisher: {
        "@type": "Organization",
        name: CO.name,
        url: CO.url,
    },
    datePublished: "2025-01-15",
    dateModified: "2026-02-17",
    version: V,
    inLanguage: "en",
};

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

                        {/* Delete Account Callout */}
                        <div className="mt-8 p-6 bg-neutral-50 border-l-4 border-neutral-900 rounded">
                            <h3 className="text-lg font-bold text-neutral-900 mb-2">
                                🗑️ Delete My Account
                            </h3>
                            <p className="text-sm text-neutral-700 mb-4">
                                To permanently delete your account and all associated data, email us at{" "}
                                <a
                                    href={`mailto:${CO.support}?subject=Delete%20My%20Account`}
                                    className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600 font-medium"
                                >
                                    {CO.support}
                                </a>{" "}
                                with the subject &ldquo;Delete My Account.&rdquo; Include your in-game user ID
                                and the email address associated with your account. We will process your deletion
                                request within 30 days. <strong>This action is irreversible.</strong> You will lose
                                all in-game progress, Virtual Items, and purchase history.
                            </p>
                            <a
                                href={`mailto:${CO.support}?subject=Delete%20My%20Account&body=I%20request%20the%20deletion%20of%20my%20account%20and%20all%20associated%20personal%20data.%0A%0AIn-game%20User%20ID%3A%20%5BYour%20User%20ID%5D%0AEmail%3A%20%5BYour%20Email%5D%0ADevice%3A%20%5BiOS%20or%20Android%5D`}
                                className="inline-block px-6 py-2.5 bg-neutral-900 text-white text-sm font-medium rounded hover:bg-neutral-700 transition"
                            >
                                Delete My Account
                            </a>
                        </div>
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

                        <h3 className="mt-8 mb-3 text-lg font-bold text-neutral-900">Option 2 — Web Form</h3>
                        <p className="mb-4">
                            Use our structured form below. It will open your default email client
                            with a pre-filled message. If the button does not open your email app,
                            please email us directly at{" "}
                            <a
                                href={`mailto:${CO.privacy}?subject=Privacy%20Request`}
                                className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
                            >
                                {CO.privacy}
                            </a>
                            .
                        </p>
                        <PrivacyRequestForm />

                        <h3 className="mt-8 mb-3 text-lg font-bold text-neutral-900">Option 3 — In-App</h3>
                        <p>
                            Open any of our games and navigate to:
                        </p>
                        <p className="mt-2 font-mono text-sm bg-neutral-50 border border-neutral-200 rounded px-4 py-3">
                            Settings &gt; Privacy &gt; Contact Us
                        </p>

                        <h3 className="mt-8 mb-3 text-lg font-bold text-neutral-900">Option 4 — Postal Mail</h3>
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

                        <h3 className="mt-8 mb-3 text-lg font-bold text-neutral-900">Requests Involving Children</h3>
                        <p>
                            If you are a parent or legal guardian submitting a request on behalf of a child under
                            16 (or under 13 where COPPA applies), we may ask you to:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mt-3">
                            <li>Provide your own identity verification (name and email).</li>
                            <li>Confirm your relationship to the child (parent or legal guardian).</li>
                            <li>Provide the child&rsquo;s in-game user ID or device information.</li>
                        </ul>
                        <p className="mt-4">
                            We do not require government-issued identification for parental verification. We
                            will use reasonable methods to confirm the parent-child relationship, such as
                            matching the email address used to contact support or verifying account ownership
                            through in-game identifiers.
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
                        <p className="mt-4">
                            <strong>Request handling workflow.</strong> We track each privacy request through
                            intake, identity verification, fulfilment/denial decision, and closure. If your
                            request is denied in whole or in part, we provide the reason and appeal route in
                            accordance with applicable law.
                        </p>
                        <p className="mt-4">
                            For auditability, we keep an internal record of request date, request type,
                            verification status, outcome, and completion date.
                        </p>
                    </section>

                    {/* CCPA Metrics */}
                    <section className="mt-10">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">CCPA Consumer Request Metrics</h2>
                        <p>
                            In accordance with CCPA regulations (Cal.&nbsp;Code&nbsp;Regs.&nbsp;tit.&nbsp;11,&nbsp;&sect;&nbsp;7102),
                            we publish annual metrics on consumer privacy requests. The following data covers the
                            most recent reporting period:
                        </p>
                        <div className="overflow-x-auto mt-4 mb-6">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="border-b-2 border-neutral-200 text-left">
                                        <th className="py-2 pr-4 text-neutral-500 font-semibold">Metric</th>
                                        <th className="py-2 pr-4 text-neutral-500 font-semibold">Access</th>
                                        <th className="py-2 pr-4 text-neutral-500 font-semibold">Deletion</th>
                                        <th className="py-2 text-neutral-500 font-semibold">Opt-Out</th>
                                    </tr>
                                </thead>
                                <tbody className="align-top">
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-3 pr-4 font-medium text-neutral-900">Requests received</td>
                                        <td className="py-3 pr-4">N/A</td>
                                        <td className="py-3 pr-4">N/A</td>
                                        <td className="py-3">N/A</td>
                                    </tr>
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-3 pr-4 font-medium text-neutral-900">Requests complied with</td>
                                        <td className="py-3 pr-4">N/A</td>
                                        <td className="py-3 pr-4">N/A</td>
                                        <td className="py-3">N/A</td>
                                    </tr>
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-3 pr-4 font-medium text-neutral-900">Requests denied</td>
                                        <td className="py-3 pr-4">N/A</td>
                                        <td className="py-3 pr-4">N/A</td>
                                        <td className="py-3">N/A</td>
                                    </tr>
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-3 pr-4 font-medium text-neutral-900">Median response time (days)</td>
                                        <td className="py-3 pr-4">N/A</td>
                                        <td className="py-3 pr-4">N/A</td>
                                        <td className="py-3">N/A</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-sm text-neutral-500">
                            Metrics are updated annually. &ldquo;N/A&rdquo; indicates that no reportable figures are
                            currently published for the reporting period (for example, where the first annual
                            reporting cycle has not yet completed or publication is not currently required).
                            The reporting period runs from 1&nbsp;January to 31&nbsp;December of each
                            calendar year; metrics are published by 1&nbsp;July of the following year.
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
