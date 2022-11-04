/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { jost: ["jost", "sans-serif"] },
      colors: { "tg-blue": "#3aa3e0" },
      maxWidth: {
        "columns-8-1280": "448px",
        "columns-12-1280": "680px",
        "columns-6-1920": "592px",
        "columns-12-1920": "1280",
      },
    },
  },
  plugins: [],
};
