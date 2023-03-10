/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        chaney: ["Chaney, sans-serif"],
        mukta: ["Mukta, sans-serif"],
      },
    },
  },
  plugins: [],
};
