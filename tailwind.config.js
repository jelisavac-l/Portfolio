/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",
],
theme: {
  extend: {
    colors: {
      'background': '#0b0c10',
      'accent': '#66fcf1',
      'card': 'rgba(255,255,255,0.05)'
    },
    backdropBlur: {
      xs: '2px',
    },
    keyframes: {
      float: {
        '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
        '50%': { transform: 'translate(40px, -30px) scale(1.1)' },
      },
      glow: {
        '0%, 100%': { opacity: '0.7', filter: 'blur(90px)' },
        '50%': { opacity: '1', filter: 'blur(110px)' },
      },
    },
    animation: {
      float1: 'float 18s ease-in-out infinite',
      float2: 'float 24s ease-in-out infinite reverse',
      glow: 'glow 10s ease-in-out infinite',
    },
    
  },
},
plugins: [],

}

