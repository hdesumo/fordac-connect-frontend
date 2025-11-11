/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // ou 'media' si tu veux qu’il s’adapte au système
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#006838",       // Vert FORDAC
        secondary: "#0A0A0A",     // Noir profond
        accent: "#FFD700",        // Doré
        light: "#F9FAFB",         // Fond clair
        dark: "#1F2937",          // Texte sombre
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        serif: ["Merriweather", "serif"],
      },
      boxShadow: {
        soft: "0 4px 10px rgba(0,0,0,0.08)",
        lgsoft: "0 10px 25px rgba(0,0,0,0.12)"
      },
      borderRadius: {
        xl: "1rem",
        '2xl': "1.5rem"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-out",
        slideUp: "slideUp 0.8s ease-out",
      },
    },
  },
  plugins: [
  require("@tailwindcss/forms"),
  require("@tailwindcss/typography"),
  require("tailwindcss-animate"),
],
};
