/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'media', // Enable dark mode based on user's system preferences
  theme: {
    extend: {
      colors: {
        // Brand colors with a complete scale
        'primary': {
          DEFAULT: '#5C55FF',
          50: '#EEEDFF',
          100: '#DEDCFF',
          200: '#BEB9FF',
          300: '#9E96FF',
          400: '#7D73FF',
          500: '#5C55FF', // Main brand color
          600: '#4A44CC',
          700: '#3933A8',
          800: '#272380',
          900: '#161257',
        },
        'secondary': {
          DEFAULT: '#FFA800',
          50: '#FFF4E0',
          100: '#FFEAC2',
          200: '#FFD685',
          300: '#FFC247',
          400: '#FFB61E',
          500: '#FFA800', // Secondary brand color
          600: '#D68C00',
          700: '#AD7100',
          800: '#855600',
          900: '#5C3A00',
        },
        // Neutral grays - with improved contrast ratios
        'neutral': {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563', // Now meets 4.5:1 contrast ratio on white
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
          950: '#0D1117',
        },
        // Legacy colors for backwards compatibility
        'primary-blue': '#3478F6',
        'secondary-blue': '#2D6FE6',
        'dark-blue': '#0F2B52',
        'light-blue': '#EBF2FF',
        'mint-green': '#CBDAD0',
        'light-gray': '#F6F6F9',
        'gray': '#6B7280', // Updated for better contrast
        'dark-gray': '#333',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        'custom': '0 4px 12px rgba(0, 0, 0, 0.05)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.1)',
        'glass-dark': '0 8px 32px rgba(0, 0, 0, 0.3)',
        'elevation-1': '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)',
        'elevation-2': '0 3px 6px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.1)',
        'elevation-3': '0 10px 20px rgba(0, 0, 0, 0.05), 0 3px 6px rgba(0, 0, 0, 0.1)',
        'elevation-4': '0 15px 25px rgba(0, 0, 0, 0.05), 0 5px 10px rgba(0, 0, 0, 0.1)',
        'elevation-5': '0 20px 40px rgba(0, 0, 0, 0.05), 0 10px 20px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'custom': '8px',
        'xl-2xl': '0.75rem 1rem 0.75rem 1rem', // Variable radius
      },
      // Blur utilities for glassmorphism
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
      },
      // Background utilities
      backgroundImage: {
        'noise': "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      // Animation durations
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      },
    },
  },
  plugins: [
    // Add plugin for custom glassmorphism components
    function({ addComponents }) {
      addComponents({
        '.glass': {
          backdropFilter: 'blur(8px)',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '0.75rem',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        },
        '.glass-dark': {
          backdropFilter: 'blur(8px)',
          backgroundColor: 'rgba(17, 25, 40, 0.7)',
          borderRadius: '0.75rem',
          border: '1px solid rgba(255, 255, 255, 0.07)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        },
      })
    }
  ],
};
