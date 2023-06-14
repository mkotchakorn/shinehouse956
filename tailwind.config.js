/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#615546',
        secondary: '#A46833',
        primary_action: '#BB6E2A',
        background: '#C5C5C5',
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
