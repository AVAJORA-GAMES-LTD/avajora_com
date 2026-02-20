import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import Link from "next/link";
import { COMPANY as CO } from "@/lib/company";
import { LEGAL_VERSIONS } from "@/lib/legal-versions";

export const metadata: Metadata = {
    title: "Transparency Report — AVAJORA GAMES LTD",
    description:
        "Annual transparency report covering data subject requests, data breaches, law enforcement requests, and privacy programme updates.",
};

const { version: V, updated: UPDATED } = LEGAL_VERSIONS.transparencyReport;

const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["WebPage", "Article"],
    name: "Transparency Report",
    headline: "Transparency Report — AVAJORA GAMES LTD",
    description:
        "Annual transparency report covering data subject requests, data breaches, and privacy programme updates.",
    publisher: {
        "@type": "Organization",
        name: CO.name,
        url: CO.url,
    },
    datePublished: "2026-02-17",
    dateModified: "2026-02-17",
    version: V,
    inLanguage: "en",
    mainEntity: {
        "@type": "Report",
        name: "AVAJORA GAMES LTD — Annual Transparency Report",
        reportNumber: "2026-Q1",
    },
    isPartOf: {
        "@type": "WebPage",
        url: `${CO.url}/privacy-policy`,
        name: "Privacy Policy",
    },
};

export default function TransparencyReportPage() {
    const currentYear = new Date().getFullYear();

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
                        Transparency Report
                    </h1>
                    <p className="mt-2 text-neutral-900 font-medium">{CO.name}</p>
                    <p className="mt-4 text-sm text-neutral-500">
                        Version {V} &middot; Last Updated: {UPDATED}
                    </p>

                    <hr className="mt-6 mb-8 border-neutral-200" />

                    {/* ── INTRO ── */}
                    <section>
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">
                            Our Commitment to Transparency
                        </h2>
                        <p>
                            {CO.name} believes in being open about how we handle personal data. This
                            transparency report provides an overview of the privacy-related requests we
                            receive, how we respond to them, and the state of our privacy programme.
                            We publish this report annually (or more frequently if there are material
                            developments).
                        </p>
                        <p className="mt-4">
                            This report covers the period from <strong>1 January {currentYear}</strong> to
                            the date shown above. As a newly established company, some metrics may show
                            zero or low volumes — this is expected and will grow as our game portfolio
                            expands.
                        </p>
                    </section>

                    {/* ── DATA SUBJECT REQUESTS ── */}
                    <section className="mt-10">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">
                            Data Subject Requests (DSARs)
                        </h2>
                        <p>
                            Under GDPR, UK GDPR, CCPA/CPRA, and other applicable privacy laws, individuals
                            have the right to make data subject access requests. The table below summarises
                            requests received and our response.
                        </p>

                        <div className="overflow-x-auto mt-6">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="border-b-2 border-neutral-200 text-left">
                                        <th className="py-2 pr-4 text-neutral-500 font-semibold">Request Type</th>
                                        <th className="py-2 pr-4 text-neutral-500 font-semibold">Received</th>
                                        <th className="py-2 pr-4 text-neutral-500 font-semibold">Completed</th>
                                        <th className="py-2 pr-4 text-neutral-500 font-semibold">Denied</th>
                                        <th className="py-2 text-neutral-500 font-semibold">Avg. Response Time</th>
                                    </tr>
                                </thead>
                                <tbody className="align-top">
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-2 pr-4">Access (Right to Know)</td>
                                        <td className="py-2 pr-4">0</td>
                                        <td className="py-2 pr-4">0</td>
                                        <td className="py-2 pr-4">0</td>
                                        <td className="py-2">N/A</td>
                                    </tr>
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-2 pr-4">Deletion (Right to Erasure)</td>
                                        <td className="py-2 pr-4">0</td>
                                        <td className="py-2 pr-4">0</td>
                                        <td className="py-2 pr-4">0</td>
                                        <td className="py-2">N/A</td>
                                    </tr>
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-2 pr-4">Correction (Right to Rectify)</td>
                                        <td className="py-2 pr-4">0</td>
                                        <td className="py-2 pr-4">0</td>
                                        <td className="py-2 pr-4">0</td>
                                        <td className="py-2">N/A</td>
                                    </tr>
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-2 pr-4">Opt-Out of Sale/Sharing</td>
                                        <td className="py-2 pr-4">0</td>
                                        <td className="py-2 pr-4">0</td>
                                        <td className="py-2 pr-4">0</td>
                                        <td className="py-2">N/A</td>
                                    </tr>
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-2 pr-4">Data Portability</td>
                                        <td className="py-2 pr-4">0</td>
                                        <td className="py-2 pr-4">0</td>
                                        <td className="py-2 pr-4">0</td>
                                        <td className="py-2">N/A</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 pr-4 font-medium">Total</td>
                                        <td className="py-2 pr-4 font-medium">0</td>
                                        <td className="py-2 pr-4 font-medium">0</td>
                                        <td className="py-2 pr-4 font-medium">0</td>
                                        <td className="py-2 font-medium">N/A</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="mt-4 text-sm text-neutral-500">
                            Our target response time is 30 calendar days (GDPR) / 45 days (CCPA).
                            We have not denied any verifiable request to date.
                        </p>
                    </section>

                    {/* ── DATA BREACHES ── */}
                    <section className="mt-10">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">
                            Data Breaches
                        </h2>
                        <p>
                            Under GDPR Article 33, we are required to notify the ICO within 72 hours of
                            becoming aware of a personal data breach that is likely to result in a risk to
                            individuals&rsquo; rights and freedoms. Under Article 34, we will also notify
                            affected individuals directly if the breach is likely to result in a high risk.
                        </p>
                        <div className="mt-6 border border-green-200 bg-green-50 rounded-lg p-5">
                            <p className="text-green-900 font-medium">
                                No personal data breaches have occurred during the reporting period.
                            </p>
                        </div>
                        <p className="mt-4 text-sm text-neutral-500">
                            If a breach occurs in the future, this section will be updated with: the date
                            of the breach, nature and categories of data affected, approximate number of
                            individuals affected, measures taken, and supervisory authority notification status.
                        </p>
                    </section>

                    {/* ── LAW ENFORCEMENT ── */}
                    <section className="mt-10">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">
                            Law Enforcement &amp; Government Requests
                        </h2>
                        <div className="overflow-x-auto mt-4">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="border-b-2 border-neutral-200 text-left">
                                        <th className="py-2 pr-4 text-neutral-500 font-semibold">Type</th>
                                        <th className="py-2 pr-4 text-neutral-500 font-semibold">Received</th>
                                        <th className="py-2 pr-4 text-neutral-500 font-semibold">Data Disclosed</th>
                                        <th className="py-2 text-neutral-500 font-semibold">Challenged</th>
                                    </tr>
                                </thead>
                                <tbody className="align-top">
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-2 pr-4">Court Orders / Legal Process</td>
                                        <td className="py-2 pr-4">0</td>
                                        <td className="py-2 pr-4">0</td>
                                        <td className="py-2">0</td>
                                    </tr>
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-2 pr-4">Law Enforcement Requests</td>
                                        <td className="py-2 pr-4">0</td>
                                        <td className="py-2 pr-4">0</td>
                                        <td className="py-2">0</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 pr-4">National Security Letters</td>
                                        <td className="py-2 pr-4">0</td>
                                        <td className="py-2 pr-4">0</td>
                                        <td className="py-2">0</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="mt-4 text-sm text-neutral-500">
                            We will disclose personal data to law enforcement only when legally required
                            (e.g. a valid court order). We will challenge overly broad or vague requests
                            and will notify affected users unless prohibited by law.
                        </p>
                    </section>

                    {/* ── QUARTERLY METRICS ── */}
                    <section className="mt-10">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">
                            Quarterly Compliance Metrics
                        </h2>
                        <p className="mb-4">
                            We publish key privacy metrics on a quarterly basis to demonstrate accountability
                            and transparency in our data protection practices.
                        </p>
                        <div className="overflow-x-auto mt-6">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="border-b-2 border-neutral-200 text-left">
                                        <th className="py-2 pr-4 text-neutral-500 font-semibold">Metric</th>
                                        <th className="py-2 pr-4 text-neutral-500 font-semibold">Q1 2026</th>
                                        <th className="py-2 text-neutral-500 font-semibold">Target</th>
                                    </tr>
                                </thead>
                                <tbody className="align-top">
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-2 pr-4">Average DSAR response time</td>
                                        <td className="py-2 pr-4">N/A (0 requests)</td>
                                        <td className="py-2">&lt; 21 days</td>
                                    </tr>
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-2 pr-4">Data breaches reported</td>
                                        <td className="py-2 pr-4">0</td>
                                        <td className="py-2">0</td>
                                    </tr>
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-2 pr-4">Advertising SDK updates</td>
                                        <td className="py-2 pr-4">2</td>
                                        <td className="py-2">Quarterly review</td>
                                    </tr>
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-2 pr-4">Privacy Policy version changes</td>
                                        <td className="py-2 pr-4">1 (v1.0)</td>
                                        <td className="py-2">As needed</td>
                                    </tr>
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-2 pr-4">Third-party security audits</td>
                                        <td className="py-2 pr-4">Scheduled Q2 2026</td>
                                        <td className="py-2">Annual</td>
                                    </tr>
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-2 pr-4">Sub-processor reviews conducted</td>
                                        <td className="py-2 pr-4">1</td>
                                        <td className="py-2">Quarterly</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 pr-4">Consent withdrawal requests (ads)</td>
                                        <td className="py-2 pr-4">0</td>
                                        <td className="py-2">Track &amp; honor &lt; 24h</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* ── SDK CHANGELOG ── */}
                    <section className="mt-10">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">
                            Third-Party SDK Changelog
                        </h2>
                        <p className="mb-4">
                            We maintain a public audit trail of all third-party SDK integrations, updates,
                            and removals. Each SDK version change is reviewed for privacy impact before
                            deployment to production.
                        </p>
                        <div className="space-y-4 mt-6">
                            <div className="border-l-4 border-blue-400 bg-blue-50 px-4 py-3 rounded-r-md">
                                <p className="text-sm text-blue-900">
                                    <strong>2026-02-17:</strong> Updated Unity Ads SDK to v4.12.2 (security patch for iOS 18 compatibility).
                                    Privacy impact: None — no new data collection.
                                </p>
                            </div>
                            <div className="border-l-4 border-blue-400 bg-blue-50 px-4 py-3 rounded-r-md">
                                <p className="text-sm text-blue-900">
                                    <strong>2026-02-01:</strong> Updated CAS.ai SDK to v3.8.1 (improved consent signal propagation).
                                    Privacy impact: Positive — better consent enforcement for EEA/UK users.
                                </p>
                            </div>
                            <div className="border-l-4 border-neutral-300 bg-neutral-50 px-4 py-3 rounded-r-md">
                                <p className="text-sm text-neutral-700">
                                    <strong>2026-01-15:</strong> Initial SDK integration: Unity Analytics v5.2.0,
                                    Google Firebase Analytics (Unity SDK 13.8.0), CAS.ai v3.7.5,
                                    Liftoff SDK v7.1.0, InMobi SDK v10.7.0. All SDKs configured with COPPA-compliant defaults.
                                    Firebase Analytics collection is disabled for child-identified sessions.
                                </p>
                            </div>
                        </div>
                        <p className="mt-4 text-sm text-neutral-500">
                            SDK version information for each published game is available on the respective
                            Google Play Data Safety Section and Apple App Privacy Details.
                        </p>
                    </section>

                    {/* ── PRIVACY PROGRAMME ── */}
                    <section className="mt-10">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">
                            Privacy Programme Updates
                        </h2>
                        <ul className="list-disc pl-5 space-y-3">
                            <li>
                                <strong>Privacy Policy updates:</strong> Our Privacy Policy has been
                                comprehensively reviewed and updated to version {LEGAL_VERSIONS.privacyPolicy.version}{" "}
                                as of {LEGAL_VERSIONS.privacyPolicy.updated}. Key changes include an expanded
                                sub-processor register, Art. 34 breach notification commitments, and
                                future-proofing for Android Privacy Sandbox.
                            </li>
                            <li>
                                <strong>Consent management:</strong> We use Klaro (self-hosted, open-source)
                                for website cookie consent and CAS.ai&rsquo;s built-in CMP for in-app consent
                                (TCF 2.2 compliant for EEA/UK users).
                            </li>
                            <li>
                                <strong>Data Protection Impact Assessments:</strong> We conduct DPIAs for
                                any new processing activity that is likely to result in a high risk to
                                individuals. A DPIA was completed for our advertising mediation stack
                                (CAS.ai + downstream networks) and for Google Firebase Analytics
                                integration (covering app-instance identifiers, GAID collection, and
                                international data transfers to Google LLC in the USA).
                            </li>
                            <li>
                                <strong>Sub-processor monitoring:</strong> We review our sub-processor list
                                quarterly and update our Privacy Policy whenever a sub-processor is added or
                                removed.
                            </li>
                            <li>
                                <strong>Cookie audits:</strong> We perform periodic automated cookie scans
                                of our website to identify undisclosed cookies. Results are reflected in our
                                Cookie Policy.
                            </li>
                            <li>
                                <strong>Third-party security audits:</strong> We conduct annual independent
                                security assessments covering infrastructure penetration testing, mobile
                                app binary analysis, and data processing agreement compliance. Audit
                                summaries are available upon request to{" "}
                                <a
                                    href={`mailto:${CO.privacy}`}
                                    className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
                                >
                                    {CO.privacy}
                                </a>.
                            </li>
                        </ul>
                    </section>

                    {/* ── CONTACT ── */}
                    <section className="mt-10">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">
                            Questions About This Report
                        </h2>
                        <p>
                            If you have questions about this transparency report or our privacy practices,
                            contact us at{" "}
                            <a
                                href={`mailto:${CO.privacy}`}
                                className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
                            >
                                {CO.privacy}
                            </a>.
                        </p>
                        <p className="mt-4">
                            <strong>Supervisory authority:</strong> Our lead supervisory authority is the{" "}
                            <a
                                href="https://ico.org.uk"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
                            >
                                Information Commissioner&rsquo;s Office (ICO)
                            </a>{" "}
                            in the United Kingdom.
                        </p>
                    </section>

                    {/* ── RELATED LINKS ── */}
                    <section className="mt-10">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">Related Links</h2>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/privacy-policy" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy-summary" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">
                                    Privacy at a Glance
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy/request" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">
                                    Submit a Privacy Request
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy-for-parents" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">
                                    Privacy for Parents &amp; Guardians
                                </Link>
                            </li>
                        </ul>
                    </section>

                    <hr className="mt-14 mb-6 border-neutral-200" />
                    <p className="text-xs text-neutral-400">
                        &copy; {currentYear} {CO.name}. All rights reserved.
                    </p>
                </article>
            </main>
        </>
    );
}
