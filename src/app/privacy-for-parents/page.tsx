import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import Link from "next/link";
import { COMPANY as CO } from "@/lib/company";
import { LEGAL_VERSIONS } from "@/lib/legal-versions";

export const metadata: Metadata = {
    title: "Privacy for Parents & Guardians — AVAJORA GAMES LTD",
    description:
        "A plain-language guide for parents and guardians explaining how AVAJORA GAMES LTD handles children's data, COPPA compliance, and parental controls.",
};

const { version: V, updated: UPDATED } = LEGAL_VERSIONS.privacyForParents;

const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["WebPage", "Article"],
    name: "Privacy for Parents & Guardians",
    headline: "Privacy for Parents & Guardians — AVAJORA GAMES LTD",
    description:
        "A plain-language guide for parents and guardians explaining how AVAJORA GAMES LTD handles children's data.",
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
        "@type": "FAQPage",
        name: "Privacy for Parents — FAQ",
    },
    isPartOf: {
        "@type": "WebPage",
        url: `${CO.url}/privacy-policy`,
        name: "Privacy Policy",
    },
};

function QA({ q, children }: { q: string; children: React.ReactNode }) {
    return (
        <div className="border border-neutral-200 rounded-lg p-5 sm:p-6">
            <h3 className="text-base font-bold text-neutral-900 mb-2">{q}</h3>
            <div className="text-sm text-neutral-700 leading-relaxed">{children}</div>
        </div>
    );
}

export default function PrivacyForParentsPage() {
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
                        Privacy for Parents &amp; Guardians
                    </h1>
                    <p className="mt-2 text-neutral-900 font-medium">{CO.name}</p>
                    <p className="mt-4 text-sm text-neutral-500">
                        Version {V} &middot; Last Updated: {UPDATED}
                    </p>

                    <div className="mt-4 border-l-4 border-blue-400 bg-blue-50 px-4 py-3 rounded-r-md">
                        <p className="text-sm text-blue-900">
                            <strong>This is a simplified guide written for parents and guardians.</strong>{" "}
                            It is not a legal document. For the full, binding text, please read our{" "}
                            <Link href="/privacy-policy" className="text-blue-900 underline underline-offset-2 hover:text-blue-700">
                                Privacy Policy
                            </Link>.
                        </p>
                    </div>

                    <hr className="mt-6 mb-8 border-neutral-200" />

                    {/* ── INTRO ── */}
                    <section>
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">
                            We Take Children&rsquo;s Privacy Seriously
                        </h2>
                        <p>
                            {CO.name} (trading as {CO.trade}) publishes free-to-play casual mobile games.
                            We understand that if your child plays our games, you want to know exactly what
                            data is collected, who sees it, and how to control it. This page answers those
                            questions in plain language.
                        </p>
                    </section>

                    {/* ── KEY FACTS ── */}
                    <section className="mt-10">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-6">Key Facts</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                            <QA q="Are your games designed for children?">
                                <p>
                                    Our games are <strong>not specifically directed at children under 13</strong>{" "}
                                    (or under 16 in some jurisdictions). However, we recognise that children
                                    may play casual mobile games. That is why we implement age-appropriate
                                    safeguards regardless of the target audience.
                                </p>
                            </QA>

                            <QA q="Do you collect personal data from children?">
                                <p>
                                    We do <strong>not knowingly collect personal data from children under 13</strong>{" "}
                                    (or the applicable age threshold in your country). If we learn that we
                                    have collected data from a child without proper parental consent, we will
                                    delete it promptly.
                                </p>
                            </QA>

                            <QA q="What about targeted ads?">
                                <p>
                                    Children are <strong>never served personalised (targeted) ads</strong> in
                                    our games. If our age-gate identifies a user as under the applicable age
                                    threshold, we disable interest-based advertising and enable
                                    COPPA-compliant, child-directed treatment via our ad mediation platform
                                    (CAS.ai). They will still see ads, but only contextual ones — not based
                                    on any profile.
                                </p>
                            </QA>

                            <QA q="Do you verify age?">
                                <p>
                                    Yes. Our games include an <strong>age-gate</strong> that asks the user to
                                    confirm their age before any data collection begins. If a user indicates
                                    they are below the consent threshold, we restrict data collection and
                                    disable personalised advertising automatically.
                                </p>
                            </QA>

                            <QA q="What data IS collected if my child plays?">
                                <p>
                                    If the age-gate identifies a child, we collect only what is strictly necessary
                                    to run the game:
                                </p>
                                <ul className="list-disc pl-4 space-y-1 mt-2">
                                    <li>Device type and operating system (to make the game work correctly)</li>
                                    <li>A device-bound identifier (not the advertising ID) for analytics</li>
                                    <li>Crash data (to fix bugs)</li>
                                    <li>In-app purchase records (if applicable, for tax/legal reasons)</li>
                                </ul>
                                <p className="mt-2">
                                    We do <strong>not</strong> collect names, email addresses, photos,
                                    precise location, or any advertising identifiers for children.
                                </p>
                            </QA>

                            <QA q="Who sees my child's data?">
                                <p>
                                    In child-directed mode, data is shared only with:
                                </p>
                                <ul className="list-disc pl-4 space-y-1 mt-2">
                                    <li><strong>Unity Analytics</strong> — gameplay analytics (device-bound ID only)</li>
                                    <li><strong>CAS.ai</strong> — ad mediation (contextual ads only, no tracking)</li>
                                    <li><strong>Google Cloud</strong> — infrastructure hosting (EU servers)</li>
                                </ul>
                                <p className="mt-2">
                                    No advertising identifiers are transmitted to ad networks when
                                    child-directed treatment is active.
                                </p>
                            </QA>
                        </div>
                    </section>

                    {/* ── YOUR RIGHTS AS A PARENT ── */}
                    <section className="mt-10">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">
                            Your Rights as a Parent or Guardian
                        </h2>
                        <p>Under COPPA, the UK Age Appropriate Design Code (AADC), and GDPR, you have the right to:</p>
                        <ul className="list-disc pl-5 space-y-2 mt-3">
                            <li>
                                <strong>Review</strong> any personal data we have collected from your child.
                            </li>
                            <li>
                                <strong>Request deletion</strong> of your child&rsquo;s data.
                            </li>
                            <li>
                                <strong>Refuse further collection</strong> — we will not condition your
                                child&rsquo;s ability to play on providing more data than is reasonably
                                necessary.
                            </li>
                            <li>
                                <strong>Withdraw consent</strong> at any time.
                            </li>
                        </ul>
                        <p className="mt-4">
                            To exercise any of these rights, email us at{" "}
                            <a
                                href={`mailto:${CO.privacy}?subject=Parent%20Privacy%20Request`}
                                className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
                            >
                                {CO.privacy}
                            </a>{" "}
                            with the subject line &ldquo;Parent Privacy Request.&rdquo; We will verify your
                            identity before processing the request and respond within 30 days.
                        </p>
                        <p className="mt-4">
                            You can also use our{" "}
                            <Link href="/privacy/request" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">
                                Privacy Request form
                            </Link>{" "}
                            — select &ldquo;Data Deletion&rdquo; or &ldquo;Data Access&rdquo; and mention
                            in the details that the request is on behalf of your child.
                        </p>
                    </section>

                    {/* ── LAWS WE COMPLY WITH ── */}
                    <section className="mt-10">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">
                            Laws That Protect Your Child
                        </h2>
                        <div className="overflow-x-auto mt-4">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="border-b-2 border-neutral-200 text-left">
                                        <th className="py-2 pr-4 text-neutral-500 font-semibold">Law</th>
                                        <th className="py-2 pr-4 text-neutral-500 font-semibold">Where</th>
                                        <th className="py-2 text-neutral-500 font-semibold">What It Does</th>
                                    </tr>
                                </thead>
                                <tbody className="align-top">
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-2 pr-4 font-medium">COPPA</td>
                                        <td className="py-2 pr-4">United States</td>
                                        <td className="py-2">Requires verifiable parental consent before collecting data from children under 13.</td>
                                    </tr>
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-2 pr-4 font-medium">UK AADC</td>
                                        <td className="py-2 pr-4">United Kingdom</td>
                                        <td className="py-2">Age Appropriate Design Code — requires &ldquo;best interests of the child&rdquo; as primary consideration; defaults to highest privacy settings.</td>
                                    </tr>
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-2 pr-4 font-medium">GDPR Art. 8</td>
                                        <td className="py-2 pr-4">EU/EEA</td>
                                        <td className="py-2">Requires parental consent for children under 16 (or lower threshold set by member state) for information society services.</td>
                                    </tr>
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-2 pr-4 font-medium">LGPD Art. 14</td>
                                        <td className="py-2 pr-4">Brazil</td>
                                        <td className="py-2">Processing of children&rsquo;s and adolescents&rsquo; data must be in their best interest; requires specific and prominent consent from a parent.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* ── WHAT YOU CAN DO ── */}
                    <section className="mt-10">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">
                            What You Can Do Right Now
                        </h2>
                        <ol className="list-decimal pl-5 space-y-3">
                            <li>
                                <strong>Check your child&rsquo;s device settings.</strong>
                                <ul className="list-disc pl-5 mt-1 space-y-1">
                                    <li>iOS: Settings &gt; Privacy &amp; Security &gt; Tracking — disable tracking for all apps.</li>
                                    <li>Android 12+: Settings &gt; Google &gt; Ads &gt; Delete advertising ID.</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Use Apple Family Sharing or Google Family Link</strong> to manage
                                what your child can download and restrict in-app purchases.
                            </li>
                            <li>
                                <strong>Use in-game privacy settings.</strong> Open any of our games and go
                                to Settings &gt; Privacy to manage consent and advertising preferences.
                            </li>
                            <li>
                                <strong>Contact us.</strong> If you believe your child has provided personal
                                information to us without your consent, please email{" "}
                                <a
                                    href={`mailto:${CO.privacy}?subject=Child%20Data%20Concern`}
                                    className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
                                >
                                    {CO.privacy}
                                </a>{" "}
                                and we will investigate and delete any applicable data within 72 hours.
                            </li>
                        </ol>
                    </section>

                    {/* ── RELATED LINKS ── */}
                    <section className="mt-10">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">Related Links</h2>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/privacy-policy" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">
                                    Full Privacy Policy
                                </Link>{" "}
                                (Section 7 covers children&rsquo;s privacy in detail)
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
                                <Link href="/do-not-sell" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">
                                    Do Not Sell or Share My Info
                                </Link>
                            </li>
                        </ul>
                    </section>

                    <hr className="mt-14 mb-6 border-neutral-200" />
                    <p className="text-xs text-neutral-400">
                        &copy; {new Date().getFullYear()} {CO.name}. All rights reserved. This page is
                        a simplified guide for parents. For the full, legally binding text, see the{" "}
                        <Link href="/privacy-policy" className="text-neutral-400 underline hover:text-neutral-600">Privacy Policy</Link>.
                    </p>
                </article>
            </main>
        </>
    );
}
