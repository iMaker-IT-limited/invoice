module.exports = {
  root: true,
  env: {
    es6: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "google",
    "plugin:@typescript-eslint/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.json", "tsconfig.dev.json"],
    sourceType: "module"
  },
  ignorePatterns: [
    "/lib/**/*" // Ignore built files.
  ],
  plugins: [
    "@typescript-eslint",
    "import"
  ],
  rules: {
    "eol-last": ["error", "never"],
    "quotes": ["error", "double"],
    "object-curly-spacing": ["error", "always"],
    "indent": "off",
    "comma-dangle": ["error", "never"],
    "require-jsdoc": 0
  }
};