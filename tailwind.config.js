module.exports = {
  darkMode: 'selector',
  content: [
    "./**/*.html",
    "./**/*.js",
    "./**/*.jsx",
    "./**/*.ts",
    "./**/*.tsx",
    // Add any other file types you might be using
  ],
  theme: {
    extend: {
      padding: {
        '10px': '10px',
        '8pct': '8%',
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /bg-(blue|red|green|yellow|purple|pink|indigo|gray|slate|black|white)-(50|100|200|300|400|500|600|700|800|900|950)/,
    }
  ]
}