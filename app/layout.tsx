import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
import { CookieConsent } from "@/components/ui/cookie-consent";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://quickstartgenai.com'),
  title: {
    default: "Local LLM Development Guide: Build AI Applications Without ML Expertise",
    template: "%s | Practical Generative AI Development"
  },
  description: "Learn to build production-ready AI applications with local LLM inference. Step-by-step guide for developers covering RAG, AI agents, and practical implementations without cloud dependencies.",
  keywords: [
    "local LLM development",
    "AI application development",
    "RAG implementation",
    "AI agents tutorial",
    "generative AI guide",
    "LLM inference",
    "practical AI development",
    "machine learning for developers",
    "local AI deployment",
    "AI without cloud",
    "Python AI development",
    "LangChain tutorial",
    "llama.cpp guide",
    "AI application architecture",
    "enterprise AI development"
  ],
  alternates: {
    canonical: 'https://quickstartgenai.com'
  },
  authors: [
    { name: "Shamim Bhuiyan" },
    { name: "Timur Isachenko" }
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://quickstartwithai.com',
    siteName: 'Generative AI with Local LLM',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Generative AI with Local LLM - Book Cover'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Generative AI - Local LLM Development Guide',
    description: 'Master Generative AI development with local LLM inference. A practical guide for developers.',
    images: ['/og-image.jpg']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <CookieConsent />
      </body>
      <GoogleAnalytics gaId="G-KGCFHJRQET" />
    </html>
  );
}
