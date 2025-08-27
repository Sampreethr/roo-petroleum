import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { BRAND_MESSAGING } from "@/lib/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: BRAND_MESSAGING.companyName,
    template: `%s | ${BRAND_MESSAGING.companyName}`,
  },
  description: BRAND_MESSAGING.description,
  keywords: [
    "petroleum",
    "fuel supply",
    "energy",
    "oil distribution",
    "logistics",
    "reliable fuel",
    "petroleum products",
  ],
  authors: [{ name: BRAND_MESSAGING.companyName }],
  creator: BRAND_MESSAGING.companyName,
  publisher: BRAND_MESSAGING.companyName,
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://roopetroleum.com",
    title: BRAND_MESSAGING.companyName,
    description: BRAND_MESSAGING.description,
    siteName: BRAND_MESSAGING.companyName,
  },
  twitter: {
    card: "summary_large_image",
    title: BRAND_MESSAGING.companyName,
    description: BRAND_MESSAGING.description,
    creator: "@roopetroleum",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        className={`${inter.variable} ${robotoMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
