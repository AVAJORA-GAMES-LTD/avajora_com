import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { LegalH3 as H3 } from "@/components/legal";
import Link from "next/link";
import { COMPANY as CO } from "@/lib/company";
import { LEGAL_VERSIONS } from "@/lib/legal-versions";

export const metadata: Metadata = {
    title: "Terms of Service — AVAJORA GAMES LTD",
    description:
        "Terms of Service for AVAJORA GAMES LTD mobile games, website, and related services.",
};

const { version: V, updated: UPDATED, effective: EFFECTIVE } = LEGAL_VERSIONS.termsOfService;

const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["WebPage", "Article"],
    name: "Terms of Service",
    headline: "Terms of Service — AVAJORA GAMES LTD",
    description:
        "Terms of Service for AVAJORA GAMES LTD mobile games, website, and related services.",
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
        name: "Terms of Service",
        description: "Terms governing use of AVAJORA GAMES LTD mobile games, website, and related services.",
    },
    isPartOf: {
        "@type": "WebSite",
        url: "https://avajora.com",
        name: "AVAJORA GAMES LTD",
    },
};

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
    { id: "class-waiver", label: "Class Action Waiver & Arbitration" },
    { id: "open-source", label: "Open-Source Attribution" },
    { id: "accessibility", label: "Accessibility" },
    { id: "general", label: "General Provisions" },
    { id: "contact", label: "How to Contact Us" },
    { id: "version-history", label: "Version History" },
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
                            they have no real-world value. We never sell your personal data for monetary
                            consideration; sharing of advertising identifiers with ad partners for
                            interest-based ads may qualify as a &ldquo;sale&rdquo; under the CCPA — see
                            our{" "}
                            <Link href="/do-not-sell" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">
                                Do Not Sell / Share
                            </Link>{" "}
                            page for controls.
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
                            {TOC.map((item) => (
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

                    {/* 4.2 Age Ratings & Content Advisories */}
                    <section id="age-ratings" className="mb-8">
                        <h2 className="text-lg font-semibold text-neutral-900 mb-3">
                            4.2 Age Ratings &amp; Content Advisories
                        </h2>
                        <p>
                            Our games carry age ratings assigned by platform rating boards (IARC for Google Play,
                            and platform-specific ratings for the Apple App Store). Each game&apos;s age rating is
                            displayed on its store listing page before download.
                        </p>
                        <p className="mt-3">
                            <strong>Our games are NOT directed at children.</strong> While our casual mobile games
                            may have broad appeal and family-friendly content, they are designed for and marketed
                            to a general audience aged 13 and above (or the applicable minimum age in your
                            jurisdiction). We do not knowingly target, advertise to, or collect personal data from
                            children below the applicable age threshold.
                        </p>
                        <p className="mt-3">
                            Age ratings reflect content descriptors (e.g., &ldquo;Mild Fantasy Violence,&rdquo;
                            &ldquo;In-App Purchases,&rdquo; &ldquo;Digital Purchases&rdquo;). Parents and guardians
                            should review age ratings and content descriptors before allowing children to download
                            or play our games. For more information on how we handle data when children may access
                            our Services, see our{" "}
                            <Link href="/privacy-for-parents" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">
                                Privacy for Parents
                            </Link>{" "}
                            page.
                        </p>
                        <p className="mt-3">
                            <strong>Third-party advertising:</strong> Our free-to-play games display advertisements
                            served by third-party ad networks. While we take steps to filter inappropriate ad
                            content, we do not control the specific ads shown by third-party networks. If you see
                            an inappropriate ad, please report it via in-game settings or contact us at{" "}
                            <a
                                href={`mailto:${CO.support}?subject=Inappropriate%20Ad%20Report`}
                                className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
                            >
                                {CO.support}
                            </a>.
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
                            . We will process account deletion requests within 30 days of verification.
                            Upon deletion, you will lose access to all associated data, Virtual Items,
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
                                <strong>Install, use, or distribute modified versions of our games</strong> (including
                                modified APK files, IPAs, or any repackaged or tampered binaries), use emulators
                                or virtualisation software to circumvent platform restrictions, or employ automation
                                tools, macros, scripts, or any other means to automate gameplay or bypass game mechanics.
                                Use of such unauthorised modifications or tools is a material breach of these Terms and
                                grounds for immediate termination of your account without refund.
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
                            money, goods, or services outside the Services.
                        </p>
                        <p className="mt-3">
                            <strong>No Ownership — Limited Licence Only.</strong> You acknowledge that you have
                            <strong> no property right</strong> in any Virtual Items. Virtual Items are licensed
                            to you on a <strong>limited, non-exclusive, non-transferable, revocable basis</strong>.
                            We may manage, regulate, control, modify, or eliminate Virtual Items at any time,
                            with or without notice. We reserve the right to change the attributes, functionality,
                            availability, or pricing of Virtual Items without liability to you. Upon termination
                            of your account or discontinuation of a game, all Virtual Items associated with your
                            account will be forfeited without refund or compensation, except as required by
                            applicable law.
                        </p>

                        <H3>9.1B Consumable vs. Non-Consumable Virtual Items</H3>
                        <p>
                            Virtual Items in our games fall into two categories:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mt-3">
                            <li>
                                <strong>Consumable Items:</strong> Single-use items that are consumed immediately
                                upon use (e.g., extra lives, boosters, temporary power-ups, in-game currency used
                                to purchase other items). Once consumed, these items are <strong>permanently
                                    removed from your account and cannot be restored</strong>, even if you delete and
                                reinstall the game or switch devices. <strong>Most purchases in our games are
                                    consumable.</strong>
                            </li>
                            <li>
                                <strong>Non-Consumable Items:</strong> Permanent unlocks that remain in your
                                account indefinitely (e.g., ad-free upgrades, permanent character unlocks, level
                                packs). Non-consumable items may be restored if you reinstall the game or switch
                                devices, provided you sign in with the same platform account (Google Play or
                                Apple ID) used for the original purchase. However, even non-consumable items are
                                lost if your account is terminated or the game is discontinued.
                            </li>
                        </ul>
                        <p className="mt-4">
                            <strong>Important:</strong> Because consumable items are used immediately, they cannot
                            be refunded after consumption, except where required by law. Before making a purchase,
                            carefully review whether the item is consumable or non-consumable. The item type is
                            indicated on the purchase screen.
                        </p>

                        <H3>9.2 Purchases</H3>
                        <p>
                            You may purchase Virtual Items through In-App Purchases via the Apple App Store,
                            Google Play Store, or other authorised platforms. All purchases are processed by
                            the platform operator, and you agree to comply with their terms and conditions.
                            Prices are displayed in the currency of your app store or payment method and may
                            include applicable taxes.
                        </p>

                        <H3>9.2B Pricing &amp; Currency Transparency</H3>
                        <p>
                            Virtual Item prices are displayed in your local app store currency and include any
                            applicable taxes (VAT in the UK/EU, GST in applicable jurisdictions, sales tax in
                            the United States) as required by law. The final price shown at checkout on the app
                            store is the amount you will be charged.
                        </p>
                        <p className="mt-3">
                            <strong>Exchange rates and platform fees:</strong> Exchange rates for non-local
                            currencies and platform service fees (Apple App Store commission, Google Play
                            service fee) are determined by the platform operator (Apple or Google). We do not
                            control these rates or fees and cannot provide refunds for currency fluctuations,
                            foreign transaction fees charged by your bank, or changes in platform pricing
                            policies.
                        </p>
                        <p className="mt-3">
                            <strong>Price localization:</strong> Prices may vary by country or region due to
                            local taxes, currency exchange rates, purchasing power parity adjustments, and
                            platform requirements. We reserve the right to offer region-specific pricing or
                            promotional discounts at our discretion.
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
                        <p className="text-sm italic text-neutral-500 mb-2">
                            This section applies only when subscription features are offered within a specific game.
                        </p>
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

                        <H3>10.5 Cancellation &amp; unused time</H3>
                        <p>
                            If you cancel a Subscription, you will retain access to the subscription
                            benefits until the end of your current paid billing period. No partial refunds
                            are provided for unused time within a billing period, except where required by
                            applicable law (including UK and EU cooling-off rights described in Section 11).
                        </p>

                        <H3>10.6 App store disclosure</H3>
                        <p>
                            All subscription terms, pricing, and billing frequency are displayed on the
                            app store product page before you confirm your purchase. By subscribing,
                            you acknowledge the recurring nature of the charges. Apple and Google each
                            require that subscription terms are disclosed before purchase; we comply with
                            the Apple App Store Review Guidelines (Section 3.1.2) and Google Play Billing
                            policies, including clear disclosure of the subscription period, price, and
                            auto-renewal terms.
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
                            Our Services are free to play and are supported in part by advertisements. Our
                            Services display advertisements, which may include banner ads, interstitial ads,
                            rewarded video ads, and native ads. <strong>Contextual (non-personalised) ads</strong>{" "}
                            are displayed as part of the service without separate consent.
                            <strong> Personalised (interest-based) ads</strong> are only displayed with your
                            explicit, separate consent in accordance with GDPR and applicable privacy laws.
                            If you do not consent to personalised ads, you will still see contextual ads.
                        </p>

                        <H3>12.2 Advertising partners</H3>
                        <p>
                            We use <strong>CAS.ai</strong> (Clever Ads Solutions / CLEAR INVEST LTD) as our ad
                            mediation platform. CAS.ai runs real-time auctions among multiple advertising networks
                            to determine the most relevant ad for each placement. Our principal advertising
                            SDK partners are listed on our{" "}
                            <Link href="/advertising-partners" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">
                                Advertising Partners
                            </Link>{" "}
                            page, which is the canonical, up-to-date source. Key partners include:
                        </p>
                        <ul className="mt-2 space-y-1 list-disc list-inside ml-4">
                            <li>CAS.ai (mediation orchestrator)</li>
                            <li>Unity Ads (direct SDK + via CAS.ai)</li>
                            <li>Liftoff Monetize / Vungle (direct SDK + via CAS.ai)</li>
                            <li>InMobi (direct SDK + via CAS.ai)</li>
                            <li>AppLovin (via CAS.ai)</li>
                            <li>Google AdMob (via CAS.ai)</li>
                            <li>Google Firebase Analytics (gameplay analytics &amp; engagement metrics)</li>
                        </ul>
                        <p className="mt-3 text-sm text-neutral-600">
                            For full details — including privacy policy links, opt-out mechanisms, and
                            data-retention periods — visit our{" "}
                            <Link href="/advertising-partners" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">
                                Advertising Partners
                            </Link>{" "}
                            page.
                        </p>

                        <H3>12.2B Cross-Promotion of Our Games</H3>
                        <p>
                            We may display advertisements promoting our other games within our Services
                            (&ldquo;cross-promotion&rdquo;). Cross-promotional ads are served directly by us,
                            not via external ad networks, and are part of our normal business operations.
                        </p>
                        <p className="mt-3">
                            Cross-promotional ads may use aggregated gameplay data from your current session
                            (e.g., suggesting games similar to the one you are playing), but do not use
                            cross-app tracking identifiers or link your identity across different games in our
                            portfolio. You cannot opt out of cross-promotional ads, as they are integral to
                            how we operate free-to-play games and fund development of new content.
                        </p>
                        <p className="mt-3">
                            We reserve the right to promote our own games within our Services without separate
                            consent, as this constitutes legitimate business interest and does not involve
                            third-party data sharing.
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

                        <H3>12.5 Regional Content Restrictions</H3>
                        <p>
                            The Services are distributed worldwide via the Apple App Store and Google Play
                            Store. Certain game content, features, or in-app advertisements may be restricted,
                            modified, or unavailable in specific countries or regions due to:
                        </p>
                        <ul className="mt-2 space-y-1 list-disc list-inside ml-4">
                            <li>
                                <strong>Legal or regulatory requirements</strong> (e.g., restrictions on
                                gambling-themed content, loot boxes, or specific types of advertisements
                                under local law);
                            </li>
                            <li>
                                <strong>Platform policies</strong> imposed by Apple or Google in specific
                                jurisdictions;
                            </li>
                            <li>
                                <strong>Age rating classifications</strong> (PEGI in Europe, ESRB in North
                                America, IARC globally, or local rating boards);
                            </li>
                            <li>
                                <strong>Cultural sensitivities</strong> or content standards applicable in
                                certain markets;
                            </li>
                            <li>
                                <strong>Advertising network availability</strong> (certain ad partners may not
                                operate in all countries, which may affect ad delivery or revenue-sharing
                                mechanisms);
                            </li>
                            <li>
                                <strong>Payment method restrictions</strong> (In-App Purchases may be
                                unavailable in regions where Apple or Google does not support local payment
                                methods).
                            </li>
                        </ul>
                        <p className="mt-3">
                            <strong>No guarantee of availability.</strong> We do not guarantee that the
                            Services, or any specific feature or content, will be available in your country
                            or region. Regional restrictions may be imposed or lifted at any time based on
                            platform requirements, legal changes, or our business decisions. We are not
                            obligated to provide refunds or compensation if a feature or Service becomes
                            unavailable in your region due to platform policy changes or legal requirements.
                        </p>
                        <p className="mt-3">
                            <strong>General restrictions only.</strong> We do not implement country-specific
                            content filtering or geo-blocking for individual countries. Restrictions are
                            determined by the Apple App Store and Google Play Store based on their regional
                            compliance frameworks and our designated age ratings. If you access the Services
                            from a restricted region, you are responsible for ensuring your use complies
                            with applicable local laws.
                        </p>

                        <H3>12.6 Better Ads Standards &amp; Industry Compliance</H3>
                        <p>
                            We are committed to providing a high-quality advertising experience. All
                            advertisements displayed within our Services comply with the{" "}
                            <a href="https://www.betterads.org/standards/" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">Coalition for Better Ads Standards</a>,
                            including but not limited to limitations on pop-up ads, auto-play video ads with
                            sound, prestitial countdown ads, and large sticky ads. Rewarded video ads within
                            our games are always user-initiated (the user chooses to watch in exchange for
                            an in-game reward) and can be skipped or dismissed after the allotted time.
                        </p>
                        <p className="mt-3">
                            We and our advertising partners use the <strong>IAB Open Measurement SDK
                                (OM SDK)</strong> to enable independent third-party verification and measurement
                            of advertising impressions, viewability, and invalid traffic within our Services.
                            Third-party measurement partners participating in the IAB Open Measurement Working
                            Group may collect and process data as part of performing ad measurement and
                            related services.
                        </p>

                        <H3>12.7 Content Policies</H3>
                        <p>
                            All content within our Services, including in-app content, cross-promotional
                            creatives, and any advertisements served through our ad mediation partners,
                            must comply with:{" "}
                        </p>
                        <ul className="mt-2 space-y-1 list-disc list-inside ml-4">
                            <li>Apple App Store Guidelines and Google Play Developer Policies;</li>
                            <li>AppLovin Content Policies, including but not limited to prohibitions on
                                adult content, excessive violence, deceptive practices, hate speech,
                                illegal activities, and misleading advertisements;</li>
                            <li>All applicable laws and regulations in the jurisdictions where our
                                Services are available;</li>
                            <li>Industry self-regulatory standards, including the Coalition for Better
                                Ads Standards and IAB guidelines.</li>
                        </ul>
                        <p className="mt-3">
                            We do not knowingly publish or promote content that is designed to deceive,
                            mislead, or defraud users, or that contains malware, spyware, or other harmful
                            software. We do not knowingly serve or allow advertisements that promote
                            illegal products or services, contain adult or sexually explicit material
                            (except as permitted by applicable law and platform policy), employ deceptive
                            &ldquo;bait-and-switch&rdquo; tactics, or auto-redirect users to external
                            websites without their consent.
                        </p>
                        <p className="mt-3">
                            <strong>Invalid Traffic &amp; Ad Fraud.</strong> We take all reasonable measures
                            to prevent invalid traffic (IVT), including click fraud, impression fraud, and
                            other forms of ad fraud, within our Services. We cooperate with our advertising
                            partners&rsquo; anti-fraud systems and promptly investigate any suspected invalid
                            traffic. We do not use bots, click farms, or any automated means to inflate ad
                            impressions or clicks.
                        </p>

                        <H3>12.8 VPN &amp; Proxy Restrictions</H3>
                        <p>
                            Our games are not VPN applications and do not provide virtual private network,
                            proxy server, or similar functionality. In accordance with AppLovin&rsquo;s
                            Publisher Policies, we do not access or use AppLovin&rsquo;s Services in
                            connection with apps that provide virtual private networks, proxy servers, or
                            similar products or services.
                        </p>
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
                            We use <strong>Unity Analytics</strong> (Unity Technologies Inc.) and{" "}
                            <strong>Google Firebase Analytics</strong> (Google LLC) to collect anonymised
                            gameplay usage data to improve our Services. Firebase Analytics collects
                            device information, app-instance identifiers, Android Advertising ID (GAID),
                            and gameplay event data; it is governed by the{" "}
                            <a href="https://firebase.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">Firebase Terms of Service</a>{" "}
                            and{" "}
                            <a href="https://cloud.google.com/terms/" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">Google Cloud Terms of Service</a>.
                            Firebase Analytics is disabled for child-identified sessions.
                            We use <strong>CAS.ai</strong> (CLEAR INVEST
                            LTD) as our ad mediation platform, which may route data to multiple advertising networks
                            including AppLovin, Google AdMob, ironSource, Meta, Vungle/Liftoff, InMobi, and others.
                            We never sell your personal data for monetary consideration. The sharing of
                            advertising identifiers with ad networks for interest-based advertising may
                            constitute a &ldquo;sale&rdquo; or &ldquo;sharing&rdquo; under the California
                            Consumer Privacy Act (CCPA). You can opt out via our{" "}
                            <Link href="/do-not-sell" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">
                                Do Not Sell / Share
                            </Link>{" "}
                            page. For full details, please refer to our{" "}
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

                        <H3>15.4 User Screenshots &amp; Gameplay Videos</H3>
                        <p>
                            You are permitted to capture screenshots, video recordings, and audio-visual
                            recordings of gameplay from our Services for <strong>personal,
                                non-commercial use</strong> only, including sharing on social media platforms,
                            personal blogs, and with friends and family.
                        </p>
                        <p className="mt-3">
                            <strong>Commercial use.</strong> If you wish to use screenshots or gameplay
                            footage for commercial purposes (e.g., YouTube monetisation, Twitch affiliate
                            or partner programs, sponsored content, advertising, or for-profit streaming),
                            you must obtain our prior written permission by contacting{" "}
                            <a
                                href={`mailto:${CO.support}?subject=Commercial%20Use%20Request`}
                                className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
                            >
                                {CO.support}
                            </a>
                            . We grant permission on a case-by-case basis and may require attribution or
                            impose additional conditions.
                        </p>
                        <p className="mt-3">
                            <strong>Reservation of rights.</strong> All intellectual property rights in
                            the underlying game content (graphics, music, characters, storyline, code)
                            remain our exclusive property. Your creation of screenshots or gameplay videos
                            does not grant you any ownership rights in our intellectual property. You may
                            not use our trademarks, logos, or game assets outside of fair-use gameplay
                            recording without express written permission.
                        </p>
                        <p className="mt-3">
                            <strong>Prohibited uses.</strong> You may not use screenshots or gameplay videos
                            in a manner that: (a) suggests endorsement or affiliation with {CO.name} without
                            our permission; (b) contains or promotes illegal, defamatory, obscene, or harmful
                            content; (c) misrepresents the nature of the Services; or (d) violates any
                            third-party rights.
                        </p>
                    </section>

                    {/* 16. User-Generated Content */}
                    <section id="ugc" className="mb-8">
                        <h2 className="text-lg font-semibold text-neutral-900 mb-3">
                            16. User-Generated Content
                        </h2>
                        <p className="text-sm italic text-neutral-500 mb-3">
                            This section applies only if a game includes user-generated content features.
                        </p>

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

                        <H3>18.1 Beta &amp; Early Access Programs</H3>
                        <p>
                            We may invite you to test pre-release versions of our games or features
                            (&ldquo;Beta&rdquo; or &ldquo;Early Access&rdquo; builds). Beta content is
                            provided &ldquo;as is&rdquo; without warranty, may contain bugs or incomplete
                            features, and may be discontinued at any time. Progress, virtual items, or
                            data from Beta builds may not carry over to the final release. By
                            participating in a Beta programme you agree to keep all pre-release
                            information confidential unless we state otherwise.
                        </p>

                        <H3>18.2 In-Game Events &amp; Promotions</H3>
                        <p>
                            Our Services may include limited-time events, seasonal content, special
                            promotions, leaderboard competitions, or exclusive rewards (&ldquo;In-Game
                            Events&rdquo;). In-Game Events are temporary by design and may expire, rotate,
                            or be removed without notice.
                        </p>
                        <p className="mt-3">
                            <strong>Event rules &amp; rewards.</strong> Each In-Game Event may have
                            specific rules, eligibility criteria, duration, and reward structures. We
                            will communicate these details within the game user interface or via in-app
                            notifications. By participating in an In-Game Event, you agree to comply
                            with its rules.
                        </p>
                        <p className="mt-3">
                            <strong>Right to modify or cancel.</strong> We reserve the right to modify,
                            suspend, or cancel any In-Game Event at any time, including changing reward
                            values, event duration, or eligibility requirements. We will provide advance
                            notice where reasonably practicable, but are not required to do so if the
                            change is necessary to prevent exploitation, maintain game balance, or address
                            technical issues.
                        </p>
                        <p className="mt-3">
                            <strong>No compensation for expired events.</strong> Once an In-Game Event
                            concludes or is removed, any unclaimed rewards, incomplete progress, or
                            event-specific Virtual Items may be forfeited without compensation. We are
                            not obligated to extend event deadlines or provide retroactive rewards,
                            except where required by applicable consumer protection law.
                        </p>

                        <H3>18.3 Game Discontinuation &amp; End-of-Service</H3>
                        <p>
                            We reserve the right to discontinue any game or Service at our sole discretion.
                            If we decide to permanently shut down a game or Service, we will provide
                            <strong> at least 90 days&rsquo; advance notice</strong> via email (if you
                            have provided one) and/or in-app notification, except in cases of force majeure,
                            legal or regulatory requirements, or where immediate shutdown is necessary to
                            protect our systems or users.
                        </p>
                        <p className="mt-3">
                            <strong>Data loss &amp; Virtual Items.</strong> Upon discontinuation of a
                            game or Service, all user accounts, progress, Virtual Items, and associated
                            data will be permanently deleted and cannot be recovered. We are not obligated
                            to provide refunds for previously purchased Virtual Items or unused
                            Subscriptions, except where required by applicable consumer protection law
                            (including the UK Consumer Rights Act 2015 and EU consumer rights legislation).
                        </p>
                        <p className="mt-3">
                            <strong>Platform-specific refunds.</strong> If a game is discontinued within
                            a short period after launch (e.g., less than 6 months), we will work with
                            the Apple App Store and Google Play Store to facilitate refunds for recent
                            purchases in accordance with their refund policies and applicable law.
                            For games operated for longer periods, no refunds will be provided except
                            as required by law.
                        </p>
                        <p className="mt-3">
                            <strong>Server maintenance vs. discontinuation.</strong> Scheduled or
                            emergency server maintenance, temporary outages, or Service interruptions do
                            not constitute discontinuation. This section applies only to permanent,
                            irreversible shutdown of a game or Service.
                        </p>

                        <H3>18.4 Live Ops &amp; Server-Side Events</H3>
                        <p>
                            Our Services operate on a &ldquo;live operations&rdquo; (Live Ops) model,
                            meaning that gameplay content, features, difficulty balancing, economy
                            adjustments, and in-game events may be updated, modified, or rebalanced via
                            server-side configuration changes without requiring you to download a new
                            app version.
                        </p>
                        <p className="mt-3">
                            <strong>Server-side changes.</strong> We may deploy server-side updates at
                            any time to: adjust Virtual Item pricing or availability; rebalance game
                            difficulty or reward structures; activate or deactivate features; fix
                            exploits or unintended behaviour; or introduce new content. These changes
                            take effect immediately upon deployment and do not require advance notice.
                        </p>
                        <p className="mt-3">
                            <strong>No compensation for balance changes.</strong> Live Ops updates may
                            affect the value, utility, or effectiveness of Virtual Items you have
                            purchased or earned. We are not obligated to provide refunds, compensation,
                            or equivalent Virtual Items if a server-side update reduces the utility of
                            an item, changes game balance, or alters reward structures. By using our
                            Services, you acknowledge and accept that the gaming experience is subject
                            to ongoing changes as part of our commitment to maintaining a fair, balanced,
                            and engaging experience for all players.
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
                        <p className="mt-3">
                            <strong>Consumer law carve-out.</strong> Nothing in this Section 21 requires you
                            to indemnify us for any matter to the extent that doing so would contravene
                            your statutory rights as a consumer under the UK Consumer Rights Act 2015,
                            the EU Consumer Rights Directive (2011/83/EU), or any other mandatory consumer
                            protection law applicable in your jurisdiction. This indemnification clause
                            applies only to losses caused by your breach, misuse, or unlawful conduct —
                            not to ordinary use of the Services.
                        </p>
                    </section>

                    {/* 22. Termination */}
                    <section id="termination" className="mb-8">
                        <h2 className="text-lg font-semibold text-neutral-900 mb-3">
                            22. Termination
                        </h2>

                        <H3>22.1 Termination by us</H3>
                        <p>
                            We may suspend or terminate your access to the Services in the following
                            circumstances:
                        </p>
                        <ul className="mt-2 space-y-1 list-disc list-inside ml-4">
                            <li><strong>Immediate termination (no prior notice)</strong> — for breach of these Terms, fraudulent, illegal, or harmful activity, or conduct that harms other users or the integrity of the Services.</li>
                            <li><strong>With 30 days&rsquo; prior notice</strong> — for extended periods of inactivity (12&nbsp;months or more with no logins), or at our discretion for any other lawful reason not related to your misconduct.</li>
                        </ul>
                        <p className="mt-3">
                            Where we terminate without cause (i.e. not due to your breach or misconduct),
                            we will provide at least <strong>30 calendar days&rsquo; written notice</strong>{" "}
                            to the email address associated with your account (if available) or via an
                            in-app notification. During this notice period you may export any data or
                            in-game progress that our Services allow you to export.
                        </p>

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
                        <p className="mt-3">
                            <strong>United States residents.</strong> If you are a resident of the United
                            States, the choice of English law does not deprive you of the protection of
                            mandatory consumer protection laws that cannot be waived by contract under
                            the laws of your state of residence or the federal laws of the United States.
                            In the event of a conflict between English law and the mandatory consumer
                            protection laws of your jurisdiction, the mandatory consumer protection laws
                            shall prevail to the extent of the conflict. This includes, but is not limited
                            to, state consumer protection statutes, unfair and deceptive trade practices
                            acts, and federal consumer protection regulations.
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
                            If you are a consumer in the European Union, nothing in these Terms affects
                            your statutory rights as a consumer under the laws of the EU Member State in
                            which you reside.
                        </p>

                        <H3>23.5 UK Alternative Dispute Resolution (ADR)</H3>
                        <p>
                            In accordance with the Alternative Dispute Resolution for Consumer Disputes
                            (Competent Authorities and Information) Regulations 2015, we are required to
                            inform UK consumers that we are not currently registered with, or obligated
                            to use, a certified Alternative Dispute Resolution (ADR) provider. If we are
                            unable to resolve your complaint through our internal process, you may wish to
                            contact the Centre for Effective Dispute Resolution (CEDR) at{" "}
                            <a
                                href="https://www.cedr.com"
                                className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                cedr.com
                            </a>{" "}
                            or the relevant ombudsman service. You also retain the right to take your
                            complaint to the courts.
                        </p>

                        <H3>23.6 Time limitation</H3>
                        <p>
                            <strong>United States residents:</strong> To the extent permitted by
                            applicable law, any claim or cause of action arising out of or related to the
                            Services must be filed within one (1) year after such claim or cause of action
                            arose, or it will be permanently barred.
                        </p>
                        <p className="mt-3">
                            <strong>United Kingdom &amp; EU residents:</strong> The limitation period
                            applicable to you is determined by mandatory law in your jurisdiction
                            (e.g., six years under the Limitation Act 1980 in England and Wales, or the
                            equivalent period under EU consumer protection legislation). Nothing in
                            these Terms reduces the statutory limitation period available to you.
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
                            pandemics, epidemics, public health emergencies (including lockdowns, quarantines,
                            or government-mandated restrictions on movement or commerce), war, terrorism,
                            riots, embargoes, acts of civil or military authorities, fire, flood, earthquakes,
                            accidents, strikes, labour shortages, supply chain disruptions, transportation
                            disruptions, power outages, telecommunications failures, internet backbone
                            failures, cyberattacks, distributed denial-of-service (DDoS) attacks, or
                            disruptions to third-party services (such as app stores, cloud hosting providers,
                            CDN providers, payment processors, or advertising networks).
                        </p>
                        <p className="mt-3">
                            <strong>Pandemic-specific provisions.</strong> In the event of a pandemic,
                            epidemic, or public health emergency recognized by the World Health Organization
                            (WHO), national governments, or relevant health authorities, we may experience
                            delays or interruptions in providing the Services due to: remote work transitions,
                            reduced workforce availability, supply chain disruptions affecting third-party
                            SDK or cloud infrastructure providers, increased demand on server infrastructure,
                            or platform policy changes imposed by Apple, Google, or other third parties in
                            response to the public health crisis. We will make commercially reasonable
                            efforts to minimize disruptions and provide notice where practicable, but are
                            not liable for delays or failures caused by such circumstances.
                        </p>
                        <p className="mt-3">
                            <strong>Third-party dependencies.</strong> Our Services rely on third-party
                            platforms and infrastructure providers, including but not limited to: Apple
                            App Store, Google Play Store, Unity Technologies (game engine &amp; analytics),
                            Google LLC (Firebase Analytics), CAS.ai (ad mediation), Google Cloud Platform (hosting), Vercel (website hosting),
                            and various advertising SDK providers. If any of these third parties experience
                            outages, policy changes, service terminations, or force majeure events, we are
                            not liable for resulting interruptions to the Services. We will use reasonable
                            efforts to mitigate the impact and communicate with affected users.
                        </p>
                    </section>

                    {/* 25. Class Action Waiver */}
                    <section id="class-waiver" className="mb-8">
                        <h2 className="text-lg font-semibold text-neutral-900 mb-3">
                            25. Class Action Waiver &amp; Arbitration
                        </h2>

                        <H3>25.1 Class action waiver</H3>
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

                        <H3>25.2 Arbitration (US users only)</H3>
                        <p>
                            <strong>If you are a resident of the United States,</strong> you and {CO.name}
                            agree that any dispute, claim, or controversy arising out of or relating to these
                            Terms or the Services (except for claims for injunctive or equitable relief) shall
                            be resolved by binding individual arbitration administered by JAMS under its
                            Streamlined Arbitration Rules and Procedures, rather than in court.
                        </p>
                        <p className="mt-3">
                            The arbitration shall be conducted by a single arbitrator, in the English language,
                            and the seat of arbitration shall be London, United Kingdom — provided that the
                            arbitration hearing may be conducted remotely (by videoconference) at your
                            election. The arbitrator&rsquo;s decision shall be final and binding and may be
                            entered as a judgement in any court of competent jurisdiction.
                        </p>
                        <p className="mt-3">
                            <strong>Opt-out.</strong> You may opt out of this arbitration provision by
                            sending written notice to{" "}
                            <a
                                href={`mailto:${CO.legal}?subject=Arbitration%20Opt-Out`}
                                className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
                            >
                                {CO.legal}
                            </a>{" "}
                            within 30 days of first accepting these Terms. The notice must include your
                            name, email address, and a clear statement that you wish to opt out of
                            arbitration.
                        </p>
                        <p className="mt-3">
                            <strong>Small claims exception.</strong> Either party may bring qualifying
                            claims in small claims court.
                        </p>
                        <p className="mt-3">
                            <strong>Fee allocation.</strong> {CO.name} will pay all arbitration filing,
                            administration, and arbitrator fees that exceed the amount of a court filing
                            fee in the jurisdiction where you reside. Each party bears its own legal
                            costs unless the arbitrator awards fees to the prevailing party under
                            applicable law.
                        </p>
                        <p className="mt-3">
                            <strong>Severability.</strong> If any portion of this arbitration provision
                            (including the class action waiver in Section 25.1) is found to be
                            unenforceable by a court or arbitrator, the unenforceable portion shall be
                            severed, and the remainder of the arbitration agreement shall remain in full
                            force and effect. If the class action waiver is found unenforceable as to a
                            particular claim or request for relief, that claim or request for relief shall
                            be severed and may proceed in court, while all other claims shall be
                            arbitrated. If a court finds the arbitration agreement entirely unenforceable,
                            disputes shall be resolved exclusively in the courts of England and Wales in
                            accordance with Section 23.3.
                        </p>
                        <p className="mt-3">
                            This arbitration provision does not apply to residents of the United Kingdom,
                            the European Economic Area, or any jurisdiction where mandatory arbitration of
                            consumer disputes is prohibited by law.
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

                    {/* 30. Version History */}
                    <section id="version-history" className="mb-8">
                        <h2 className="text-lg font-semibold text-neutral-900 mb-3">
                            30. Version History
                        </h2>
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
                                    <tr>
                                        <td className="py-2 pr-4">1.0</td>
                                        <td className="py-2 pr-4">17 Feb 2026</td>
                                        <td className="py-2">Initial terms of service.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
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
