import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        // custom small breakpoints for very small / standard phones
        xs: '320px',        // small mobile devices
        'sm-phone': '480px', // standard mobile phones
        // sm (640px) is Tailwind default
        // md (768px): tablets/iPads
        // lg (1024px): large tablets/small laptops
        // xl (1280px+): desktops
      },
    },
  },
  plugins: [],
};

export default config;
