/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [],
  theme: {
    extend: {
      colors: {
        pastel: {
          blue: "#A7C7E7",
          green: "#B7EFC5",
          yellow: "#FFFACD",
          pink: "#FFD1DC",
          purple: "#E0BBE4",
          orange: "#FFE5B4",
        },
      },
    },
  },
  plugins: [],
};
