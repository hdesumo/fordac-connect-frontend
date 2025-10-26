/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1B5E20", // Vert FORDAC
        secondary: "#4CAF50", // Vert clair accent
        neutral: "#F4F1EE",
        dark: "#1E1E1E",
        light: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
