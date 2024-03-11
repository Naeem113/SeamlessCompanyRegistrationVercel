/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary:'#5441FF',
        secondary:'#4f46e5',
        danger: '#F45A4F',
        warning: 'orange',
        info: '#60A5FA',
        link:'#4560CB',
        tsecondary:'#858585'
      },
      fontFamily: {
        inter: "Inter",
      },
    },
  },
  plugins: [],
}

