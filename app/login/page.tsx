"use client";
import { useState } from "react";
import { loginMember } from "@/lib/api";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await loginMember(form);
      if (res.token) {
        localStorage.setItem("fordac_token", res.token);
        setMessage("✅ Connexion réussie !");
        window.location.href = "/dashboard";
      } else {
        setMessage("❌ Identifiants incorrects.");
      }
    } catch (err) {
      setMessage("❌ Erreur serveur. Réessayez plus tard.");
    }
  };

  return (
    <div className="max-w-md mx-auto py-20 px-6">
      <h1 className="text-3xl font-bold text-center text-primary mb-8">
        Connexion membre
      </h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Mot de passe"
          value={form.password}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
          required
        />
        <button
          type="submit"
          className="bg-primary text-white px-6 py-3 rounded-xl hover:bg-accent w-full"
        >
          Se connecter
        </button>
      </form>
      {message && <p className="mt-6 text-center text-accent">{message}</p>}
    </div>
  );
}
