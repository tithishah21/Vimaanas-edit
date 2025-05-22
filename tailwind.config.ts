import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'monument-extended': ['Monument Extended', 'sans-serif'],
        'sf-pro-display': ['SF Pro Display', 'sans-serif'],
      },
      fontWeight: {
        ultrabold: '900',
      },
      colors: {
        'bg': '#2A2929',
        'red': '#FF0000',
        'cardcolor': '#D1D1CE',
      },
      gridTemplateColumns: {
        '14': 'repeat(14, minmax(0, 1fr))',
      },
      keyframes: {
        flyin: {
          '0%': {
            transform: 'translateY(100px) rotate(0deg)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0) rotate(10deg)',
            opacity: '1',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        flyin: 'flyin 1.5s ease-in forwards',
        'fade-in': 'fadeIn 1.5s ease-out forwards',
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.text-stroke': {
          '-webkit-text-stroke': '3px #D2D2D2',
          'color': '#FFFFFF',
        },
        '.text-stroke-sm': {
          '-webkit-text-stroke': '1.7px #D2D2D2',
          'color': '#FFFFFF',
        },
        '.text-stroke-xs': {
          '-webkit-text-stroke': '1px #D2D2D2',
          'color': '#FFFFFF',
        },
        '.text-stroke-xxs': {
          '-webkit-text-stroke': '0.7px #D2D2D2',
          'color': '#FFFFFF',
        },
      };
      addUtilities(newUtilities);
    }),
  ],
} satisfies Config;
