import type { Metadata } from "next";
import { Markazi_Text, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const markaziText = Markazi_Text({
  variable: "--font-markazi-text",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Michelle Blanchette | Full-Stack Web Developer",
  description: "Michelle Blanchette is a full-stack web developer with 8+ years of experience working with Fortune 500 companies. She is specialized in React, TypeScript, and API integrations.",
  icons: {
    icon: "/favicon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${markaziText.variable} ${inter.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
