/** @type {import('tailwindcss').Config} */
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
    // screens: {
    //   'sm': '375px',
    //   // => @media (min-width: 375px) { ... }

    //   // 'laptop': '1024px',
    //   // => @media (min-width: 1024px) { ... }

    //   // 'desktop': '1280px',
    //   // => @media (min-width: 1280px) { ... }
    // },
  },
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: "light",
  },
}
