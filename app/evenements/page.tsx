"use client";
import { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { fr } from "date-fns/locale";
import { format, parseISO } from "date-fns";
import { API_BASE_URL } from "@/lib/api";
import { motion } from "framer-motion";
import "react-big-calendar/lib/css/react-big-calendar.css";

// 🗓️ Configuration du localizer
import { DateLocalizer } from "react-big-calendar";
import { format as formatDate, parse, startOfWeek, getDay } from "date-fns";

function dateFnsLocalizer({ format, parse, startOfWeek, getDay, locales }): DateLocalizer {
  return momentLocalizer({ format, parse, startOfWeek, getDay, locales });
}

const locales = { fr };

const localizer = dateFnsLocalizer({
  format: formatDate,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales,
});

interface EventItem {
  id: number;
  title: string;
  description: string;
  location?: string;
  start_date: string;
  end_date: string;
}

export default function EvenementsPage() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<EventItem | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/events`);
        const data = await res.json();
        setEvents(data);
      } catch (error) {
        console.error("Erreur chargement événements:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const formattedEvents = events.map((e) => ({
    id: e.id,
    title: e.title,
    start: parseISO(e.start_date),
    end: parseISO(e.end_date),
    allDay: false,
    resource: e,
  }));

  return (
    <section className="min-h-screen bg-neutral dark:bg-[#0d1a0d] text-dark dark:text-light py-20 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-primary dark:text-secondary mb-10 text-center"
        >
          Agenda du FORDAC Connect
        </motion.h1>

        {loading ? (
          <p className="text-center text-gray-500">Chargement du calendrier...</p>
        ) : (
          <div className="bg-white dark:bg-[#102010] shadow-lg rounded-2xl p-6">
            <Calendar
              localizer={localizer}
              events={formattedEvents}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 600 }}
              views={["month", "week", "day"]}
              messages={{
                month: "Mois",
                week: "Semaine",
                day: "Jour",
                today: "Aujourd’hui",
                previous: "Précédent",
                next: "Suivant",
              }}
              onSelectEvent={(event) => setSelected(event.resource)}
              eventPropGetter={() => ({
                style: {
                  backgroundColor: "#1b5e20",
                  color: "#fff",
                  borderRadius: "6px",
                  border: "none",
                  padding: "2px 6px",
                },
              })}
            />
          </div>
        )}

        {/* 📅 Modal événement */}
        {selected && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white dark:bg-[#102010] text-dark dark:text-light rounded-2xl shadow-2xl p-8 max-w-lg w-full relative"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-4 text-gray-500 hover:text-secondary text-lg"
              >
                ✕
              </button>

              <h2 className="text-2xl font-semibold text-primary dark:text-secondary mb-3">
                {selected.title}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {format(parseISO(selected.start_date), "PPPp", { locale: fr })} —{" "}
                {format(parseISO(selected.end_date), "PPPp", { locale: fr })}
              </p>
              {selected.location && (
                <p className="text-sm mb-3">
                  📍 <strong>Lieu :</strong> {selected.location}
                </p>
              )}
              <p className="text-gray-700 dark:text-gray-300">{selected.description}</p>

              <div className="text-right mt-6">
                <button
                  onClick={() => setSelected(null)}
                  className="btn-outline text-sm hover:bg-secondary hover:text-white"
                >
                  Fermer
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
