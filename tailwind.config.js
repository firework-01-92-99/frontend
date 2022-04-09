module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans-thai': ['"IBM Plex Sans Thai"', 'cursive'],
      },
      colors: {
        'dark-blue': '#21283A',
        'orange-1': '#FF7B19',
        'orange-2': '#E3701B',
        'gray-1': '#DEE0E9',
        'gray-2': '#F4F4F4'
      }
    },
  },
  plugins: [require("daisyui")],
}
