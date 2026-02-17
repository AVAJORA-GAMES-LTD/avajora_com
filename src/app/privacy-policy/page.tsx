import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { LegalH3 as H3 } from "@/components/legal";
import Link from "next/link";
import { COMPANY as CO } from "@/lib/company";
import { LEGAL_VERSIONS } from "@/lib/legal-versions";

export const metadata: Metadata = {
    title: "Privacy Policy — AVAJORA GAMES LTD",
    description:
        "Privacy Policy for AVAJORA GAMES LTD mobile games, website, and related services.",
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["WebPage", "Article"],
    name: "Privacy Policy",
    headline: "Privacy Policy",
    description: "Privacy Policy for AVAJORA GAMES LTD mobile games, website, and related services.",
    publisher: {
        "@type": "Organization",
        name: "AVAJORA GAMES LTD",
        url: "https://avajora.com",
    },
    datePublished: "2026-01-31",
    dateModified: "2026-02-17",
    inLanguage: "en",
    version: LEGAL_VERSIONS.privacyPolicy.version,
    mainEntity: {
        "@type": "WebPage",
        name: "Privacy Policy",
        description: "Comprehensive privacy policy covering data collection, advertising, children's privacy, and user rights.",
    },
    isPartOf: {
        "@type": "WebSite",
        url: "https://avajora.com",
        name: "AVAJORA GAMES LTD",
    },
};

const { version: V, updated: UPDATED, effective: EFFECTIVE } = LEGAL_VERSIONS.privacyPolicy;

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
    { id: "glossary", label: "Glossary" },
];

/* H3 imported from @/components/legal */

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
                        advertising, and improve your experience. We do not sell your personal data for direct
                        monetary consideration. Under certain broad legal definitions (such as the California
                        Consumer Privacy Act), sharing advertising identifiers with ad networks may qualify as
                        a &ldquo;sale&rdquo; or &ldquo;sharing&rdquo; &mdash; you can opt out at any time. You
                        may contact us to access, correct, or delete your data. Where our games are
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
                        using our Services, you acknowledge that you have read and understood this Privacy Policy.
                        Where our processing relies on consent (for example, personalised advertising), we will ask
                        for your specific, informed consent separately. Where processing relies on other legal bases
                        (such as contractual necessity or legitimate interests), your use of the Services is governed
                        by this policy. If you do not agree with this policy, please do not use our Services.
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
                                    <td className="py-2"><a href={`mailto:${CO.legal}`} className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">{CO.legal}</a></td>
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
                            <li><strong>Device Identifiers.</strong> Apple Identifier for Advertisers (IDFA) on iOS; Google Advertising ID (GAID) on Android. These are non-permanent, resettable identifiers that enable ad personalisation, frequency capping, and attribution. You can reset or limit them in your device settings (iOS: Settings &gt; Privacy &amp; Security &gt; Tracking; Android 12+: Settings &gt; Google &gt; Ads &gt; Delete Advertising ID). We also collect the Identifier for Vendor (IDFV) or Android ID for analytics purposes; these do not follow you across apps. <strong>Zero-State Handling:</strong> If you have disabled ad tracking (iOS &ldquo;Limit Ad Tracking&rdquo; or declined ATT prompt) or deleted your advertising ID (Android 12+), we will serve only contextual (non-personalised) ads and use device-bound identifiers (IDFV/Android ID) for analytics only. This does not affect core gameplay functionality.</li>
                            <li><strong>IP Address.</strong> Collected automatically. We use your IP address to derive broad geographic location (country and city). Raw IP addresses are retained for a maximum of <strong>14 days</strong> for security, fraud prevention, and operational logging, after which they are deleted or truncated. The IP-derived geolocation (country/city only) may be retained as part of aggregated session data for the durations specified in Section 10.</li>
                            <li><strong>Device &amp; OS Information.</strong> Manufacturer, model, screen resolution, operating system and version, system language and locale, network type (Wi-Fi or mobile data), and basic hardware specifications (CPU, RAM, available storage). Used for game compatibility, performance optimisation, and detecting low-end devices.</li>
                            <li><strong>Gameplay / Session Data.</strong> Level reached, scores, session start and end times, features used, items purchased, achievements unlocked. This is core analytics data processed via Unity Analytics.</li>
                            <li><strong>Ad Interaction Data.</strong> Which ads were shown, viewed, clicked, or resulted in installs. Used for ad measurement, fraud detection, and campaign optimisation.</li>
                            <li><strong>Anti-Cheat &amp; Integrity Data.</strong> We employ automated detection systems to identify modified game clients (modded APKs, jailbreak tweaks), emulator or virtualisation usage, abnormal progression patterns (impossible score changes, timing anomalies), and payment fraud indicators (chargebacks, refund abuse patterns). Detection methods include device fingerprinting (hardware identifiers, screen properties, sensor data), behavioral analytics (gameplay velocity, input patterns), code integrity checks (binary signature verification, runtime tampering detection), and transaction anomaly scoring. This processing is necessary to maintain fair gameplay, prevent economic harm to legitimate players, protect our revenue from fraud, and comply with anti-money laundering obligations. Legal basis: Legitimate interests (GDPR Art. 6(1)(f)) — our legitimate interest in preventing fraud and ensuring service integrity outweighs any minimal privacy impact, as the data collected is technical and non-sensitive. Violators may be permanently banned without refund and may have their device identifiers blocklisted from future access.</li>
                            <li><strong>Crash &amp; Error Logs.</strong> Stack traces, error codes, and device state at the time of a crash. These logs do not ordinarily contain personal identity information.</li>
                            <li><strong>App Performance Metrics.</strong> Frame rate, load times, latency. Used for quality assurance.</li>
                            <li><strong>Broad Geolocation.</strong> Country or city derived from your IP address. We never collect precise GPS-level location data.</li>
                            <li><strong>Third-Party SDK Data.</strong> Third-party SDKs integrated in our games (see Section 5) automatically collect certain device and usage data. Please refer to each SDK&rsquo;s own privacy policy for details.</li>
                        </ul>

                        <H3>2.3 Data Received From Third Parties</H3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Install Attribution Data.</strong> From advertising networks (e.g. CAS.ai downstream partners, Unity Ads): which campaign, network, or creative led to a user installing our game. Includes a device ID hash, not personal identity.</li>
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
                            <li><strong>Analytics &amp; Research.</strong> To understand how users interact with our games, identify popular features, inform product decisions, and improve future game design. Processed via Unity Analytics (see Section 5.8).</li>
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
                            interests against your rights and freedoms. In summary: our legitimate interest in
                            analytics is balanced against minimal privacy impact because we use device-bound
                            identifiers (not advertising IDs) for analytics, data is aggregated at the cohort level,
                            and individual users are not profiled for advertising purposes. For contextual ads, no
                            personal targeting occurs. For fraud detection, the security benefit to all users
                            outweighs the limited processing involved. A full copy of the LIA is available on
                            request by contacting{" "}
                            <a href={`mailto:${CO.privacy}`} className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">{CO.privacy}</a>.
                        </p>

                        <p className="mt-4">
                            <strong>Data Protection Impact Assessment (DPIA).</strong> We have conducted a Data
                            Protection Impact Assessment under GDPR Article 35 for our large-scale processing of
                            advertising identifiers and behavioural data across our user base. The DPIA evaluates
                            the necessity and proportionality of the processing, assesses risks to data subjects,
                            and documents the safeguards and measures we apply to mitigate those risks. A summary
                            of the DPIA is available on request by contacting{" "}
                            <a href={`mailto:${CO.privacy}`} className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">{CO.privacy}</a>.
                        </p>

                        <p className="mt-4">
                            <strong>Automated Decision-Making.</strong> We do not use automated decision-making
                            (including profiling) that produces legal effects concerning you or similarly
                            significantly affects you, as described in GDPR Article 22. Ad personalisation is based
                            on interest signals processed by our advertising partners and does not constitute
                            automated decision-making with legal or similarly significant effects.
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
                            APIs such as the Topics API, Attribution Reporting API, and FLEDGE (Protected Audiences).
                            As these APIs become available, we will migrate our data practices accordingly and update
                            this policy. We are committed to adopting privacy-preserving alternatives as they become
                            production-ready.
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

                        <H3>5.4 Ad Mediation &amp; Network Partners</H3>
                        <p>
                            Our games are free to play and are funded by in-app advertising. To enable this, we and
                            our advertising partners collect certain information from your device. This subsection
                            explains what is collected, by whom, for what purpose, and how you can control it.
                        </p>
                        <p className="mt-4">
                            We use <strong>CAS.ai</strong> (Clever Ads Solutions, operated by CLEAR INVEST LTD) as
                            our advertising mediation platform. CAS.ai manages in-game advertising by conducting
                            real-time auctions among multiple advertising networks simultaneously. When an advertising
                            slot becomes available in the game, CAS.ai sends a request to multiple advertising companies
                            at the same time. Each company offers a price for that slot, and the highest-paying ad is
                            displayed. This process takes milliseconds and is invisible to you. As part of this process,
                            your device&rsquo;s advertising identifier (IDFA on iOS / GAID on Android), IP address,
                            device model, operating system, app identifier, and ad interaction data may be transmitted
                            to participating ad networks. For CAS.ai&rsquo;s own data practices, visit:{" "}
                            <a href="https://cas.ai/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600 break-all">https://cas.ai/privacy-policy</a>
                        </p>
                        <p className="mt-4">
                            CAS.ai uses the IAB Open Measurement SDK (OM SDK) to allow third-party ad measurement
                            companies to verify ad impressions. Third-party measurement partners may collect and process
                            data as part of the IAB Open Measurement Working Group to perform ad measurement and
                            related services.
                        </p>
                        <p className="mt-4">
                            Because CAS.ai routes data to many ad networks, your privacy policy disclosures extend to
                            every downstream network. The following are the direct and mediated ad network partners
                            integrated in our games:
                        </p>

                        <ul className="list-disc pl-5 space-y-3 mt-4">
                            <li>
                                <strong>AppLovin</strong> (AppLovin Corporation, Palo Alto, USA) — We work with
                                AppLovin to deliver ads in our mobile application and other devices and/or platforms.
                                For more information about AppLovin&rsquo;s collection and use of your information,
                                visit:{" "}
                                <a href="https://legal.applovin.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600 break-all">https://legal.applovin.com/privacy/</a>.
                                AppLovin may collect the following categories of information through its SDK:
                                <br /><br />
                                <strong>Identifiers:</strong> advertising identifiers (IDFA, GAID, Amazon
                                Advertising ID), Vendor ID (IDFV), App Set ID, and your advertising and tracking
                                preferences and restrictions (e.g., &ldquo;Limit Ad Tracking&rdquo; or ATT status).
                                <br />
                                <strong>Device &amp; hardware data:</strong> device make, model, and hardware
                                configuration; operating system and version; device properties related to screen,
                                display, size, orientation, audio, video, battery, memory usage, device settings,
                                and boot time; device settings related to accessibility features and font size;
                                carrier information; network connection type and speed.
                                <br />
                                <strong>App data:</strong> application name, properties, performance, session
                                information, and installation information of the app through which you interact
                                with AppLovin&rsquo;s Services.
                                <br />
                                <strong>Location &amp; locale:</strong> IP address (used to derive approximate
                                geographic location at the country/region level); country, time zone, and locale
                                settings (country and preferred language).
                                <br />
                                <strong>Ad interaction data:</strong> ad events including impression, completion,
                                click, and skip.
                                <br />
                                <strong>Advertiser event data:</strong> advertisers (directly or through a
                                third-party service provider) may share transactional or other &ldquo;event&rdquo;
                                data related to your interaction with an application, such as information about
                                purchases or application installations, with AppLovin for campaign optimisation
                                and measurement.
                                <br /><br />
                                The exact information AppLovin collects depends on choices you have made in the
                                ad settings on your device, on permissions you give in apps, and in the privacy
                                controls offered by those services and AppLovin.
                                <br /><br />
                                AppLovin uses this data to deliver its Advertising Services, maintain and improve
                                them &mdash; including its <strong>AI-powered advertising technology (Axon)</strong> &mdash;
                                and to research and develop new ones; to promote safety, security, and integrity of
                                its Services; to provide measurement, analytics, and reporting; and to comply with
                                legal and regulatory obligations. AppLovin may also use AI-powered advertising
                                technology to serve ads that are more relevant and interesting to you, in ways that
                                do not produce legal or similarly significant effects on you.
                                <br /><br />
                                <strong>How AppLovin shares your data:</strong> AppLovin may share information it
                                collects with: (a) its <strong>service providers</strong> who support its business
                                (infrastructure, analytics, customer service, payments); (b) its <strong>affiliates</strong>{" "}
                                within the AppLovin family of companies (including Adjust, Wurl, and other
                                subsidiaries) for purposes consistent with its Privacy Policy;
                                (c) <strong>advertising partners</strong> &mdash; including advertisers, ad networks,
                                exchanges, demand-side platforms, merchants, and mobile measurement partners
                                (MMPs) &mdash; to provide advertising services; and (d) as required by law or in
                                connection with business transfers. Unless otherwise noted on AppLovin&rsquo;s
                                partner list, each AppLovin advertising partner is an <strong>independent
                                    controller</strong> of your data. You can view AppLovin&rsquo;s full list of
                                advertising partners at:{" "}
                                <a href="https://legal.applovin.com/partners/" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600 break-all">https://legal.applovin.com/partners/</a>.
                                <br /><br />
                                AppLovin acts as an <strong>independent data controller</strong> for the data it
                                collects through its SDK and Services. AppLovin is certified under the{" "}
                                <strong>EU-US Data Privacy Framework (DPF)</strong>, the UK Extension to the EU-US
                                DPF, and the Swiss-US DPF, and is subject to the regulatory enforcement powers
                                of the U.S. Federal Trade Commission. AppLovin refers unresolved DPF complaints
                                to TRUSTe, an alternative dispute resolution provider based in the United States.
                                <br /><br />
                                AppLovin retains information collected through its Services for limited periods,
                                typically up to two (2) years from the date of collection, or until you request
                                deletion, whichever occurs first. To access or delete the data collected by AppLovin
                                from your device, you may download the <strong>AppLovin Privacy Management
                                    Application</strong> from the Apple App Store or Google Play Store:{" "}
                                <a href="https://apps.apple.com/app/applovin-privacy-management/id1622498498" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600 break-all">iOS</a>{" | "}
                                <a href="https://play.google.com/store/apps/details?id=com.applovin.gdpr" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600 break-all">Android</a>.
                                You may also opt out of interest-based advertising within ads served by AppLovin;
                                for detailed instructions, see{" "}
                                <a href="https://applovin.com/opt-out" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600 break-all">How AppLovin Shows You Ads</a>.
                                <br /><br />
                                AppLovin and other ad network partners may use the <strong>IAB Open Measurement
                                    SDK (OM SDK)</strong> to allow third-party ad measurement companies to verify ad
                                impressions. Third-party measurement partners may collect and process data as part
                                of the IAB Open Measurement Working Group to perform ad measurement and related
                                services.
                                <br /><br />
                                <strong>Sensitive data &amp; PHI:</strong> We do not include in the data we
                                share with AppLovin any sensitive personal data (as defined under applicable
                                laws, including racial or ethnic origin, political opinions, religious or
                                philosophical beliefs, health data, sex life or sexual orientation, criminal
                                convictions, genetic data, biometric data, government-issued identifiers,
                                financial account information, account log-in credentials, contents of user
                                communications, or precise geolocation). We do not provide AppLovin with
                                protected health information (&ldquo;PHI&rdquo;) as defined under applicable
                                laws, nor do we use any aspect of AppLovin&rsquo;s Services in connection
                                with PHI.
                                <br /><br />
                                <strong>Children:</strong> AppLovin does not knowingly collect personal information
                                from, or serve advertisements to, children as defined by applicable laws. We do not
                                initialise or use the AppLovin SDK for any end user identified as a child via our
                                age-gate. See Section 7 for details.
                                <br /><br />
                                Privacy policy:{" "}
                                <a href="https://legal.applovin.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600 break-all">https://legal.applovin.com/privacy/</a>
                                <br />
                                Data Sharing Requirements:{" "}
                                <a href="https://legal.applovin.com/data-sharing-requirements" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600 break-all">https://legal.applovin.com/data-sharing-requirements</a>
                            </li>
                            <li>
                                <strong>Unity Ads</strong> (Unity Technologies Inc.) — Unity Ads displays ads in our
                                games and may collect your advertising identifier (IDFA/GAID), IP address (used to derive
                                approximate geographic location at the city/country level), device model and operating
                                system version, app identifier (bundle ID), and ad interaction events (impression,
                                completion, click, skip). Unity Ads displays a Data Privacy icon directly on ad units,
                                through which you can access the personal data collected from your device on a per-app
                                basis and opt out of future collection. Privacy policy:{" "}
                                <a href="https://unity.com/legal/game-player-and-app-user-privacy-policy" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600 break-all">https://unity.com/legal/game-player-and-app-user-privacy-policy</a>
                            </li>
                            <li>
                                <strong>Liftoff Monetize</strong> (Liftoff Mobile Inc. / LMI Inc., formerly Vungle) —
                                Liftoff and its demand partners use tracking technologies to collect Ad Data including
                                your device advertising identifier (IDFA/GAID), IP address (used for approximate
                                geolocation), device model and OS, app identifier, and ad interaction data (impression,
                                click, completion) for the purpose of serving targeted advertisements. Liftoff does not
                                record or store personal information that users cannot easily revoke (such as email
                                addresses or phone numbers); it relies only on device advertising IDs, which you control
                                and can reset or delete at any time via device settings. Users who wish to opt out of
                                Liftoff&rsquo;s collection and use of their information for targeted advertising can do
                                so at:{" "}
                                <a href="https://vungle.com/opt-out/" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600 break-all">https://vungle.com/opt-out/</a>.
                                Privacy policy:{" "}
                                <a href="https://vungle.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600 break-all">https://vungle.com/privacy/</a>
                            </li>
                            <li>
                                <strong>InMobi</strong> (InMobi Pte. Ltd., Singapore / InMobi Inc., USA) — InMobi
                                provides advertising services in our games, including <em>retargeting advertising</em> —
                                ads may be shown to you based on your prior interactions with apps or sites that use
                                InMobi. InMobi may collect your device advertising identifier (IDFA/GAID), IP address
                                (used to estimate geographic location at country/city level), device model and operating
                                system, app bundle identifier, and ad interaction events. InMobi retains device-level
                                data for a maximum of 13 months, after which data is deleted or retained in aggregated
                                (non-personal) format. InMobi acts as a <strong>joint controller</strong> with us under
                                GDPR Article 26 — both parties share responsibility for how personal data is processed.
                                The essence of our joint controller arrangement is as follows: InMobi is responsible for
                                its own data collection, ad serving, and compliance with data subject requests directed
                                to InMobi; {CO.name} is responsible for obtaining valid consent from users and passing
                                consent signals to InMobi via the SDK. A copy of the joint controller arrangement is
                                available on request by contacting{" "}
                                <a href={`mailto:${CO.privacy}`} className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">{CO.privacy}</a>. For EEA and
                                UK users, InMobi requires consent via the IAB TCF 2.2 framework (IAB Vendor ID 333)
                                before serving personalised ads. Users can opt out of InMobi&rsquo;s interest-based
                                advertising at any time by visiting:{" "}
                                <a href="https://www.inmobi.com/page/opt-out/" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600 break-all">https://www.inmobi.com/page/opt-out/</a>.
                                Users who wish to exercise data subject rights (access, deletion, objection) with
                                respect to InMobi&rsquo;s processing may contact InMobi directly at:{" "}
                                <a href="mailto:privacy@inmobi.com" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">privacy@inmobi.com</a>.
                                Privacy policy:{" "}
                                <a href="https://www.inmobi.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600 break-all">https://www.inmobi.com/privacy-policy/</a>
                            </li>
                            <li>
                                <strong>Google AdMob</strong> (Google LLC, USA) — Google AdMob serves ads
                                in our games via CAS.ai mediation. AdMob may collect your advertising
                                identifier (IDFA/GAID), IP address (used to derive approximate geographic
                                location), device model and operating system, app identifier (bundle ID),
                                and ad interaction data (impression, click, conversion). Google acts as an
                                <strong>independent data controller</strong> for the data it collects
                                through AdMob. Google is certified under the <strong>EU-US Data Privacy
                                    Framework</strong>. Users can manage Google&rsquo;s ad personalisation at{" "}
                                <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600 break-all">adssettings.google.com</a>.
                                Privacy policy:{" "}
                                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600 break-all">https://policies.google.com/privacy</a>
                            </li>
                            <li>
                                <strong>ironSource (Unity LevelPlay)</strong> — Reached via CAS.ai mediation.{" "}
                                <a href="https://unity.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600 break-all">https://unity.com/legal/privacy-policy</a>
                            </li>
                            <li>
                                <strong>Meta Audience Network</strong> — Reached via CAS.ai mediation.{" "}
                                <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600 break-all">https://www.facebook.com/privacy/policy/</a>
                            </li>
                            <li>
                                <strong>Mintegral</strong> — Reached via CAS.ai mediation.{" "}
                                <a href="https://www.mintegral.com/en/privacy/" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600 break-all">https://www.mintegral.com/en/privacy/</a>
                            </li>
                            <li>
                                <strong>Pangle (ByteDance)</strong> — Reached via CAS.ai mediation.{" "}
                                <a href="https://www.pangleglobal.com/privacy/privacy-center-overseas" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600 break-all">https://www.pangleglobal.com/privacy/privacy-center-overseas</a>
                            </li>
                            <li>
                                <strong>Digital Turbine</strong> — Reached via CAS.ai mediation.{" "}
                                <a href="https://www.digitalturbine.com/legal/end-user-privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600 break-all">https://www.digitalturbine.com/legal/end-user-privacy-policy/</a>
                            </li>
                        </ul>

                        <p className="mt-4">
                            Since CAS.ai&rsquo;s partner network list can change over time, we publish the current
                            list of principal advertising partners at: {" "}
                            <Link href="/advertising-partners" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">avajora.com/advertising-partners</Link>.
                            This list is updated periodically and may not reflect every downstream reseller or
                            measurement provider in real time. Each partner operates under its own privacy policy
                            and is responsible for its own data practices.
                        </p>

                        <H3>5.5 COPPA &amp; Child-Directed Disclosures (Advertising)</H3>
                        <p>
                            We configure game-level settings in Unity, Liftoff, InMobi, and CAS.ai dashboards
                            regarding their COPPA status (directed to children or not). For any game not directed at
                            children under 13, advertising identifiers may be used for personalised ads. For
                            child-directed apps: Unity will not collect cross-app advertising identifiers; Liftoff is
                            instructed not to collect cross-app advertising identifiers for targeting purposes; InMobi
                            will not conduct behavioural advertising; and CAS.ai will not pass advertising identifiers
                            to downstream networks for targeting.
                        </p>
                        <p className="mt-4">
                            <strong>AppLovin SDK &mdash; Child Exclusion.</strong> In accordance with AppLovin&rsquo;s
                            Publisher Policies and Terms of Use, we do <strong>not</strong> initialise or use the
                            AppLovin SDK in any way for any end user who qualifies as a &ldquo;child&rdquo; under
                            applicable laws (including COPPA, UK AADC, GDPR Art.&nbsp;8, and equivalent laws in
                            other jurisdictions). When our age-gate identifies a user as under the applicable minimum
                            age, the AppLovin SDK is not loaded for that user session, no data is transmitted to
                            AppLovin, and no AppLovin ads are served. AppLovin is excluded from the CAS.ai mediation
                            waterfall and bidding stack for all child-identified sessions. This ensures compliance
                            with AppLovin&rsquo;s strict prohibition on using their Services in connection with
                            children.
                        </p>
                        <p className="mt-4">
                            <strong>App Store Age Range APIs.</strong> Where available, we integrate Apple&rsquo;s
                            and Google&rsquo;s age range APIs (including APIs announced in response to U.S. state
                            laws such as those in Texas, Utah, and Louisiana) to receive platform-verified age-range
                            information for end users. This information is used in conjunction with our in-app
                            age-gate to determine whether an end user qualifies as a &ldquo;child&rdquo; under
                            applicable laws and to ensure that the AppLovin SDK and other age-restricted services
                            are not initialised for such users.
                        </p>

                        <H3>5.6 Consent &amp; Opt-Out Mechanisms</H3>
                        <p>
                            <strong>Consent flow sequence.</strong> On iOS 14.5+, Apple&rsquo;s App Tracking Transparency (ATT) prompt is displayed <strong>first</strong>, before any other consent dialogue. If you decline tracking via ATT, personalised advertising is disabled immediately regardless of any subsequent CMP selection — the CMP will not be shown for personalised ads in this case. If you allow tracking via ATT (or on Android / pre-iOS 14.5), the CAS.ai Consent Management Platform (CMP) is presented next, requesting your consent for personalised advertising under the IAB Transparency &amp; Consent Framework (TCF 2.2). For EEA and UK users, personalised advertising via CAS.ai mediation is only displayed after you provide explicit consent through this CMP popup. You may update your preferences at any time via Settings &gt; Privacy within the game.
                        </p>
                        <p className="mt-3">
                            For users in the EEA, UK, and applicable US states, consent signals are passed to Unity
                            Ads, Liftoff, InMobi, <strong>AppLovin</strong>, and all CAS.ai downstream networks via
                            each SDK&rsquo;s consent API. Specifically, we pass the following signals to the
                            AppLovin SDK: ATT authorisation status (iOS), IAB TCF 2.2 consent string, &ldquo;Do Not
                            Sell&rdquo; flag (for CCPA/US state laws), age-restriction flags, and any other
                            applicable privacy flags required by law or app store policies. These consent signals
                            govern whether AppLovin serves personalised or contextual ads, and whether your
                            advertising identifier is used for interest-based advertising or for improving
                            AppLovin&rsquo;s Services, including its AI-powered technologies.
                            Users who opt out of targeted advertising will receive contextual (non-personalised)
                            ads only. If you opt out of personalised advertising, CAS.ai is instructed not to pass
                            your advertising identifier to downstream networks (including AppLovin), and only
                            contextual (non-targeted) ads will be displayed.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mt-3">
                            <li><strong>EEA/UK users:</strong> Personalised ads are only shown after you give explicit consent via the consent popup presented at first launch.</li>
                            <li><strong>US users:</strong> You may opt out of the &ldquo;sale&rdquo; or &ldquo;sharing&rdquo; of your personal information via Settings &gt; Privacy &gt; Advertising Preferences within the game, or via our <Link href="/do-not-sell" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">Do Not Sell or Share</Link> page.</li>
                            <li><strong>To withdraw consent:</strong> Navigate to Settings &gt; Privacy &gt; Advertising Preferences within the game at any time. Withdrawal takes effect immediately.</li>
                            <li><strong>Unity Ads:</strong> Unity Ads displays a Data Privacy icon on ad units through which you can access your data and opt out of future collection.</li>
                            <li><strong>Liftoff opt-out:</strong>{" "}<a href="https://vungle.com/opt-out/" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600 break-all">https://vungle.com/opt-out/</a></li>
                            <li><strong>InMobi opt-out:</strong>{" "}<a href="https://www.inmobi.com/page/opt-out/" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600 break-all">https://www.inmobi.com/page/opt-out/</a></li>
                            <li><strong>AppLovin opt-out &amp; data management:</strong> You may opt out of interest-based advertising by AppLovin, or access and delete the data AppLovin has collected from your device, by downloading the <strong>AppLovin Privacy Management Application</strong>:{" "}<a href="https://apps.apple.com/app/applovin-privacy-management/id1622498498" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600 break-all">iOS</a>{" | "}<a href="https://play.google.com/store/apps/details?id=com.applovin.gdpr" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600 break-all">Android</a>. You may also visit:{" "}<a href="https://applovin.com/opt-out" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600 break-all">https://applovin.com/opt-out</a></li>
                            <li><strong>iOS:</strong> Settings &gt; Privacy &amp; Security &gt; Tracking — you can prevent all apps from requesting your advertising identifier.</li>
                            <li><strong>Android 12+:</strong> Settings &gt; Google &gt; Ads &gt; Delete Advertising ID — you can permanently delete your advertising ID.</li>
                        </ul>

                        <H3>5.7 Our Ads in Other Apps</H3>
                        <p>
                            We advertise our games in other apps using advertising networks. Your advertising ID may
                            be used to target audiences likely to enjoy our games, to create lookalike audiences (where
                            an ad network finds users similar to our existing players), and to conduct re-engagement
                            campaigns for users who have not played for a period of time.
                        </p>
                        <p className="mt-3">
                            When you install a game after seeing one of our ads, the install is attributed to the
                            relevant campaign using your advertising ID. Attribution data (device ID hash, campaign
                            identifier, network source) is received from advertising networks and used solely for
                            campaign measurement and fraud detection.
                        </p>

                        <H3>5.7B Cross-Promotion of Our Portfolio</H3>
                        <p>
                            We may display advertisements promoting our other games within our apps
                            (&ldquo;cross-promotion&rdquo;). These ads function differently from third-party advertising:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mt-3">
                            <li>Cross-promotional ads are served directly by us, not via external ad networks.</li>
                            <li>We may use aggregated gameplay data from your current session (e.g., &ldquo;Players who reached Level 10 also enjoy [Other Game]&rdquo;) to suggest relevant titles from our portfolio.</li>
                            <li>Cross-promotion does not use cross-app tracking identifiers. We do not link your identity or gameplay data across different games in our portfolio.</li>
                            <li>Cross-promotional ads do not require separate consent as they are part of our legitimate business operations (GDPR Art. 6(1)(f)) and do not involve third-party data sharing.</li>
                        </ul>
                        <p className="mt-3">
                            You cannot opt out of cross-promotional ads, as they are integral to how we operate
                            free-to-play games, but they are non-intrusive and do not collect additional data beyond
                            what is already collected for the current game session.
                        </p>

                        <H3>5.8 Analytics (Unity Analytics)</H3>
                        <p>
                            We use Unity Analytics (a product of Unity Technologies Inc.) to collect gameplay analytics
                            and operational metrics. This SDK collects device session data, event data we define (e.g.
                            level complete, session start, tutorial steps), device type and OS version, app version, and
                            a device-bound identifier (not the advertising ID) to identify unique devices.
                        </p>
                        <p className="mt-4">
                            <strong>Purpose:</strong> Unity Analytics is used to understand how players interact with
                            our games, measure user engagement metrics (daily active users, session length, retention
                            rates D1/D7/D30), identify gameplay issues, and inform future game design decisions.{" "}
                            <strong>Legal basis:</strong> Legitimate interests (Art. 6(1)(f) GDPR).
                        </p>
                        <p className="mt-4">
                            Analytics data is aggregated and used at the cohort level for business reporting. We do not
                            use analytics data to build individual user profiles for advertising. Individual-level event
                            data is retained by Unity for a defined period per Unity&rsquo;s own data retention policy.
                            Unity Analytics is configured with the same consent signals as Unity Ads — users who opt
                            out of data collection will have analytics disabled or anonymised to the extent permitted by
                            the SDK.
                        </p>
                        <p className="mt-4">
                            Privacy policy:{" "}
                            <a href="https://unity.com/legal/developer-privacy-policy" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600 break-all">https://unity.com/legal/developer-privacy-policy</a>
                        </p>

                        <H3>5.9 Crash Reporting &amp; Performance Monitoring</H3>
                        <p>
                            As of the date of this policy, we do <strong>not</strong> use Firebase Crashlytics,
                            Google Firebase Analytics, or any standalone crash-reporting SDK. Crash and performance
                            data is collected only through Unity&rsquo;s built-in crash-reporting facilities as
                            part of the Unity SDK already disclosed above.
                        </p>
                        <p className="mt-4">
                            If we integrate a dedicated crash-reporting or performance-monitoring service
                            (e.g. Firebase Crashlytics, Sentry, Bugsnag) in the future, we will update this
                            policy to disclose: (a) the provider and its role, (b) data collected, (c) retention
                            period, (d) applicable legal basis, and (e) any international transfers involved.
                            Material additions of this kind will be communicated in accordance with Section 17
                            (Changes to This Policy).
                        </p>
                    </section>


                    {/* ══════════════ 6. HOW WE SHARE DATA (G) ══════════════ */}

                    <section id="sharing" className="mt-14">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">6. How We Share Your Data</h2>

                        <H3>6.1 Service Providers (Data Processors) &amp; Sub-Processor Register</H3>
                        <p>
                            Service providers act as data processors — they process data only on our instructions, are
                            contractually bound, and cannot use the data for their own purposes. We have signed Data
                            Processing Agreements with all service providers that require them, in compliance with
                            GDPR Article 28. The following is our sub-processor register (GDPR Art. 28(2)):
                        </p>

                        <div className="overflow-x-auto mt-4 mb-6">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="border-b-2 border-neutral-200 text-left">
                                        <th className="py-2 pr-4 text-neutral-500 font-semibold">Sub-Processor</th>
                                        <th className="py-2 pr-4 text-neutral-500 font-semibold">Function</th>
                                        <th className="py-2 pr-4 text-neutral-500 font-semibold">Location</th>
                                        <th className="py-2 text-neutral-500 font-semibold">Transfer Mechanism</th>
                                    </tr>
                                </thead>
                                <tbody className="align-top">
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-2 pr-4 font-medium text-neutral-900">Google Cloud Platform</td>
                                        <td className="py-2 pr-4">Cloud hosting &amp; infrastructure</td>
                                        <td className="py-2 pr-4">EU (europe-west)</td>
                                        <td className="py-2">Adequacy (intra-EEA)</td>
                                    </tr>
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-2 pr-4 font-medium text-neutral-900">Unity Analytics</td>
                                        <td className="py-2 pr-4">Gameplay analytics</td>
                                        <td className="py-2 pr-4">USA</td>
                                        <td className="py-2">SCCs + DPA</td>
                                    </tr>
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-2 pr-4 font-medium text-neutral-900">CAS.ai (CLEAR INVEST LTD)</td>
                                        <td className="py-2 pr-4">Ad mediation &amp; consent management</td>
                                        <td className="py-2 pr-4">Belize</td>
                                        <td className="py-2">SCCs + TIA + supplementary measures</td>
                                    </tr>
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-2 pr-4 font-medium text-neutral-900">Resend Inc.</td>
                                        <td className="py-2 pr-4">Transactional email (privacy requests)</td>
                                        <td className="py-2 pr-4">USA</td>
                                        <td className="py-2">DPF certified</td>
                                    </tr>
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-2 pr-4 font-medium text-neutral-900">Vercel Inc.</td>
                                        <td className="py-2 pr-4">Website hosting &amp; CDN</td>
                                        <td className="py-2 pr-4">USA / Edge</td>
                                        <td className="py-2">DPF certified + SCCs</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 pr-4 font-medium text-neutral-900">Cloudinary Ltd.</td>
                                        <td className="py-2 pr-4">Image CDN (website assets)</td>
                                        <td className="py-2 pr-4">USA / Israel</td>
                                        <td className="py-2">SCCs</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Cloud &amp; Hosting:</strong> Google Cloud Platform — <a href="https://cloud.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600 break-all">cloud.google.com/privacy</a>. Data is stored in the EU (europe-west) region.</li>
                            <li><strong>Analytics:</strong> Unity Analytics (Unity Technologies Inc.) — <a href="https://unity.com/legal/developer-privacy-policy" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600 break-all">unity.com/legal/developer-privacy-policy</a>. Receives device identifiers, gameplay events, and session data for product analytics. Uses a device-bound identifier (not the advertising ID).</li>
                            <li><strong>Ad Mediation:</strong> CAS.ai (CLEAR INVEST LTD) — <a href="https://cas.ai/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600 break-all">cas.ai/privacy-policy</a>. Manages real-time ad auctions and routes requests to downstream ad networks. Receives advertising IDs, IP address, device info, and ad interaction data.</li>
                            <li><strong>Consent Management:</strong> CAS.ai CMP — manages user consent via the IAB TCF 2.2 framework and passes consent signals to ad networks.</li>
                        </ul>

                        <H3>6.2 Advertising Networks</H3>
                        <p>
                            Advertising networks receive: your advertising ID, IP-derived country/city, app bundle ID,
                            ad placement, and interaction events (impressions, clicks). They do <em>not</em> receive
                            your name, email address, or precise GPS location.
                        </p>
                        <p className="mt-3">
                            Most advertising networks are <strong>independent data controllers</strong> — each has its
                            own privacy policy and is responsible for its own data practices. We are not responsible
                            for their processing. <strong>Exception:</strong> InMobi acts as a <strong>joint
                                controller</strong> with us under GDPR — see Section 5.4 for details. For the full list
                            of all advertising partners and their privacy policy links, see Section 5.4 and our{" "}
                            <Link href="/advertising-partners" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">Advertising Partners</Link> page.
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
                            We do not knowingly serve targeted or interest-based advertising to children. Where a game
                            is or may be accessible to a mixed-age audience, we have configured our ad network settings
                            (Unity Ads, Liftoff/Vungle, InMobi, and CAS.ai) to disable behavioural targeting for users
                            below the applicable minimum age.
                        </p>
                        <p className="mt-4">
                            <strong>AppLovin SDK &mdash; Not Used for Children.</strong> In accordance with
                            AppLovin&rsquo;s Terms of Use and Publisher Policies, we do <strong>not</strong> initialise
                            or use the AppLovin SDK in any way, or otherwise use any aspect of AppLovin&rsquo;s
                            Services, in connection with any end user who qualifies as a &ldquo;child&rdquo; under
                            applicable laws. When our age-gate (or platform-provided age range APIs) identifies a
                            user as under the applicable minimum age, the AppLovin SDK is not loaded for that user
                            session, no data is transmitted to AppLovin, and no AppLovin-served advertisements are
                            displayed. This prohibition applies regardless of whether the game is classified as
                            &ldquo;child-directed&rdquo; or &ldquo;mixed audience.&rdquo;
                        </p>
                        <p className="mt-4">
                            <strong>Mixed Audience Games.</strong> For games that may appeal to a broad audience
                            including children (&ldquo;Mixed Audience&rdquo;), we implement an age-gate at first launch.
                            Users identifying as under the age of digital consent (13 in most jurisdictions, 16 in
                            certain EU member states) are automatically served a &ldquo;Non-Personalised&rdquo;
                            experience with the following restrictions: (a) restricted data collection (only essential
                            device and gameplay data required for service delivery); (b) disabled social features
                            (if applicable); (c) contextual-only advertising (no behavioural profiling or
                            cross-app tracking); and (d) <strong>complete exclusion of the AppLovin SDK</strong> from
                            the ad mediation stack for the child-identified session.
                            This treatment applies until the user reaches the applicable minimum
                            age or until a parent or guardian provides verifiable consent where permitted by law.
                        </p>
                        <p className="mt-4">
                            <strong>App Store Age Range APIs.</strong> Where available, we integrate platform-provided
                            age range APIs (such as those introduced in response to U.S. state laws in Texas, Utah,
                            and Louisiana, and similar features offered by Apple and Google) to receive
                            platform-verified age-range information for end users. This information supplements our
                            in-app age-gate and is used to determine whether an end user qualifies as a
                            &ldquo;child&rdquo; under applicable laws and therefore whether the AppLovin SDK and other
                            age-restricted ad network SDKs should be initialised.
                        </p>
                        <p className="mt-4">
                            We configure game-level settings in Unity, Liftoff, InMobi, and CAS.ai dashboards
                            regarding their COPPA status. For child-directed apps: Unity will not collect cross-app
                            advertising identifiers; Liftoff is instructed not to collect cross-app advertising
                            identifiers for targeting; InMobi will not conduct behavioural advertising; CAS.ai
                            will not pass advertising identifiers to downstream networks for targeting; and the
                            AppLovin SDK will not be initialised at all.
                        </p>
                        <p className="mt-4">
                            <strong>UK Age Appropriate Design Code (AADC).</strong> As a UK-registered company, we
                            are aware of the Age Appropriate Design Code (also known as the Children&rsquo;s Code),
                            which has been enforceable since September 2021. We have implemented age-appropriate
                            defaults: behavioural profiling and targeted advertising are disabled by default for
                            users who may be children, geolocation data is not collected, and data collection is
                            minimised to what is strictly necessary for the service. Our privacy settings are
                            designed to be high-privacy by default.
                        </p>
                        <p className="mt-4">
                            If a parent or guardian believes their child has provided personal information to us or
                            to one of our advertising partners through our games, please contact us at{" "}
                            <a href={`mailto:${CO.privacy}`} className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">{CO.privacy}</a>.
                            We will take steps to delete such information and notify the relevant advertising partners
                            of the requirement to do so.
                        </p>
                        <p className="mt-4">
                            Upon discovery that we have collected data from a child without verifiable parental
                            consent, we will promptly delete such data from our servers.
                        </p>
                        <p className="mt-4">
                            This policy complies with the Children&rsquo;s Online Privacy Protection Act (COPPA,
                            15 U.S.C. &sect; 6501 et seq.) for distribution on United States app stores.
                        </p>
                        <p className="mt-4">
                            For a plain-language explanation of our children&rsquo;s data practices written specifically
                            for parents and guardians, please see our{" "}
                            <Link href="/privacy-for-parents" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">Privacy for Parents</Link>{" "}
                            page.
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
                            <li>Request correction of inaccurate personal information (CPRA &sect; 1798.106).</li>
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
                            <li>Submit a structured request via our <Link href="/privacy/request" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">Privacy Request</Link> page.</li>
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
                            Key international data recipients include: Unity Technologies Inc. (San Francisco, USA),
                            CAS.ai / CLEAR INVEST LTD (Belize), Liftoff Mobile Inc. / LMI Inc. (Palo Alto, USA),
                            InMobi Pte. Ltd. (Singapore) and InMobi Inc. (USA), AppLovin Corporation (Palo Alto, USA),
                            and Google LLC (USA). Data transfers from EEA/UK users to Unity, Liftoff, and InMobi are
                            governed by Standard Contractual Clauses as per each company&rsquo;s Data Processing
                            Addendum. InMobi is headquartered in Singapore with operations in the USA; transfers are
                            covered by appropriate safeguards per InMobi&rsquo;s own privacy documentation.
                        </p>
                        <p className="mt-4">
                            <strong>AppLovin Corporation</strong> is certified under the EU-US Data Privacy
                            Framework (EU-US DPF), the UK Extension to the EU-US DPF, and the Swiss-US Data Privacy
                            Framework (Swiss-US DPF). For transfers of personal data from the EEA, UK, and
                            Switzerland to AppLovin, we rely on AppLovin&rsquo;s DPF certification as the primary
                            transfer mechanism. AppLovin is subject to the regulatory enforcement powers of the
                            U.S. Federal Trade Commission. AppLovin has appointed Prighter Group as its privacy
                            representative in the EU and UK. For further details, see AppLovin&rsquo;s Privacy Policy
                            at{" "}
                            <a href="https://legal.applovin.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600 break-all">legal.applovin.com/privacy</a>.
                        </p>
                        <p className="mt-4">
                            Where data is transferred to countries that do not benefit from an adequacy decision
                            (including Belize, where CAS.ai&rsquo;s operator CLEAR INVEST LTD is incorporated), we
                            conduct Transfer Impact Assessments (TIAs) and apply supplementary technical measures.
                            Belize does not currently have comprehensive data protection legislation. For transfers
                            to CAS.ai/CLEAR INVEST LTD, the following supplementary measures are in place:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mt-3">
                            <li>All data transmitted to CAS.ai is encrypted in transit (TLS 1.2+) and at rest.</li>
                            <li>Advertising identifiers are pseudonymised before transmission where technically feasible.</li>
                            <li>CAS.ai&rsquo;s processing is limited to real-time ad mediation; it does not retain personal data beyond the auction cycle except for fraud detection logs.</li>
                            <li>CAS.ai is bound by contractual data protection obligations equivalent to GDPR Article 28 requirements.</li>
                            <li>We regularly review CAS.ai&rsquo;s data handling practices and reserve the right to terminate the relationship if adequate protections are not maintained.</li>
                        </ul>
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
                                        <td className="py-2">12 months from collection (Unity Analytics default retention)</td>
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
                            <li><strong>Breach response.</strong> We maintain a data breach response plan. Under GDPR, we will notify the ICO within 72 hours of becoming aware of a personal data breach likely to result in risk to individuals. Where a breach is likely to result in a <strong>high risk</strong> to your rights and freedoms (GDPR Art. 34), we will also notify affected users directly without undue delay, describing the nature of the breach, the likely consequences, and the measures taken or proposed to address it.</li>
                            <li><strong>Record of Processing Activities (ROPA).</strong> We maintain a Record of Processing Activities as required by GDPR Article 30, documenting all categories of processing, their purposes, legal bases, recipients, and retention periods.</li>
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

                        <H3>11.1 Data Breach Incident Response Timeline</H3>
                        <p>
                            In the event of a personal data breach, we follow a structured incident response process:
                        </p>
                        <div className="overflow-x-auto mt-4 mb-6">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="border-b-2 border-neutral-200 text-left">
                                        <th className="py-2 pr-4 text-neutral-500 font-semibold">Phase</th>
                                        <th className="py-2 pr-4 text-neutral-500 font-semibold">Timeline</th>
                                        <th className="py-2 text-neutral-500 font-semibold">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="align-top">
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-2 pr-4 font-medium text-neutral-900">Detection &amp; Assessment</td>
                                        <td className="py-2 pr-4">Within 24 hours</td>
                                        <td className="py-2">Identify scope, affected data categories, and number of individuals</td>
                                    </tr>
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-2 pr-4 font-medium text-neutral-900">Containment</td>
                                        <td className="py-2 pr-4">Within 48 hours</td>
                                        <td className="py-2">Stop data exfiltration, patch vulnerabilities, secure affected systems</td>
                                    </tr>
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-2 pr-4 font-medium text-neutral-900">ICO Notification</td>
                                        <td className="py-2 pr-4">Within 72 hours</td>
                                        <td className="py-2">Report to ICO if likely to result in risk (GDPR Art. 33)</td>
                                    </tr>
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-2 pr-4 font-medium text-neutral-900">User Notification</td>
                                        <td className="py-2 pr-4">Without undue delay</td>
                                        <td className="py-2">Notify affected users if high risk (GDPR Art. 34), via email or in-app notification</td>
                                    </tr>
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-2 pr-4 font-medium text-neutral-900">Remediation</td>
                                        <td className="py-2 pr-4">Ongoing</td>
                                        <td className="py-2">Implement technical and organisational measures to prevent recurrence</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 pr-4 font-medium text-neutral-900">Post-Incident Review</td>
                                        <td className="py-2 pr-4">Within 30 days</td>
                                        <td className="py-2">Conduct root cause analysis, document lessons learned, update security policies</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="mt-3">
                            Redacted incident reports (with personally identifiable information removed) are published
                            on our <Link href="/transparency" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">Transparency Report</Link> page
                            within 90 days of incident closure, where disclosure does not compromise ongoing security measures.
                        </p>

                        <H3>11.2 Third-Party Security Audits</H3>
                        <p>
                            We conduct annual independent third-party security assessments covering:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mt-3">
                            <li><strong>Infrastructure penetration testing:</strong> External security firms conduct penetration tests of our cloud infrastructure, APIs, and authentication systems to identify vulnerabilities.</li>
                            <li><strong>Mobile app binary analysis:</strong> Static and dynamic analysis of our game binaries to detect insecure data storage, code injection vulnerabilities, and improper cryptography implementation.</li>
                            <li><strong>Data processing agreement compliance:</strong> Review of our contracts with sub-processors to ensure they meet GDPR Article 28 requirements and include appropriate Technical and Organisational Measures (TOMs).</li>
                            <li><strong>SDK security review:</strong> Assessment of third-party SDKs integrated in our games to verify their data collection practices match vendor disclosures and do not introduce security risks.</li>
                        </ul>
                        <p className="mt-4">
                            Audit summaries (excluding detailed vulnerability findings) are available upon request by
                            contacting <a href={`mailto:${CO.privacy}`} className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">{CO.privacy}</a>.
                            Full audit reports are provided to supervisory authorities upon request.
                        </p>
                        <p className="mt-4">
                            Our next scheduled audit is Q2 2026. Audit findings are tracked via an internal remediation
                            register, and high-severity issues are escalated to senior management for immediate action.
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
                            <li><em>Strictly necessary cookies</em> — required for the website to function; cannot be opted out (e.g. cookie consent preferences via Klaro).</li>
                            <li><em>Analytics cookies</em> — help us understand website usage patterns (Google Analytics 4, set only with consent).</li>
                        </ul>
                        <p className="mt-3">
                            We do not use advertising, marketing, or targeting cookies on our website. Advertising
                            identifiers and SDKs are used only within our mobile games, as described in Sections 2
                            and 5 of this policy.
                        </p>
                        <p className="mt-3">
                            A cookie consent banner is presented to EU/UK visitors on first visit, allowing you to
                            accept or reject non-essential cookies. Pre-ticked boxes are not valid consent.
                        </p>

                        <p className="mt-4">
                            <strong>In our mobile apps:</strong> SDKs, local storage, device fingerprinting, and
                            advertising identifiers function as the equivalent of cookies. These are disclosed in
                            Sections 2 and 5 of this policy. Analytics SDKs (Unity Analytics) and advertising
                            SDKs (CAS.ai mediation, Unity Ads, Liftoff, InMobi) collect data via these mechanisms.
                        </p>

                        <p className="mt-4">
                            <strong>How to opt-out of non-essential cookies:</strong> Adjust your browser settings,
                            use the cookie preference tool on our website, or change platform-level advertising
                            settings on your mobile device.
                        </p>

                        <p className="mt-4">
                            <strong>Do Not Track (DNT).</strong> Our systems do not currently respond to browser
                            &ldquo;Do Not Track&rdquo; (DNT) signals, as DNT lacks a common industry standard.
                            We support opt-out controls through our in-app Privacy Settings and request channels.
                            Where technically available on our website, we also attempt to treat the <strong>Global
                                Privacy Control</strong> (GPC) browser signal as an opt-out request — see Section 14.4
                            for details.
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
                        <div className="overflow-x-auto mt-4 mb-6">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="border-b-2 border-neutral-200 text-left">
                                        <th className="py-2 pr-4 text-neutral-500 font-semibold">Category of PI</th>
                                        <th className="py-2 pr-4 text-neutral-500 font-semibold">Examples</th>
                                        <th className="py-2 pr-4 text-neutral-500 font-semibold">Sources</th>
                                        <th className="py-2 pr-4 text-neutral-500 font-semibold">Business Purpose</th>
                                        <th className="py-2 text-neutral-500 font-semibold">Third Parties</th>
                                    </tr>
                                </thead>
                                <tbody className="align-top">
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-2 pr-4 font-medium text-neutral-900">Identifiers</td>
                                        <td className="py-2 pr-4">IDFA, GAID, IDFV, Android&nbsp;ID, IP-derived location</td>
                                        <td className="py-2 pr-4">Your device (automatic)</td>
                                        <td className="py-2 pr-4">Ad serving, attribution, fraud detection</td>
                                        <td className="py-2">CAS.ai, ad networks (see Sec.&nbsp;5.4)</td>
                                    </tr>
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-2 pr-4 font-medium text-neutral-900">Internet / Electronic Activity</td>
                                        <td className="py-2 pr-4">Gameplay data, session times, ad impressions/clicks</td>
                                        <td className="py-2 pr-4">Your device (automatic)</td>
                                        <td className="py-2 pr-4">Analytics, game improvement, ad measurement</td>
                                        <td className="py-2">Unity Analytics, CAS.ai</td>
                                    </tr>
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-2 pr-4 font-medium text-neutral-900">Geolocation</td>
                                        <td className="py-2 pr-4">Country / city (derived from IP &mdash; never precise GPS)</td>
                                        <td className="py-2 pr-4">Your device (automatic)</td>
                                        <td className="py-2 pr-4">Content localisation, fraud detection</td>
                                        <td className="py-2">CAS.ai, ad networks</td>
                                    </tr>
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-2 pr-4 font-medium text-neutral-900">Commercial Info</td>
                                        <td className="py-2 pr-4">IAP transaction IDs, products purchased</td>
                                        <td className="py-2 pr-4">App stores (Google Play, Apple)</td>
                                        <td className="py-2 pr-4">Purchase fulfilment, tax records</td>
                                        <td className="py-2">None (internal only)</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 pr-4 font-medium text-neutral-900">Inferences</td>
                                        <td className="py-2 pr-4">Gameplay preferences, engagement level</td>
                                        <td className="py-2 pr-4">Derived from above</td>
                                        <td className="py-2 pr-4">Product improvement</td>
                                        <td className="py-2">None (internal only)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="mt-3"><strong>Sources:</strong> Directly from you (support); automatically from your device; from advertising partners (attribution); from app stores (transactions).</p>
                        <p className="mt-3"><strong>Business purposes:</strong> As described in Section 3.</p>
                        <p className="mt-3">
                            <strong>Sale / Sharing.</strong> We do not sell personal information for direct monetary
                            consideration. However, sharing advertising identifiers with ad networks for cross-context
                            behavioural advertising may qualify as a &ldquo;sale&rdquo; or &ldquo;sharing&rdquo; under
                            the CCPA&rsquo;s broad definitions. You may opt out via our &ldquo;Do Not Sell or Share My
                            Personal Information&rdquo; toggle in Settings &gt; Privacy, or via our{" "}
                            <Link href="/do-not-sell" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">Do Not Sell or Share</Link> page.
                        </p>

                        <H3>14.4 Other US States</H3>
                        <p>
                            Virginia (VCDPA), Colorado (CPA), Connecticut (CTDPA), Utah (UCPA), Texas (TDPSA),
                            Oregon (OCPA), Montana (MCDPA), Iowa (ICDPA), Delaware (DPDPA), New Hampshire, New
                            Jersey, Nebraska, Tennessee, Indiana, Kentucky, Maryland, Minnesota, and other states
                            have enacted or are enacting comprehensive consumer privacy laws granting opt-out
                            rights for targeted advertising, the sale or sharing of personal information, and
                            profiling. We monitor evolving US state privacy legislation and update our compliance
                            practices accordingly. Our unified Settings &gt; Privacy mechanism is designed to
                            satisfy all currently applicable and future US state privacy requirements. Where
                            technically detected on our website, we treat the Global Privacy Control (GPC) browser
                            signal as an opt-out request under all applicable US state privacy laws. Because GPC
                            is browser-based, it may not apply to in-app mobile environments; for mobile gameplay,
                            please use the in-app privacy controls or contact us directly.
                        </p>
                        <p className="mt-3">
                            We correctly set &ldquo;Do Not Sell&rdquo; flag values and similar privacy flags via
                            the AppLovin SDK and other integrated advertising SDKs, as required by the US Multistate
                            Data Protection Laws. When you exercise your opt-out right, the signal is passed to
                            AppLovin and all CAS.ai downstream networks in real time.
                        </p>

                        <H3>14.5 Brazil (LGPD)</H3>
                        <p>
                            The Lei Geral de Prote&ccedil;&atilde;o de Dados (LGPD, Law No. 13.709/2018) applies to
                            processing of Brazilian residents&rsquo; data. We honour data subject rights equivalent to
                            those described in Section 8, including access, correction, deletion, portability, and
                            information about public and private entities with which data has been shared.
                        </p>
                        <p className="mt-3">
                            <strong>LGPD legal bases (Art. 7):</strong>
                        </p>
                        <ul className="list-disc pl-5 space-y-1 mt-2">
                            <li><strong>Consent (Art. 7, I):</strong> Personalised advertising.</li>
                            <li><strong>Contract performance (Art. 7, V):</strong> Service delivery, in-app purchase fulfilment.</li>
                            <li><strong>Legitimate interests (Art. 7, IX):</strong> Analytics, contextual advertising, fraud detection.</li>
                            <li><strong>Legal obligation (Art. 7, II):</strong> Tax records, law enforcement requests.</li>
                        </ul>
                        <p className="mt-3">
                            Brazilian users may contact the Autoridade Nacional de Prote&ccedil;&atilde;o de Dados
                            (ANPD) at{" "}
                            <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">gov.br/anpd</a>{" "}
                            to exercise their rights or lodge a complaint.
                        </p>

                        <H3>14.6 Other Jurisdictions</H3>
                        <p>
                            If you are located in Canada (PIPEDA), Australia (Privacy Act 1988), Japan (APPI),
                            South Korea (PIPA), or India (DPDPA 2023), we comply with the applicable local
                            requirements to the extent they apply to our processing activities. If you have questions
                            about how your local law applies, please contact{" "}
                            <a href={`mailto:${CO.privacy}`} className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">{CO.privacy}</a>.
                        </p>

                        <H3>14.6B India (DPDPA 2023)</H3>
                        <p>
                            For users in India, we comply with the Digital Personal Data Protection Act 2023 (DPDPA)
                            when its provisions come into force. Our DPDPA compliance commitments include:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mt-3">
                            <li><strong>Consent notices in local languages:</strong> Privacy disclosures will be made available in Hindi and English (and other regional languages as our user base grows).</li>
                            <li><strong>Verifiable consent:</strong> Consent for data processing will be obtained through clear, affirmative action (e.g., in-app consent dialogues) that can be withdrawn at any time.</li>
                            <li><strong>Data Principal rights:</strong> Indian users may exercise rights to access, correction, erasure, and grievance redressal by contacting <a href={`mailto:${CO.privacy}`} className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">{CO.privacy}</a>.</li>
                            <li><strong>Data Protection Officer (if required):</strong> If our processing volumes exceed statutory thresholds requiring appointment of a Data Protection Officer for India, we will designate one and publish contact details here.</li>
                            <li><strong>Grievance Officer:</strong> We will appoint a Grievance Officer reachable at <a href={`mailto:${CO.privacy}`} className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">{CO.privacy}</a> (subject line: &ldquo;India DPDPA Grievance&rdquo;) to address complaints within the timeline prescribed by DPDPA rules.</li>
                            <li><strong>Children&rsquo;s data:</strong> We do not knowingly process data of children under 18 in India without verifiable parental consent, in accordance with DPDPA Section 9.</li>
                        </ul>
                        <p className="mt-4">
                            As DPDPA rules and regulations are finalised by the Data Protection Board of India, we will
                            update this section with additional compliance measures, including registration requirements
                            (if applicable) and cross-border data transfer mechanisms.
                        </p>

                        <H3>14.6C China &amp; South Korea (if applicable)</H3>
                        <p>
                            We do not currently offer our games in mainland China or South Korea. If we expand to these
                            markets in the future, we will implement jurisdiction-specific compliance measures:
                        </p>
                        <p className="mt-4">
                            <strong>China (Personal Information Protection Law — PIPL):</strong>
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mt-3">
                            <li>Obtain separate explicit consent for cross-border data transfers outside China (PIPL Art. 39)</li>
                            <li>Store Chinese user data within China via local cloud providers (subject to data localization requirements)</li>
                            <li>Conduct security assessments before cross-border transfers for data processors handling personal information of over 1 million individuals (PIPL Art. 40)</li>
                            <li>Appoint a representative within China to handle personal information protection matters (PIPL Art. 53)</li>
                        </ul>
                        <p className="mt-4">
                            <strong>South Korea (Personal Information Protection Act — PIPA):</strong>
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mt-3">
                            <li>Designate a Chief Privacy Officer (CPO) reachable at a published contact point</li>
                            <li>Real-name verification is not required for our games as we do not collect personal identification information (resident registration numbers, passport numbers)</li>
                            <li>Provide privacy notices in Korean and obtain explicit consent for processing sensitive data or cross-border transfers</li>
                            <li>Implement mandatory security measures under PIPA enforcement decree (encryption, access logging, annual security audits)</li>
                        </ul>
                        <p className="mt-4">
                            Users in regions not explicitly covered above may contact us at{" "}
                            <a href={`mailto:${CO.privacy}`} className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">{CO.privacy}</a>{" "}
                            for jurisdiction-specific information.
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

                        <p className="mt-4">
                            Please contact{" "}
                            <a href={`mailto:${CO.privacy}`} className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">{CO.privacy}</a>{" "}
                            with any questions regarding this Privacy Policy. You may also submit a structured
                            request via our{" "}
                            <Link href="/privacy/request" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">Privacy Request</Link>{" "}
                            page.
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
                            updated policy. <strong>However, where our processing relies on your consent (for example,
                                personalised advertising), we will seek your renewed, specific consent separately and will
                                not treat continued use of the Services as consent to materially different processing.</strong>
                        </p>
                        <p className="mt-4">
                            We review this policy at least annually and update it to reflect changes in law, data
                            practices, or third-party relationships. Previous versions are available on request by
                            contacting{" "}
                            <a href={`mailto:${CO.privacy}`} className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">{CO.privacy}</a>.
                        </p>

                        <H3>17.1 Version History</H3>
                        <div className="overflow-x-auto mt-3">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="border-b-2 border-neutral-200 text-left">
                                        <th className="py-2 pr-4 text-neutral-500 font-semibold">Version</th>
                                        <th className="py-2 pr-4 text-neutral-500 font-semibold">Date</th>
                                        <th className="py-2 text-neutral-500 font-semibold">Changes</th>
                                    </tr>
                                </thead>
                                <tbody className="align-top">
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-2 pr-4">2.2</td>
                                        <td className="py-2 pr-4">17 Feb 2026</td>
                                        <td className="py-2">Aligned &ldquo;sale&rdquo; language with CCPA definitions, added CCPA PI disclosure table, added CPRA right to correct, expanded LGPD legal basis mapping, expanded Google AdMob disclosure, added LIA summary, removed placeholder EU representative section, consolidated version history, added glossary to TOC.</td>
                                    </tr>
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-2 pr-4">2.0&ndash;2.1</td>
                                        <td className="py-2 pr-4">17 Feb 2026</td>
                                        <td className="py-2">Comprehensive rewrite covering CAS.ai mediation, expanded ad partner disclosures, jurisdiction-specific sections, COPPA/AADC compliance, DPIA disclosure, automated decision-making statement, CAS.ai/Belize transfer safeguards, InMobi Art.&nbsp;26 arrangement, Unity Analytics retention, and updated US opt-out disclosures.</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 pr-4">1.0</td>
                                        <td className="py-2 pr-4">31 Jan 2026</td>
                                        <td className="py-2">Initial privacy policy.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>


                    {/* ══════════════ 18. GENERAL PROVISIONS (S) ══════════════ */}

                    <section id="misc" className="mt-14">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">18. General Provisions</h2>

                        <ul className="list-disc pl-5 space-y-3">
                            <li><strong>Third-Party Links.</strong> Our games and website may contain links to third-party websites or services. We are not responsible for the privacy practices of those third parties. We encourage you to review their privacy policies before providing any personal information.</li>
                            <li><strong>App Store Terms.</strong> This policy supplements the privacy policies and terms of the Apple App Store and Google Play Store. Please also review those policies, as they govern how the platforms handle data related to your use of their services.</li>
                            <li><strong>App Store Privacy Labels.</strong> We provide simplified data-collection disclosures via Apple&rsquo;s App Privacy Nutrition Labels and Google Play&rsquo;s Data Safety Section, as required by each platform. In the event of any discrepancy between those simplified store-level summaries and this Privacy Policy, this Privacy Policy is the comprehensive, authoritative statement of our data practices.</li>
                            <li><strong>No Sale of Personal Data for Monetary Consideration.</strong> We do not sell your personal data for direct monetary consideration. Note that under the CCPA&rsquo;s broader definitions, sharing advertising identifiers with ad networks for cross-context behavioural advertising may qualify as a &ldquo;sale&rdquo; or &ldquo;sharing&rdquo; &mdash; see Section 14.3 and our <Link href="/do-not-sell" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">Do Not Sell or Share</Link> page.</li>
                            <li><strong>Aggregated &amp; Anonymised Data.</strong> We may use aggregated and anonymised data — which cannot identify you individually — for research, benchmarking, industry reports, and business analysis. Such data is not subject to this policy.</li>
                            <li><strong>Severability.</strong> If any provision of this Privacy Policy is found to be unenforceable, the remaining provisions will continue in full force and effect.</li>
                            <li><strong>Governing Law.</strong> This policy is governed by the laws of England and Wales.</li>
                            <li><strong>Language.</strong> In the event of any conflict between the English version of this policy and any translated version, the English version shall prevail.</li>
                            <li><strong>Accessibility.</strong> This privacy policy is available in an accessible format on request (e.g. large print, screen-reader compatible). We aim to conform to WCAG 2.1 Level AA for the web-hosted version.</li>
                        </ul>
                    </section>


                    {/* Section 19 merged into Section 15 (Contact & Data Protection) */}


                    {/* ══════════════ GAME-SPECIFIC APPENDICES ══════════════ */}

                    <section id="game-appendices" className="mt-14">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">Game-Specific Privacy Appendices</h2>
                        <p>
                            Each of our published games may have minor differences in the SDKs integrated,
                            ad formats used, or age-gate implementation. Specific features for individual games
                            are listed on the store listing page for that game (Google Play Data Safety Section
                            and Apple App Privacy Details). <strong>That information takes precedence for
                                game-specific features.</strong> This approach ensures that each game&rsquo;s privacy
                            disclosures are accurate, up-to-date, and platform-compliant at the time of download.
                        </p>

                        <p className="mt-4">
                            The privacy-relevant configuration common to all our games is described throughout
                            this policy. Game-specific variations (for example, whether a particular title integrates
                            an additional analytics SDK, offers in-app purchases, or has a specific age rating)
                            are disclosed on the relevant app store listing page before installation.
                        </p>

                        <p className="mt-4 text-sm text-neutral-500">
                            If a game enables child-directed treatment (COPPA tag / Google Families), personalised
                            advertising is disabled for that title and the age-gate flow described in Section 7
                            is applied. For games that may appeal to a mixed audience, refer to Section 7 for our
                            &ldquo;Mixed Audience&rdquo; safeguards.
                        </p>
                    </section>


                    {/* ══════════════ DEFINITIONS GLOSSARY ══════════════ */}

                    <section id="glossary" className="mt-14">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">19. Glossary</h2>
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
