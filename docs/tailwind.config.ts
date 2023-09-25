import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-psd)'],
        sans: ['var(--font-lato)']
      },
      colors: {
        "primary": "#0B274D",
        "secondary": "#EDDC3E"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
export default config
