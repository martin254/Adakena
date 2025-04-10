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
        'fly-1': 'fly1 12s ease-in-out infinite alternate',
        'fly-2': 'fly2 14s ease-in-out infinite alternate',
        'fly-3': 'fly3 16s ease-in-out infinite alternate',
        'flap': 'flap 0.6s ease-in-out infinite',
        'scroll-drift': 'scrollDrift 20s linear infinite',
        'hover-updown': 'hoverUpDown 4s ease-in-out infinite',
      },
      keyframes: {
        hoverUpDown: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        flap: {
          '0%, 100%': { transform: 'scaleY(1) skewX(0deg)' },
          '50%': { transform: 'scaleY(0.9) skewX(2deg)' },
        },
        scrollDrift: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(20px)' },
        },
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
        fly1: {
          '0%': { transform: 'translateX(0px) translateY(0px)' },
          '50%': { transform: 'translateX(20vw) translateY(-20px) rotate(10deg)' },
          '100%': { transform: 'translateX(40vw) translateY(0px) rotate(-10deg)' },
        },
        fly2: {
          '0%': { transform: 'translateX(0px) translateY(0px)' },
          '50%': { transform: 'translateX(-20vw) translateY(20px) rotate(-10deg)' },
          '100%': { transform: 'translateX(-40vw) translateY(0px) rotate(10deg)' },
        },
        fly3: {
          '0%': { transform: 'translateX(0px) translateY(0px)' },
          '50%': { transform: 'translateX(25vw) translateY(-15px) rotate(15deg)' },
          '100%': { transform: 'translateX(50vw) translateY(0px) rotate(-15deg)' },
        },
      },
    },
  },
  plugins: [],
}
