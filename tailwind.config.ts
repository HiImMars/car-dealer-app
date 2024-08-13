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
        orange: {
          base: "#FF5F00",
        },
      },
      screens: {
        default: "0px",
        xs: "450px",
        sm: "600px",
        md: "720px",
        lg: "900px",
        gl: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
      boxShadow: {
        base: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;",
        baseAccent:
          "rgba(255, 95, 0, 0.3) 0px 1px 2px 0px, rgba(255, 95, 0, 0.15) 0px 2px 6px 2px;",
      },
    },
  },
  plugins: [],
};
export default config;
