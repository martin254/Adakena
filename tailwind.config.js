/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f8f6fb",
        secondary: "#452372",
        secondaryOne: "#ffbcb1",
        tertiary: "#272626",
        gray: {
          10: "#EEEEEE",
          20: "#A2A2A2",
          30: "#7B7B7B",
          50: "#585858",
          90: "#141414",
        },
      },
      fontFamily: {
        fun: ['"Patrick Hand"', 'cursive'],
        story: ['"Comic Neue"', 'cursive'],
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 6s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'tilt': 'tilt 0.4s ease-in-out',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'fadeIn': 'fadeIn 1.5s ease-in-out both',
        'slideInLeft': 'slideInLeft 1.2s ease-out both',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'sparkle-twinkle': 'twinkle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        tilt: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(2deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        sparkle: {
          '0%, 100%': { opacity: 0.3, transform: 'scale(1)' },
          '50%': { opacity: 0.9, transform: 'scale(1.4)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-50%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        pulseGlow: {
          '0%, 100%': {
            transform: 'scale(1)',
            opacity: '1',
            filter: 'drop-shadow(0 0 10px #facc15)',
          },
          '50%': {
            transform: 'scale(1.1)',
            opacity: '0.8',
            filter: 'drop-shadow(0 0 20px #facc15)',
          },
        },
        twinkle: {
          '0%, 100%': { opacity: 0.4, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.2)' },
        },
      },
    },
  },
  plugins: [],
}
