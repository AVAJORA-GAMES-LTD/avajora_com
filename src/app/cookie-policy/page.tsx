import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import Link from "next/link";
import { COMPANY as CO } from "@/lib/company";

export const metadata: Metadata = {
    title: "Cookie Policy — AVAJORA GAMES LTD",
    description:
        "Cookie Policy for the AVAJORA GAMES LTD website. Details on cookies we use, their purposes, and how to manage them.",
};

const UPDATED = "17 February 2026";
const EFFECTIVE = "17 February 2026";
const V = "1.1";

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Cookie Policy",
    description:
        "Cookie Policy for the AVAJORA GAMES LTD website. Details on cookies we use, their purposes, and how to manage them.",
    publisher: {
        "@type": "Organization",
        name: CO.name,
        url: CO.url,
    },
    dateModified: "2026-02-17",
    inLanguage: "en",
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


                    {/* ── 1. WHAT ARE COOKIES ── */}

                    <section>
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">1. What Are Cookies</h2>
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
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">2. Cookies We Use</h2>

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
                    </section>


                    {/* ── 3. CONSENT ── */}

                    <section className="mt-14">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">3. How We Obtain Consent</h2>
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
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">4. How to Manage Cookies</h2>

                        <h3 className="text-lg font-bold text-neutral-900 mt-8 mb-3">4.1 Via Our Cookie Banner</h3>
                        <p>
                            You can change your cookie preferences at any time by clicking the &ldquo;Cookie
                            Settings&rdquo; link in our website footer. This reopens the consent banner.
                        </p>

                        <h3 className="text-lg font-bold text-neutral-900 mt-8 mb-3">4.2 Via Browser Settings</h3>
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
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">5. Changes to This Cookie Policy</h2>
                        <p>
                            We may update this Cookie Policy from time to time to reflect changes in the cookies we
                            use or for operational, legal, or regulatory reasons. Please revisit this page regularly
                            to stay informed.
                        </p>
                    </section>


                    {/* ── 6. CONTACT ── */}

                    <section className="mt-14">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">6. Contact Us</h2>
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
