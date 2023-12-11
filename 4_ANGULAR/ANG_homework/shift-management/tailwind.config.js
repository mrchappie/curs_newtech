/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./pages/*/*.{html,ts}",
    // "./components/*/*.{html,ts}",
    // "./index.html",
    "./**/*.{html,js}",
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
