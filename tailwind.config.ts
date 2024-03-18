import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    fontFamily: {
      oswald: "var(--font-oswald)",
      roboto: "var(--font-roboto)",
    },
    backgroundImage: {
      hero: "url(/assets/img/hero/bg.jpg)",
      membership: "url(/assets/img/membership/bg.jpg)",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#71d1fa",
          100: "#484848",
          200: "#151515",
          300: "#111",
        },
        accent: "#4dc4f7",
      },
    },
  },
  plugins: [],
};
export default config;
