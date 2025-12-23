import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#0F766E',
        accent: '#F97316',
        muted: '#F4F4F5',
        border: '#E4E4E7',
      },
      boxShadow: {
        card: '0 10px 30px rgba(0, 0, 0, 0.06)',
        modal: '0 18px 60px rgba(0, 0, 0, 0.18)',
      },
    },
  },
  plugins: [],
};

export default config;
