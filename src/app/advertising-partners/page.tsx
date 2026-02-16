import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Advertising Partners — AVAJORA GAMES LTD",
    description:
        "Full list of advertising networks and data partners used in AVAJORA GAMES LTD mobile games.",
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Advertising Partners",
    description:
        "Full list of advertising networks and data partners used in AVAJORA GAMES LTD mobile games.",
    publisher: {
        "@type": "Organization",
        name: "AVAJORA GAMES LTD",
        url: "https://avajora.com",
    },
    dateModified: "2025-06-17",
    inLanguage: "en",
};

const UPDATED = "17 June 2025";

const CO = {
    name: "AVAJORA GAMES LTD",
    privacy: "privacy@avajora.com",
} as const;

const partners = [
    {
        name: "CAS.ai (Clever Ads Solutions)",
        how: "Mediation orchestrator — processes all ad requests",
        data: "IDFA/GAID, IP address, device info — passes to winning network",
        url: "https://cas.ai/privacy-policy",
        urlLabel: "cas.ai/privacy-policy",
    },
    {
        name: "AppLovin",
        how: "Via CAS.ai mediation (bidder in the mediation stack)",
        data: "IDFA/GAID, IP address, device info, ad events",
        url: "https://legal.applovin.com/privacy/",
        urlLabel: "legal.applovin.com/privacy",
    },
    {
        name: "Google AdMob",
        how: "Via CAS.ai mediation (bidder)",
        data: "IDFA/GAID, IP address, device info, crash logs",
        url: "https://policies.google.com/privacy",
        urlLabel: "policies.google.com/privacy",
    },
    {
        name: "Unity Ads",
        how: "Direct SDK + via CAS.ai mediation",
        data: "IDFA/GAID, IP address, device info, ad interaction data",
        url: "https://unity.com/legal/game-player-and-app-user-privacy-policy",
        urlLabel: "unity.com/legal/game-player-and-app-user-privacy-policy",
    },
    {
        name: "Liftoff Monetize (Vungle)",
        how: "Direct SDK + via CAS.ai mediation",
        data: "IDFA/GAID, IP address, device info, within-app behavioural data",
        url: "https://vungle.com/privacy/",
        urlLabel: "vungle.com/privacy",
    },
    {
        name: "InMobi",
        how: "Direct SDK + via CAS.ai mediation",
        data: "IDFA/GAID, IP (geo), device info, ad events (retained 13 months)",
        url: "https://www.inmobi.com/privacy-policy/",
        urlLabel: "inmobi.com/privacy-policy",
    },
    {
        name: "ironSource (Unity LevelPlay)",
        how: "Via CAS.ai mediation",
        data: "IDFA/GAID, IP address, device info, ad events",
        url: "https://ironsrc.com/wp-content/uploads/2019/03/ironSource-Mobile-Privacy-Policy.pdf",
        urlLabel: "ironSource Privacy Policy",
    },
    {
        name: "Meta Audience Network",
        how: "Via CAS.ai mediation",
        data: "IDFA/GAID (if user has Facebook app installed), device info",
        url: "https://www.facebook.com/privacy/policy/",
        urlLabel: "facebook.com/privacy/policy",
    },
    {
        name: "Mintegral",
        how: "Via CAS.ai mediation",
        data: "IDFA/GAID, IP address, device info, ad events",
        url: "https://www.mintegral.com/en/privacy/",
        urlLabel: "mintegral.com/en/privacy",
    },
    {
        name: "Pangle (ByteDance)",
        how: "Via CAS.ai mediation",
        data: "IDFA/GAID, IP address, device info, ad events",
        url: "https://www.pangleglobal.com/privacy/privacy-center-overseas",
        urlLabel: "pangleglobal.com/privacy",
    },
    {
        name: "Digital Turbine",
        how: "Via CAS.ai mediation",
        data: "IDFA/GAID, device info, ad events",
        url: "https://www.digitalturbine.com/legal/end-user-privacy-policy/",
        urlLabel: "digitalturbine.com/legal/end-user-privacy-policy",
    },
] as const;

export default function AdvertisingPartnersPage() {
    return (
        <>
            <Navbar />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <main className="min-h-screen bg-white pt-24 sm:pt-28 md:pt-32 pb-20 sm:pb-24 px-4 sm:px-6">
                <article className="mx-auto max-w-4xl text-[15px] leading-[1.75] text-neutral-800 sm:text-base sm:leading-[1.8]">

                    <h1 className="text-[28px] sm:text-[32px] md:text-4xl font-bold text-neutral-900 leading-tight">
                        Advertising Partners
                    </h1>
                    <p className="mt-2 text-neutral-900 font-medium">{CO.name}</p>
                    <p className="mt-4 text-sm text-neutral-500">
                        Last Updated: {UPDATED}
                    </p>

                    <hr className="mt-6 mb-8 border-neutral-200" />

                    <p>
                        Our mobile games are free to play and are funded by in-app advertising. We use{" "}
                        <strong>CAS.ai</strong> (Clever Ads Solutions, operated by CLEAR INVEST LTD) as our
                        advertising mediation platform. CAS.ai manages ad requests by running real-time auctions
                        among multiple advertising networks simultaneously to identify the highest-paying
                        advertiser for each ad placement.
                    </p>
                    <p className="mt-4">
                        As a result of this mediation process, your device data (including your advertising
                        identifier, IP address, device model, operating system, and app identifier) may be
                        transmitted to any of the networks listed below. You are not interacting with one ad
                        network &mdash; you are interacting with a pool of networks.
                    </p>
                    <p className="mt-4">
                        Each partner operates under its own privacy policy and is an independent data controller
                        responsible for its own data practices, unless otherwise noted. <strong>InMobi</strong> acts
                        as a <strong>joint controller</strong> with us under GDPR.
                    </p>
                    <p className="mt-4">
                        For full details on how we handle your data, please see our{" "}
                        <Link href="/privacy-policy" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">
                            Privacy Policy
                        </Link>.
                    </p>

                    <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-10 mb-4">
                        Advertising Network Partners
                    </h2>

                    <div className="overflow-x-auto mb-8">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="border-b-2 border-neutral-200 text-left">
                                    <th className="py-2 pr-4 text-neutral-500 font-semibold">Ad Network</th>
                                    <th className="py-2 pr-4 text-neutral-500 font-semibold">How It Reaches Your Users</th>
                                    <th className="py-2 pr-4 text-neutral-500 font-semibold">Data It Receives</th>
                                    <th className="py-2 text-neutral-500 font-semibold">Privacy Policy</th>
                                </tr>
                            </thead>
                            <tbody className="align-top">
                                {partners.map((p, i) => (
                                    <tr key={i} className="border-b border-neutral-100">
                                        <td className="py-3 pr-4 font-medium text-neutral-900 whitespace-nowrap">{p.name}</td>
                                        <td className="py-3 pr-4">{p.how}</td>
                                        <td className="py-3 pr-4">{p.data}</td>
                                        <td className="py-3">
                                            <a
                                                href={p.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600 break-all"
                                            >
                                                {p.urlLabel}
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-10 mb-4">
                        Opt-Out Options
                    </h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>
                            <strong>In-game:</strong> Navigate to Settings &gt; Privacy &gt; Advertising Preferences
                            within any of our games to manage your consent and opt out of personalised advertising.
                        </li>
                        <li>
                            <strong>Liftoff / Vungle opt-out:</strong>{" "}
                            <a href="https://vungle.com/opt-out/" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600 break-all">https://vungle.com/opt-out/</a>
                        </li>
                        <li>
                            <strong>InMobi opt-out:</strong>{" "}
                            <a href="https://www.inmobi.com/page/opt-out/" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600 break-all">https://www.inmobi.com/page/opt-out/</a>
                        </li>
                        <li>
                            <strong>iOS:</strong> Settings &gt; Privacy &amp; Security &gt; Tracking &mdash; prevent
                            all apps from requesting your advertising identifier.
                        </li>
                        <li>
                            <strong>Android 12+:</strong> Settings &gt; Google &gt; Ads &gt; Delete Advertising ID
                            &mdash; permanently delete your advertising ID.
                        </li>
                    </ul>

                    <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-10 mb-4">
                        Analytics
                    </h2>
                    <p>
                        In addition to advertising networks, we use <strong>Unity Analytics</strong> (Unity
                        Technologies Inc.) to collect gameplay analytics. Unity Analytics uses a device-bound
                        identifier (not the advertising ID) for session and engagement tracking. For details,
                        see Section 5.8 of our{" "}
                        <Link href="/privacy-policy#advertising" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">
                            Privacy Policy
                        </Link>.
                    </p>

                    <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-10 mb-4">
                        Changes to This List
                    </h2>
                    <p>
                        CAS.ai&rsquo;s partner network list may change over time as networks are added or removed.
                        We will update this page accordingly. If you have questions about any of our advertising
                        partners, please contact{" "}
                        <a href={`mailto:${CO.privacy}`} className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">{CO.privacy}</a>.
                    </p>

                    <hr className="mt-14 mb-6 border-neutral-200" />
                    <p className="text-xs text-neutral-400">
                        &copy; {new Date().getFullYear()} {CO.name}. All rights reserved.
                    </p>
                </article>
            </main>
        </>
    );
}
