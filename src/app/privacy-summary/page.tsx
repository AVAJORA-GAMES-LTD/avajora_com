import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import Link from "next/link";
import { COMPANY as CO } from "@/lib/company";

export const metadata: Metadata = {
    title: "Privacy at a Glance — AVAJORA GAMES LTD",
    description:
        "A plain-language summary of how AVAJORA GAMES LTD handles your data. Not a legal document — see the full Privacy Policy for binding terms.",
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy at a Glance",
    description:
        "A plain-language summary of how AVAJORA GAMES LTD handles your data.",
    publisher: {
        "@type": "Organization",
        name: CO.name,
        url: CO.url,
    },
    dateModified: "2026-02-17",
    inLanguage: "en",
};

const UPDATED = "17 February 2026";

function Card({
    icon,
    title,
    children,
}: {
    icon: string;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="border border-neutral-200 rounded-lg p-5 sm:p-6">
            <div className="text-2xl mb-3">{icon}</div>
            <h3 className="text-base font-bold text-neutral-900 mb-2">{title}</h3>
            <div className="text-sm text-neutral-700 leading-relaxed">{children}</div>
        </div>
    );
}

export default function PrivacySummaryPage() {
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
                        Privacy at a Glance
                    </h1>
                    <p className="mt-2 text-neutral-900 font-medium">{CO.name}</p>
                    <p className="mt-4 text-sm text-neutral-500">
                        Last Updated: {UPDATED}
                    </p>

                    <div className="mt-4 border-l-4 border-amber-400 bg-amber-50 px-4 py-3 rounded-r-md">
                        <p className="text-sm text-amber-900">
                            <strong>This is a simplified summary,</strong> not the legal document.
                            For the full, binding version, please read our{" "}
                            <Link href="/privacy-policy" className="text-amber-900 underline underline-offset-2 hover:text-amber-700">
                                Privacy Policy
                            </Link>.
                        </p>
                    </div>

                    <hr className="mt-6 mb-8 border-neutral-200" />

                    {/* ── WHO WE ARE ── */}
                    <section>
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">Who We Are</h2>
                        <p>
                            <strong>{CO.name}</strong> (trading as {CO.trade}) is a UK-registered company
                            that develops and publishes free-to-play mobile games. We are the{" "}
                            <strong>data controller</strong> — meaning we decide what data is collected and
                            why.
                        </p>
                    </section>

                    {/* ── AT A GLANCE CARDS ── */}
                    <section className="mt-10">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-6">The Key Points</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                            <Card icon="📱" title="What Data We Collect">
                                <ul className="list-disc pl-4 space-y-1 mt-1">
                                    <li>Device identifiers (advertising ID, device model, OS)</li>
                                    <li>IP address (used to derive country/city — not stored long-term)</li>
                                    <li>Gameplay data (levels, session length, progress)</li>
                                    <li>Ad interaction data (impressions, clicks)</li>
                                    <li>Purchase records (transaction ID, product — no payment card info)</li>
                                </ul>
                            </Card>

                            <Card icon="🚫" title="What We Don't Collect">
                                <ul className="list-disc pl-4 space-y-1 mt-1">
                                    <li>Your real name</li>
                                    <li>Email address (unless you contact us)</li>
                                    <li>Precise GPS location</li>
                                    <li>Photos, contacts, or phone data</li>
                                    <li>Financial credentials (credit cards, bank details)</li>
                                </ul>
                            </Card>

                            <Card icon="🎯" title="Why We Collect It">
                                <ul className="list-disc pl-4 space-y-1 mt-1">
                                    <li>To run the game and save your progress</li>
                                    <li>To show you ads (this is how our free games are funded)</li>
                                    <li>To improve the game based on how people play</li>
                                    <li>To prevent cheating and fraud</li>
                                    <li>To comply with legal obligations</li>
                                </ul>
                            </Card>

                            <Card icon="🤝" title="Who Gets Your Data">
                                <ul className="list-disc pl-4 space-y-1 mt-1">
                                    <li><strong>CAS.ai</strong> — our ad mediation platform</li>
                                    <li><strong>11 ad networks</strong> — compete to show you ads</li>
                                    <li><strong>Unity Analytics</strong> — gameplay analytics</li>
                                    <li><strong>Google Cloud</strong> — hosts our servers (EU region)</li>
                                </ul>
                                <p className="mt-2">
                                    <Link href="/advertising-partners" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600 text-xs">
                                        See full partner list →
                                    </Link>
                                </p>
                            </Card>

                            <Card icon="💰" title="We Don't Sell Your Data">
                                <p>
                                    We <strong>do&nbsp;not</strong> sell your personal data for money.
                                    Sharing ad identifiers with ad networks may count as &ldquo;sharing&rdquo; under
                                    California law (CCPA). You can opt out:
                                </p>
                                <p className="mt-2">
                                    <Link href="/do-not-sell" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600 text-xs">
                                        Opt out of sharing →
                                    </Link>
                                </p>
                            </Card>

                            <Card icon="🧒" title="Children's Privacy">
                                <p>
                                    Our games are not directed at children under 13 (or the higher threshold in
                                    your country). We do not knowingly collect data from children or serve them
                                    targeted ads. We comply with COPPA and the UK Age Appropriate Design Code.
                                </p>
                            </Card>

                            <Card icon="🌍" title="Where Your Data Goes">
                                <p>
                                    Our servers are in the <strong>EU</strong> (Google Cloud, europe-west).
                                    Some partners are in the USA, Singapore, and Belize.
                                    For transfers outside the EEA/UK, we use{" "}
                                    <strong>Standard Contractual Clauses</strong> or the{" "}
                                    <strong>EU-US Data Privacy Framework</strong>.
                                </p>
                            </Card>

                            <Card icon="🔒" title="How We Protect It">
                                <ul className="list-disc pl-4 space-y-1 mt-1">
                                    <li>Encrypted in transit (TLS/SSL)</li>
                                    <li>Encrypted at rest (Google Cloud default encryption)</li>
                                    <li>Access limited to authorised personnel</li>
                                    <li>72-hour breach notification to ICO (GDPR)</li>
                                </ul>
                            </Card>
                        </div>
                    </section>

                    {/* ── DATA FLOW ── */}
                    <section className="mt-10">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-6">How Your Data Flows</h2>
                        <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-5 sm:p-6 overflow-x-auto">
                            <div className="flex flex-col items-center gap-2 text-sm min-w-[320px]">
                                {/* Device */}
                                <div className="bg-neutral-900 text-white rounded-lg px-6 py-3 text-center font-medium w-full max-w-xs">
                                    📱 Your Device
                                </div>
                                <div className="text-neutral-400 text-lg">↓</div>
                                {/* App */}
                                <div className="bg-white border-2 border-neutral-300 rounded-lg px-6 py-3 text-center font-medium w-full max-w-xs">
                                    🎮 Our Game App
                                </div>
                                <div className="flex gap-8 items-start mt-1">
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="text-neutral-400 text-lg">↓</div>
                                        <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 text-center text-xs font-medium">
                                            📊 Unity Analytics
                                        </div>
                                        <div className="text-[11px] text-neutral-500 text-center max-w-[120px]">
                                            Gameplay data only<br />(device-bound ID)
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="text-neutral-400 text-lg">↓</div>
                                        <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-2 text-center text-xs font-medium">
                                            🔀 CAS.ai Mediation
                                        </div>
                                        <div className="text-neutral-400 text-lg">↓</div>
                                        <div className="bg-orange-50 border border-orange-200 rounded-lg px-4 py-2 text-center text-xs font-medium">
                                            📢 11 Ad Networks
                                        </div>
                                        <div className="text-[11px] text-neutral-500 text-center max-w-[140px]">
                                            Advertising ID, IP,<br />device info, ad events
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="mt-4 text-sm text-neutral-500">
                            For the complete list of 11 ad networks, see our{" "}
                            <Link href="/advertising-partners" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">
                                Advertising Partners
                            </Link>{" "}
                            page.
                        </p>
                    </section>

                    {/* ── YOUR RIGHTS ── */}
                    <section className="mt-10">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">Your Rights</h2>
                        <p>Depending on where you live, you can:</p>
                        <ul className="list-disc pl-5 space-y-2 mt-3">
                            <li><strong>See your data</strong> — request a copy of everything we hold about you.</li>
                            <li><strong>Delete your data</strong> — ask us to erase it.</li>
                            <li><strong>Port your data</strong> — get it in a machine-readable format.</li>
                            <li><strong>Opt out of ad targeting</strong> — switch to contextual-only ads.</li>
                            <li><strong>Withdraw consent</strong> — change your mind at any time.</li>
                            <li><strong>Complain</strong> — contact your local data protection authority.</li>
                        </ul>
                        <p className="mt-4">
                            <Link href="/privacy/request" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600 font-medium">
                                Submit a privacy request →
                            </Link>
                        </p>
                    </section>

                    {/* ── RETENTION ── */}
                    <section className="mt-10">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">How Long We Keep It</h2>
                        <div className="overflow-x-auto mt-4">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="border-b-2 border-neutral-200 text-left">
                                        <th className="py-2 pr-4 text-neutral-500 font-semibold">Data</th>
                                        <th className="py-2 text-neutral-500 font-semibold">Kept For</th>
                                    </tr>
                                </thead>
                                <tbody className="align-top">
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-2 pr-4">Gameplay &amp; account data</td>
                                        <td className="py-2">While active + 2 years</td>
                                    </tr>
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-2 pr-4">Ad impression/click logs</td>
                                        <td className="py-2">13 months</td>
                                    </tr>
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-2 pr-4">Support emails</td>
                                        <td className="py-2">3 years</td>
                                    </tr>
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-2 pr-4">Purchase records</td>
                                        <td className="py-2">7 years (tax law)</td>
                                    </tr>
                                    <tr className="border-b border-neutral-100">
                                        <td className="py-2 pr-4">Crash logs</td>
                                        <td className="py-2">90 days</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* ── QUICK LINKS ── */}
                    <section className="mt-10">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">Quick Links</h2>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/privacy-policy" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">
                                    📄 Full Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy/request" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">
                                    📝 Submit a Privacy Request
                                </Link>
                            </li>
                            <li>
                                <Link href="/do-not-sell" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">
                                    🚫 Do Not Sell or Share My Info
                                </Link>
                            </li>
                            <li>
                                <Link href="/advertising-partners" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">
                                    📢 Advertising Partners
                                </Link>
                            </li>
                            <li>
                                <Link href="/cookie-policy" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">
                                    🍪 Cookie Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms-of-service" className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600">
                                    📋 Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </section>

                    {/* ── CONTACT ── */}
                    <section className="mt-10">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">Questions?</h2>
                        <p>
                            Email us at{" "}
                            <a
                                href={`mailto:${CO.privacy}`}
                                className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
                            >
                                {CO.privacy}
                            </a>{" "}
                            — we aim to respond within 30 days.
                        </p>
                    </section>

                    <hr className="mt-14 mb-6 border-neutral-200" />
                    <p className="text-xs text-neutral-400">
                        &copy; {new Date().getFullYear()} {CO.name}. All rights reserved. This page is
                        a simplified summary. For the full, legally binding text, see the{" "}
                        <Link href="/privacy-policy" className="text-neutral-400 underline hover:text-neutral-600">Privacy Policy</Link>.
                    </p>
                </article>
            </main>
        </>
    );
}
