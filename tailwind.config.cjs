/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#3478F6',
        'secondary-blue': '#2D6FE6',
        'dark-blue': '#0F2B52',
        'light-blue': '#EBF2FF',
        'mint-green': '#CBDAD0',
        'light-gray': '#F6F6F9',
        'gray': '#888',
        'dark-gray': '#333',
      }
    },
  },
  plugins: [],
};
