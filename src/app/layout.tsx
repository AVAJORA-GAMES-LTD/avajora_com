import type { Metadata } from "next";
import { Lilita_One } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components";

const lilitaOne = Lilita_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lilita-one",
});

export const metadata: Metadata = {
  title: "AVAJORA GAMES LTD",
  description: "AVAJORA GAMES LTD - Official Website",
  icons: {
    icon: [
      { url: "/avajora-logo-n1.png", sizes: "any" },
      { url: "/avajora-logo-n1.png", sizes: "32x32", type: "image/png" },
      { url: "/avajora-logo-n1.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/avajora-logo-n1.png",
    apple: "/avajora-logo-n1.png",
    other: [
      {
        rel: "icon",
        url: "/avajora-logo-n1.png",
      },
    ],
  },
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
      </body>
    </html>
  );
}
