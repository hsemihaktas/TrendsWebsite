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
    <html lang="tr" className={geistSans.variable} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var m=window.matchMedia('(prefers-color-scheme:dark)').matches;if(t==='dark'||(t===null&&m)){document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen bg-[#F8F7F4] dark:bg-[#111110] transition-colors duration-200">
        <Navbar />
        {/* px-4 mobile, px-6 sm, px-8 md, px-10 lg — yatay kaymayı önler */}
        <main className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-10">
          {children}
        </main>
      </body>
    </html>
  );
}
