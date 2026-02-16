import type { Metadata, Viewport } from "next";
import { Lilita_One } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components";
import { CookieConsent } from "@/components/cookie-consent";

const lilitaOne = Lilita_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lilita-one",
});

export const metadata: Metadata = {
  title: "AVAJORA GAMES LTD",
  description: "AVAJORA GAMES LTD - Official Website",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lilitaOne.variable} font-sans antialiased`}>
        {children}
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
