import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FORDAC Connect",
  description:
    "Plateforme officielle du parti FORDAC — Forces Démocratiques pour l’Action et le Changement.",
  keywords: [
    "FORDAC",
    "Forces Démocratiques pour l’Action et le Changement",
    "Parti politique",
    "Cameroun",
    "Action citoyenne",
  ],
  openGraph: {
    title: "FORDAC Connect",
    description:
      "Découvrez le parti FORDAC — Forces Démocratiques pour l’Action et le Changement.",
    url: "https://fordac-connect.org",
    siteName: "FORDAC Connect",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.className} bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 antialiased`}
      >
        {/* 🟩 En-tête principale */}
        <Header />

        {/* 🧱 Contenu principal */}
        <main className="pt-24 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          {children}
        </main>

        {/* 🟩 Pied de page */}
        <Footer />
      </body>
    </html>
  );
}
