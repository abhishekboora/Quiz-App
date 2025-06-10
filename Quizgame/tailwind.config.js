/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        questionFade: 'questionFade 0.5s ease-in-out',
        slideIn: 'slideIn 0.5s ease-in-out',
        shake: 'shake 0.5s ease-in-out',
        pulse: 'pulse 1s ease-in-out infinite',
        cardFade: 'cardFade 0.8s ease-in-out',
        gradientShift: 'gradientShift 3s ease-in-out infinite',
        bgShift: 'bgShift 10s ease-in-out infinite',
        cardScale: 'cardScale 0.8s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        questionFade: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '50%': { transform: 'translateX(5px)' },
          '75%': { transform: 'translateX(-5px)' },
        },
        cardFade: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        bgShift: {
          '0%': { backgroundPosition: '50% 0%' },
          '50%': { backgroundPosition: '50% 100%' },
          '100%': { backgroundPosition: '50% 0%' },
        },
        cardScale: {
          '0%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animationDelay: {
        100: '100ms',
        200: '200ms',
        300: '300ms',
        400: '400ms',
      },
      backgroundSize: {
        '200%': '200%',
      },
    },
  },
  plugins: [],
}