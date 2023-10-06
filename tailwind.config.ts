import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          '50': '#f5f5f6',
          '100': '#e6e6e7',
          '200': '#cfcfd2',
          '300': '#adadb3',
          '400': '#84848c',
          '500': '#71717a',
          '600': '#5a5a60',
          '700': '#4d4c52',
          '800': '#434347',
          '900': '#3c3b3e',
          '950': '#252527',
          '990': '#181818',
        },
      },
      screens: {
        xs: '320px',
        sm: '640px',
        md: '1024px',
        lg: '1280px',
      },
    },
  },
  plugins: [],
};
export default config;
