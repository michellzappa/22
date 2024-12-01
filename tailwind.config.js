module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['system-ui', 'sans-serif'],
      },
      colors: {
        // You might want to add specific colors for the geometric pattern
      },
    },
  },
  plugins: [],
}; 