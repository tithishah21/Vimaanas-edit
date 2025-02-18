import type { Config } from "tailwindcss";

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
      },
      fontWeight: {
        ultrabold: '900',
      },
      colors: {
        'bg': '#2A2929',
        'red': '#FF0000',
      }
    },
  },
  plugins: [],
} satisfies Config;
