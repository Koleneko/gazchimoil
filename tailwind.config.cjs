/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['Montserrat'],
      mono: ['Montserrat'],
      serif: ['Montserrat'],
    },
    extend: {
      colors: {
        "primary": "#17B6C0"
      },
      gridTemplateColumns: {
        'footer': "1fr auto 1fr"
      }
    },
  },
  plugins: [],
};
