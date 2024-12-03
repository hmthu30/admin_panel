import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lightGreen: "#a1ffa1",
      },
      backgroundImage: {
        loginBG: "linear-gradient(45deg, #b5ffdc, #ffffff, #cbfaff)",
      },
    },
  },
  plugins: [],
} satisfies Config;
