/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        yellow: "#F4D04E",
        gray: "#7F7F7F",
      },
      screens: {
        desktop: "1440px",
      },
    },
  },
  plugins: [],
};
