/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#8294B2',
        primary_action: '#8298BD',
        background: '#E9E9E9',
        line: '#4CC764',
      },
      fontSize: {
        xxs: ['10px', '0.75rem'],
        header: ['26px', '2rem'],
      },
      height: {
        navbar: '70px',
      },
      screens: {
        tablet: '920px',
        max_tablet: { max: '920px' },
      },
    },
  },
  plugins: [],
};
