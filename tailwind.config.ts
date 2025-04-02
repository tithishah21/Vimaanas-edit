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
      addUtilities(newUtilities,);
    }),
  ],
} satisfies Config;
