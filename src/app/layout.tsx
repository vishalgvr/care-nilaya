import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NoticeBar from "@/components/NoticeBar";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://carenilaya.com"),
  title: "Care Nilaya | Care That Connects Families — Thrissur City Pilot",
  description:
    "Digital family-care coordination platform designed for Malayali families living outside Kerala whose parents reside in Kerala. Organised weekly check-ins, appointment reminders, and family assistance.",
  keywords: [
    "Care Nilaya",
    "Elder care coordination Kerala",
    "Thrissur family care",
    "NRK parents care Kerala",
    "Malayali family assistance",
    "Digital care coordination",
  ],
  icons: {
    icon: "/brand/icon-lavender.png",
    apple: "/brand/icon-lavender.png",
  },
  openGraph: {
    title: "Care Nilaya | Care That Connects Families",
    description:
      "A digital family-care coordination service for families living away from their parents in Kerala. Initial pilot in Thrissur city.",
    url: "https://carenilaya.com",
    siteName: "Care Nilaya",
    images: [
      {
        url: "/images/hero-parents.jpg",
        width: 1200,
        height: 630,
        alt: "Care Nilaya — Care That Connects Families",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${jakartaSans.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-[#fdfbfe] text-[#1f1726] selection:bg-[#d9c7f2] selection:text-[#3a164b]"
      >
        <NoticeBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
