import "./globals.css";
import Navbar from "@/components/Navbar";
import MarqueeBanner from "@/components/MarqueeBanner";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FORDAC Connect",
  description: "Portail officiel du FORDAC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>

        {/* ===== NAVBAR UNIFIÉ (DESKTOP + MOBILE) ===== */}
        <Navbar />

        {/* ===== MARQUEE NATIONAL ===== */}
        <MarqueeBanner />

        {/* ===== CONTENU ===== */}
        <main className="min-h-screen pt-4">
          {children}
        </main>

        {/* ===== FOOTER ===== */}
        <Footer />

      </body>
    </html>
  );
}
