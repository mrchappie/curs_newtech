/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{html,js}",
    "./src/app/**/*.ts",
    "./src/index.html",
  ],
  theme: {
    extend: {
      // colors
      colors: {
        baseColor: "#22BBAC",
        secColor: "#4C4C4C",
        accentColor: "",
      },

      height: {
        content: "calc(100vh - 100px)",
      },
      darkTheme: {},
      lightTheme: {},
    },
  },
  plugins: [],
};
