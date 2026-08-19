/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#0a0a0b',
          raised: '#141416',
          overlay: '#1a1a1e',
          border: '#252529',
        },
        brand: {
          red: '#e11d48',
          orange: '#f97316',
          ember: '#dc2626',
        },
        human: {
          bg: '#141210',
          border: '#2e2820',
          accent: '#d97706',
        },
        machine: {
          bg: '#0c0a10',
          border: '#2d1a1a',
          accent: '#e11d48',
          glow: 'rgba(225, 29, 72, 0.06)',
        },
        verdict: {
          won: '#10b981',
          lost: '#e11d48',
          mixed: '#eab308',
        },
        text: {
          primary: '#fafafa',
          secondary: '#a1a1aa',
          muted: '#71717a',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        heading: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-lg': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#d4d4d8',
            '--tw-prose-headings': '#fafafa',
            '--tw-prose-links': '#e11d48',
            '--tw-prose-bold': '#fafafa',
            '--tw-prose-code': '#f472b6',
            '--tw-prose-pre-bg': '#0c0a10',
            '--tw-prose-pre-code': '#d4d4d8',
            '--tw-prose-quotes': '#a1a1aa',
            '--tw-prose-quote-borders': '#e11d48',
            maxWidth: 'none',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
