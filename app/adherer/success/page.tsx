"use client";

import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-primary to-green-900 text-light flex flex-col items-center justify-center p-8 text-center">
      <CheckCircle className="text-green-400 w-20 h-20 mb-6" />

      <h1 className="text-3xl font-bold mb-4">
        Votre adhésion a été enregistrée ✅
      </h1>

      <p className="max-w-lg text-secondary mb-10 leading-relaxed">
        Merci d’avoir rejoint le <strong>FORDAC</strong>, mouvement citoyen pour un Cameroun
        juste et responsable.  
        <br />
        Vous serez prochainement contacté par notre coordination régionale.
      </p>

      <Link
        href="/"
        className="bg-secondary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-green-100 transition"
      >
        Retour à l’accueil
      </Link>
    </main>
  );
}
