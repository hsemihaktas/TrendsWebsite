import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Design Trends",
  description: "33 UI/UX tasarım akımını keşfet — referans, örnek ve kullanım rehberleriyle.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={geistSans.variable}>
      <body className="min-h-screen bg-[#F8F7F4]">
        <Navbar />
        <main className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-10">
          {children}
        </main>
      </body>
    </html>
  );
}
