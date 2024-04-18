import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    // "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: { xs: { max: "670px", min: "0px" } },
    },
    fontFamily: {
      "font-sans": ["var(--font-sans)"],
      "font-mono": ["var(--font-mono)"],
    },
  },
  plugins: [],
}
export default config
