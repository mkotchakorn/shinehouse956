/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#615546',
        secondary: '#A46833',
        primary_action: '#BB6E2A',
        background: '#E9E9E9',
        line: '#4CC764'
      },
      fontSize: {
        xxs: ['10px', '0.75rem'],
      },
      height: {
        navbar: '75px'
      },
      screens: {
        tablet: '920px',
        max_tablet: { max: '920px' },
      },
    },
  },
  plugins: [],
};
