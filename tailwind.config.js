/** @type {import('next').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
        arial: ['Arial', 'Helvetica', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#1d4ed8',
          600: '#1e40af',
          700: '#1d4ed8',
          800: '#1e3a8a',
          900: '#172554',
          accent: '#f59e0b',
          crimson: '#dc2626'
        }
      }
    },
  },
  plugins: [],
};
