/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fordacGreen: "#1B7F5E",
        fordacDark: "#0F3B2E",
        fordacLight: "#D9EFE5",
        fordacGold: "#C6A15B",
        fordacGray: "#E5E7EB",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      boxShadow: {
        card: "0 6px 16px rgba(0, 0, 0, 0.08)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-in-out",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
