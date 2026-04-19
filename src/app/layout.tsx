import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { personalInfo, siteMetadata } from "@/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: `%s | ${personalInfo.name}`,
    default: siteMetadata.title,
  },
  description: siteMetadata.description,
  keywords: ["Portfolio", "Janick Braun", "Fullstack Developer", "Founder", "Software Engineer", "Web Development"],
  authors: [{ name: siteMetadata.author, url: siteMetadata.siteUrl }],
  creator: siteMetadata.author,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteMetadata.siteUrl,
    title: siteMetadata.title,
    description: siteMetadata.description,
    siteName: siteMetadata.title,
    images: [
      {
        url: "/images/me/profile.jpg",
        width: 1200,
        height: 1200,
        alt: personalInfo.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    creator: "@janickbraun",
    images: ["/images/me/profile.jpg"],
  },
  icons: {
    icon: [
      { url: "/logo/favicon.ico", sizes: "any" },
      { url: "/logo/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/logo/apple-icon.png" },
    ],
  },
  manifest: "/logo/manifest.json",
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col pt-16" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
