// app/layout.tsx

import "./globals.css";
import Link from "next/link";

import MarqueeBanner from "@/components/MarqueeBanner";
import Footer from "@/components/Footer";
import MobileNav from "./mobile-nav"; // wrapper client

export const metadata = {
  title: "FORDAC Connect",
  description: "Plateforme officielle FORDAC Connect",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="has-navbar bg-[#0c2e25] text-white">

        {/* NAVBAR (client wrapper) */}
        <MobileNav />

        {/* BANDE BLANCHE */}
        <div className="w-full h-2 bg-white/90 mt-[72px]"></div>

        {/* MARQUEE */}
        <MarqueeBanner />

        {/* CONTENU */}
        <main className="pt-4">
          {children}
        </main>

        {/* FOOTER */}
        <Footer />
      </body>
    </html>
  );
}
