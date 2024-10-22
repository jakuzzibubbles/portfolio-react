/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fontFamily: {
      display: ["Ubuntu", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#8B008B",
        background: "#000000",
        cardbg: "#4169E1",
        white:"#FBFBFB",

        navbg: "#191970",

        overlayBg: "#C71585",
      }
    },
  },
  plugins: [],
}

