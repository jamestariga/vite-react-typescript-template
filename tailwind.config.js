/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blurred: 'rgba(255, 255, 255, 0.25)',
      },
      screens: {
        '3xl': '1629px',
        '4xl': '2560px',
      },
    },
  },
  plugins: [],
}
