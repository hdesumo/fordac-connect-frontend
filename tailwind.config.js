/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",     // pages et layouts Next.js
    "./components/**/*.{js,ts,jsx,tsx}", // tous les composants globaux
  ],
  theme: {
    extend: {
      colors: {
        // 🎨 Palette institutionnelle FORDAC
        fordacGreen: "#1B7F5E",   // Vert principal du parti
        fordacDark: "#0F3B2E",    // Vert foncé (header, footer)
        fordacLight: "#D9EFE5",   // Vert clair (fonds, hover)
        fordacGold: "#C6A15B",    // Doré (accents, titres)
        fordacGray: "#E5E7EB",    // Gris clair neutre
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-in-out",
      },
    },
  },
  plugins: [],
};
