module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans-thai': ['"IBM Plex Sans Thai"', 'cursive'],
      },
    },
  },
  plugins: [require("daisyui")],
}
