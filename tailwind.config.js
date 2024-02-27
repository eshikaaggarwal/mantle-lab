 


// tailwind.config.js
module.exports = {

  content: [
    './public/index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
],
  darkMode: 'class', 
  theme: {
    extend: {
      backgroundColor: {
        'dark': '#1a202c',
      },
      textColor: {
        'dark': '#ffffff',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
