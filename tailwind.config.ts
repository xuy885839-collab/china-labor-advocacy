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
        cla: {
          red: "#8B1A1A",
          "red-dark": "#6B1212",
          "red-light": "#A52A2A",
          navy: "#1A2744",
          "navy-light": "#243556",
          gold: "#C4A35A",
          cream: "#F7F4EF",
          slate: "#4A5568",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "PingFang SC",
          "Microsoft YaHei",
          "sans-serif",
        ],
        display: [
          "var(--font-noto)",
          "var(--font-inter)",
          "PingFang SC",
          "Microsoft YaHei",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
