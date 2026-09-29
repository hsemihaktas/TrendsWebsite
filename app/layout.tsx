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
    /*
     * suppressHydrationWarning: sunucu HTML'i ve istemci JS'i arasındaki
     * class farkını (dark/light) bastırır — no-flash script'in zorunlu yan etkisi.
     */
    <html lang="tr" className={geistSans.variable} suppressHydrationWarning>
      <head>
        {/*
         * No-flash theme script: render öncesi çalışır,
         * localStorage'dan veya sistem tercihinden dark class'ını ayarlar.
         */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var m=window.matchMedia('(prefers-color-scheme:dark)').matches;if(t==='dark'||(t===null&&m)){document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen bg-[#F8F7F4] dark:bg-[#111110] transition-colors duration-200">
        <Navbar />
        <main className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-10">
          {children}
        </main>
      </body>
    </html>
  );
}
