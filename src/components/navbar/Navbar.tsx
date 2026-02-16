"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        function checkScroll() {
            if (pathname === "/about-us") {
                setIsScrolled(window.scrollY > 0);
                return;
            }

            const hero = document.getElementById("hero");
            const threshold = hero ? hero.offsetHeight : window.innerHeight;
            if (window.scrollY > threshold - 80) setIsScrolled(true);
            else setIsScrolled(false);
        }

        checkScroll();
        window.addEventListener("scroll", checkScroll, { passive: true });
        window.addEventListener("resize", checkScroll);
        return () => {
            window.removeEventListener("scroll", checkScroll);
            window.removeEventListener("resize", checkScroll);
        };
    }, [pathname]);

    // Close mobile menu when route changes
    useEffect(() => {
        const timer = setTimeout(() => setIsMobileMenuOpen(false), 0);
        return () => clearTimeout(timer);
    }, [pathname]);

    const forceWhite = pathname === "/contact" || pathname === "/privacy-policy" || pathname === "/terms-of-service" || pathname === "/cookie-policy";

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${(isScrolled || forceWhite) ? 'bg-white border-b border-gray-200 shadow-sm' : 'bg-transparent border-b border-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Left side - Logo and Brand Name */}
                    <div className="flex items-center space-x-2 sm:space-x-3">
                        <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
                            <Image
                                src="https://res.cloudinary.com/destej60y/image/upload/v1770936289/avajora-logo-n1_llpci8.png"
                                alt="Avajora Games Logo"
                                width={40}
                                height={40}
                                className="object-contain sm:w-12 sm:h-12"
                                priority
                            />
                            <span className="text-base sm:text-xl md:text-2xl text-black font-bold whitespace-nowrap">
                                Avajora Games LTD
                            </span>
                        </Link>
                    </div>

                    {/* Right side - Desktop Navigation Links */}
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        <Link
                            href="/privacy-policy"
                            className="text-black hover:text-gray-600 transition-colors text-base lg:text-lg"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms-of-service"
                            className="text-black hover:text-gray-600 transition-colors text-base lg:text-lg"
                        >
                            Terms of service
                        </Link>
                        <Link
                            href="/contact"
                            className="text-black hover:text-gray-600 transition-colors text-base lg:text-lg"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            type="button"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-black hover:text-gray-600 focus:outline-none p-2 -mr-2"
                            aria-label="Toggle menu"
                            aria-expanded={isMobileMenuOpen ? "true" : "false"}
                        >
                            {isMobileMenuOpen ? (
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200">
                        <div className="flex flex-col space-y-4">
                            <Link
                                href="/privacy-policy"
                                className="text-black hover:text-gray-600 transition-colors text-base py-2 px-2"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="/terms-of-service"
                                className="text-black hover:text-gray-600 transition-colors text-base py-2 px-2"
                            >
                                Terms of service
                            </Link>
                            <Link
                                href="/contact"
                                className="text-black hover:text-gray-600 transition-colors text-base py-2 px-2"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
