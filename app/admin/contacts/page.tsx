"use client";

import { useEffect, useState } from "react";
import ContactsTable from "./components/ContactsTable";
import StatsHeader from "./components/StatsHeader";
import ContactDetail from "./components/ContactDetail";

export default function ContactsDashboard() {
  const [messages, setMessages] = useState([]);
  const [selected, setSelected] = useState(null);

  async function loadMessages() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact/list`);
    const data = await res.json();
    setMessages(data);
  }

  useEffect(() => {
    loadMessages();
  }, []);

  return (
    <div className="min-h-screen bg-[#0c2e25] text-white px-6 py-8">
      <h1 className="text-3xl font-bold text-[#c8a45d] mb-6">
        📬 Gestion des messages (CRM FORDAC)
      </h1>

      <StatsHeader messages={messages} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="col-span-1 lg:col-span-2">
          <ContactsTable messages={messages} onSelect={setSelected} />
        </div>

        <div className="col-span-1">
          {selected ? (
            <ContactDetail message={selected} reload={loadMessages} />
          ) : (
            <div className="p-6 bg-[#0f3a2d] border border-[#1d6047] rounded-lg text-center opacity-70">
              Sélectionnez un message dans la liste ➜
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
