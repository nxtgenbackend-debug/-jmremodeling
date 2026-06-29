import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileCallButton from "./components/MobileCallButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow",
  weight: ["700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "JM Remodeling & Construction, LLC | Wisconsin Contractor",
  description:
    "JM Remodeling & Construction, LLC — Wisconsin's premier residential and commercial remodeler since 1998. Kitchens, bathrooms, basements, commercial buildouts, and more. Licensed & insured. Free estimates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${barlowCondensed.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-body">
        <a href="#main" className="skip-link">Skip to content</a>
        <TopBar />
        <Navbar />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
        <MobileCallButton />
      </body>
    </html>
  );
}
