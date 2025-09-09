/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],       // Poppins
        serif: ['var(--font-serif)', 'serif'],          // Cormorant SC
        mono: ['var(--font-mono)', 'monospace'],        // Geist Mono
      },
      colors: {
        red: '#FA0109',
        blue: '#3E3ECC',
        grey: '#909090',
        blackblue: '#17171A',
      },
      fontSize: {
        // Poppins font sizes
        'poppins-sm': ['14px', '20px'],
        'poppins-base': ['16px', '24px'],
        'poppins-lg': ['18px', '28px'],
        'poppins-xl': ['20px', '30px'],
        'poppins-2xl': ['24px', '34px'],
       
        // Cormorant SC font sizes
        'cormorant-lg': ['22px', '30px'],
        'cormorant-xl': ['26px', '36px'],
        'cormorant-2xl': ['50px', '60px'],
        'cormorant-6xl': ['120px', '140px'],
      },
    },
  },
  plugins: [],
}
