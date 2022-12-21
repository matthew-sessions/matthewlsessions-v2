module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/home/*.{js,jsx}",
    "./components/malt/*.{js,jsx}",
    "./components/housing/*.{js,jsx}",
    "./components/notion/*.{js,jsx}",
    "./components/malt/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        catamaran: ['Catamaran', 'sans-serif'],
        merriweather: ['Merriweather Sans', 'sans-serif'],
        roboto: ['Roboto']
      },
      colors: {
        'logo-green': '#a5e06c',
        'logo-green-lite': '#BAE591'
      }
    },
  },
  plugins: [],
}