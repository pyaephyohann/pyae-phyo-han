/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00DFA2",
        secondary: {
          100: "#242424",
          200: "#2F2F2F",
        },
        transparent: "#A1A1AA",
      },
      fontFamily: {
        title: ["Lobster"],
      },
    },
  },
  plugins: [],
};
