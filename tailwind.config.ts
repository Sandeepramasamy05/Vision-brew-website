import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0B",
        charcoal: "#161616",
        line: "#262626",
        mist: "#EDEAE3",
        muted: "#9A958C",
        teal: {
          DEFAULT: "#0F766E",
          bright: "#14B8A6",
        },
        paper: "#EDEAE3",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        site: "1440px",
      },
      fontSize: {
        display: ["clamp(2.75rem, 6.5vw, 6rem)", { lineHeight: "0.95", letterSpacing: "-0.04em" }],
        "display-sm": ["clamp(2rem, 4.2vw, 3.75rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
      transitionDuration: {
        400: "400ms",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        dash: {
          to: { strokeDashoffset: "-24" },
        },
        pulseNode: {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "marquee-slow": "marquee 48s linear infinite",
        dash: "dash 8s linear infinite",
        pulseNode: "pulseNode 3.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
