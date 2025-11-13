/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fordac: {
          dark: "#115E3A",
          primary: "#1FA76F",
          light: "#40C79E",
        },
        text: {
          dark: "#1A1A1A",
          light: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
