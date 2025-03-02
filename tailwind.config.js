/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // AI/AR futuristic colors - Dark Mode
        cyber: {
          purple: '#6E3CBC',
          blue: '#3A86FF',
          cyan: '#00F5FF',
          neon: '#39FF14',
          pink: '#FF00FF',
          dark: '#0F0F1A',
          darker: '#07070F',
          medium: '#1E1E3A',
          light: '#2D2D5A'
        },
        // AI/AR futuristic colors - Light Mode
        cyberLight: {
          purple: '#8A4FE6',
          blue: '#5C9AFF',
          cyan: '#19DFEC',
          neon: '#5AE83A',
          pink: '#E85DFF',
          dark: '#F0F2FF',
          darker: '#E1E5FF',
          medium: '#D1D7FF',
          light: '#C2CBFA'
        }
      },
      backgroundImage: {
        'neural-pattern': "url('/public/images/neural-bg.svg')",
        'grid-pattern-dark': "linear-gradient(to right, #1E1E3A 1px, transparent 1px), linear-gradient(to bottom, #1E1E3A 1px, transparent 1px)",
        'grid-pattern-light': "linear-gradient(to right, #C2CBFA 1px, transparent 1px), linear-gradient(to bottom, #C2CBFA 1px, transparent 1px)",
        'cyber-gradient-dark': 'linear-gradient(135deg, #0F0F1A 0%, #1E1E3A 100%)',
        'cyber-gradient-light': 'linear-gradient(135deg, #F0F2FF 0%, #D1D7FF 100%)'
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'mode-shift': 'modeShift 0.5s ease-in-out forwards'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        modeShift: {
          '0%': { opacity: 0.5, transform: 'scale(0.98)' },
          '100%': { opacity: 1, transform: 'scale(1)' }
        }
      }
    },
  },
  plugins: [],
}