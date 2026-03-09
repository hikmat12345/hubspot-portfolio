// tailwind.config.js
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      primary: "#1e5b5f", // HubSpot Teal
      secondary: "#ff4800", // HubSpot Orange
      accent: "#34475c", // HubSpot Charcoal/Dark Blue-Grey
      hubspot: {
        orange: "#ff4800",
        teal: "#1e5b5f",
        charcoal: "#34475c",
        dark: "#2d3e50",
        lightTeal: "#2e7d82",
      },
      grey: {
        100: "#F5F7FA",
        1000: "#1F2933"
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
    },
    screens: {
      's3xl': { 'max': '1800px' },
      // => @media (max-width: 1800px) { ... }
      's2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'sxl': { 'max': '1300px' },
      // => @media (max-width: 1279px) { ... }

      'slg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'smd': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'ssm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
      'mmd': { 'min': '1023px' },
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    backgroundImage: {
      blackGredient: 'linear-gradient(342deg, rgba(30,91,95,1) 0%, rgba(52,71,92,1) 98%)',
      grayGredient: 'linear-gradient(169deg, #1e5b5f 0%, #34475c 77%)',
      gradientemerald: 'linear-gradient(88deg, #1e5b5f 42%, #2e7d82 97%)',
      blueGredient: 'linear-gradient(90deg, #ff4800 0%, #34475c 100%)',
      hubspotGradient: 'linear-gradient(135deg, #ff4800 0%, #ff7a59 100%)',
      tealGradient: 'linear-gradient(135deg, #1e5b5f 0%, #2e7d82 100%)',
      charcoalGradient: 'linear-gradient(135deg, #34475c 0%, #2d3e50 100%)',
    },
    typography: theme => ({
      default: {
        css: {
          pre: {
            color: theme("colors.grey.1000"),
            backgroundColor: theme("colors.grey.100")
          },
          "pre code::before": {
            "padding-left": "unset"
          },
          "pre code::after": {
            "padding-right": "unset"
          },
          code: {
            backgroundColor: theme("colors.grey.100"),
            color: "#DD1144",
            fontWeight: "400",
            "border-radius": "0.25rem"
          },
          "code::before": {
            content: '""',
            "padding-left": "0.25rem"
          },
          "code::after": {
            content: '""',
            "padding-right": "0.25rem"
          }
        }
      }
    })
  },

  plugins: [
    require("@headlessui/tailwindcss"),
    require("@tailwindcss/typography"),
  ],
};
