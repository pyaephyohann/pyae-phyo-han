/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#42B883",
        secondary: {
          100: "#242424",
          200: "#2F2F2F",
        },
      },
    },
  },
  plugins: [],
};
