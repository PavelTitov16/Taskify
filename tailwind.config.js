/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        '5_5': '22px',
      },
      colors: {
        white: '#FFFFFF',
        gray3: '#E5E7EB',
        primary: '#3758F9',
        primaryText: '#637381',
        secondaryText: '#8899A8',
        font: '#231F20',
        dark: '#111928',
        pageBg: '#f9fafb',
        stroke: '#DFE4EA',
        dark5: '#6B7280',
        dark6: '#9CA3AF',
      },
      fontFamily: {
        inter: "Inter', sans-serif",
      },
    },
  },
  plugins: [],
};
