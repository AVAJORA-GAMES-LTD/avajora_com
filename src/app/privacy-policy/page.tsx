import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Privacy Policy — AVAJORA GAMES LTD",
    description:
        "Privacy Policy for AVAJORA GAMES LTD mobile games, website, and related services.",
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy",
    description: "Privacy Policy for AVAJORA GAMES LTD mobile games, website, and related services.",
    publisher: {
        "@type": "Organization",
        name: "AVAJORA GAMES LTD",
        url: "https://avajora.com",
    },
    dateModified: "2026-02-16",
    inLanguage: "en",
};

const V = "1.0";
const UPDATED = "16 February 2026";
const EFFECTIVE = "16 February 2026";

const CO = {
    name: "AVAJORA GAMES LTD",
    trade: "Avajora Games",
    type: "Private limited company (Ltd)",
    reg: "17030540",
    addr: "71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom",
    country: "England and Wales, United Kingdom",
    duns: "234577218",
    email: "ceo@avajora.com",
    privacy: "privacy@avajora.com",
    support: "support@avajora.com",
    web: "avajora.com",
} as const;

const TOC = [
    { id: "who-we-are", label: "Who We Are" },
    { id: "what-data", label: "What Data We Collect" },
    { id: "purposes", label: "How We Use Your Data" },
    { id: "legal-basis", label: "Legal Basis for Processing" },
    { id: "advertising", label: "Advertising" },
    { id: "sharing", label: "How We Share Your Data" },
    { id: "children", label: "Children\u2019s Privacy" },
    { id: "rights", label: "Your Rights" },
    { id: "transfers", label: "International Data Transfers" },
    { id: "retention", label: "Data Retention" },
    { id: "security", label: "Data Security" },
    { id: "cookies", label: "Cookies & Tracking Technologies" },
    { id: "iap", label: "In-App Purchases & Payments" },
    { id: "jurisdictions", label: "Jurisdiction-Specific Disclosures" },
    { id: "contact", label: "Contact & Data Protection" },
    { id: "notifications", label: "Push Notifications & Marketing" },
    { id: "changes", label: "Changes to This Policy" },
    { id: "misc", label: "General Provisions" },
    { id: "how-to-contact", label: "How to Contact Us" },
];

/* helper — consistent sub-heading */
const H3 = ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-lg font-bold text-neutral-900 mt-8 mb-3">{children}</h3>
);

/* ─────────────────────────────────────────────
   Page
   ───────────────────────────────────────────── */
export default function PrivacyPolicyPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />
            <main className="min-h-screen bg-white pt-24 sm:pt-28 md:pt-32 pb-20 sm:pb-24 px-4 sm:px-6">
                <article className="mx-auto max-w-3xl text-[15px] leading-[1.75] text-neutral-800 sm:text-base sm:leading-[1.8]">

                    {/* ══════════════ A. HEADER ══════════════ */}

                    <h1 className="text-[28px] sm:text-[32px] md:text-4xl font-bold text-neutral-900 leading-tight">
                        Privacy Policy
                    </h1>
                    <p className="mt-2 text-neutral-900 font-medium">{CO.name}</p>
                    <p className="mt-4 text-sm text-neutral-500">
                        Last Updated: {UPDATED} &nbsp;&middot;&nbsp; Effective: {EFFECTIVE} &nbsp;&middot;&nbsp; Version {V}
                    </p>

                    <hr className="mt-6 mb-8 border-neutral-200" />

                    <p className="text-sm text-neutral-500 italic leading-relaxed mb-8">
                        In short — We collect only the data necessary to operate our games, serve relevant
                        advertising, and improve your experience. We never sell your personal information. You
                        may contact us at any time to access, correct, or delete your data. Where our games are
                        played by children, additional safeguards apply. The full details follow below.
                    </p>

                    <p>
                        This Privacy Policy applies to all mobile games published by {CO.name} (including any
                        future titles), our website at{" "}
                        <Link href="/" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">{CO.web}</Link>,
                        any software development kits (SDKs) we distribute, our customer support channels, and
                        any other services we operate (collectively, the &ldquo;Services&rdquo;). This policy does
                        not cover third-party websites or services that may be linked from our applications.
                    </p>

                    <p className="mt-4">
                        By downloading, installing, or playing any of our games, visiting our website, or otherwise
                        using our Services, you acknowledge that you have read and understood this Privacy Policy
                        and agree to the collection, use, and disclosure of your information as described herein.
                        If you do not agree with this policy, please do not use our Services.
                    </p>

                    {/* Table of Contents */}
                    <nav className="mt-10 mb-10">
                        <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-3">Contents</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm">
                            {TOC.map((t, i) => (
                                <li key={t.id} value={i + 1}>
                                    <a href={`#${t.id}`} className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">{t.label}</a>
                                </li>
                            ))}
                        </ol>
                    </nav>

                    <hr className="mb-10 border-neutral-200" />


                    {/* ══════════════ 1. WHO WE ARE (B) ══════════════ */}

                    <section id="who-we-are">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">1. Who We Are</h2>

                        <table className="w-full text-sm border-collapse mb-6">
                            <tbody>
                                {([
                                    ["Legal Entity", CO.name, true],
                                    ["Entity Type", CO.type],
                                    ["Company Number", CO.reg],
                                    ["Registered Office", CO.addr],
                                    ["Incorporated In", CO.country],
                                    ["Trading As", CO.trade],
                                    ["D-U-N-S\u00A9 Number", CO.duns],
                                ] as [string, string, boolean?][]).map(([label, value, bold]) => (
                                    <tr key={label} className="border-b border-neutral-100">
                                        <td className="py-2 pr-4 text-neutral-500 align-top whitespace-nowrap w-40">{label}</td>
                                        <td className={`py-2${bold ? " text-neutral-900 font-medium" : ""}`}>{value}</td>
                                    </tr>
                                ))}
                                <tr className="border-b border-neutral-100">
                                    <td className="py-2 pr-4 text-neutral-500 align-top whitespace-nowrap">Contact</td>
                                    <td className="py-2"><a href={`mailto:${CO.email}`} className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">{CO.email}</a></td>
                                </tr>
                                <tr>
                                    <td className="py-2 pr-4 text-neutral-500 align-top whitespace-nowrap">Privacy Enquiries</td>
                                    <td className="py-2"><a href={`mailto:${CO.privacy}`} className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">{CO.privacy}</a></td>
                                </tr>
                            </tbody>
                        </table>

                        <p>
                            {CO.name} is the data controller for the personal data collected through our Services.
                            As data controller, we determine the purposes and means of processing your personal data
                            and are responsible for compliance with applicable data protection legislation, including
                            the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
                        </p>
                        <p className="mt-4">
                            We may engage trusted third-party service providers (&ldquo;data processors&rdquo;) to
                            carry out certain functions on our behalf — for example, hosting infrastructure, analytics,
                            and advertising services. These processors act only on our documented instructions and are
                            contractually bound to process your data solely for the purposes we specify, subject to
                            appropriate data processing agreements. They do not independently determine the purposes
                            of processing and may not use your data for their own ends.
                        </p>
                    </section>


                    {/* ══════════════ 2. WHAT DATA WE COLLECT (C) ══════════════ */}

                    <section id="what-data" className="mt-14">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">2. What Data We Collect</h2>

                        <H3>2.1 Data You Provide Voluntarily</H3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Contact / Support Data.</strong> Name, email address, and any details you provide when contacting our customer support. Retained for up to three years after your last contact to handle follow-up queries.</li>
                            <li><strong>Survey / Feedback Data.</strong> Information you submit through in-game surveys, beta feedback forms, or promotional entries.</li>
                        </ul>

                        <H3>2.2 Data Collected Automatically</H3>
                        <p>When you use our Services, the following data is collected automatically:</p>
                        <ul className="list-disc pl-5 space-y-2 mt-3">
                            <li><strong>Device Identifiers.</strong> Apple Identifier for Advertisers (IDFA) on iOS; Google Advertising ID (GAID) on Android. These are non-permanent, resettable identifiers that enable ad personalisation, frequency capping, and attribution. You can reset or limit them in your device settings (iOS: Settings &gt; Privacy &amp; Security &gt; Tracking; Android 12+: Settings &gt; Google &gt; Ads &gt; Delete Advertising ID). We also collect the Identifier for Vendor (IDFV) or Android ID for analytics purposes; these do not follow you across apps.</li>
                            <li><strong>IP Address.</strong> Collected automatically. We use your IP address to derive broad geographic location (country and city) and do not store the raw IP address after location derivation is complete.</li>
                            <li><strong>Device &amp; OS Information.</strong> Manufacturer, model, screen resolution, operating system and version, system language and locale, network type (Wi-Fi or mobile data), and basic hardware specifications (CPU, RAM, available storage). Used for game compatibility, performance optimisation, and detecting low-end devices.</li>
                            <li><strong>Gameplay / Session Data.</strong> Level reached, scores, session start and end times, features used, items purchased, achievements unlocked. This is core analytics data processed via Firebase Analytics.</li>
                            <li><strong>Ad Interaction Data.</strong> Which ads were shown, viewed, clicked, or resulted in installs. Used for ad measurement, fraud detection, and campaign optimisation.</li>
                            <li><strong>Crash &amp; Error Logs.</strong> Stack traces, error codes, and device state at the time of a crash. Collected via Firebase Crashlytics. These logs do not ordinarily contain personal identity information.</li>
                            <li><strong>App Performance Metrics.</strong> Frame rate, load times, latency. Used for quality assurance.</li>
                            <li><strong>Broad Geolocation.</strong> Country or city derived from your IP address. We never collect precise GPS-level location data.</li>
                            <li><strong>Third-Party SDK Data.</strong> Third-party SDKs integrated in our games (see Section 5) automatically collect certain device and usage data. Please refer to each SDK&rsquo;s own privacy policy for details.</li>
                        </ul>

                        <H3>2.3 Data Received From Third Parties</H3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Install Attribution Data.</strong> From advertising networks: which campaign, network, or creative led to a user installing our game. Includes a device ID hash, not personal identity.</li>
                            <li><strong>App Store Transaction Data.</strong> From Google Play and the Apple App Store: device ID, order timestamp, encrypted order details. Used only to fulfil in-app purchases.</li>
                            <li><strong>Analytics Aggregates.</strong> Third-party analytics providers may share aggregated or benchmarked data back to us. This is not individual-level personal data.</li>
                        </ul>

                        <H3>2.4 Data We Do NOT Collect</H3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>We do not intentionally collect racial or ethnic origin, political opinions, religious beliefs, health data, sexual orientation, trade union membership, biometric data, or genetic data.</li>
                            <li>We do not collect credit card numbers, bank account numbers, or financial credentials. All payments are handled entirely by the app store.</li>
                            <li>We do not collect passport numbers, national insurance numbers, social security numbers, or similar government-issued identifiers.</li>
                            <li>We do not knowingly collect any personal data from users under the applicable minimum age (see Section 7).</li>
                        </ul>
                    </section>


                    {/* ══════════════ 3. HOW WE USE YOUR DATA (D) ══════════════ */}

                    <section id="purposes" className="mt-14">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">3. How We Use Your Data</h2>
                        <p>We process your personal data for the following purposes:</p>
                        <ol className="list-decimal pl-5 space-y-2 mt-3">
                            <li><strong>Service Delivery.</strong> To operate our games, enable core features, serve game content, apply updates, and ensure the game runs correctly on your device.</li>
                            <li><strong>In-App Purchase Fulfilment.</strong> To verify, process, and deliver in-app purchases and subscriptions made through the app store.</li>
                            <li><strong>Game Performance &amp; Bug Fixing.</strong> To identify crashes, performance bottlenecks, and technical errors in order to improve game stability.</li>
                            <li><strong>Analytics &amp; Research.</strong> To understand how users interact with our games, identify popular features, inform product decisions, and improve future game design. Processed via Firebase Analytics.</li>
                            <li><strong>Displaying Contextual Ads.</strong> To show non-personalised advertisements to users who have not consented to interest-based advertising.</li>
                            <li><strong>Displaying Personalised Ads.</strong> To show targeted, interest-based advertisements to users who have given explicit consent. Legal basis: consent only.</li>
                            <li><strong>Cross-Promotion.</strong> To promote our other games to users of this game.</li>
                            <li><strong>Advertising Campaign Tracking.</strong> To measure the effectiveness of our advertising campaigns promoting our games in other apps.</li>
                            <li><strong>Fraud Detection &amp; Prevention.</strong> To identify and block bots, fake installs, ad fraud, cheating, and account compromise attempts.</li>
                            <li><strong>Safety &amp; Security.</strong> To protect users from harmful content, harassment, or abuse within our services.</li>
                            <li><strong>Customer Support.</strong> To receive, process, and respond to support tickets, bug reports, and user complaints.</li>
                            <li><strong>Legal Compliance.</strong> To meet legal obligations including tax records, responding to law enforcement requests, and complying with child protection laws.</li>
                            <li><strong>Business Operations.</strong> For internal administration: financial reporting, internal auditing, and staff training using anonymised data.</li>
                            <li><strong>Business Transfers.</strong> In the event of a merger, acquisition, or asset sale, data may be transferred as part of the business assets.</li>
                        </ol>
                    </section>


                    {/* ══════════════ 4. LEGAL BASIS (E) ══════════════ */}

                    <section id="legal-basis" className="mt-14">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">4. Legal Basis for Processing</h2>
                        <p>
                            Under Article 6 of the UK GDPR and EU GDPR, we must have a lawful basis for every
                            processing activity. The following table maps each purpose to its legal basis.
                        </p>

                        <div className="overflow-x-auto mt-6 mb-6">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="border-b-2 border-neutral-200 text-left">
                                        <th className="py-2 pr-4 text-neutral-500 font-semibold">Purpose</th>
                                        <th className="py-2 pr-4 text-neutral-500 font-semibold">Data Categories</th>
                                        <th className="py-2 text-neutral-500 font-semibold">Legal Basis</th>
                                    </tr>
                                </thead>
                                <tbody className="align-top">
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-2 pr-4">Service delivery, IAP fulfilment</td>
                                        <td className="py-2 pr-4">Device info, gameplay data, transaction data</td>
                                        <td className="py-2">Art. 6(1)(b) — Contractual necessity</td>
                                    </tr>
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-2 pr-4">Personalised / interest-based advertising</td>
                                        <td className="py-2 pr-4">IDFA / GAID, IP-derived location, ad interactions</td>
                                        <td className="py-2">Art. 6(1)(a) — Consent</td>
                                    </tr>
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-2 pr-4">Analytics, crash reporting, contextual ads, cross-promotion, fraud detection</td>
                                        <td className="py-2 pr-4">Device info, gameplay data, crash logs, IDFV/Android ID</td>
                                        <td className="py-2">Art. 6(1)(f) — Legitimate interests</td>
                                    </tr>
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-2 pr-4">Tax records, law enforcement, child safety</td>
                                        <td className="py-2 pr-4">Transaction records, support records</td>
                                        <td className="py-2">Art. 6(1)(c) — Legal obligation</td>
                                    </tr>
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-2 pr-4">Customer support</td>
                                        <td className="py-2 pr-4">Name, email, support correspondence</td>
                                        <td className="py-2">Art. 6(1)(b) — Contractual necessity</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            <strong>Consent withdrawal.</strong> You may withdraw your consent at any time. Withdrawal
                            does not affect the lawfulness of processing carried out before the withdrawal. You can
                            withdraw consent through our in-app privacy settings or by contacting us at{" "}
                            <a href={`mailto:${CO.privacy}`} className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">{CO.privacy}</a>.
                        </p>

                        <p className="mt-4">
                            <strong>Legitimate Interests Assessment.</strong> Where we rely on legitimate interests, we
                            have conducted an internal Legitimate Interests Assessment (LIA) that balances our
                            interests against your rights and freedoms. A copy of the LIA is available on request by
                            contacting{" "}
                            <a href={`mailto:${CO.privacy}`} className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">{CO.privacy}</a>.
                        </p>
                    </section>


                    {/* ══════════════ 5. ADVERTISING (F) ══════════════ */}

                    <section id="advertising" className="mt-14">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">5. Advertising</h2>

                        <H3>5.1 Why Advertising Exists</H3>
                        <p>
                            Advertising revenue is what enables us to offer our games for free or at a low cost. We
                            display the following ad formats: banner ads, interstitial (full-screen) ads, and
                            rewarded video ads. Rewarded video ads are always voluntary — you choose to watch them in
                            exchange for in-game benefits.
                        </p>
                        <p className="mt-4">
                            We do not directly choose individual advertisements. That decision is made by our
                            advertising network partners using their own algorithms. We may blacklist certain ad
                            categories that we consider inappropriate.
                        </p>

                        <H3>5.2 Advertising Identifiers</H3>
                        <p>
                            <strong>IDFA (iOS)</strong> — Apple&rsquo;s Identifier for Advertisers is a unique,
                            non-permanent, non-personal identifier assigned to your Apple device. It enables
                            personalised advertising, ad frequency capping, and install attribution.
                        </p>
                        <p className="mt-3">
                            <strong>GAID (Android)</strong> — Google&rsquo;s Advertising ID is the equivalent
                            identifier on Android devices. It serves the same purposes. Note: Google is transitioning
                            Android to the Privacy Sandbox, which will eventually replace GAID with privacy-preserving
                            APIs such as the Topics API. As this technology evolves, we will update our data practices
                            accordingly.
                        </p>
                        <p className="mt-3">
                            These advertising identifiers can be used by ad networks to track user behaviour across
                            different apps on the same device. This is the mechanism behind interest-based advertising.
                        </p>
                        <p className="mt-3">
                            <strong>How to reset or limit advertising identifiers:</strong>
                        </p>
                        <ul className="list-disc pl-5 space-y-1 mt-2">
                            <li>iOS: Settings &gt; Privacy &amp; Security &gt; Tracking — opt out of tracking, or delete your IDFA.</li>
                            <li>Android 12+: Settings &gt; Google &gt; Ads &gt; Delete Advertising ID.</li>
                        </ul>
                        <p className="mt-3">
                            <strong>App Tracking Transparency (iOS 14.5+).</strong> On iOS, a system-level permission
                            prompt asks whether you allow tracking across apps. If you decline, personalised ads will
                            not be served.
                        </p>
                        <p className="mt-3">
                            The advertising identifier (user-resettable, used for ad targeting) is distinct from the
                            device identifier / IDFV (persistent, used for analytics). They are different identifiers
                            with different purposes.
                        </p>

                        <H3>5.3 Personalised vs Contextual Advertising</H3>
                        <p>
                            <strong>Interest-based (personalised) advertising</strong> means ads selected based on
                            your past behaviour, preferences, and demographics across apps. This requires your explicit
                            consent for EEA and UK users.
                        </p>
                        <p className="mt-3">
                            <strong>Contextual advertising</strong> means ads relevant to the content of the current
                            app or screen, not your personal profile. This does not require consent and is the
                            fallback when consent is refused.
                        </p>
                        <p className="mt-3">
                            If you do not consent to personalised advertising, you will still see ads — but those ads
                            will be contextual and not tailored to you. The number of ads does not change.
                        </p>

                        <H3>5.4 Advertising Network Partners</H3>
                        <p>
                            We integrate the following advertising networks in our games. Each network may receive
                            your advertising identifier (IDFA/GAID), IP-derived country/city, app bundle identifier,
                            ad placement identifier, and interaction events (impressions, clicks). They do not receive
                            your name, email, or precise GPS location.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mt-3">
                            <li>
                                <strong>AppLovin</strong> — We work with AppLovin to deliver ads in our mobile
                                application and other devices and/or platforms. For more information about
                                AppLovin&rsquo;s collection and use of your information, visit:{" "}
                                <a href="https://legal.applovin.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600 break-all">https://legal.applovin.com/privacy/</a>
                            </li>
                            <li>
                                <strong>Google AdMob</strong> —{" "}
                                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600 break-all">https://policies.google.com/privacy</a>
                            </li>
                            <li>
                                <strong>Unity Ads (including ironSource)</strong> — ironSource was acquired by Unity
                                and is now part of Unity&rsquo;s advertising platform.{" "}
                                <a href="https://unity.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600 break-all">https://unity.com/legal/privacy-policy</a>
                            </li>
                        </ul>
                        <p className="mt-4">
                            We use a mediation platform (AppLovin MAX) to manage multiple ad networks simultaneously.
                            Data may be passed to any of the participating networks based on the mediation
                            waterfall&rsquo;s decision logic.
                        </p>
                        <p className="mt-4">
                            Third-party measurement partners may collect and process data as part of the IAB Open
                            Measurement Working Group to perform ad measurement and related services.
                        </p>

                        <H3>5.5 Consent &amp; Opt-Out Mechanisms</H3>
                        <p>
                            We use a Consent Management Platform (CMP) — AppLovin&rsquo;s built-in MAX CMP — to
                            collect and manage advertising consent. Our consent collection meets the IAB Europe
                            Transparency &amp; Consent Framework version 2.2 (TCF 2.2).
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mt-3">
                            <li><strong>EEA/UK users:</strong> Personalised ads are only shown after you give explicit consent via the CMP popup presented at first launch.</li>
                            <li><strong>US users:</strong> You may opt-out of the &ldquo;sale&rdquo; or &ldquo;sharing&rdquo; of your personal information via Settings &gt; Privacy &gt; Advertising Preferences within the game.</li>
                            <li><strong>To withdraw consent:</strong> Navigate to Settings &gt; Privacy &gt; Advertising Preferences within the game at any time. Withdrawal takes effect immediately.</li>
                        </ul>

                        <H3>5.6 Our Ads in Other Apps</H3>
                        <p>
                            We advertise our games in other apps using advertising networks. Your advertising ID may
                            be used to target audiences likely to enjoy our games, to create lookalike audiences (where
                            an ad network finds users similar to our existing players), and to conduct re-engagement
                            campaigns for users who have not played for a period of time.
                        </p>
                        <p className="mt-3">
                            When you install a game after seeing one of our ads, the install is attributed to the
                            relevant campaign using your advertising ID. Attribution is handled via AppLovin&rsquo;s
                            built-in attribution functionality within the MAX SDK.
                        </p>
                    </section>


                    {/* ══════════════ 6. HOW WE SHARE DATA (G) ══════════════ */}

                    <section id="sharing" className="mt-14">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">6. How We Share Your Data</h2>

                        <H3>6.1 Service Providers (Data Processors)</H3>
                        <p>
                            Service providers act as data processors — they process data only on our instructions, are
                            contractually bound, and cannot use the data for their own purposes. We have signed Data
                            Processing Agreements with all service providers that require them, in compliance with
                            GDPR Article 28.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mt-3">
                            <li><strong>Cloud &amp; Hosting:</strong> Google Cloud Platform — <a href="https://cloud.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600 break-all">cloud.google.com/privacy</a>. Data is stored in the EU (europe-west) region.</li>
                            <li><strong>Analytics:</strong> Firebase Analytics (Google) — <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600 break-all">firebase.google.com/support/privacy</a>. Receives device identifiers, gameplay events, and session data for product analytics.</li>
                            <li><strong>Crash Reporting:</strong> Firebase Crashlytics (Google) — receives device information, crash logs, and error data. Does not receive personal identity information.</li>
                            <li><strong>Attribution &amp; Anti-Fraud:</strong> AppLovin (via MAX SDK) — receives advertising IDs, IP-derived location, and install events for campaign measurement and fraud detection.</li>
                            <li><strong>Consent Management:</strong> AppLovin MAX CMP — manages user consent and passes consent signals to ad networks.</li>
                        </ul>

                        <H3>6.2 Advertising Networks</H3>
                        <p>
                            Advertising networks receive: your advertising ID, IP-derived country/city, app bundle ID,
                            ad placement, and interaction events (impressions, clicks). They do <em>not</em> receive
                            your name, email address, or precise GPS location.
                        </p>
                        <p className="mt-3">
                            Advertising networks are <strong>independent data controllers</strong> — each has its own
                            privacy policy and is responsible for its own data practices. We are not responsible for
                            their processing. See Section 5.4 for the full list and privacy policy links.
                        </p>

                        <H3>6.3 Legal &amp; Regulatory Disclosures</H3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>We may disclose data in response to court orders, legal processes, or government requests, and will notify you where legally permitted.</li>
                            <li>We may share data to prevent fraud, protect safety, enforce our Terms of Service, or protect legal rights.</li>
                            <li>In certain jurisdictions, governments may compel disclosure without our knowledge or ability to notify you.</li>
                        </ul>

                        <H3>6.4 Business Transfers</H3>
                        <p>
                            In the event of a sale, merger, acquisition, or bankruptcy, user data may be transferred to
                            the acquiring entity as a business asset. The new owner will be bound by this policy.
                            Potential acquirers may access anonymised data during due diligence, but not personal data
                            until a transaction is completed.
                        </p>
                    </section>


                    {/* ══════════════ 7. CHILDREN'S PRIVACY (H) ══════════════ */}

                    <section id="children" className="mt-14">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">7. Children&rsquo;s Privacy</h2>

                        <p>
                            Our games are not directed to children under the age of 13 (or the higher age threshold
                            applicable in your jurisdiction — for example, 16 in Germany and the Netherlands, 15 in
                            France, 14 in Italy and Spain). GDPR Article 8 sets the default age of consent for data
                            processing at 16 in the EU but allows member states to lower it to no less than 13.
                            UK GDPR sets the threshold at 13.
                        </p>
                        <p className="mt-4">
                            We do not knowingly collect personal data from children under the applicable minimum age.
                            We do not knowingly serve targeted or interest-based advertisements to children.
                        </p>
                        <p className="mt-4">
                            If a parent or guardian believes their child has provided personal data to us, please
                            contact us at{" "}
                            <a href={`mailto:${CO.privacy}`} className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">{CO.privacy}</a>{" "}
                            and we will delete the data promptly.
                        </p>
                        <p className="mt-4">
                            Upon discovery that we have collected data from a child without verifiable parental
                            consent, we will promptly delete such data from our servers.
                        </p>
                        <p className="mt-4">
                            This policy complies with the Children&rsquo;s Online Privacy Protection Act (COPPA,
                            15 U.S.C. &sect; 6501 et seq.) for distribution on United States app stores.
                        </p>
                    </section>


                    {/* ══════════════ 8. YOUR RIGHTS (I) ══════════════ */}

                    <section id="rights" className="mt-14">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">8. Your Rights</h2>

                        <H3>8.1 GDPR / UK GDPR Rights</H3>
                        <p>If you are in the EEA or the United Kingdom, you have the following rights:</p>
                        <ul className="list-disc pl-5 space-y-2 mt-3">
                            <li><strong>Right to Access (Art. 15).</strong> You may obtain confirmation of whether we process your personal data, a copy of that data, and supplementary information (purposes, recipients, retention periods, source). We will respond within 30 days at no charge.</li>
                            <li><strong>Right to Rectification (Art. 16).</strong> You may have inaccurate personal data corrected without undue delay.</li>
                            <li><strong>Right to Erasure (Art. 17).</strong> You may request deletion of your personal data. This right may be limited where we have a legal obligation to retain certain data. Deletion requests are fulfilled within 30 days.</li>
                            <li><strong>Right to Restrict Processing (Art. 18).</strong> You may pause (but not delete) processing where accuracy is contested, processing is unlawful but you prefer restriction, or data is no longer needed but you require it for a legal claim.</li>
                            <li><strong>Right to Data Portability (Art. 20).</strong> You may receive your data in a structured, commonly used, machine-readable format (JSON or CSV) and transmit it to another controller. Applies to data processed by consent or contract.</li>
                            <li><strong>Right to Object (Art. 21).</strong> You may object to processing based on legitimate interests or for direct marketing purposes. If you object to direct marketing, we will stop immediately.</li>
                            <li><strong>Right to Withdraw Consent (Art. 7).</strong> You may withdraw consent at any time without affecting the lawfulness of processing before withdrawal. The withdrawal mechanism is as easy as granting consent.</li>
                            <li><strong>Right to Lodge a Complaint (Art. 77).</strong> You may lodge a complaint with the supervisory authority in your country of residence. For UK users, this is the Information Commissioner&rsquo;s Office at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">ico.org.uk</a>.</li>
                        </ul>

                        <H3>8.2 US State Privacy Rights</H3>
                        <p><strong>California (CCPA / CPRA).</strong> If you are a California resident, you have the right to:</p>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li>Know what personal information has been collected, from which sources, for what purposes, and with whom it has been shared or sold — covering the prior 12 months.</li>
                            <li>Request deletion of personal information collected from you, subject to legal exceptions.</li>
                            <li>Direct us to stop &ldquo;selling&rdquo; or &ldquo;sharing&rdquo; (including for cross-context behavioural advertising) your personal information. See our &ldquo;Do Not Sell or Share My Personal Information&rdquo; toggle in Settings &gt; Privacy.</li>
                            <li>Not be discriminated against for exercising your privacy rights — we will not deny service, charge a different price, or provide a lower quality of service.</li>
                        </ul>
                        <p className="mt-4">
                            <strong>Virginia, Colorado, Connecticut, Utah, Texas, and other states</strong> have enacted
                            privacy laws with opt-out rights for targeted advertising. We provide a single mechanism in
                            Settings &gt; Privacy that satisfies all applicable state requirements. If we deny a
                            request, you may appeal the decision by contacting{" "}
                            <a href={`mailto:${CO.privacy}`} className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">{CO.privacy}</a>.
                            We accept requests from authorised agents acting on your behalf; please contact us for
                            the verification process.
                        </p>

                        <H3>8.3 How to Exercise Your Rights</H3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Email us at <a href={`mailto:${CO.privacy}`} className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">{CO.privacy}</a>.</li>
                            <li>Use the in-app privacy settings: Settings &gt; Privacy &gt; Contact Us.</li>
                            <li>We may ask you to confirm your account email and provide your in-game user ID to verify your identity before fulfilling a request.</li>
                            <li>GDPR response timeframe: 30 calendar days (extendable by 2 months for complex requests, with notice).</li>
                            <li>CCPA response timeframe: 45 calendar days (extendable by a further 45 days with notice).</li>
                            <li>We will respond to all rights requests free of charge, unless requests are manifestly unfounded or repetitive.</li>
                        </ul>
                    </section>


                    {/* ══════════════ 9. INTERNATIONAL TRANSFERS (J) ══════════════ */}

                    <section id="transfers" className="mt-14">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">9. International Data Transfers</h2>

                        <p>
                            Your personal data may be transferred to, stored in, and processed in countries other than
                            your country of residence. Our primary servers are located within the European Union
                            (Google Cloud, europe-west region).
                        </p>
                        <p className="mt-4">
                            For transfers from the EEA to third countries, we rely on the European Commission&rsquo;s
                            Standard Contractual Clauses (SCCs, 2021 version). For transfers to US-based companies
                            certified under the EU-US Data Privacy Framework (DPF), we rely on that certification.
                        </p>
                        <p className="mt-4">
                            For transfers from the United Kingdom to third countries, we rely on the UK International
                            Data Transfer Agreement (UK IDTA) approved by the ICO. For transfers to DPF-certified US
                            companies, we may also rely on the UK-US Data Bridge (approved October 2023).
                        </p>
                        <p className="mt-4">
                            Where data is transferred to countries that do not benefit from an adequacy decision, we
                            conduct Transfer Impact Assessments (TIAs) and apply supplementary technical measures
                            including encryption in transit and at rest, pseudonymisation, and strict access controls.
                        </p>
                        <p className="mt-4 text-sm text-neutral-500">
                            Note: We do not reference the EU-US Privacy Shield or Swiss-US Privacy Shield, as both
                            were invalidated and are no longer a valid transfer mechanism.
                        </p>
                    </section>


                    {/* ══════════════ 10. DATA RETENTION (K) ══════════════ */}

                    <section id="retention" className="mt-14">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">10. Data Retention</h2>

                        <p>
                            We retain personal data only for as long as necessary to fulfil the purposes described in
                            this policy, in accordance with the GDPR storage limitation principle (Art. 5(1)(e)).
                        </p>

                        <div className="overflow-x-auto mt-6 mb-6">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="border-b-2 border-neutral-200 text-left">
                                        <th className="py-2 pr-4 text-neutral-500 font-semibold">Data Category</th>
                                        <th className="py-2 text-neutral-500 font-semibold">Retention Period</th>
                                    </tr>
                                </thead>
                                <tbody className="align-top">
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-2 pr-4">Account &amp; gameplay data</td>
                                        <td className="py-2">While active, plus 2 years after last interaction</td>
                                    </tr>
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-2 pr-4">Advertising data (impression/click logs)</td>
                                        <td className="py-2">13 months (IAB standard)</td>
                                    </tr>
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-2 pr-4">Analytics session data</td>
                                        <td className="py-2">2 months (Firebase Analytics default; configurable up to 14 months)</td>
                                    </tr>
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-2 pr-4">Customer support communications</td>
                                        <td className="py-2">3 years after last contact</td>
                                    </tr>
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-2 pr-4">Financial &amp; transaction records</td>
                                        <td className="py-2">7 years (HMRC requirement)</td>
                                    </tr>
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-2 pr-4">Crash &amp; error logs</td>
                                        <td className="py-2">90 days</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            If data is subject to a legal claim or investigation, it may be retained beyond the periods
                            above until the matter is resolved.
                        </p>
                        <p className="mt-4">
                            Data may be anonymised (made impossible to link back to any individual) and retained
                            indefinitely for statistical or research purposes. Anonymised data is not personal data
                            under GDPR.
                        </p>
                        <p className="mt-4">
                            Deletion requests are fulfilled within 30 days. Backups may persist for 30–90 days after
                            deletion until backup rotation completes; data in backups is not actively accessible.
                        </p>
                        <p className="mt-4">
                            If your account is inactive for 2 years, your account data will be flagged for deletion.
                            You will be notified 30 days before deletion occurs.
                        </p>
                    </section>


                    {/* ══════════════ 11. DATA SECURITY (L) ══════════════ */}

                    <section id="security" className="mt-14">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">11. Data Security</h2>

                        <p>
                            We implement appropriate technical and organisational measures to protect your personal
                            data against unauthorised access, loss, alteration, or destruction, in accordance with
                            GDPR Article 32.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mt-4">
                            <li><strong>Encryption in transit.</strong> Data transmitted between your device and our servers is encrypted using TLS/SSL.</li>
                            <li><strong>Encryption at rest.</strong> Data stored on our servers is encrypted at rest using Google Cloud&rsquo;s default encryption.</li>
                            <li><strong>Access controls.</strong> Access to personal data is restricted to authorised personnel who need it to perform their duties. Staff are bound by confidentiality obligations.</li>
                            <li><strong>Breach response.</strong> We maintain a data breach response plan. Under GDPR, we will notify the ICO within 72 hours of becoming aware of a personal data breach likely to result in risk to individuals.</li>
                        </ul>
                        <p className="mt-4">
                            No method of transmission over the internet or method of electronic storage is 100% secure.
                            We cannot guarantee absolute security.
                        </p>
                        <p className="mt-4">
                            You are responsible for keeping your account credentials secure and should not share
                            passwords. If you suspect unauthorised access to your account, please contact us immediately
                            at <a href={`mailto:${CO.support}`} className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">{CO.support}</a>.
                        </p>
                    </section>


                    {/* ══════════════ 12. COOKIES & TRACKING (M) ══════════════ */}

                    <section id="cookies" className="mt-14">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">12. Cookies &amp; Tracking Technologies</h2>

                        <p>
                            <strong>On our website:</strong> Cookies are small text files stored on your device that
                            enable websites to recognise your browser and store preferences. We use:
                        </p>
                        <ul className="list-disc pl-5 space-y-1 mt-2">
                            <li><em>Strictly necessary cookies</em> — required for the website to function; cannot be opted out.</li>
                            <li><em>Analytics cookies</em> — help us understand website usage patterns (e.g. Google Analytics).</li>
                            <li><em>Advertising/targeting cookies</em> — used by ad networks to serve relevant ads.</li>
                        </ul>
                        <p className="mt-3">
                            A cookie consent banner is presented to EU/UK visitors on first visit, allowing you to
                            accept or reject non-essential cookies. Pre-ticked boxes are not valid consent.
                        </p>

                        <p className="mt-4">
                            <strong>In our mobile apps:</strong> SDKs, local storage, device fingerprinting, and
                            advertising identifiers function as the equivalent of cookies. These are disclosed in
                            Sections 2 and 5 of this policy. Analytics SDKs (Firebase Analytics) and advertising
                            SDKs (AppLovin MAX, AdMob) collect data via these mechanisms.
                        </p>

                        <p className="mt-4">
                            <strong>How to opt-out of non-essential cookies:</strong> Adjust your browser settings,
                            use the cookie preference tool on our website, or change platform-level advertising
                            settings on your mobile device.
                        </p>

                        <p className="mt-4">
                            <strong>Do Not Track.</strong> Our systems do not currently respond to browser
                            &ldquo;Do Not Track&rdquo; (DNT) signals.
                        </p>

                        <p className="mt-4">
                            For a detailed list of cookies used on our website, please see our{" "}
                            <Link href="/cookie-policy" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">Cookie Policy</Link>.
                        </p>
                    </section>


                    {/* ══════════════ 13. IN-APP PURCHASES (N) ══════════════ */}

                    <section id="iap" className="mt-14">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">13. In-App Purchases &amp; Payments</h2>

                        <p>
                            All payment processing is handled by the app store (Google Play or the Apple App Store).
                            We do not collect, store, or process credit card numbers, bank account numbers, or any
                            financial credentials.
                        </p>
                        <p className="mt-4">
                            We do receive transaction metadata from the app store: transaction timestamp, order ID,
                            product purchased, encrypted order confirmation, and device ID. We use this data solely to
                            unlock purchased content and to detect fraudulent transactions.
                        </p>
                        <p className="mt-4">
                            If we offer subscriptions, we verify active subscription status via the app store&rsquo;s
                            API. We do not directly handle recurring billing. To cancel a subscription, use the app
                            store&rsquo;s subscription management.
                        </p>
                        <p className="mt-4">
                            In-game virtual currency has no real-world value, is not refundable (except where required
                            by law), and transactions involving virtual currency are recorded for fraud prevention.
                            Refunds for purchases are handled by the app store according to their own policies.
                        </p>
                    </section>


                    {/* ══════════════ 14. JURISDICTION-SPECIFIC (O) ══════════════ */}

                    <section id="jurisdictions" className="mt-14">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">14. Jurisdiction-Specific Disclosures</h2>

                        <H3>14.1 EEA &amp; Switzerland</H3>
                        <p>
                            This subsection applies to users in the European Economic Area (EEA) and Switzerland and
                            supplements the main policy. Legal bases for processing are set out in Section 4. EEA
                            users may lodge complaints with their national supervisory authority — see{" "}
                            <a href="https://edpb.europa.eu/about-edpb/about-edpb/members_en" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600 break-all">edpb.europa.eu</a>{" "}
                            for the full list of national Data Protection Authorities. Transfer mechanisms for EEA
                            users are described in Section 9.
                        </p>

                        <H3>14.2 United Kingdom</H3>
                        <p>
                            This subsection applies to users in the United Kingdom and supplements the main policy.
                            UK GDPR is a separate legal framework from EU GDPR, though largely mirroring it. UK users
                            may lodge a complaint with the Information Commissioner&rsquo;s Office (ICO) at{" "}
                            <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">ico.org.uk</a>{" "}
                            or by calling 0303 123 1113. Transfer mechanisms for UK users are described in Section 9.
                        </p>

                        <H3>14.3 California (CCPA / CPRA)</H3>
                        <p>
                            This subsection applies to California residents and supplements the main policy, as
                            required by the California Consumer Privacy Act (Cal. Civ. Code &sect; 1798.100 et seq.).
                        </p>
                        <p className="mt-3"><strong>Categories of personal information collected:</strong> Identifiers (advertising IDs, IP-derived location); Internet/Electronic Activity (gameplay data, ad interactions); Geolocation (country/city from IP); Inferences (gameplay preferences).</p>
                        <p className="mt-3"><strong>Sources:</strong> Directly from you; automatically from your device; from advertising partners; from app stores.</p>
                        <p className="mt-3"><strong>Business purposes:</strong> As described in Section 3.</p>
                        <p className="mt-3">
                            <strong>Sale / Sharing.</strong> Sharing advertising identifiers with ad networks for
                            cross-context behavioural advertising may qualify as &ldquo;sharing&rdquo; under CCPA. You
                            may opt out via our &ldquo;Do Not Sell or Share My Personal Information&rdquo; toggle in
                            Settings &gt; Privacy.
                        </p>

                        <H3>14.4 Other US States</H3>
                        <p>
                            Virginia (VCDPA), Colorado (CPA), Connecticut (CTDPA), Utah (UCPA), Texas (TDPSA), and
                            other states have enacted privacy legislation granting opt-out rights for targeted
                            advertising. Our unified Settings &gt; Privacy mechanism satisfies all applicable state
                            requirements. We honour the Global Privacy Control (GPC) browser signal as an opt-out
                            request, as required by applicable US state privacy laws including the CCPA/CPRA and CPA.
                        </p>

                        <H3>14.5 Brazil (LGPD)</H3>
                        <p>
                            The Lei Geral de Prote&ccedil;&atilde;o de Dados applies to processing of Brazilian
                            residents&rsquo; data. We honour data subject rights equivalent to those described in
                            Section 8, including access, correction, deletion, and portability.
                        </p>

                        <H3>14.6 Other Jurisdictions</H3>
                        <p>
                            If you are located in Canada (PIPEDA), Australia (Privacy Act 1988), Japan (APPI),
                            South Korea (PIPA), or India (DPDPA 2023), we comply with the applicable local
                            requirements to the extent they apply to our processing activities. If you have questions
                            about how your local law applies, please contact{" "}
                            <a href={`mailto:${CO.privacy}`} className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">{CO.privacy}</a>.
                        </p>
                    </section>


                    {/* ══════════════ 15. CONTACT & DPO (P) ══════════════ */}

                    <section id="contact" className="mt-14">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">15. Contact &amp; Data Protection</h2>

                        <table className="w-full text-sm border-collapse mb-6">
                            <tbody>
                                <tr className="border-b border-neutral-100">
                                    <td className="py-2 pr-4 text-neutral-500 align-top whitespace-nowrap w-40">Privacy Email</td>
                                    <td className="py-2"><a href={`mailto:${CO.privacy}`} className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">{CO.privacy}</a></td>
                                </tr>
                                <tr className="border-b border-neutral-100">
                                    <td className="py-2 pr-4 text-neutral-500 align-top whitespace-nowrap">General Contact</td>
                                    <td className="py-2"><a href={`mailto:${CO.support}`} className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">{CO.support}</a></td>
                                </tr>
                                <tr className="border-b border-neutral-100">
                                    <td className="py-2 pr-4 text-neutral-500 align-top whitespace-nowrap">Postal Address</td>
                                    <td className="py-2">{CO.addr}</td>
                                </tr>
                                <tr className="border-b border-neutral-100">
                                    <td className="py-2 pr-4 text-neutral-500 align-top whitespace-nowrap">In-App</td>
                                    <td className="py-2">Settings &gt; Privacy &gt; Contact Us</td>
                                </tr>
                                <tr className="border-b border-neutral-100">
                                    <td className="py-2 pr-4 text-neutral-500 align-top whitespace-nowrap">ICO (UK)</td>
                                    <td className="py-2"><a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">ico.org.uk</a> &nbsp;/&nbsp; 0303 123 1113</td>
                                </tr>
                                <tr>
                                    <td className="py-2 pr-4 text-neutral-500 align-top whitespace-nowrap">EEA DPAs</td>
                                    <td className="py-2"><a href="https://edpb.europa.eu/about-edpb/about-edpb/members_en" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600 break-all">edpb.europa.eu/about-edpb/about-edpb/members_en</a></td>
                                </tr>
                            </tbody>
                        </table>

                        <p>
                            We will respond to all privacy requests within 30 calendar days (GDPR) or 45 calendar days
                            (CCPA), whichever applies. For complex requests, we may extend this period and will notify
                            you promptly.
                        </p>
                        <p className="mt-4">
                            <strong>Data Protection Officer.</strong> Given our current scale and processing activities,
                            we are not required to appoint a Data Protection Officer under GDPR Article 37. We have
                            designated a privacy contact point reachable at{" "}
                            <a href={`mailto:${CO.privacy}`} className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">{CO.privacy}</a>{" "}
                            who is responsible for handling all data protection matters. Should our processing
                            activities change to require a formal DPO appointment, we will update this section
                            accordingly.
                        </p>
                    </section>


                    {/* ══════════════ 16. PUSH NOTIFICATIONS (Q) ══════════════ */}

                    <section id="notifications" className="mt-14">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">16. Push Notifications &amp; Marketing</h2>

                        <p>
                            Push notifications require explicit opt-in permission via your device&rsquo;s system prompt
                            (iOS) or app notification settings (Android). We only send push notifications if you have
                            consented.
                        </p>
                        <p className="mt-4">
                            We distinguish between <em>transactional notifications</em> (e.g. &ldquo;Your reward is
                            ready&rdquo;) and <em>promotional notifications</em> (e.g. &ldquo;New content
                            available!&rdquo;). Different legal bases apply.
                        </p>
                        <p className="mt-4">
                            You can disable push notifications at any time via your device settings:
                        </p>
                        <ul className="list-disc pl-5 space-y-1 mt-2">
                            <li>iOS: Settings &gt; Notifications &gt; [App Name]</li>
                            <li>Android: Settings &gt; Apps &gt; [App Name] &gt; Notifications</li>
                        </ul>
                        <p className="mt-4">
                            In-app messages — displayed within the game, not as device notifications — may be used
                            without additional consent as they are part of the service.
                        </p>
                    </section>


                    {/* ══════════════ 17. CHANGES TO THIS POLICY (R) ══════════════ */}

                    <section id="changes" className="mt-14">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">17. Changes to This Policy</h2>

                        <p>
                            We reserve the right to update or change this Privacy Policy at any time. Please review
                            this policy periodically for changes.
                        </p>
                        <p className="mt-4">
                            For material changes — such as a new category of data collected, a new third-party
                            recipient, a change to retention periods, or a change in legal basis — we will notify you
                            via in-app notification or a prominent notice on the policy page at least 30 days before
                            the changes take effect.
                        </p>
                        <p className="mt-4">
                            Continued use of our Services after changes are posted constitutes your acceptance of the
                            updated policy.
                        </p>
                        <p className="mt-4">
                            We review this policy at least annually and update it to reflect changes in law, data
                            practices, or third-party relationships. Previous versions are available on request by
                            contacting{" "}
                            <a href={`mailto:${CO.privacy}`} className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">{CO.privacy}</a>.
                        </p>
                    </section>


                    {/* ══════════════ 18. GENERAL PROVISIONS (S) ══════════════ */}

                    <section id="misc" className="mt-14">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">18. General Provisions</h2>

                        <ul className="list-disc pl-5 space-y-3">
                            <li><strong>Third-Party Links.</strong> Our games and website may contain links to third-party websites or services. We are not responsible for the privacy practices of those third parties. We encourage you to review their privacy policies before providing any personal information.</li>
                            <li><strong>App Store Terms.</strong> This policy supplements the privacy policies and terms of the Apple App Store and Google Play Store. Please also review those policies, as they govern how the platforms handle data related to your use of their services.</li>
                            <li><strong>No Sale of Personal Data.</strong> We do not sell your personal data. Note that under the CCPA&rsquo;s broader definition, sharing advertising identifiers with ad networks for cross-context behavioural advertising may qualify as &ldquo;sharing&rdquo; — see Section 14.3.</li>
                            <li><strong>Aggregated &amp; Anonymised Data.</strong> We may use aggregated and anonymised data — which cannot identify you individually — for research, benchmarking, industry reports, and business analysis. Such data is not subject to this policy.</li>
                            <li><strong>Severability.</strong> If any provision of this Privacy Policy is found to be unenforceable, the remaining provisions will continue in full force and effect.</li>
                            <li><strong>Governing Law.</strong> This policy is governed by the laws of England and Wales.</li>
                            <li><strong>Language.</strong> In the event of any conflict between the English version of this policy and any translated version, the English version shall prevail.</li>
                            <li><strong>Accessibility.</strong> This privacy policy is available in an accessible format on request (e.g. large print, screen-reader compatible). We aim to conform to WCAG 2.1 Level AA for the web-hosted version.</li>
                        </ul>
                    </section>


                    {/* ══════════════ 19. HOW TO CONTACT US ══════════════ */}

                    <section id="how-to-contact" className="mt-14">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">19. How to Contact Us</h2>
                        <p>
                            Please contact{" "}
                            <a href={`mailto:${CO.privacy}`} className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">{CO.privacy}</a>{" "}
                            with any questions regarding this Privacy Policy.
                        </p>
                    </section>


                    {/* ══════════════ DEFINITIONS GLOSSARY ══════════════ */}

                    <section className="mt-14">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">Glossary</h2>
                        <ul className="space-y-3 text-sm list-none pl-0">
                            <li><span className="font-medium text-neutral-900">Personal Data</span> — Any information relating to an identified or identifiable natural person.</li>
                            <li><span className="font-medium text-neutral-900">Data Controller</span> — The entity that determines the purposes and means of the processing of personal data.</li>
                            <li><span className="font-medium text-neutral-900">Data Processor</span> — An entity that processes personal data on behalf of the controller.</li>
                            <li><span className="font-medium text-neutral-900">Processing</span> — Any operation performed on personal data, whether automated or manual.</li>
                            <li><span className="font-medium text-neutral-900">Consent</span> — Freely given, specific, informed, and unambiguous indication of the data subject&rsquo;s wishes.</li>
                            <li><span className="font-medium text-neutral-900">Legitimate Interests</span> — A lawful basis for processing where the controller&rsquo;s interests are balanced against the rights of the data subject.</li>
                            <li><span className="font-medium text-neutral-900">Supervisory Authority</span> — An independent public authority responsible for monitoring data protection compliance (e.g. the ICO in the UK).</li>
                            <li><span className="font-medium text-neutral-900">IDFA</span> — Apple&rsquo;s Identifier for Advertisers — a resettable device identifier for ad targeting.</li>
                            <li><span className="font-medium text-neutral-900">GAID</span> — Google Advertising ID — the Android equivalent of IDFA.</li>
                            <li><span className="font-medium text-neutral-900">SDK</span> — Software Development Kit — a collection of tools, libraries, and code that developers integrate into an app to add specific functionality (e.g. analytics, advertising).</li>
                        </ul>
                    </section>


                    {/* ──────────────────────────────────────── */}
                    <hr className="mt-14 mb-6 border-neutral-200" />
                    <p className="text-xs text-neutral-400">
                        &copy; {new Date().getFullYear()} {CO.name}. All rights reserved.
                    </p>
                </article>
            </main>
        </>
    );
}
