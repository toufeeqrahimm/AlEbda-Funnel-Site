/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        cairo: ['Cairo','ui-sans-serif','system-ui','-apple-system','Segoe UI','Roboto','Ubuntu','Helvetica Neue','Arial']
      }
    },
  },
  plugins: [],
}
