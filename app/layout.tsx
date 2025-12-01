import "./globals.css";
import TopNavbar from "@/components/TopNavbar";
import MainNavbar from "@/components/MainNavbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FORDAC Connect",
  description: "Plateforme officielle du FORDAC",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={inter.className}>
      <body className="bg-gray-50 text-gray-900">

        {/* MENU PRINCIPAL */}
        <TopNavbar />
        <MainNavbar />

        <main className="min-h-screen pt-4">{children}</main>
      </body>
    </html>
  );
}
