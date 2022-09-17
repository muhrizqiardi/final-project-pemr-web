/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        sans: "Inter, Arial, Helvetica, sans-serif",
      },
      colors: {
        custom: {

          primary: "#FCF7EE",
          secondary: "#C16060",
          footer:"#D9D9D9",
          button:"#12355B",
          light: {
            500: "#FFF73E",
            400: "#E3DD40",
            200: "#F5FFBA",
            100: "#FCFFEB",
          },
        },
      },
    },
  },
  plugins: [],
};
