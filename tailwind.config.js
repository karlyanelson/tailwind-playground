module.exports = {
  darkMode: "class",
  content: ["src/**/*.html", "src/**/*.css"],
  theme: {
    extend: {
      colors: {
        action: "var(--action)",
        ink: "var(--ink)",
        bg: "var(--bg)",
      },
    },
  },
  plugins: [],
};
