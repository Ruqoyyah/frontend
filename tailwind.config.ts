import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#313843",
        hoverBg: "#F6E7D7",
        active: "#FDF5ED",
        secondary: "#EDBF85",
        secondaryFade: "#EDBF8550",
        black: "#000000",
        fadedWhite: "#FFFFFF70",
        greybg: "#202020A6",
      },
    },
  },
  plugins: [],
};
export default config;
