"use client";

export default function Pagination({
  page,
  total,
  onNext,
  onPrev,
}: {
  page: number;
  total: number;
  onNext: () => void;
  onPrev: () => void;
}) {
  return (
    <div className="flex items-center justify-center gap-4 mt-8">
      <button
        onClick={onPrev}
        disabled={page === 1}
        className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-40"
      >
        ← Précédent
      </button>

      <span className="text-gray-600 font-medium">Page {page}</span>

      <button
        onClick={onNext}
        disabled={page === total}
        className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-40"
      >
        Suivant →
      </button>
    </div>
  );
}
