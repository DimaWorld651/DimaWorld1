/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Press Start 2P"', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        grass: {
          50: '#f3faec',
          100: '#e3f4d5',
          200: '#c9e9ad',
          300: '#a3d974',
          400: '#7cc944',
          500: '#57b21f',
          600: '#3f8f15',
          700: '#326e14',
          800: '#295816',
          900: '#224a17',
        },
        dirt: {
          50: '#faf3ea',
          100: '#f1e0c8',
          200: '#e3c196',
          300: '#d2a064',
          400: '#c08240',
          500: '#a96a2f',
          600: '#8a5226',
          700: '#6c3f21',
          800: '#56331f',
          900: '#472b1c',
        },
        diamond: {
          50: '#e6fbff',
          100: '#c4f5ff',
          200: '#94ebff',
          300: '#5cddff',
          400: '#2bc4ff',
          500: '#0aa5f0',
          600: '#0083c9',
          700: '#0067a1',
          800: '#055786',
          900: '#0a486f',
        },
        gold: {
          50: '#fffbe6',
          100: '#fff3b8',
          200: '#ffe680',
          300: '#ffd24d',
          400: '#ffb81f',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        redstone: {
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
        },
        obsidian: {
          900: '#0a0a14',
          950: '#050510',
        },
      },
      boxShadow: {
        block: '0 6px 0 0 rgba(0,0,0,0.25)',
        'block-sm': '0 4px 0 0 rgba(0,0,0,0.25)',
        glow: '0 0 30px rgba(87,178,31,0.5)',
        'glow-diamond': '0 0 30px rgba(10,165,240,0.5)',
        'glow-gold': '0 0 30px rgba(245,158,11,0.5)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(3deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(87,178,31,0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(87,178,31,0.7)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'float-slow': 'float-slow 7s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2.5s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'scale-in': 'scale-in 0.4s ease-out forwards',
        wiggle: 'wiggle 0.5s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
      },
    },
  },
  plugins: [],
};
