/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#B49F7D',
        secondary: '#DBB880',
      },
      fontSize: {
        xxs: ['10px', '0.75rem'],
      },
      screens: {
        tablet: '920px',
        max_tablet: { max: '920px' },
      },
    },
  },
  plugins: [],
};
