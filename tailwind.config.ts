import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0A0E14",
          900: "#0E1622",
          700: "#2B3646",
          500: "#5C6B7A",
          300: "#A6B2BF"
        },
        surface: {
          50: "#F7F9FC",
          100: "#EFF3F9"
        },
        accent: {
          600: "#2B6BE6",
          700: "#1F57C4"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(10,14,20,0.08)"
      }
    }
  },
  plugins: [typography]
};

export default config;
