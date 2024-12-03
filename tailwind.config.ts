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
        primary: "#29aae0",
      },
      backgroundImage: {
        loginBG: "linear-gradient(45deg, #ddffdd 0%, #ddffdd 10%, white 30%, white 70%, #afecff 90%, #afecff 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
