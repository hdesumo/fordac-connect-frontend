"use client";

import StatusBadge from "./StatusBadge";

export default function StatsHeader({ messages }) {
  const total = messages.length;
  const unread = messages.filter((m) => m.status === "new").length;
  const replied = messages.filter((m) => m.status === "replied").length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-[#0f3a2d] border border-[#1d6047] rounded-lg p-4">
        <h3 className="text-lg font-bold text-[#c8a45d]">Total</h3>
        <p className="text-3xl">{total}</p>
      </div>

      <div className="bg-[#0f3a2d] border border-[#1d6047] rounded-lg p-4">
        <h3 className="text-lg font-bold text-[#c8a45d]">Non lus</h3>
        <p className="text-3xl">{unread}</p>
      </div>

      <div className="bg-[#0f3a2d] border border-[#1d6047] rounded-lg p-4">
        <h3 className="text-lg font-bold text-[#c8a45d]">Répondus</h3>
        <p className="text-3xl">{replied}</p>
      </div>
    </div>
  );
}
