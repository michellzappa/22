import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#121212',
        foreground: '#F5F5F5',
        'button-bg': '#2A2A2A',
        'button-hover': '#3A3A3A',
      },
      fontFamily: {
        serif: ['Lora', 'serif'],
        sans: ['system-ui', 'sans-serif'],
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '0.5' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
