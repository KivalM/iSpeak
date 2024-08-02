/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'sans': ['Varela Round', 'sans-serif']
    },
    extend: {}
  },
  plugins: [
    require('daisyui'),
  ],

  daisyui: {
    themes: ["nord", "dim"],
  },
};