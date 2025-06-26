// tailwind.config.js
module.exports = {
  // ...
  theme: {
    extend: {
      typography: {
        dark: {
          css: {
            color: "var(--tw-prose-invert)",
            a: { color: "var(--tw-prose-invert-links)" },
            // 필요시 추가 스타일 오버라이드
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...other plugins
  ],
  darkMode: "class",
};
