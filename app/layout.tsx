import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
import { CookieConsent } from "@/components/ui/cookie-consent";
import { PerformanceProvider } from '@/components/PerformanceProvider'
import { PerformanceDashboard } from '@/components/PerformanceDashboard';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: 'swap',
  preload: true,
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://quickstartgenai.com'),
  title: {
    default: "Generative AI with Local LLM - Complete Development Guide",
    template: "%s | Generative AI with Local LLM"
  },
  description: "Master local LLM development with our comprehensive guide. Learn RAG implementation, AI agents, and production-ready architectures. Available on Leanpub and Google Books.",
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
    "enterprise AI development",
    "AI book",
    "machine learning book",
    "artificial intelligence guide",
    "local language models",
    "offline AI development"
  ],
  alternates: {
    canonical: 'https://quickstartgenai.com',
    types: {
      'application/rss+xml': 'https://blog.quickstartgenai.com/rss/',
    }
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Generative AI - Local LLM Development Guide',
    description: 'Master Generative AI development with local LLM inference. A practical guide for developers.',
    images: ['/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicon Configuration */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Performance Optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://blog.quickstartgenai.com" />
        <link rel="dns-prefetch" href="https://leanpub.com" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        
        {/* Meta Tags */}
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <PerformanceProvider>
          {children}
          <CookieConsent />
          <PerformanceDashboard />
        </PerformanceProvider>
      </body>
      <GoogleAnalytics gaId="G-KGCFHJRQET" />
    </html>
  );
}
