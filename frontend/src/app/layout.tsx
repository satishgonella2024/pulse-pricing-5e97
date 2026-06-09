import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import React from "react";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  title: {
    default: "Pulse — Pricing",
    template: "Pulse — %s"
  },
  description:
    "Single-page SaaS pricing for Pulse with Free, Pro, and Enterprise tiers.",
  openGraph: {
    title: "Pulse — Pricing",
    description:
      "Single-page SaaS pricing for Pulse with Free, Pro, and Enterprise tiers.",
    url: "http://localhost:3000/",
    siteName: "Pulse",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Pulse — Pricing",
    description:
      "Single-page SaaS pricing for Pulse with Free, Pro, and Enterprise tiers."
  },
  themeColor: "#0b1220"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} dark`}>
      <body className="min-h-screen selection:bg-accent-500 selection:text-canvas">
        {children}
      </body>
    </html>
  );
}
