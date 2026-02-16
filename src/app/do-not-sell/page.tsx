import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import Link from "next/link";
import { COMPANY as CO } from "@/lib/company";

export const metadata: Metadata = {
    title: "Do Not Sell or Share My Personal Information — AVAJORA GAMES LTD",
    description:
        "Exercise your right to opt out of the sale or sharing of your personal information under the CCPA/CPRA and other US state privacy laws.",
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Do Not Sell or Share My Personal Information",
    description:
        "Exercise your right to opt out of the sale or sharing of your personal information under the CCPA/CPRA and other US state privacy laws.",
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

export default function DoNotSellPage() {
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
                        Do Not Sell or Share My Personal Information
                    </h1>
                    <p className="mt-2 text-neutral-900 font-medium">{CO.name}</p>
                    <p className="mt-4 text-sm text-neutral-500">
                        Version {V} &middot; Last Updated: {UPDATED}
                    </p>

                    <hr className="mt-6 mb-8 border-neutral-200" />

                    {/* Intro */}
                    <section>
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">Your Right to Opt Out</h2>
                        <p>
                            Under the <strong>California Consumer Privacy Act</strong>, as amended by the CPRA
                            (Cal.&nbsp;Civ.&nbsp;Code&nbsp;&sect;&nbsp;1798.100 et&nbsp;seq.), and similar US state
                            privacy laws (Virginia VCDPA, Colorado CPA, Connecticut CTDPA, Texas TDPSA, and others),
                            you have the right to opt out of the &ldquo;sale&rdquo; or &ldquo;sharing&rdquo; of your
                            personal information for cross-context behavioural advertising.
                        </p>
                    </section>

                    {/* What we share */}
                    <section className="mt-10">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">What We Share</h2>
                        <p>
                            <strong>{CO.name} does not sell your personal data for monetary consideration.</strong>
                        </p>
                        <p className="mt-4">
                            However, our free-to-play mobile games display advertisements via our mediation
                            partner <strong>CAS.ai</strong> (CLEAR INVEST LTD). In order to serve you ads,
                            device-level identifiers (such as your Apple IDFA or Google Advertising&nbsp;ID),
                            IP-derived location, and ad interaction data may be transmitted to our advertising
                            network partners. Under the CCPA&rsquo;s broad definition, this may qualify as
                            &ldquo;sharing&rdquo; of personal information for cross-context behavioural advertising.
                        </p>
                        <p className="mt-4">
                            For the full list of advertising partners that may receive your data, see
                            our{" "}
                            <Link href="/advertising-partners" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">
                                Advertising Partners
                            </Link>{" "}
                            page.
                        </p>
                    </section>

                    {/* How to opt out */}
                    <section className="mt-10">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">How to Opt Out</h2>

                        <h3 className="mt-6 mb-3 text-lg font-bold text-neutral-900">1. In-App (Recommended)</h3>
                        <p>
                            Open any of our games and navigate to:
                        </p>
                        <p className="mt-2 font-mono text-sm bg-neutral-50 border border-neutral-200 rounded px-4 py-3">
                            Settings &gt; Privacy &gt; Advertising Preferences &gt; &ldquo;Do Not Sell or Share
                            My Personal Information&rdquo;
                        </p>
                        <p className="mt-3">
                            Enabling this toggle will instruct our ad mediation platform (CAS.ai) to stop
                            sharing your advertising identifiers with downstream ad networks for targeted
                            advertising purposes. You will still see ads, but they will be contextual
                            (non-personalised).
                        </p>

                        <h3 className="mt-8 mb-3 text-lg font-bold text-neutral-900">2. Device-Level Settings</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>iOS 14.5+:</strong> Settings &gt; Privacy &amp; Security &gt;
                                Tracking &mdash; disable &ldquo;Allow Apps to Request to Track.&rdquo; This
                                prevents all apps from accessing your IDFA.
                            </li>
                            <li>
                                <strong>Android 12+:</strong> Settings &gt; Google &gt; Ads &gt;
                                &ldquo;Delete advertising ID.&rdquo; This permanently removes your
                                advertising ID.
                            </li>
                        </ul>

                        <h3 className="mt-8 mb-3 text-lg font-bold text-neutral-900">3. Global Privacy Control (GPC)</h3>
                        <p>
                            We honour the <strong>Global Privacy Control</strong> (GPC) browser signal as a
                            valid opt-out request under the CCPA/CPRA and Colorado CPA. If your browser or
                            extension sends a GPC signal, we will treat it as an instruction not to share your
                            personal information for behavioural advertising.
                        </p>

                        <h3 className="mt-8 mb-3 text-lg font-bold text-neutral-900">4. Email Request</h3>
                        <p>
                            You may also email us at{" "}
                            <a
                                href={`mailto:${CO.privacy}?subject=Do%20Not%20Sell%20or%20Share%20Request`}
                                className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
                            >
                                {CO.privacy}
                            </a>{" "}
                            with the subject line &ldquo;Do Not Sell or Share Request.&rdquo; Include your
                            device type and, if available, your in-game user&nbsp;ID so we can process your
                            request promptly.
                        </p>

                        <h3 className="mt-8 mb-3 text-lg font-bold text-neutral-900">5. Network-Specific Opt-Outs</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>Liftoff / Vungle:</strong>{" "}
                                <a href="https://vungle.com/opt-out/" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600 break-all">
                                    https://vungle.com/opt-out/
                                </a>
                            </li>
                            <li>
                                <strong>InMobi:</strong>{" "}
                                <a href="https://www.inmobi.com/page/opt-out/" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600 break-all">
                                    https://www.inmobi.com/page/opt-out/
                                </a>
                            </li>
                            <li>
                                <strong>Google (AdMob):</strong>{" "}
                                <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600 break-all">
                                    adssettings.google.com
                                </a>
                            </li>
                        </ul>
                    </section>

                    {/* What happens after */}
                    <section className="mt-10">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">What Happens After You Opt Out</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>Ads continue,</strong> but they will be contextual (based on the
                                game you are playing) rather than personalised (based on your browsing or
                                activity profile).
                            </li>
                            <li>
                                <strong>No service degradation.</strong> You will not lose access to any
                                features, in-game progress, or content. We do not discriminate against users
                                who exercise their privacy rights.
                            </li>
                            <li>
                                <strong>Processing time.</strong> We process opt-out requests within
                                15&nbsp;business days of receipt.
                            </li>
                        </ul>
                    </section>

                    {/* Authorised agents */}
                    <section className="mt-10">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">Authorised Agents</h2>
                        <p>
                            You may designate an authorised agent to exercise your opt-out right on your
                            behalf. The agent must provide a signed, written authorisation or a valid power
                            of attorney, and we may verify your identity before processing the request.
                            Contact{" "}
                            <a
                                href={`mailto:${CO.privacy}`}
                                className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
                            >
                                {CO.privacy}
                            </a>{" "}
                            for the verification process.
                        </p>
                    </section>

                    {/* More info */}
                    <section className="mt-10">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">More Information</h2>
                        <p>
                            For a comprehensive overview of our data practices and your full set of privacy
                            rights, please read our{" "}
                            <Link href="/privacy-policy" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">
                                Privacy Policy
                            </Link>
                            . To submit a broader data subject request (access, deletion, portability), visit
                            our{" "}
                            <Link href="/privacy/request" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">
                                Privacy Request
                            </Link>{" "}
                            page.
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
