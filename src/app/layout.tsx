import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/data/portfolio";
import CursorGlow from "@/components/CursorGlow";
import SignalField from "@/components/SignalField";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: `${site.name} | Portfolio`,
  description: site.tagline,
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable}`}>
      <body className="antialiased">
        <div className="mesh-bg" aria-hidden />
        <SignalField />
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
