import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "FORDAC Connect",
  description:
    "Mouvement Citoyen pour un Cameroun Juste et Responsable — FORDAC Connect",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 transition-colors duration-500 font-sans">
        {/* 🟩 Navbar fixe */}
        <Navbar />

        {/* 🧱 Contenu principal (espacé de la barre) */}
        <div className="pt-20">{children}</div>
      </body>
    </html>
  );
}
