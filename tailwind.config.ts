import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient-1': 'linear-gradient(73deg, rgba(51,187,197,1) 0%, rgba(170,0,170,1) 100%)',
        'hero-gradient': 'linear-gradient(229deg, rgba(51, 187, 197, 1) 0%, rgba(170, 0, 170, 1) 100%)',
      },
      colors: {
        pink: '#AA00AA',
        purple: '#614BC3',
        "deep-purple": '#392881',
        blue: '#34BCC5',
        white: '#FFFFFF',
        black: '#000000',
        'custom-cyan': 'rgb(51, 187, 197)',
        'purple-opacity': 'rgba(97, 75, 195, 0.27)',
        'faq-ash': "#2D2D2D",
        'sidebar': "#E6E6E6",
      },
      fontFamily: {
        'heading': ['Playfair Display'],
        'body': ['Inter']
      }
    },
  },
  plugins: [],
};
export default config;
