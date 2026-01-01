import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    default: "Parlevu Global Services LLC | We Buy Houses Fast & As-Is",
    template: "%s | Parlevu Global"
  },
  description: "Sell your house fast for cash in DC, Maryland, and Virginia. We buy houses in any condition with no repairs, no fees, and no commissions. Get your fair cash offer today!",
  keywords: ["sell my house fast", "cash home buyers", "Maryland real estate", "Virginia home buyers", "DC cash offer", "we buy houses as-is"],
  openGraph: {
    title: "Parlevu Global Services LLC | We Buy Houses Fast & As-Is",
    description: "The most trusted home buying company in the DMV. Get a fair cash offer and close in as little as 7 days.",
    url: "https://parlevugloballlc.com",
    siteName: "Parlevu Global",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Parlevu Global Services LLC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parlevu Global Services LLC | We Buy Houses Fast",
    description: "Sell your house fast for cash in any condition. No fees, no repairs. Get an offer today!",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
