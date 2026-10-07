import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Amperage Energy | Solar Energy Solutions in Kenya",
    template: "%s | Amperage Energy",
  },

  description:
    "Amperage Energy Solutions provides reliable solar installation, battery storage, heat pump water heating, energy audits, and solar maintenance services in Kenya and across East Africa.",

  keywords: [
    "Amperage Energy",
    "Amperage Energy Solutions",
    "solar energy Kenya",
    "solar installation Kenya",
    "solar panels Kenya",
    "solar systems Nairobi",
    "solar battery storage Kenya",
    "heat pump water heating Kenya",
    "energy audits Kenya",
    "solar maintenance Kenya",
    "renewable energy Kenya",
    "clean energy Kenya",
    "solar companies Kenya",
    "solar solutions East Africa",
  ],

  authors: [
    {
      name: "Amperage Energy Solutions",
    },
  ],

  creator: "Amperage Energy Solutions",

  metadataBase: new URL("https://amperage-energy-omega.vercel.app"),

  openGraph: {
    title: "Amperage Energy | Solar Energy Solutions in Kenya",

    description:
      "Reliable solar energy, battery storage, heat pump water heating, energy audits and maintenance solutions for homes, businesses and institutions.",

    url: "https://amperage-energy-omega.vercel.app",

    siteName: "Amperage Energy Solutions",

    locale: "en_KE",

    type: "website",

    images: [
      {
        url: "/solar-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Amperage Energy solar energy solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Amperage Energy | Solar Energy Solutions in Kenya",

    description:
      "Reliable renewable energy solutions for homes, businesses and institutions across Kenya and East Africa.",

    images: ["/solar-bg.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: "Amperage Energy Solutions",

    url: "https://amperage-energy-omega.vercel.app",

    logo: "https://amperage-energy-omega.vercel.app/logoo.png",

    description:
      "Amperage Energy Solutions provides solar installation, battery storage, heat pump water heating, energy audits, and solar maintenance services in Kenya and across East Africa.",

    telephone: "+254726050901",

    email: "info@amperageenergy.com",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Tatu City",
      streetAddress: "Along Jacaranda Road",
      addressCountry: "KE",
    },

    areaServed: [
      {
        "@type": "Country",
        name: "Kenya",
      },
      {
        "@type": "Place",
        name: "East Africa",
      },
    ],

    sameAs: [
      "https://www.facebook.com/share/1BhygU6ZTc/",
      "https://www.tiktok.com/@amperage.energy.sol",
    ],

    knowsAbout: [
      "Solar Energy",
      "Solar Installation",
      "Battery Storage",
      "Heat Pump Water Heating",
      "Energy Audits",
      "Solar Maintenance",
      "Renewable Energy",
      "Energy Management",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />

        {children}

        <Footer />

        <ScrollToTop />

        <WhatsAppButton />
      </body>
    </html>
  );
}