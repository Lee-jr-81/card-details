/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        fontname: ["space grotesk", "sans serif"],
      },
      backgroundImage: {
        hero: "url('./images/bg-main-desktop.png')",
      },
    },
  },
  plugins: [],
};
