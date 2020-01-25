module.exports = {
  extends: [
    // Good Code Practices
    "eslint:recommended",
    "plugin:unicorn/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:promise/recommended",
    // Good Code Style
    "plugin:prettier/recommended",
    "prettier"
  ],
  rules: {
    "unicorn/filename-case": "warning"
  }
};
