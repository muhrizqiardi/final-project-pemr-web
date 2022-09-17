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
          footer:"#000000",
          primary: "#FFF73E",
          secondary: "#C16060",
          button:"#12355B",
          light: "#FCF7EE"
        },
      },
    },
  },
  plugins: [],
};
