import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00436A",
          dark: "#002d47",
          light: "#005a8c",
        },
        accent: {
          DEFAULT: "#C6A862",
          light: "#d4ba7f",
          dark: "#b89645",
        },
        neutral: {
          darkest: "#44666F",
          DEFAULT: "#7998A8",
          light: "#B8C9D0",
          lightest: "#E8EFF2",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-montserrat)", "sans-serif"],
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "#44666F",
            a: {
              color: "#00436A",
              "&:hover": {
                color: "#C6A862",
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("daisyui"),
  ],
  daisyui: {
    themes: [
      {
        esguvenir: {
          "primary": "#00436A",
          "secondary": "#C6A862",
          "accent": "#C6A862",
          "neutral": "#555555",
          "base-100": "#FFFFFF",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  },
};
export default config;
