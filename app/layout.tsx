import "./globals.css";
import { Inter } from "next/font/google";

import TopNavbar from "@/components/TopNavbar";
import MainNavbar from "@/components/MainNavbar";
import MobileNav from "@/components/mobile-nav";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "FORDAC Connect",
  description: "Plateforme officielle des Forces Démocratiques pour l’Action et le Changement",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.className}>
      <body className="bg-gray-50">

        {/* MOBILE NAV BUTTON */}
        <div className="md:hidden flex justify-end pr-4 pt-4">
          <MobileNav />
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:block">
          <TopNavbar />
          <MainNavbar />
        </div>

        <main>{children}</main>
      </body>
    </html>
  );
}
