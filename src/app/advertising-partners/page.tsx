import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import Link from "next/link";
import { COMPANY as CO } from "@/lib/company";
import { LEGAL_VERSIONS } from "@/lib/legal-versions";

export const metadata: Metadata = {
    title: "Advertising Partners — AVAJORA GAMES LTD",
    description:
        "Current principal advertising networks and data partners used in AVAJORA GAMES LTD mobile games.",
};

const { version: V, updated: UPDATED } = LEGAL_VERSIONS.advertisingPartners;

const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["WebPage", "Article"],
    name: "Advertising Partners",
    headline: "Advertising Partners — AVAJORA GAMES LTD",
    description:
        "Current principal advertising networks and data partners used in AVAJORA GAMES LTD mobile games.",
    publisher: {
        "@type": "Organization",
        name: "AVAJORA GAMES LTD",
        url: "https://avajora.com",
    },
    datePublished: "2026-02-17",
    dateModified: "2026-02-17",
    version: V,
    inLanguage: "en",
    mainEntity: {
        "@type": "WebPage",
        name: "Advertising Partners",
        description: "List of advertising networks and data partners used in AVAJORA GAMES LTD mobile games.",
    },
    isPartOf: {
        "@type": "WebSite",
        url: "https://avajora.com",
        name: "AVAJORA GAMES LTD",
    },
};

const partners = [
    {
        name: "CAS.ai (Clever Ads Solutions)",
        how: "Mediation orchestrator — processes all ad requests",
        data: "IDFA/GAID, IP address, device info — passes to winning network",
        url: "https://cas.ai/privacy-policy",
        urlLabel: "cas.ai/privacy-policy",
        role: "Data processor",
        retention: "Duration of ad session",
    },
    {
        name: "AppLovin",
        how: "Via CAS.ai mediation (bidder in the mediation stack). AppLovin uses AI-powered advertising technology (Axon) to serve relevant ads. NOT initialised for child-identified users.",
        data: "Advertising IDs (IDFA/GAID/Amazon Ad ID), IDFV, App Set ID, ad tracking preferences & restrictions, IP address (country/region-level location), country/timezone/locale (language), device make/model/hardware/OS, screen/display/orientation/audio/video/battery/memory/boot-time properties, accessibility & font-size settings, carrier, network type & speed, app name/properties/performance/session/install info, ad events (impression, completion, click, skip). Advertisers may share event data (e.g. install, purchase) for campaign optimisation. AppLovin may share data with its affiliates (Adjust, Wurl, etc.) and its own advertising partners (see applovin.com/partners).",
        url: "https://legal.applovin.com/privacy/",
        urlLabel: "legal.applovin.com/privacy",
        role: "Independent controller (DPF certified: EU-US, UK Extension, Swiss-US)",
        retention: "Up to 2 years from collection; aggregated data may be kept longer",
    },
    {
        name: "Google AdMob",
        how: "Via CAS.ai mediation (bidder)",
        data: "IDFA/GAID, IP address, device info, crash logs",
        url: "https://policies.google.com/privacy",
        urlLabel: "policies.google.com/privacy",
        role: "Independent controller",
        retention: "Up to 26 months (analytics); ad data per Google retention policy (DPF certified)",
    },
    {
        name: "Unity Ads",
        how: "Direct SDK + via CAS.ai mediation",
        data: "IDFA/GAID, IP address, device info, ad interaction data",
        url: "https://unity.com/legal/game-player-and-app-user-privacy-policy",
        urlLabel: "unity.com/legal/game-player-and-app-user-privacy-policy",
        role: "Independent controller",
        retention: "12 months (ad data), 24 months (analytics)",
    },
    {
        name: "Liftoff Monetize (Vungle)",
        how: "Direct SDK + via CAS.ai mediation",
        data: "IDFA/GAID, IP address, device info, within-app behavioural data",
        url: "https://vungle.com/privacy/",
        urlLabel: "vungle.com/privacy",
        role: "Independent controller",
        retention: "See privacy policy",
    },
    {
        name: "InMobi",
        how: "Direct SDK + via CAS.ai mediation",
        data: "IDFA/GAID, IP (geo), device info, ad events",
        url: "https://www.inmobi.com/privacy-policy/",
        urlLabel: "inmobi.com/privacy-policy",
        role: "Joint controller (Art. 26)",
        retention: "13 months",
    },
    {
        name: "ironSource (Unity LevelPlay)",
        how: "Via CAS.ai mediation",
        data: "IDFA/GAID, IP address, device info, ad events",
        url: "https://unity.com/legal/privacy-policy",
        urlLabel: "unity.com/legal/privacy-policy",
        role: "Independent controller",
        retention: "12 months (ad data), 24 months (analytics — same as Unity Ads)",
    },
    {
        name: "Meta Audience Network",
        how: "Via CAS.ai mediation",
        data: "IDFA/GAID (if user has Facebook app installed), device info",
        url: "https://www.facebook.com/privacy/policy/",
        urlLabel: "facebook.com/privacy/policy",
        role: "Independent controller",
        retention: "Up to 2 years; off-Facebook activity data cleared after 48 hours of disconnect",
    },
    {
        name: "Mintegral",
        how: "Via CAS.ai mediation",
        data: "IDFA/GAID, IP address, device info, ad events",
        url: "https://www.mintegral.com/en/privacy/",
        urlLabel: "mintegral.com/en/privacy",
        role: "Independent controller",
        retention: "Up to 13 months (ad events); logs purged within 90 days",
    },
    {
        name: "Pangle (ByteDance)",
        how: "Via CAS.ai mediation",
        data: "IDFA/GAID, IP address, device info, ad events",
        url: "https://www.pangleglobal.com/privacy/privacy-center-overseas",
        urlLabel: "pangleglobal.com/privacy",
        role: "Independent controller",
        retention: "Up to 12 months (ad attribution data); per ByteDance retention schedule",
    },
    {
        name: "Digital Turbine",
        how: "Via CAS.ai mediation",
        data: "IDFA/GAID, device info, ad events",
        url: "https://www.digitalturbine.com/legal/end-user-privacy-policy/",
        urlLabel: "digitalturbine.com/legal/end-user-privacy-policy",
        role: "Independent controller",
        retention: "Up to 24 months (ad interaction data); shorter for raw IP addresses",
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
                        Version {V} &middot; Last Updated: {UPDATED}
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
                        This page lists our current principal partners. Because mediation supply chains can
                        change quickly, additional downstream resellers or measurement providers may process data
                        in specific auctions. We review and update this page periodically.
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
                                    <th className="py-2 pr-4 text-neutral-500 font-semibold">Legal Role</th>
                                    <th className="py-2 pr-4 text-neutral-500 font-semibold">How It Reaches Your Users</th>
                                    <th className="py-2 pr-4 text-neutral-500 font-semibold">Data It Receives</th>
                                    <th className="py-2 pr-4 text-neutral-500 font-semibold">Retention</th>
                                    <th className="py-2 text-neutral-500 font-semibold">Privacy Policy</th>
                                </tr>
                            </thead>
                            <tbody className="align-top">
                                {partners.map((p, i) => (
                                    <tr key={i} className="border-b border-neutral-100">
                                        <td className="py-3 pr-4 font-medium text-neutral-900 whitespace-nowrap">{p.name}</td>
                                        <td className="py-3 pr-4 whitespace-nowrap">{p.role}</td>
                                        <td className="py-3 pr-4">{p.how}</td>
                                        <td className="py-3 pr-4">{p.data}</td>
                                        <td className="py-3 pr-4 whitespace-nowrap">{p.retention}</td>
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
                            <strong>AppLovin opt-out &amp; data management:</strong>{" "}
                            <a href="https://applovin.com/opt-out" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600 break-all">https://applovin.com/opt-out</a>.
                            You can also download the <strong>AppLovin Privacy Management App</strong> to access
                            or delete data collected from your device:{" "}
                            <a href="https://apps.apple.com/app/applovin-privacy-management/id1622498498" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">iOS</a>{" | "}
                            <a href="https://play.google.com/store/apps/details?id=com.applovin.gdpr" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">Android</a>.
                            AppLovin&rsquo;s full partner list:{" "}
                            <a href="https://legal.applovin.com/applovin-partners-privacy/" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600 break-all">https://legal.applovin.com/applovin-partners-privacy/</a>
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
                        We update this page periodically as part of our compliance review process. If you have
                        questions about any of our advertising partners, please contact{" "}
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
