// import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
// import {
//     FaFacebookF,
//     FaInstagram,
//     FaLinkedinIn,
//     FaTiktok,
//     FaYoutube,
//     FaXTwitter,
// } from "react-icons/fa6";
// import { CookieSettingsButton } from "@/components/cookie-consent";

const footerLinks = [
    // { label: "Home", href: "/" },
    // { label: "About Us", href: "/about-us" },
    { label: "Contact", href: "/contact" },
];

/* Legal documents — shown in the footer column */
const legalLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    // { label: "Terms of Service", href: "/terms-of-service" },
    // { label: "Imprint", href: "/imprint" },
];

/* Privacy Tools — shown in the footer column */
// const privacyToolsLinks = [
//     { label: "Cookie Policy", href: "/cookie-policy" },
//     { label: "Do Not Sell", href: "/do-not-sell" },
//     { label: "Delete My Account", href: "/privacy/request" },
// ];

/* Secondary legal links — shown inline in the bottom bar */
// const secondaryLegalLinks = [
//     { label: "Privacy Summary", href: "/privacy-summary" },
//     { label: "Privacy for Parents", href: "/privacy-for-parents" },
//     { label: "Advertising Partners", href: "/advertising-partners" },
//     { label: "Privacy Request", href: "/privacy/request" },
//     { label: "Transparency", href: "/transparency" },
// ];

export default function Footer() {
    return (
        <footer className="bg-[#00071e] text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-14">
                {/* ── Top section: 4-column grid ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-8">
                    {/* Brand */}
                    <div className="space-y-3 sm:space-y-4">
                        <div className="flex items-center gap-2 sm:gap-3">
                            <Link href="/" className="inline-flex items-center">
                                <Image
                                    src="https://res.cloudinary.com/destej60y/image/upload/v1770936289/avajora-logo-n1_llpci8.png"
                                    alt="AVAJORA Logo"
                                    width={40}
                                    height={40}
                                    className="object-contain sm:w-12 sm:h-12"
                                />
                            </Link>
                            <h3 className="text-lg sm:text-xl font-semibold tracking-wide">AVAJORA</h3>
                        </div>

                        {/* App Store Buttons */}
                        {/* <div className="flex flex-col sm:flex-row gap-3 mt-4">
                            <a
                                href="https://play.google.com/store/apps/dev?id=6769319870657320087"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Get it on Google Play"
                                className="inline-block hover:opacity-80 transition"
                            >
                                <Image
                                    src="https://res.cloudinary.com/destej60y/image/upload/v1771346830/Store_Google_Play_Type_Dark_Language_English_1_buber3.svg"
                                    alt="Get it on Google Play"
                                    width={135}
                                    height={40}
                                    className="h-10 w-auto object-contain"
                                />
                            </a>
                            <div className="inline-block">
                                <Image
                                    src="https://res.cloudinary.com/destej60y/image/upload/v1771346829/Store_App_Store_Type_Dark_Language_English_mqfkz7.svg"
                                    alt="Download on the App Store"
                                    width={135}
                                    height={40}
                                    className="h-10 w-auto object-contain"
                                />
                            </div>
                        </div> */}
                    </div>

                    {/* Links */}
                    <div className="space-y-3 sm:space-y-4">
                        <h4 className="text-base sm:text-lg font-semibold">Links</h4>
                        <ul className="space-y-2 text-white/90 text-sm sm:text-base">
                            {footerLinks.map((link) => (
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
                    {/* <div className="space-y-3 sm:space-y-4">
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
                    </div> */}
                </div>
            </div>
        </footer>
    );
}
