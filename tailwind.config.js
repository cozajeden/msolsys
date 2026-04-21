/** @type {import('tailwindcss').Config} */
// Colors and fonts are driven by CSS variables in src/index.css, so swapping
// the brand later only touches that one file.
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper:      "var(--paper)",
        "paper-soft": "var(--paper-soft)",
        "paper-line": "var(--paper-line)",
        ink:        "var(--ink)",
        "ink-soft": "var(--ink-soft)",
        accent:     "var(--accent)",
        "accent-dark": "var(--accent-dark)",
      },
      fontFamily: {
        display: ["var(--display)", "ui-sans-serif", "system-ui"],
        body:    ["var(--body)", "ui-sans-serif", "system-ui"],
        mono:    ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      maxWidth: {
        container: "1320px",
      },
    },
  },
  plugins: [],
};
