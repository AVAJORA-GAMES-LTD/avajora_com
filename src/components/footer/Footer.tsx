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

const companyLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Contact", href: "/contact" },
];

const legalLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of service", href: "/terms-of-service" },
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
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <Link href="/" className="inline-flex items-center">
                                <Image
                                    src="https://res.cloudinary.com/destej60y/image/upload/v1770936289/avajora-logo-n1_llpci8.png"
                                    alt="Avajora Games Logo"
                                    width={48}
                                    height={48}
                                    className="object-contain"
                                />
                            </Link>
                            <h3 className="text-xl font-semibold tracking-wide">AVAJORA GAMES LTD</h3>
                        </div>

                        <p className="text-white/85 leading-relaxed text-sm md:text-base max-w-md">
                            AVAJORA GAMES LTD. 71-75 Shelton Street, Covent Garden, London,
                            WC2H 9JQ.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Company</h4>
                        <ul className="space-y-2 text-white/90">
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

                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Legal</h4>
                        <ul className="space-y-2 text-white/90">
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
                </div>

                <div className="mt-10 pt-6 border-t border-white/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <p className="text-sm text-white/75">
                        © {new Date().getFullYear()} AVAJORA GAMES LTD. All rights reserved.
                    </p>

                    <div className="flex items-center gap-3 flex-wrap">
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
                                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white hover:bg-white hover:text-[#00071e] transition"
                                >
                                    <Icon className="h-5 w-5" />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
}
