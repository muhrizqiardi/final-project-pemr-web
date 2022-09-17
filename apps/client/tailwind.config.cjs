/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          primary: "#E3DD40",
          secondary: "#C16060",
          light: {
            200: "#F5FFBA",
            100: "#FCFFEB",
          },
        },
      },
    },
  },
  plugins: [],
};
