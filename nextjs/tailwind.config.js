module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/home/*.{js,jsx}",
    "./components/housing/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        catamaran: ['Catamaran', 'sans-serif'],
        merriweather: ['Merriweather Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
}