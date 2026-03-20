import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: 'hsl(var(--canvas) / <alpha-value>)',
          muted: 'hsl(var(--canvas-muted) / <alpha-value>)',
        },
        ink: {
          DEFAULT: 'hsl(var(--ink) / <alpha-value>)',
          muted: 'hsl(var(--ink-muted) / <alpha-value>)',
        },
        line: 'hsl(var(--line) / <alpha-value>)',
        accent: {
          DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
          foreground: 'hsl(var(--accent-fg) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'ui-serif', 'Georgia', 'serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.5rem,4vw+1rem,3.75rem)', { lineHeight: '1.06', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2rem,2.5vw+1rem,2.75rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.65' }],
        'body-sm': ['0.9375rem', { lineHeight: '1.6' }],
        'label': ['0.6875rem', { lineHeight: '1.4', letterSpacing: '0.22em' }],
      },
      maxWidth: {
        content: '72rem',
        prose: '42rem',
        'prose-wide': '48rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
};

export default config;
