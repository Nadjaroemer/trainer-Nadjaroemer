/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#000000",
        secondary: "#F1C40E",
        tertiary: {
          700: "#9E9E9E",
          500: "#D4D4D4",
          200: "#FBFBFB",
        },
      },
    },
  },
  plugins: [],
};
