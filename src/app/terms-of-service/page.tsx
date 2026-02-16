import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { LegalH3 as H3 } from "@/components/legal";
import Link from "next/link";
import { COMPANY as CO } from "@/lib/company";

export const metadata: Metadata = {
    title: "Terms of Service — AVAJORA GAMES LTD",
    description:
        "Terms of Service for AVAJORA GAMES LTD mobile games, website, and related services.",
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms of Service",
    description:
        "Terms of Service for AVAJORA GAMES LTD mobile games, website, and related services.",
    publisher: {
        "@type": "Organization",
        name: "AVAJORA GAMES LTD",
        url: "https://avajora.com",
    },
    dateModified: "2026-02-17",
    inLanguage: "en",
};

/* ── constants ── */
const V = "1.2";
const UPDATED = "17 February 2026";
const EFFECTIVE = "17 February 2026";

const TOC = [
    { id: "introduction", label: "Introduction" },
    { id: "definitions", label: "Definitions" },
    { id: "company-info", label: "Company Information" },
    { id: "eligibility", label: "Eligibility & Age Requirements" },
    { id: "accounts", label: "Account Registration & Security" },
    { id: "licence", label: "Licence to Use Our Services" },
    { id: "restrictions", label: "Restrictions on Use" },
    { id: "user-conduct", label: "User Conduct & Community Standards" },
    { id: "iap", label: "In-App Purchases & Virtual Items" },
    { id: "subscriptions", label: "Subscriptions & Auto-Renewal" },
    { id: "refunds", label: "Refund Policy & Cooling-Off Rights" },
    { id: "advertising", label: "Advertising & Third-Party SDKs" },
    { id: "data-privacy", label: "Data Protection & Privacy" },
    { id: "cookies", label: "Cookies & Tracking Technologies" },
    { id: "ip", label: "Intellectual Property" },
    { id: "ugc", label: "User-Generated Content" },
    { id: "third-party", label: "Third-Party Services & Links" },
    { id: "updates", label: "Updates & Modifications" },
    { id: "disclaimers", label: "Disclaimers & Warranty Exclusions" },
    { id: "liability", label: "Limitation of Liability" },
    { id: "indemnification", label: "Indemnification" },
    { id: "termination", label: "Termination" },
    { id: "dispute", label: "Dispute Resolution & Governing Law" },
    { id: "force-majeure", label: "Force Majeure" },
    { id: "class-waiver", label: "Class Action Waiver" },
    { id: "open-source", label: "Open-Source Attribution" },
    { id: "accessibility", label: "Accessibility" },
    { id: "general", label: "General Provisions" },
    { id: "contact", label: "How to Contact Us" },
];

/* H3 imported from @/components/legal */

export default function TermsOfServicePage() {
    return (
        <>
            <Navbar />
            {/* JSON-LD structured data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <main className="min-h-screen bg-white pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 px-4">
                <article className="mx-auto max-w-3xl text-[15px] leading-relaxed text-neutral-800">
                    {/* Header */}
                    <header className="mb-10">
                        <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900">
                            Terms of Service
                        </h1>
                        <p className="mt-2 text-sm text-neutral-500">
                            Version {V} &middot; Last updated: {UPDATED} &middot; Effective: {EFFECTIVE}
                        </p>
                    </header>

                    {/* TL;DR */}
                    <section className="mb-10 border-l-4 border-neutral-300 pl-4">
                        <p className="text-sm font-semibold text-neutral-900 mb-1">
                            TL;DR (not legally binding)
                        </p>
                        <p className="text-sm text-neutral-600">
                            You can use our games for personal entertainment. We show ads (via CAS.ai
                            mediation, routing to networks such as Unity Ads, AppLovin, Google AdMob, and
                            others) and offer optional in-app purchases — you can buy virtual items but
                            they have no real-world value. We do not sell your personal data.
                            You may cancel or request refunds per your app store&apos;s policies and applicable law
                            (including UK cooling-off rights). We are a UK company and English law applies.
                            Read the full terms below for the legally binding details.
                        </p>
                    </section>

                    {/* Table of Contents */}
                    <nav className="mb-10">
                        <h2 className="text-lg font-semibold text-neutral-900 mb-3">
                            Table of Contents
                        </h2>
                        <ol className="list-decimal list-inside space-y-1 text-sm">
                            {TOC.map((item, i) => (
                                <li key={item.id}>
                                    <a
                                        href={`#${item.id}`}
                                        className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ol>
                    </nav>

                    {/* ────────────────────────────────────────── */}
                    {/* 1. Introduction */}
                    <section id="introduction" className="mb-8">
                        <h2 className="text-lg font-semibold text-neutral-900 mb-3">
                            1. Introduction
                        </h2>
                        <p>
                            Welcome to {CO.name}, trading as {CO.trade} (&ldquo;we,&rdquo; &ldquo;us,&rdquo;
                            or &ldquo;our&rdquo;). These Terms of Service (&ldquo;Terms&rdquo;) form a legally
                            binding agreement between you (&ldquo;you&rdquo; or &ldquo;user&rdquo;) and {CO.name}{" "}
                            governing your access to and use of our mobile games, applications, websites
                            (including{" "}
                            <a
                                href={`https://${CO.web}`}
                                className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {CO.web}
                            </a>
                            ), and all related services (collectively, the &ldquo;Services&rdquo;).
                        </p>
                        <p className="mt-3">
                            By downloading, installing, accessing, or using any of our Services, you
                            confirm that you have read, understood, and agree to be bound by these Terms
                            and our{" "}
                            <Link href="/privacy-policy" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">
                                Privacy Policy
                            </Link>
                            . If you do not agree, you must not use our Services.
                        </p>
                        <p className="mt-3">
                            We may update these Terms from time to time. When we make material changes, we
                            will update the &ldquo;Last updated&rdquo; date above and, where required by law,
                            provide notice through the Services or by other means. Your continued use of the
                            Services after changes take effect constitutes acceptance of the revised Terms.
                        </p>
                    </section>

                    {/* 2. Definitions */}
                    <section id="definitions" className="mb-8">
                        <h2 className="text-lg font-semibold text-neutral-900 mb-3">
                            2. Definitions
                        </h2>
                        <ul className="space-y-2">
                            <li>
                                <span className="font-semibold">&ldquo;Content&rdquo;</span> means all text,
                                graphics, images, music, audio, video, software, code, data, and other materials
                                available through the Services.
                            </li>
                            <li>
                                <span className="font-semibold">&ldquo;In-App Purchase&rdquo; (IAP)</span>{" "}
                                means any purchase of Virtual Items or premium features made within the Services
                                through the Apple App Store, Google Play Store, or other authorised platform.
                            </li>
                            <li>
                                <span className="font-semibold">&ldquo;Services&rdquo;</span> means all mobile
                                games, applications, websites, and related services published or operated by{" "}
                                {CO.name}.
                            </li>
                            <li>
                                <span className="font-semibold">&ldquo;User-Generated Content&rdquo; (UGC)</span>{" "}
                                means any content created, uploaded, or shared by users through the Services,
                                including but not limited to messages, usernames, profile images, reviews, and
                                gameplay recordings.
                            </li>
                            <li>
                                <span className="font-semibold">&ldquo;Virtual Items&rdquo;</span> means
                                virtual currencies, coins, tokens, power-ups, skins, characters, and other
                                digital goods available within the Services.
                            </li>
                        </ul>
                    </section>

                    {/* 3. Company Information */}
                    <section id="company-info" className="mb-8">
                        <h2 className="text-lg font-semibold text-neutral-900 mb-3">
                            3. Company Information
                        </h2>
                        <table className="w-full text-sm border-collapse">
                            <tbody>
                                <tr className="border-b border-neutral-200">
                                    <td className="py-2 pr-4 font-medium text-neutral-900 whitespace-nowrap">
                                        Legal name
                                    </td>
                                    <td className="py-2">{CO.name}</td>
                                </tr>
                                <tr className="border-b border-neutral-200">
                                    <td className="py-2 pr-4 font-medium text-neutral-900 whitespace-nowrap">
                                        Trading name
                                    </td>
                                    <td className="py-2">{CO.trade}</td>
                                </tr>
                                <tr className="border-b border-neutral-200">
                                    <td className="py-2 pr-4 font-medium text-neutral-900 whitespace-nowrap">
                                        Company type
                                    </td>
                                    <td className="py-2">{CO.type}</td>
                                </tr>
                                <tr className="border-b border-neutral-200">
                                    <td className="py-2 pr-4 font-medium text-neutral-900 whitespace-nowrap">
                                        Registration no.
                                    </td>
                                    <td className="py-2">{CO.reg}</td>
                                </tr>
                                <tr className="border-b border-neutral-200">
                                    <td className="py-2 pr-4 font-medium text-neutral-900 whitespace-nowrap">
                                        D-U-N-S
                                    </td>
                                    <td className="py-2">{CO.duns}</td>
                                </tr>
                                <tr className="border-b border-neutral-200">
                                    <td className="py-2 pr-4 font-medium text-neutral-900 whitespace-nowrap">
                                        Registered address
                                    </td>
                                    <td className="py-2">{CO.addr}</td>
                                </tr>
                                <tr className="border-b border-neutral-200">
                                    <td className="py-2 pr-4 font-medium text-neutral-900 whitespace-nowrap">
                                        Jurisdiction
                                    </td>
                                    <td className="py-2">{CO.country}</td>
                                </tr>
                                <tr>
                                    <td className="py-2 pr-4 font-medium text-neutral-900 whitespace-nowrap">
                                        Website
                                    </td>
                                    <td className="py-2">
                                        <a
                                            href={`https://${CO.web}`}
                                            className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
                                        >
                                            {CO.web}
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </section>

                    {/* 4. Eligibility & Age Requirements */}
                    <section id="eligibility" className="mb-8">
                        <h2 className="text-lg font-semibold text-neutral-900 mb-3">
                            4. Eligibility &amp; Age Requirements
                        </h2>
                        <p>
                            You must meet the minimum age requirement for your jurisdiction to use our
                            Services:
                        </p>
                        <ul className="mt-3 space-y-1 list-disc list-inside ml-4">
                            <li>
                                <strong>General:</strong> 13 years of age (or the minimum age required by
                                applicable law in your jurisdiction).
                            </li>
                            <li>
                                <strong>EEA/UK default (GDPR):</strong> 16 years for consent-based data
                                processing, unless a lower threshold applies.
                            </li>
                            <li>
                                <strong>Germany:</strong> 16 years.
                            </li>
                            <li>
                                <strong>France:</strong> 15 years.
                            </li>
                            <li>
                                <strong>Italy, Spain:</strong> 14 years.
                            </li>
                            <li>
                                <strong>United States (COPPA):</strong> 13 years.
                            </li>
                        </ul>
                        <p className="mt-3">
                            If you are between the minimum age and the age of legal majority in your
                            jurisdiction, you may only use the Services with the consent and supervision of a
                            parent or legal guardian who agrees to be bound by these Terms on your behalf.
                        </p>
                        <p className="mt-3">
                            By using our Services, you represent and warrant that you meet the applicable age
                            requirement, have the legal capacity to enter into these Terms, will comply with all
                            applicable laws, and have not been previously suspended or removed from the
                            Services.
                        </p>
                    </section>

                    {/* 5. Account Registration & Security */}
                    <section id="accounts" className="mb-8">
                        <h2 className="text-lg font-semibold text-neutral-900 mb-3">
                            5. Account Registration &amp; Security
                        </h2>

                        <H3>5.1 Account creation</H3>
                        <p>
                            Certain features of our Services may require you to create an account. When
                            doing so, you must provide accurate, complete, and current information. You are
                            responsible for maintaining the confidentiality of your account credentials and
                            for all activities that occur under your account.
                        </p>

                        <H3>5.2 Account security</H3>
                        <p>You agree to:</p>
                        <ul className="mt-2 space-y-1 list-disc list-inside ml-4">
                            <li>Choose a strong password and keep it confidential.</li>
                            <li>
                                Notify us immediately at{" "}
                                <a
                                    href={`mailto:${CO.support}`}
                                    className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
                                >
                                    {CO.support}
                                </a>{" "}
                                of any unauthorised use of your account.
                            </li>
                            <li>Not share, sell, transfer, or assign your account to another person.</li>
                            <li>Not create multiple accounts, or use another person&apos;s account.</li>
                        </ul>

                        <H3>5.3 Account deletion</H3>
                        <p>
                            You may request deletion of your account at any time by contacting us at{" "}
                            <a
                                href={`mailto:${CO.support}`}
                                className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
                            >
                                {CO.support}
                            </a>
                            . Upon deletion, you will lose access to all associated data, Virtual Items,
                            in-game progress, and purchase history. Account deletion is irreversible.
                        </p>
                    </section>

                    {/* 6. Licence to Use Our Services */}
                    <section id="licence" className="mb-8">
                        <h2 className="text-lg font-semibold text-neutral-900 mb-3">
                            6. Licence to Use Our Services
                        </h2>
                        <p>
                            Subject to your compliance with these Terms, we grant you a limited,
                            non-exclusive, non-transferable, non-sublicensable, revocable licence to access
                            and use the Services for your personal, non-commercial entertainment purposes
                            only. This licence does not convey any ownership right in or to the Services or
                            any Content.
                        </p>
                        <p className="mt-3">
                            We reserve all rights not expressly granted to you under these Terms. We may
                            revoke this licence at any time if you violate these Terms.
                        </p>
                    </section>

                    {/* 7. Restrictions on Use */}
                    <section id="restrictions" className="mb-8">
                        <h2 className="text-lg font-semibold text-neutral-900 mb-3">
                            7. Restrictions on Use
                        </h2>
                        <p>You agree <strong>not</strong> to:</p>
                        <ul className="mt-2 space-y-1 list-disc list-inside ml-4">
                            <li>Use the Services for any commercial purpose or for the benefit of any third party.</li>
                            <li>
                                Copy, modify, adapt, translate, decompile, reverse-engineer, disassemble, or
                                create derivative works of any part of the Services, except as expressly
                                permitted by applicable law (e.g., EU Directive 2009/24/EC).
                            </li>
                            <li>
                                Use cheats, exploits, automation software, bots, hacks, mods, or any
                                unauthorised third-party software designed to interfere with or gain an unfair
                                advantage in the Services.
                            </li>
                            <li>
                                Access or attempt to access accounts, servers, or networks connected to the
                                Services through unauthorised means.
                            </li>
                            <li>Interfere with or disrupt the Services, servers, or networks.</li>
                            <li>
                                Collect, harvest, scrape, or store personal information about other users
                                without their consent.
                            </li>
                            <li>Use the Services for any illegal or unauthorised purpose.</li>
                            <li>
                                Upload, post, or transmit any content that is illegal, harmful, threatening,
                                abusive, harassing, defamatory, obscene, or otherwise objectionable.
                            </li>
                            <li>
                                Circumvent, disable, or otherwise interfere with security-related features of
                                the Services or features that prevent or restrict use or copying of any Content.
                            </li>
                            <li>
                                Exploit the Services in any unauthorised way, including by trespass or burdening
                                network capacity.
                            </li>
                        </ul>
                    </section>

                    {/* 8. User Conduct & Community Standards */}
                    <section id="user-conduct" className="mb-8">
                        <h2 className="text-lg font-semibold text-neutral-900 mb-3">
                            8. User Conduct &amp; Community Standards
                        </h2>
                        <p>
                            We strive to maintain a safe, respectful, and enjoyable environment for all
                            users. You agree to:
                        </p>
                        <ul className="mt-2 space-y-1 list-disc list-inside ml-4">
                            <li>Treat other users with respect and courtesy.</li>
                            <li>
                                Not engage in harassment, bullying, hate speech, threats, or discriminatory
                                behaviour.
                            </li>
                            <li>
                                Not impersonate any person or entity or misrepresent your affiliation with any
                                person or entity.
                            </li>
                            <li>Not spam, advertise, or solicit other users.</li>
                            <li>Not share inappropriate, offensive, or explicit content.</li>
                            <li>Comply with all applicable laws and regulations.</li>
                        </ul>
                        <p className="mt-3">
                            We reserve the right to monitor user conduct and take enforcement action —
                            including warnings, temporary suspensions, or permanent bans — for violations of
                            these Terms or our community standards, at our sole discretion.
                        </p>
                    </section>

                    {/* 9. In-App Purchases & Virtual Items */}
                    <section id="iap" className="mb-8">
                        <h2 className="text-lg font-semibold text-neutral-900 mb-3">
                            9. In-App Purchases &amp; Virtual Items
                        </h2>

                        <H3>9.1 Virtual Items</H3>
                        <p>
                            Our Services may include Virtual Items such as virtual currencies, coins,
                            power-ups, skins, characters, and other digital goods. Virtual Items have{" "}
                            <strong>no real-world monetary value</strong> and cannot be exchanged for real
                            money, goods, or services outside the Services. You do not own Virtual Items;
                            instead, you receive a limited, revocable licence to use them within the Services
                            subject to these Terms.
                        </p>

                        <H3>9.2 Purchases</H3>
                        <p>
                            You may purchase Virtual Items through In-App Purchases via the Apple App Store,
                            Google Play Store, or other authorised platforms. All purchases are processed by
                            the platform operator, and you agree to comply with their terms and conditions.
                            Prices are displayed in the currency of your app store or payment method and may
                            include applicable taxes.
                        </p>

                        <H3>9.3 Pricing changes</H3>
                        <p>
                            We reserve the right to change the pricing of Virtual Items at any time. Price
                            changes do not affect previously completed purchases.
                        </p>

                        <H3>9.4 No transfer or cash-out</H3>
                        <p>
                            Virtual Items may not be sold, gifted, transferred, traded, or otherwise
                            conveyed to another person, and may not be exchanged or redeemed for real-world
                            currency outside the Services. Any attempt to do so is a violation of these Terms
                            and may result in termination of your account.
                        </p>

                        <H3>9.5 Loss of Virtual Items</H3>
                        <p>
                            If your account is terminated or deleted (whether by you or by us), you will
                            lose all Virtual Items associated with that account. We are not obligated to
                            provide any refund or compensation for lost Virtual Items, except as required by
                            applicable law.
                        </p>
                    </section>

                    {/* 10. Subscriptions & Auto-Renewal */}
                    <section id="subscriptions" className="mb-8">
                        <h2 className="text-lg font-semibold text-neutral-900 mb-3">
                            10. Subscriptions &amp; Auto-Renewal
                        </h2>

                        <H3>10.1 Subscription services</H3>
                        <p>
                            Some of our Services may offer subscription-based features or premium access
                            (&ldquo;Subscriptions&rdquo;). Subscriptions are billed on a recurring basis (e.g.,
                            weekly, monthly, or annually) at the price disclosed at the time of purchase.
                        </p>

                        <H3>10.2 Auto-renewal</H3>
                        <p>
                            Subscriptions automatically renew at the end of each billing period unless you
                            cancel before the renewal date. You will be charged through your app store account
                            at the current subscription rate. You can manage or cancel your Subscription at
                            any time through your app store account settings (Apple App Store or Google Play
                            Store).
                        </p>

                        <H3>10.3 Price changes</H3>
                        <p>
                            We may change subscription prices. If we do, we will provide advance notice, and
                            the new price will apply from your next renewal period. If you do not agree to the
                            price change, you must cancel before the renewal date.
                        </p>

                        <H3>10.4 Free trials</H3>
                        <p>
                            We may offer free trial periods for certain Subscriptions. If you do not cancel
                            before the free trial ends, your Subscription will automatically convert to a paid
                            Subscription at the applicable rate.
                        </p>
                    </section>

                    {/* 11. Refund Policy & Cooling-Off Rights */}
                    <section id="refunds" className="mb-8">
                        <h2 className="text-lg font-semibold text-neutral-900 mb-3">
                            11. Refund Policy &amp; Cooling-Off Rights
                        </h2>

                        <H3>11.1 Platform refunds</H3>
                        <p>
                            In-App Purchases are processed by the Apple App Store or Google Play Store. Refund
                            requests should be directed to the applicable platform in accordance with their
                            refund policies.
                        </p>

                        <H3>11.2 UK Consumer Rights Act 2015</H3>
                        <p>
                            If you are a consumer in the United Kingdom, you have a statutory right to cancel
                            a digital content purchase within <strong>14 days</strong> of the purchase date
                            (the &ldquo;cooling-off period&rdquo;) under the Consumer Contracts (Information,
                            Cancellation and Additional Charges) Regulations 2013 and the Consumer Rights Act
                            2015.
                        </p>
                        <p className="mt-3">
                            However, you acknowledge and agree that by beginning to download or stream digital
                            content (including Virtual Items) during the cooling-off period, you may lose your
                            right to cancel once the download or performance of the digital content has begun,
                            provided that: (a) you have given your express consent; and (b) you have
                            acknowledged that you will lose your cancellation right.
                        </p>

                        <H3>11.3 EU consumers</H3>
                        <p>
                            If you are a consumer in the European Economic Area, similar cooling-off rights
                            apply under the Consumer Rights Directive (2011/83/EU). The same conditions
                            regarding express consent and acknowledgement of loss of cancellation right apply.
                        </p>

                        <H3>11.4 Defective digital content</H3>
                        <p>
                            Nothing in these Terms affects your statutory rights regarding defective digital
                            content. If digital content is faulty, you may be entitled to a repair,
                            replacement, or refund under applicable consumer protection law.
                        </p>
                    </section>

                    {/* 12. Advertising & Third-Party SDKs */}
                    <section id="advertising" className="mb-8">
                        <h2 className="text-lg font-semibold text-neutral-900 mb-3">
                            12. Advertising &amp; Third-Party SDKs
                        </h2>

                        <H3>12.1 Advertisements</H3>
                        <p>
                            Our Services are free to play and are supported in part by advertisements. By
                            using the Services, you consent to the display of advertisements, which may
                            include banner ads, interstitial ads, rewarded video ads, and native ads.
                        </p>

                        <H3>12.2 Advertising partners</H3>
                        <p>
                            We use <strong>CAS.ai</strong> (Clever Ads Solutions / CLEAR INVEST LTD) as our ad
                            mediation platform. CAS.ai runs real-time auctions among multiple advertising networks
                            to determine the most relevant ad for each placement. Our direct and mediated advertising
                            SDK partners include:
                        </p>
                        <ul className="mt-2 space-y-1 list-disc list-inside ml-4">
                            <li>
                                <strong>CAS.ai</strong> (mediation orchestrator) —{" "}
                                <a
                                    href="https://cas.ai/privacy-policy"
                                    className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <strong>Unity Ads</strong> (direct SDK + via CAS.ai) —{" "}
                                <a
                                    href="https://unity.com/legal/game-player-and-app-user-privacy-policy"
                                    className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <strong>Liftoff Monetize (Vungle)</strong> (direct SDK + via CAS.ai) —{" "}
                                <a
                                    href="https://vungle.com/privacy/"
                                    className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Privacy Policy
                                </a>{" "}
                                | Opt-out:{" "}
                                <a
                                    href="https://vungle.com/opt-out/"
                                    className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    vungle.com/opt-out
                                </a>
                            </li>
                            <li>
                                <strong>InMobi</strong> (direct SDK + via CAS.ai) —{" "}
                                <a
                                    href="https://www.inmobi.com/privacy-policy/"
                                    className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Privacy Policy
                                </a>{" "}
                                | Opt-out:{" "}
                                <a
                                    href="https://www.inmobi.com/page/opt-out/"
                                    className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    inmobi.com/page/opt-out
                                </a>
                            </li>
                            <li>
                                <strong>AppLovin</strong> (via CAS.ai mediation) —{" "}
                                <a
                                    href="https://legal.applovin.com/privacy/"
                                    className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <strong>Google AdMob</strong> (via CAS.ai mediation) —{" "}
                                <a
                                    href="https://policies.google.com/privacy"
                                    className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                        <p className="mt-3">
                            CAS.ai may also route ads to additional networks including ironSource (Unity LevelPlay),
                            Meta Audience Network, Mintegral, Pangle (ByteDance), and Digital Turbine. A full and
                            always up-to-date list is available at{" "}
                            <Link href="/advertising-partners" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">
                                avajora.com/advertising-partners
                            </Link>
                            .
                        </p>

                        <H3>12.3 Data collection by advertising SDKs</H3>
                        <p>
                            These advertising partners may collect device identifiers (e.g., IDFA, GAID),
                            IP address, usage data, and ad interaction data to serve personalised or
                            contextual advertisements. For full details on what data is collected and how it
                            is used, please see our{" "}
                            <Link href="/privacy-policy" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">
                                Privacy Policy
                            </Link>
                            .
                        </p>

                        <H3>12.4 Opting out of personalised ads</H3>
                        <p>
                            You can limit personalised advertising through your device settings:
                        </p>
                        <ul className="mt-2 space-y-1 list-disc list-inside ml-4">
                            <li>
                                <strong>iOS:</strong> Settings → Privacy &amp; Security → Tracking → disable
                                &ldquo;Allow Apps to Request to Track.&rdquo;
                            </li>
                            <li>
                                <strong>Android:</strong> Settings → Privacy → Ads → &ldquo;Delete advertising
                                ID&rdquo; or &ldquo;Opt out of Ads Personalisation.&rdquo;
                            </li>
                        </ul>
                    </section>

                    {/* 13. Data Protection & Privacy */}
                    <section id="data-privacy" className="mb-8">
                        <h2 className="text-lg font-semibold text-neutral-900 mb-3">
                            13. Data Protection &amp; Privacy
                        </h2>
                        <p>
                            Your privacy is important to us. Our collection, use, and sharing of personal
                            data is governed by our{" "}
                            <Link href="/privacy-policy" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">
                                Privacy Policy
                            </Link>
                            , which is incorporated into these Terms by reference. By using the Services, you
                            consent to our data practices as described in the Privacy Policy.
                        </p>
                        <p className="mt-3">
                            We comply with applicable data protection legislation, including the UK General
                            Data Protection Regulation (UK GDPR), the EU General Data Protection Regulation
                            (EU GDPR), the Data Protection Act 2018, the California Consumer Privacy Act
                            (CCPA) as amended by the CPRA, the Children&apos;s Online Privacy Protection Act
                            (COPPA), and other applicable privacy laws.
                        </p>
                        <p className="mt-3">
                            We use <strong>Unity Analytics</strong> (Unity Technologies Inc.) to collect anonymised
                            gameplay usage data to improve our Services. We use <strong>CAS.ai</strong> (CLEAR INVEST
                            LTD) as our ad mediation platform, which may route data to multiple advertising networks
                            including AppLovin, Google AdMob, ironSource, Meta, Vungle/Liftoff, InMobi, and others.
                            We do not sell your personal data. For full details, please refer to our{" "}
                            <Link href="/privacy-policy" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">
                                Privacy Policy
                            </Link>
                            .
                        </p>
                    </section>

                    {/* 14. Cookies & Tracking Technologies */}
                    <section id="cookies" className="mb-8">
                        <h2 className="text-lg font-semibold text-neutral-900 mb-3">
                            14. Cookies &amp; Tracking Technologies
                        </h2>
                        <p>
                            Our website ({CO.web}) uses cookies and similar tracking technologies. We use
                            Google Analytics 4 to collect anonymised website usage data, subject to your
                            consent via our cookie consent manager (Klaro).
                        </p>
                        <p className="mt-3">
                            For full details on the cookies we use, their purposes, and how to manage your
                            preferences, please see our{" "}
                            <Link href="/cookie-policy" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">
                                Cookie Policy
                            </Link>
                            .
                        </p>
                        <p className="mt-3">
                            You can change your cookie preferences at any time using the &ldquo;Cookie
                            Settings&rdquo; link in our website footer.
                        </p>
                    </section>

                    {/* 15. Intellectual Property */}
                    <section id="ip" className="mb-8">
                        <h2 className="text-lg font-semibold text-neutral-900 mb-3">
                            15. Intellectual Property
                        </h2>

                        <H3>15.1 Our rights</H3>
                        <p>
                            All rights, title, and interest in and to the Services — including all Content,
                            features, functionality, software, code, graphics, designs, trademarks, trade
                            names, logos, and other materials — are owned by {CO.name} or our licensors and
                            are protected by copyright, trademark, patent, trade secret, and other
                            intellectual property laws of the United Kingdom, the European Union, and
                            international treaties.
                        </p>

                        <H3>15.2 Trademarks</H3>
                        <p>
                            &ldquo;{CO.trade},&rdquo; the {CO.trade} logo, and all related names, logos,
                            product and service names, designs, and slogans are trademarks of {CO.name} or
                            its affiliates. You must not use such marks without our prior written permission.
                        </p>

                        <H3>15.3 Feedback</H3>
                        <p>
                            Any feedback, suggestions, or ideas you provide to us regarding the Services
                            will be considered non-confidential and non-proprietary. We are free to use such
                            feedback for any purpose without any obligation or compensation to you.
                        </p>
                    </section>

                    {/* 16. User-Generated Content */}
                    <section id="ugc" className="mb-8">
                        <h2 className="text-lg font-semibold text-neutral-900 mb-3">
                            16. User-Generated Content
                        </h2>

                        <H3>16.1 Licence grant</H3>
                        <p>
                            If you submit, post, upload, or share any User-Generated Content through the
                            Services, you grant {CO.name} a worldwide, non-exclusive, royalty-free, perpetual,
                            irrevocable, sublicensable, and transferable licence to use, reproduce, modify,
                            adapt, publish, translate, distribute, and display such content in connection with
                            the Services and our business operations.
                        </p>

                        <H3>16.2 Your representations</H3>
                        <p>You represent and warrant that your User-Generated Content:</p>
                        <ul className="mt-2 space-y-1 list-disc list-inside ml-4">
                            <li>Is original to you or you have the right to share it.</li>
                            <li>Does not infringe any third-party intellectual property rights.</li>
                            <li>Does not violate any applicable law or these Terms.</li>
                            <li>Is not harmful, obscene, defamatory, or otherwise objectionable.</li>
                        </ul>

                        <H3>16.3 Removal & DMCA / takedown</H3>
                        <p>
                            We reserve the right to remove any User-Generated Content at our sole
                            discretion. If you believe that your copyrighted work has been copied in a way
                            that constitutes copyright infringement, please send a written notice to{" "}
                            <a
                                href={`mailto:${CO.legal}`}
                                className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
                            >
                                {CO.legal}
                            </a>{" "}
                            with the following information:
                        </p>
                        <ul className="mt-2 space-y-1 list-disc list-inside ml-4">
                            <li>
                                A description of the copyrighted work you claim has been infringed.
                            </li>
                            <li>
                                A description of where the allegedly infringing material is located within the
                                Services.
                            </li>
                            <li>
                                Your contact information (name, address, email, telephone).
                            </li>
                            <li>
                                A statement that you have a good-faith belief that the use of the material is
                                not authorised by the copyright owner, its agent, or the law.
                            </li>
                            <li>
                                A statement, under penalty of perjury, that the information in your notice is
                                accurate and that you are the copyright owner or authorised to act on the
                                owner&apos;s behalf.
                            </li>
                            <li>
                                Your physical or electronic signature.
                            </li>
                        </ul>
                    </section>

                    {/* 17. Third-Party Services & Links */}
                    <section id="third-party" className="mb-8">
                        <h2 className="text-lg font-semibold text-neutral-900 mb-3">
                            17. Third-Party Services &amp; Links
                        </h2>
                        <p>
                            Our Services may contain links to, or integrate with, third-party websites,
                            applications, platforms, or services (including social media networks, advertising
                            partners, and analytics providers). We do not control, endorse, or assume
                            responsibility for the content, privacy policies, or practices of any third-party
                            services.
                        </p>
                        <p className="mt-3">
                            Your interactions with third-party services are solely between you and that third
                            party and are subject to their terms and conditions. We encourage you to review the
                            terms and privacy policies of any third-party services you access through our
                            Services.
                        </p>
                    </section>

                    {/* 18. Updates & Modifications */}
                    <section id="updates" className="mb-8">
                        <h2 className="text-lg font-semibold text-neutral-900 mb-3">
                            18. Updates &amp; Modifications
                        </h2>
                        <p>
                            We may update, modify, suspend, or discontinue any aspect of the Services at any
                            time without prior notice. This includes adding, removing, or changing features,
                            functionality, Content, or system requirements.
                        </p>
                        <p className="mt-3">
                            We may require you to download and install updates to continue using certain
                            Services. Some updates may be installed automatically, and you consent to such
                            automatic updates. We are not liable to you for any such changes or
                            discontinuation.
                        </p>
                    </section>

                    {/* 19. Disclaimers & Warranty Exclusions */}
                    <section id="disclaimers" className="mb-8">
                        <h2 className="text-lg font-semibold text-neutral-900 mb-3">
                            19. Disclaimers &amp; Warranty Exclusions
                        </h2>
                        <p className="uppercase text-sm font-medium">
                            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SERVICES ARE PROVIDED
                            &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY
                            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES
                            OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT,
                            OR THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.
                        </p>
                        <p className="mt-3">We do not warrant that:</p>
                        <ul className="mt-2 space-y-1 list-disc list-inside ml-4">
                            <li>The Services will meet your requirements or expectations.</li>
                            <li>The Services will be available at all times or at any particular time.</li>
                            <li>Any errors or defects will be corrected.</li>
                            <li>The Services are free of viruses or other harmful components.</li>
                            <li>
                                The results obtained from using the Services will be accurate or reliable.
                            </li>
                        </ul>
                        <p className="mt-3">
                            Nothing in these Terms excludes or limits any warranty that cannot be excluded or
                            limited under applicable law (including consumer protection laws of the United
                            Kingdom and the European Union). In particular, nothing in these Terms affects
                            your statutory rights as a consumer under the Consumer Rights Act 2015.
                        </p>
                    </section>

                    {/* 20. Limitation of Liability */}
                    <section id="liability" className="mb-8">
                        <h2 className="text-lg font-semibold text-neutral-900 mb-3">
                            20. Limitation of Liability
                        </h2>
                        <p className="uppercase text-sm font-medium">
                            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL {CO.name},
                            ITS DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, OR LICENSORS BE LIABLE FOR ANY
                            INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING
                            BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE
                            LOSSES, RESULTING FROM:
                        </p>
                        <ul className="mt-2 space-y-1 list-disc list-inside ml-4">
                            <li>Your access to or use of (or inability to access or use) the Services.</li>
                            <li>Any conduct or content of any third party on the Services.</li>
                            <li>Any content obtained from the Services.</li>
                            <li>
                                Unauthorised access, use, or alteration of your transmissions or content.
                            </li>
                        </ul>
                        <p className="mt-3">
                            In no event shall our total aggregate liability to you for all claims relating to
                            the Services exceed the greater of: (a) the amount you paid to us in the twelve
                            (12) months prior to the claim; or (b) one hundred pounds sterling (£100).
                        </p>
                        <p className="mt-3">
                            Nothing in these Terms excludes or limits our liability for: death or personal
                            injury caused by our negligence; fraud or fraudulent misrepresentation; or any
                            other liability that cannot be excluded or limited under the laws of England and
                            Wales.
                        </p>
                    </section>

                    {/* 21. Indemnification */}
                    <section id="indemnification" className="mb-8">
                        <h2 className="text-lg font-semibold text-neutral-900 mb-3">
                            21. Indemnification
                        </h2>
                        <p>
                            To the extent permitted by applicable law, you agree to indemnify, defend, and
                            hold harmless {CO.name}, its affiliates, and their respective directors,
                            officers, employees, agents, and licensors from and against any claims,
                            liabilities, damages, losses, costs, or expenses (including reasonable legal
                            fees) arising out of or in connection with:
                        </p>
                        <ul className="mt-2 space-y-1 list-disc list-inside ml-4">
                            <li>Your violation of these Terms.</li>
                            <li>Your violation of any law or the rights of a third party.</li>
                            <li>Your use or misuse of the Services.</li>
                            <li>
                                Any User-Generated Content you submit, post, or upload to the Services.
                            </li>
                        </ul>
                        <p className="mt-3">
                            This indemnification obligation does not apply to the extent that the claim
                            arises from our own negligence or wilful misconduct.
                        </p>
                    </section>

                    {/* 22. Termination */}
                    <section id="termination" className="mb-8">
                        <h2 className="text-lg font-semibold text-neutral-900 mb-3">
                            22. Termination
                        </h2>

                        <H3>22.1 Termination by us</H3>
                        <p>
                            We may suspend or terminate your access to the Services at any time, with or
                            without cause, with or without notice, including for:
                        </p>
                        <ul className="mt-2 space-y-1 list-disc list-inside ml-4">
                            <li>Breach of these Terms.</li>
                            <li>Fraudulent, illegal, or harmful activity.</li>
                            <li>Conduct that harms other users or the integrity of the Services.</li>
                            <li>Extended periods of inactivity.</li>
                            <li>At our discretion for any lawful reason.</li>
                        </ul>

                        <H3>22.2 Termination by you</H3>
                        <p>
                            You may stop using the Services at any time and request account deletion by
                            contacting{" "}
                            <a
                                href={`mailto:${CO.support}`}
                                className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
                            >
                                {CO.support}
                            </a>
                            .
                        </p>

                        <H3>22.3 Effect of termination</H3>
                        <p>
                            Upon termination, your right to use the Services will immediately cease. You will
                            lose access to all Virtual Items, in-game progress, and associated data. All
                            provisions of these Terms that by their nature should survive termination shall
                            survive, including ownership provisions, warranty disclaimers, indemnification,
                            limitations of liability, and dispute resolution.
                        </p>
                    </section>

                    {/* 23. Dispute Resolution & Governing Law */}
                    <section id="dispute" className="mb-8">
                        <h2 className="text-lg font-semibold text-neutral-900 mb-3">
                            23. Dispute Resolution &amp; Governing Law
                        </h2>

                        <H3>23.1 Governing law</H3>
                        <p>
                            These Terms and your use of the Services shall be governed by and construed in
                            accordance with the laws of England and Wales, without regard to conflict of law
                            provisions.
                        </p>

                        <H3>23.2 Informal resolution</H3>
                        <p>
                            Before initiating any formal proceedings, you agree to first attempt to resolve
                            any dispute, controversy, or claim arising out of or relating to these Terms or
                            the Services through good-faith negotiations by contacting us at{" "}
                            <a
                                href={`mailto:${CO.legal}`}
                                className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
                            >
                                {CO.legal}
                            </a>
                            . We will attempt to resolve the dispute within 30 days.
                        </p>

                        <H3>23.3 Jurisdiction</H3>
                        <p>
                            If the dispute cannot be resolved informally, you agree that any legal action
                            must be brought in the courts of England and Wales, and you consent to the
                            exclusive jurisdiction of such courts.
                        </p>

                        <H3>23.4 EU consumers</H3>
                        <p>
                            If you are a consumer in the European Union, you may also have the right to
                            submit a complaint through the European Commission&apos;s Online Dispute
                            Resolution (ODR) platform at{" "}
                            <a
                                href="https://ec.europa.eu/consumers/odr"
                                className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                ec.europa.eu/consumers/odr
                            </a>
                            . Nothing in these Terms affects your statutory rights as a consumer under the
                            laws of the EU Member State in which you reside.
                        </p>

                        <H3>23.5 Time limitation</H3>
                        <p>
                            To the extent permitted by applicable law, any claim or cause of action arising
                            out of or related to the Services must be filed within one (1) year after such
                            claim or cause of action arose, or it will be permanently barred.
                        </p>
                    </section>

                    {/* 24. Force Majeure */}
                    <section id="force-majeure" className="mb-8">
                        <h2 className="text-lg font-semibold text-neutral-900 mb-3">
                            24. Force Majeure
                        </h2>
                        <p>
                            We will not be liable for any failure or delay in performing our obligations
                            under these Terms where such failure or delay results from any cause beyond our
                            reasonable control, including but not limited to: acts of God, natural disasters,
                            pandemics, epidemics, war, terrorism, riots, embargoes, acts of civil or military
                            authorities, fire, flood, accidents, strikes, labour shortages, transportation
                            disruptions, power or telecommunications failures, cyberattacks, or disruptions to
                            third-party services (such as app stores, cloud hosting, or CDN providers).
                        </p>
                    </section>

                    {/* 25. Class Action Waiver */}
                    <section id="class-waiver" className="mb-8">
                        <h2 className="text-lg font-semibold text-neutral-900 mb-3">
                            25. Class Action Waiver
                        </h2>
                        <p>
                            To the maximum extent permitted by applicable law, you agree that any dispute
                            resolution proceedings will be conducted only on an individual basis and not in a
                            class, consolidated, or representative action. If for any reason a claim proceeds
                            in court rather than through individual negotiation, you waive any right to a jury
                            trial and agree that such claim shall be brought individually.
                        </p>
                        <p className="mt-3">
                            This waiver applies to the fullest extent permitted by law. If you reside in a
                            jurisdiction that does not permit class action waivers, this section may not apply
                            to you.
                        </p>
                    </section>

                    {/* 26. Open-Source Attribution */}
                    <section id="open-source" className="mb-8">
                        <h2 className="text-lg font-semibold text-neutral-900 mb-3">
                            26. Open-Source Attribution
                        </h2>
                        <p>
                            Our Services may incorporate open-source software components licensed under
                            various open-source licences (e.g., MIT, Apache 2.0, BSD). The use of such
                            components is subject to their respective licence terms, which take precedence over
                            these Terms to the extent of any conflict.
                        </p>
                        <p className="mt-3">
                            A list of open-source licences used in our applications is available within the
                            app settings or upon request by contacting{" "}
                            <a
                                href={`mailto:${CO.support}`}
                                className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
                            >
                                {CO.support}
                            </a>
                            . We gratefully acknowledge the contributions of the open-source community.
                        </p>
                    </section>

                    {/* 27. Accessibility */}
                    <section id="accessibility" className="mb-8">
                        <h2 className="text-lg font-semibold text-neutral-900 mb-3">
                            27. Accessibility
                        </h2>
                        <p>
                            We aim to make our Services accessible to as many users as possible, including
                            users with disabilities. We aim to conform to WCAG 2.1 Level AA guidelines for our
                            website and strive to provide an inclusive experience in our games.
                        </p>
                        <p className="mt-3">
                            If you experience any accessibility barriers when using our Services, please
                            contact us at{" "}
                            <a
                                href={`mailto:${CO.support}`}
                                className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
                            >
                                {CO.support}
                            </a>{" "}
                            so we can work to resolve the issue.
                        </p>
                    </section>

                    {/* 28. General Provisions */}
                    <section id="general" className="mb-8">
                        <h2 className="text-lg font-semibold text-neutral-900 mb-3">
                            28. General Provisions
                        </h2>

                        <H3>28.1 Entire agreement</H3>
                        <p>
                            These Terms, together with our{" "}
                            <Link href="/privacy-policy" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">
                                Privacy Policy
                            </Link>{" "}
                            and{" "}
                            <Link href="/cookie-policy" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">
                                Cookie Policy
                            </Link>
                            , constitute the entire agreement between you and {CO.name} regarding the Services
                            and supersede any prior agreements, understandings, or representations, whether
                            written or oral.
                        </p>

                        <H3>28.2 Amendments</H3>
                        <p>
                            We reserve the right to modify these Terms at any time. We will notify you of
                            material changes by posting the updated Terms on our website or within the
                            Services and updating the &ldquo;Last updated&rdquo; date. Where required by law,
                            we will provide additional notice (e.g., via email or in-app notification). Your
                            continued use of the Services after changes take effect constitutes your
                            acceptance.
                        </p>

                        <H3>28.3 Severability</H3>
                        <p>
                            If any provision of these Terms is found by a court of competent jurisdiction to
                            be invalid, illegal, or unenforceable, that provision will be modified to the
                            minimum extent necessary to make it enforceable, or if that is not possible, it
                            will be severed. The remaining provisions will continue in full force and effect.
                        </p>

                        <H3>28.4 Waiver</H3>
                        <p>
                            Our failure to exercise or enforce any right or provision of these Terms will not
                            constitute a waiver of such right or provision. Any waiver must be in writing and
                            signed by {CO.name}.
                        </p>

                        <H3>28.5 Assignment</H3>
                        <p>
                            You may not assign, transfer, or delegate these Terms or any rights or
                            obligations hereunder without our prior written consent. We may assign these
                            Terms without restriction, including in connection with a merger, acquisition,
                            corporate restructuring, or sale of all or substantially all of our assets.
                        </p>

                        <H3>28.6 No third-party beneficiaries</H3>
                        <p>
                            These Terms do not confer any rights on any person or party other than you and{" "}
                            {CO.name}, except as expressly stated herein. Nothing in these Terms is intended
                            to create any rights enforceable by any person who is not a party to these Terms
                            under the Contracts (Rights of Third Parties) Act 1999.
                        </p>

                        <H3>28.7 Headings</H3>
                        <p>
                            The section headings in these Terms are for convenience only and have no legal or
                            contractual effect.
                        </p>

                        <H3>28.8 Language</H3>
                        <p>
                            These Terms are written in English. If these Terms are translated into any other
                            language, the English-language version shall prevail in the event of any conflict
                            or inconsistency.
                        </p>

                        <H3>28.9 Notices</H3>
                        <p>
                            All notices to us should be sent to{" "}
                            <a
                                href={`mailto:${CO.legal}`}
                                className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
                            >
                                {CO.legal}
                            </a>{" "}
                            or by post to our registered address. We may provide notices to you through the
                            Services, via your app store, or by email if you have provided one.
                        </p>
                    </section>

                    {/* 29. How to Contact Us */}
                    <section id="contact" className="mb-8">
                        <h2 className="text-lg font-semibold text-neutral-900 mb-3">
                            29. How to Contact Us
                        </h2>
                        <p>
                            If you have any questions, concerns, or feedback regarding these Terms or the
                            Services, please contact us:
                        </p>
                        <table className="mt-4 w-full text-sm border-collapse">
                            <tbody>
                                <tr className="border-b border-neutral-200">
                                    <td className="py-2 pr-4 font-medium text-neutral-900 whitespace-nowrap">
                                        Legal name
                                    </td>
                                    <td className="py-2">{CO.name}</td>
                                </tr>
                                <tr className="border-b border-neutral-200">
                                    <td className="py-2 pr-4 font-medium text-neutral-900 whitespace-nowrap">
                                        Registered address
                                    </td>
                                    <td className="py-2">{CO.addr}</td>
                                </tr>
                                <tr className="border-b border-neutral-200">
                                    <td className="py-2 pr-4 font-medium text-neutral-900 whitespace-nowrap">
                                        Registration no.
                                    </td>
                                    <td className="py-2">{CO.reg}</td>
                                </tr>
                                <tr className="border-b border-neutral-200">
                                    <td className="py-2 pr-4 font-medium text-neutral-900 whitespace-nowrap">
                                        D-U-N-S
                                    </td>
                                    <td className="py-2">{CO.duns}</td>
                                </tr>
                                <tr className="border-b border-neutral-200">
                                    <td className="py-2 pr-4 font-medium text-neutral-900 whitespace-nowrap">
                                        General support
                                    </td>
                                    <td className="py-2">
                                        <a
                                            href={`mailto:${CO.support}`}
                                            className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
                                        >
                                            {CO.support}
                                        </a>
                                    </td>
                                </tr>
                                <tr className="border-b border-neutral-200">
                                    <td className="py-2 pr-4 font-medium text-neutral-900 whitespace-nowrap">
                                        Legal enquiries
                                    </td>
                                    <td className="py-2">
                                        <a
                                            href={`mailto:${CO.legal}`}
                                            className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
                                        >
                                            {CO.legal}
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-2 pr-4 font-medium text-neutral-900 whitespace-nowrap">
                                        Website
                                    </td>
                                    <td className="py-2">
                                        <a
                                            href={`https://${CO.web}`}
                                            className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
                                        >
                                            {CO.web}
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <p className="mt-4 text-sm text-neutral-500">
                            We will make every effort to respond to your enquiry within a reasonable
                            timeframe.
                        </p>
                    </section>

                    {/* Footer */}
                    <footer className="mt-12 pt-6 border-t border-neutral-200 text-sm text-neutral-500">
                        <p>
                            © {new Date().getFullYear()} {CO.name}. All rights reserved. Company
                            registration number {CO.reg}, registered in {CO.country}.
                        </p>
                        <p className="mt-2">
                            By using our Services, you acknowledge that you have read, understood, and agree
                            to be bound by these Terms of Service.
                        </p>
                    </footer>
                </article>
            </main>
        </>
    );
}
