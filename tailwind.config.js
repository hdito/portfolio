const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        noto: ["var(--font-noto)", ...fontFamily.sans],
      },
      colors: { "tg-blue": "#3aa3e0" },
      maxWidth: {
        "columns-8-1280": "448px",
        "columns-12-1280": "680px",
        "columns-6-1920": "592px",
        "columns-12-1920": "1280px",
      },
    },
  },
  plugins: [],
};
