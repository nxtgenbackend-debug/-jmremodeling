import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileCallButton from "./components/MobileCallButton";
import ChromeGate from "./components/ChromeGate";
import { SITE_URL } from "./site";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: "JM Remodeling & Construction, LLC | Wisconsin Contractor",
    template: "%s | JM Remodeling & Construction, LLC",
  },
  description:
    "JM Remodeling & Construction, LLC — Wisconsin's premier residential and commercial remodeler since 1990. Kitchens, bathrooms, basements, commercial buildouts, and more. Licensed & insured. Free estimates.",
  openGraph: {
    siteName: "JM Remodeling & Construction, LLC",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/kitchen-white.jpg",
        width: 1920,
        height: 1282,
        alt: "Kitchen remodel by JM Remodeling & Construction",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JM Remodeling & Construction, LLC | Wisconsin Contractor",
    description:
      "Wisconsin's residential and commercial remodeler since 1990 — kitchens, bathrooms, basements, roofing, and commercial buildouts. Licensed, bonded & insured.",
    images: ["/images/kitchen-white.jpg"],
  },
};

// Sitewide structured data: the business entity + website. Service/Article/FAQ
// schema is added per page. foundingDate 1990 per live site jmremodelingwi.com.
const businessJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HomeAndConstructionBusiness",
      "@id": `${SITE_URL}/#business`,
      name: "JM Remodeling & Construction, LLC",
      url: SITE_URL,
      telephone: "+1-414-354-2800",
      email: "customerservice@jmremodelingwi.com",
      foundingDate: "1990",
      address: {
        "@type": "PostalAddress",
        streetAddress: "7701 N. Teutonia Ave.",
        addressLocality: "Milwaukee",
        addressRegion: "WI",
        postalCode: "53209",
        addressCountry: "US",
      },
      areaServed: [
        "Milwaukee, WI",
        "Waukesha, WI",
        "Brookfield, WI",
        "Wauwatosa, WI",
        "Mequon, WI",
        "Oconomowoc, WI",
        "Pewaukee, WI",
        "Menomonee Falls, WI",
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "07:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "08:00",
          closes: "14:00",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "JM Remodeling & Construction, LLC",
      publisher: { "@id": `${SITE_URL}/#business` },
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        <a href="#main" className="skip-link">Skip to content</a>
        <ChromeGate>
          <TopBar />
          <Navbar />
        </ChromeGate>
        <main id="main" className="flex-1">{children}</main>
        <ChromeGate>
          <Footer />
          <MobileCallButton />
        </ChromeGate>
      </body>
    </html>
  );
}
