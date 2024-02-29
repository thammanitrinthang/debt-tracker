/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {  
    extend: {
    colors: {
      'custom-blue': '#59A1C9',
    }
  },
    fontFamily: {
      'sans': ['Sarabun, sans-seri'],
    }, 
    extend: {},
  },
  plugins: [require("daisyui")],
}