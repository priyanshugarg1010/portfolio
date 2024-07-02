/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EB5939",
        creamText: "#B7AB98",
        primaryBG: "#0D0D0D",
        secondaryBG: "#111111",
      },
    },
  },
  plugins: [],
};
