/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      keyframes:{
        'open-menu':{
          '0%': {Transform: 'scaleY(0)'},
          '80%': {Transform: 'scaleY(1.2)'},
          '100%': {Transform: 'scaleY(1)'},
        },
      },
      animation:{
        'open-menu': 'open-menu 0.5s ease-in-out forward'
      }
    },
  },
  plugins: [],
}
