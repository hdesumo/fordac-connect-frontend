"use client";

import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-fordacGreen to-fordacDark text-white flex flex-col items-center justify-center p-8 text-center">
      <CheckCircle className="text-fordacGold w-20 h-20 mb-6" />

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Demande d’adhésion envoyée avec succès ✅
      </h1>

      <p className="max-w-lg text-gray-100 mb-10 leading-relaxed">
        Merci d’avoir soumis votre demande d’adhésion au{" "}
        <strong>FORDAC</strong>, les Forces Démocratiques pour l’Action et le Changement.
        <br />
        Vous serez prochainement contacté(e) par notre coordination régionale
        pour finaliser votre inscription.
      </p>

      <Link
        href="/"
        className="bg-fordacGold text-fordacDark px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
      >
        Retour à l’accueil
      </Link>
    </main>
  );
}
