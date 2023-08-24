/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'radio-shadow': '0 4px 6px -1px rgba(245, 158, 11, 1)', // Replace with your desired color values
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'primary': '#FF9F15',
        'headingColor': '#212C47',
        'balablue': '#1F2B4A',
        'bulaba': '#0c1325',
        'secondary': '#4F5871',
        'light': '#F8F8F8'
      }
    },
  },
  plugins: [],
}
