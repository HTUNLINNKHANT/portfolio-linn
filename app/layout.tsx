import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://htunlinnkhant.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Htun Linn Khant | Backend & Full-Stack Developer from Myanmar",
  description:
    "Htun Linn Khant is a Backend and Full-Stack Developer from Myanmar, currently based in Malaysia, specializing in scalable APIs, backend systems, PostgreSQL, Node.js, Next.js, DevOps, and production web applications.",
  authors: [{ name: "Htun Linn Khant", url: siteUrl }],
  creator: "Htun Linn Khant",
  publisher: "Htun Linn Khant",
  keywords: [
    "Htun Linn Khant",
    "Backend Developer",
    "Full-Stack Developer",
    "Myanmar Developer",
    "Node.js",
    "NestJS",
    "Next.js",
    "PostgreSQL",
    "REST API",
    "DevOps",
    "Software Engineer Myanmar",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Htun Linn Khant",
    title: "Htun Linn Khant | Backend & Full-Stack Developer from Myanmar",
    description:
      "Htun Linn Khant is a Backend and Full-Stack Developer from Myanmar, currently based in Malaysia, specializing in scalable APIs, backend systems, PostgreSQL, Node.js, Next.js, DevOps, and production web applications.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Htun Linn Khant | Backend & Full-Stack Developer from Myanmar",
    description:
      "Htun Linn Khant is a Backend and Full-Stack Developer from Myanmar, currently based in Malaysia, specializing in scalable APIs, backend systems, PostgreSQL, Node.js, Next.js, and DevOps.",
    creator: "@htunlinnkhant",
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Htun Linn Khant",
  url: siteUrl,
  jobTitle: "Backend & Full-Stack Developer",
  nationality: {
    "@type": "Country",
    name: "Myanmar",
  },
  sameAs: [
    "https://github.com/HTUNLINNKHANT",
    "https://linkedin.com/in/htun-linn-khant-60a308243/",
  ],
  knowsAbout: [
    "Backend Development",
    "Full-Stack Development",
    "Node.js",
    "NestJS",
    "PostgreSQL",
    "Next.js",
    "REST API Development",
    "System Architecture",
    "DevOps",
    "Database Design",
    "CI/CD",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9D87ETSED6"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9D87ETSED6');
            `,
          }}
        />
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
