import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        airbnb: {
          pink: '#FF385C',
          'pink-dark': '#E31C5F',
        },
      },
    },
  },
  plugins: [],
}
export default config