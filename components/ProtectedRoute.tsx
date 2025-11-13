import ProtectedRoute from "@/components/ProtectedRoute";

export default function ProfilPage() {
  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 px-6 py-16">
        <h1 className="text-3xl font-bold mb-6 text-green-700 dark:text-amber-400">
          Mon Profil
        </h1>
        {/* Contenu de la page */}
      </main>
    </ProtectedRoute>
  );
}
