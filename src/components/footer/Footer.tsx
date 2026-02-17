import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTiktok,
    FaYoutube,
    FaXTwitter,
} from "react-icons/fa6";
import { CookieSettingsButton } from "@/components/cookie-consent";

const companyLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Contact", href: "/contact" },
];

/* Legal documents — shown in the footer column */
const legalLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Imprint", href: "/imprint" },
];

/* Privacy Tools — shown in the footer column */
const privacyToolsLinks = [
    { label: "Cookie Policy", href: "/cookie-policy" },
    { label: "Do Not Sell", href: "/do-not-sell" },
    { label: "Delete My Account", href: "/privacy/request" },
];

/* Secondary legal links — shown inline in the bottom bar */
const secondaryLegalLinks = [
    { label: "Privacy Summary", href: "/privacy-summary" },
    { label: "Privacy for Parents", href: "/privacy-for-parents" },
    { label: "Advertising Partners", href: "/advertising-partners" },
    { label: "Privacy Request", href: "/privacy/request" },
    { label: "Transparency", href: "/transparency" },
];

const socialLinks = [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/avajora-games-ltd/", icon: FaLinkedinIn },
    { label: "Instagram", href: "https://www.instagram.com/avajora.games.ltd", icon: FaInstagram },
    { label: "X", href: "https://x.com/AvajoraGamesLTD", icon: FaXTwitter },
    { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61588085401058", icon: FaFacebookF },
    { label: "YouTube", href: "https://www.youtube.com/@AvajoraGamesLTD", icon: FaYoutube },
    { label: "TikTok", href: "https://www.tiktok.com/@avajora.games.ltd", icon: FaTiktok },
];

export default function Footer() {
    return (
        <footer className="bg-[#00071e] text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-14">
                {/* ── Top section: 4-column grid ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-8">
                    {/* Brand */}
                    <div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-2 sm:gap-3">
                            <Link href="/" className="inline-flex items-center">
                                <Image
                                    src="https://res.cloudinary.com/destej60y/image/upload/v1770936289/avajora-logo-n1_llpci8.png"
                                    alt="Avajora Games Logo"
                                    width={40}
                                    height={40}
                                    className="object-contain sm:w-12 sm:h-12"
                                />
                            </Link>
                            <h3 className="text-lg sm:text-xl font-semibold tracking-wide">AVAJORA GAMES LTD</h3>
                        </div>

                        {/* App Store Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 mt-4">
                            <a
                                href="https://play.google.com/store/apps/dev?id=6769319870657320087"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Get it on Google Play"
                                className="inline-block hover:opacity-80 transition"
                            >
                                <Image
                                    src="https://res.cloudinary.com/destej60y/image/upload/v1771293818/googleplay.c3b4e2ea_duph9w.webp"
                                    alt="Get it on Google Play"
                                    width={135}
                                    height={40}
                                    className="h-10 w-auto object-contain"
                                />
                            </a>
                            <div className="inline-block">
                                <Image
                                    src="https://res.cloudinary.com/destej60y/image/upload/v1771293841/appstore.58a06803_huebjr.webp"
                                    alt="Download on the App Store"
                                    width={135}
                                    height={40}
                                    className="h-10 w-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Company links */}
                    <div className="space-y-3 sm:space-y-4">
                        <h4 className="text-base sm:text-lg font-semibold">Company</h4>
                        <ul className="space-y-2 text-white/90 text-sm sm:text-base">
                            {companyLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="hover:text-white hover:underline underline-offset-4 transition"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal links */}
                    <div className="space-y-3 sm:space-y-4">
                        <h4 className="text-base sm:text-lg font-semibold">Legal</h4>
                        <ul className="space-y-2 text-white/90 text-sm sm:text-base">
                            {legalLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="hover:text-white hover:underline underline-offset-4 transition"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Privacy Tools links */}
                    <div className="space-y-3 sm:space-y-4">
                        <h4 className="text-base sm:text-lg font-semibold">Privacy Tools</h4>
                        <ul className="space-y-2 text-white/90 text-sm sm:text-base">
                            {privacyToolsLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="hover:text-white hover:underline underline-offset-4 transition"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <CookieSettingsButton />
                            </li>
                        </ul>
                    </div>
                </div>

                {/* ── Bottom bar ── */}
                <div className="mt-8 sm:mt-10 pt-6 border-t border-white/20 space-y-4">
                    {/* Secondary legal links — compact inline row */}
                    <nav aria-label="Additional legal links" className="flex flex-wrap items-baseline gap-x-2 text-xs text-white/55">
                        {secondaryLegalLinks.map((link, i) => (
                            <Fragment key={link.label}>
                                {i > 0 && <span className="text-white/30">|</span>}
                                <Link
                                    href={link.href}
                                    className="hover:text-white/90 transition"
                                >
                                    {link.label}
                                </Link>
                            </Fragment>
                        ))}
                    </nav>

                    {/* Copyright + socials */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
                        <p className="text-xs sm:text-sm text-white">
                            © {new Date().getFullYear()} AVAJORA GAMES LTD. All rights reserved.
                        </p>

                        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        title={social.label}
                                        className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-white/30 text-white hover:bg-white hover:text-[#00071e] transition touch-manipulation"
                                    >
                                        <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Address — centered at the very bottom */}
                    <p className="text-center text-s text-white pt-4">
                        AVAJORA GAMES LTD. 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ.
                    </p>
                </div>
            </div>
        </footer>
    );
}
