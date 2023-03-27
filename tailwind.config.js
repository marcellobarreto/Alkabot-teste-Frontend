/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        verdeBiond: '#60673b'
      },
      screens: {
        mobile: { max: '639px' }
      }
    },
    fontFamily: {
      sans: ['"Exo 2"']
    }
  },
  plugins: []
}
