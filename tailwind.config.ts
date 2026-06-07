import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#d4af37',
        'dust-brown': '#5a4a3a',
        'rust-red': '#8b4513',
        'grey-sky': '#6b7280',
        'purple-fade': '#a78bca',
        'deep-indigo': '#1a0033',
        'blood-red': '#8b0000',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        lora: ['var(--font-lora)', 'serif'],
        crimson: ['var(--font-crimson)', 'serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
}

export default config
