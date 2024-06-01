/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css}',
  ],
  theme: {
    extend: {
      colors: {
        empirica: {
          50: '#fbfcfe',
          100: '#f2f7fd',
          200: '#bcd8f6',
          300: '#8abbef',
          400: '#549ce8',
          500: '#237fe1',
          600: '#1966b8',
          700: '#124b87',
          800: '#0c325a',
          900: '#06192d',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    // Add any additional plugins here
  ],
}
