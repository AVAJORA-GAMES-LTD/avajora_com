import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import Link from "next/link";
import { COMPANY as CO } from "@/lib/company";
import { LEGAL_VERSIONS } from "@/lib/legal-versions";

export const metadata: Metadata = {
    title: "Cookie Policy — AVAJORA GAMES LTD",
    description:
        "Cookie Policy for the AVAJORA GAMES LTD website. Details on cookies we use, their purposes, and how to manage them.",
};

const { version: V, updated: UPDATED, effective: EFFECTIVE } = LEGAL_VERSIONS.cookiePolicy;

const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["WebPage", "Article"],
    name: "Cookie Policy",
    headline: "Cookie Policy — AVAJORA GAMES LTD",
    description:
        "Cookie Policy for the AVAJORA GAMES LTD website. Details on cookies we use, their purposes, and how to manage them.",
    publisher: {
        "@type": "Organization",
        name: CO.name,
        url: CO.url,
    },
    datePublished: "2025-01-15",
    dateModified: "2026-02-17",
    version: V,
    inLanguage: "en",
    mainEntity: {
        "@type": "WebPage",
        name: "Cookie Policy",
        description: "Details on cookies used by the AVAJORA GAMES LTD website.",
    },
    isPartOf: {
        "@type": "WebSite",
        url: "https://avajora.com",
        name: "AVAJORA GAMES LTD",
    },
};

export default function CookiePolicyPage() {
    return (
        <>
            <Navbar />
            {/* JSON-LD structured data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <main className="min-h-screen bg-white pt-24 sm:pt-28 md:pt-32 pb-20 sm:pb-24 px-4 sm:px-6">
                <article className="mx-auto max-w-3xl text-[15px] leading-[1.75] text-neutral-800 sm:text-base sm:leading-[1.8]">

                    <h1 className="text-[28px] sm:text-[32px] md:text-4xl font-bold text-neutral-900 leading-tight">
                        Cookie Policy
                    </h1>
                    <p className="mt-2 text-neutral-900 font-medium">{CO.name}</p>
                    <p className="mt-4 text-sm text-neutral-500">
                        Version {V} &middot; Last Updated: {UPDATED} &middot; Effective: {EFFECTIVE}
                    </p>

                    <hr className="mt-6 mb-8 border-neutral-200" />

                    {/* Table of Contents */}
                    <nav className="mb-10">
                        <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-3">Contents</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm">
                            <li><a href="#what-cookies" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">What Are Cookies</a></li>
                            <li><a href="#cookies-we-use" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">Cookies We Use</a></li>
                            <li><a href="#consent" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">How We Obtain Consent</a></li>
                            <li><a href="#manage" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">How to Manage Cookies</a></li>
                            <li><a href="#updates" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">Changes to This Cookie Policy</a></li>
                            <li><a href="#contact" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">Contact Us</a></li>
                        </ol>
                    </nav>


                    {/* ── 1. WHAT ARE COOKIES ── */}

                    <section>
                        <h2 id="what-cookies" className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">1. What Are Cookies</h2>
                        <p>
                            Cookies are small text files placed on your device by a website when you visit it. They
                            allow the website to recognise your browser, remember your preferences, and collect
                            information about how you use the site. Cookies may be &ldquo;session&rdquo; cookies
                            (deleted when you close your browser) or &ldquo;persistent&rdquo; cookies (stored until
                            they expire or you delete them).
                        </p>
                        <p className="mt-4">
                            This Cookie Policy applies to our website at{" "}
                            <Link href="/" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">{CO.web}</Link>.
                            For information about how we handle data in our mobile games (where SDKs and advertising
                            identifiers function as the equivalent of cookies), please see our{" "}
                            <Link href="/privacy-policy" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">Privacy Policy</Link>.
                        </p>
                    </section>


                    {/* ── 2. COOKIES WE USE ── */}

                    <section className="mt-14">
                        <h2 id="cookies-we-use" className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">2. Cookies We Use</h2>

                        <h3 className="text-lg font-bold text-neutral-900 mt-8 mb-3">2.1 Strictly Necessary Cookies</h3>
                        <p>
                            These cookies are essential for the website to function and cannot be switched off.
                            They do not store any personally identifiable information.
                        </p>
                        <div className="overflow-x-auto mt-4 mb-6">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="border-b-2 border-neutral-200 text-left">
                                        <th className="py-2 pr-4 text-neutral-500 font-semibold">Cookie</th>
                                        <th className="py-2 pr-4 text-neutral-500 font-semibold">Provider</th>
                                        <th className="py-2 pr-4 text-neutral-500 font-semibold">Purpose</th>
                                        <th className="py-2 pr-4 text-neutral-500 font-semibold">Duration</th>
                                        <th className="py-2 text-neutral-500 font-semibold">Type</th>
                                    </tr>
                                </thead>
                                <tbody className="align-top">
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-2 pr-4 font-mono text-xs">cookie_consent</td>
                                        <td className="py-2 pr-4">{CO.web}</td>
                                        <td className="py-2 pr-4">Stores your cookie consent preferences</td>
                                        <td className="py-2 pr-4">1 year</td>
                                        <td className="py-2">First-party</td>
                                    </tr>
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-2 pr-4 font-mono text-xs">klaro</td>
                                        <td className="py-2 pr-4">Klaro (self-hosted)</td>
                                        <td className="py-2 pr-4">Stores consent management state for the Klaro consent manager</td>
                                        <td className="py-2 pr-4">1 year</td>
                                        <td className="py-2">First-party</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-lg font-bold text-neutral-900 mt-8 mb-3">2.2 Analytics Cookies</h3>
                        <p>
                            These cookies help us understand how visitors interact with our website by collecting
                            and reporting information anonymously. They are only set if you consent.
                        </p>
                        <div className="overflow-x-auto mt-4 mb-6">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="border-b-2 border-neutral-200 text-left">
                                        <th className="py-2 pr-4 text-neutral-500 font-semibold">Cookie</th>
                                        <th className="py-2 pr-4 text-neutral-500 font-semibold">Provider</th>
                                        <th className="py-2 pr-4 text-neutral-500 font-semibold">Purpose</th>
                                        <th className="py-2 pr-4 text-neutral-500 font-semibold">Duration</th>
                                        <th className="py-2 text-neutral-500 font-semibold">Type</th>
                                    </tr>
                                </thead>
                                <tbody className="align-top">
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-2 pr-4 font-mono text-xs">_ga</td>
                                        <td className="py-2 pr-4">Google Analytics</td>
                                        <td className="py-2 pr-4">Distinguishes unique users by assigning a randomly generated number</td>
                                        <td className="py-2 pr-4">2 years</td>
                                        <td className="py-2">Third-party</td>
                                    </tr>
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-2 pr-4 font-mono text-xs">_ga_*</td>
                                        <td className="py-2 pr-4">Google Analytics</td>
                                        <td className="py-2 pr-4">Used to persist session state</td>
                                        <td className="py-2 pr-4">2 years</td>
                                        <td className="py-2">Third-party</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-sm text-neutral-500">
                            Google Analytics privacy policy:{" "}
                            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">policies.google.com/privacy</a>.
                            To opt out of Google Analytics across all websites, install the{" "}
                            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">Google Analytics Opt-out Browser Add-on</a>.
                        </p>
                        <p className="text-sm text-neutral-500 mt-3">
                            <strong>International data transfers:</strong> Google Analytics data may be
                            processed in the United States. Google LLC is certified under the EU–U.S.
                            Data Privacy Framework (DPF) and the UK Extension to the EU–U.S. DPF,
                            providing an adequate safeguard for these transfers under UK GDPR and
                            EU GDPR.
                        </p>

                        <h3 className="text-lg font-bold text-neutral-900 mt-8 mb-3">2.3 Advertising &amp; Marketing Cookies</h3>
                        <p>
                            We do <strong>not</strong> use advertising, marketing, or targeting cookies on our
                            website. Our website does not serve ads or load advertising scripts. Advertising
                            identifiers and SDKs are used only within our mobile games, as described in our{" "}
                            <Link href="/privacy-policy" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">Privacy Policy</Link>.
                        </p>

                        <h3 className="text-lg font-bold text-neutral-900 mt-8 mb-3">2.4 Infrastructure &amp; Hosting Cookies</h3>
                        <p>
                            Our website is hosted on <strong>Vercel</strong>. Vercel and its upstream CDN providers
                            (e.g. Cloudflare) may set short-lived technical cookies or HTTP headers for load-balancing,
                            bot-protection, or performance optimisation. These cookies are classified as strictly
                            necessary and do not track you across sites.
                        </p>
                        <p className="mt-4">
                            We periodically audit our website for undisclosed cookies using automated scanning
                            tools. If a new cookie is identified that falls outside the strictly necessary
                            category, we will update this policy accordingly and ensure it is covered by our
                            consent mechanism before it is set.
                        </p>
                    </section>


                    {/* ── 3. CONSENT ── */}

                    <section className="mt-14">
                        <h2 id="consent" className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">3. How We Obtain Consent</h2>
                        <p>
                            When you first visit our website, a cookie consent banner (powered by{" "}
                            <strong>Klaro</strong>, an open-source consent management tool) is displayed at the
                            bottom of the page. You can choose to accept or reject non-essential cookies. Your
                            choice is stored in a first-party cookie so the banner is not shown again.
                        </p>
                        <p className="mt-4">
                            Strictly necessary cookies do not require consent as they are essential for the website
                            to function. Non-essential cookies (analytics) are only set after you explicitly consent.
                            Pre-ticked boxes are not used &mdash; consent must be affirmative.
                        </p>
                        <p className="mt-4">
                            This consent mechanism complies with the <strong>Privacy and Electronic Communications
                                Regulations 2003</strong> (PECR) in the United Kingdom, the <strong>ePrivacy
                                    Directive</strong> (2002/58/EC) in the EU, and supplementary guidance from the ICO.
                            PECR &mdash; not GDPR &mdash; is the primary UK legal framework requiring consent
                            before setting non-essential cookies.
                        </p>
                    </section>


                    {/* ── 4. HOW TO MANAGE COOKIES ── */}

                    <section className="mt-14">
                        <h2 id="manage" className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">4. How to Manage Cookies</h2>

                        <h3 className="text-lg font-bold text-neutral-900 mt-8 mb-3">4.1 Via Our Cookie Banner</h3>
                        <p>
                            You can change your cookie preferences at any time by clicking the &ldquo;Cookie
                            Settings&rdquo; link in our website footer. This reopens the consent banner.
                        </p>

                        <h3 className="text-lg font-bold text-neutral-900 mt-8 mb-3">4.2 What Happens When You Withdraw Consent</h3>
                        <p>
                            When you withdraw consent for a cookie category via our Klaro consent manager:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mt-3">
                            <li>
                                <strong>Existing cookies are deleted.</strong> Klaro automatically removes
                                cookies associated with the services you have declined. For example, if you
                                withdraw analytics consent, the <span className="font-mono text-xs">_ga</span> and{" "}
                                <span className="font-mono text-xs">_ga_*</span> cookies are deleted from your browser.
                            </li>
                            <li>
                                <strong>Scripts are blocked.</strong> The corresponding analytics or tracking
                                scripts will not load on subsequent page views until you re-consent.
                            </li>
                            <li>
                                <strong>Previously collected data is not retroactively deleted.</strong> Data
                                already transmitted to Google Analytics before you withdrew consent remains
                                subject to Google&rsquo;s own retention settings. You can request deletion of
                                that data by contacting us at{" "}
                                <a href={`mailto:${CO.privacy}`} className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">{CO.privacy}</a>.
                            </li>
                        </ul>

                        <h3 className="text-lg font-bold text-neutral-900 mt-8 mb-3">4.3 Via Browser Settings</h3>
                        <p>Most browsers allow you to control cookies through their settings:</p>
                        <ul className="list-disc pl-5 space-y-2 mt-3">
                            <li><strong>Chrome:</strong> Settings &gt; Privacy and Security &gt; Cookies and other site data</li>
                            <li><strong>Firefox:</strong> Settings &gt; Privacy &amp; Security &gt; Cookies and Site Data</li>
                            <li><strong>Safari:</strong> Preferences &gt; Privacy &gt; Manage Website Data</li>
                            <li><strong>Edge:</strong> Settings &gt; Cookies and site permissions &gt; Manage and delete cookies</li>
                        </ul>
                        <p className="mt-4">
                            Blocking all cookies may affect the functionality of some websites. Strictly necessary
                            cookies are required for our website to function correctly.
                        </p>
                    </section>


                    {/* ── 5. UPDATES ── */}

                    <section className="mt-14">
                        <h2 id="updates" className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">5. Changes to This Cookie Policy</h2>
                        <p>
                            We may update this Cookie Policy from time to time to reflect changes in the cookies we
                            use or for operational, legal, or regulatory reasons. Please revisit this page regularly
                            to stay informed. Previous versions are available on request by contacting{" "}
                            <a href={`mailto:${CO.privacy}`} className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">{CO.privacy}</a>.
                        </p>
                    </section>


                    {/* ── 6. CONTACT ── */}

                    <section className="mt-14">
                        <h2 id="contact" className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">6. Contact Us</h2>
                        <p>
                            If you have any questions about our use of cookies, please contact us at{" "}
                            <a href={`mailto:${CO.privacy}`} className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">{CO.privacy}</a>.
                        </p>
                        <p className="mt-4">
                            For more information about how we process personal data, please see our{" "}
                            <Link href="/privacy-policy" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">Privacy Policy</Link>.
                        </p>
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
