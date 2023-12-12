/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "black-primario":"#302732",
        "black-secundario": "#36303b",
        "black-terciario": "#110e1a",
      }
    },
  },
  plugins: [],
}

