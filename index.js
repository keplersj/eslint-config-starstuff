module.exports = {
  extends: [
    // Good Code Practices
    "eslint:recommended",
    "plugin:unicorn/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:promise/recommended",
    "plugin:you-dont-need-lodash-underscore/compatible",
    // Good Code Style
    "plugin:prettier/recommended",
    "prettier",
  ],
  rules: {
    "unicorn/filename-case": 1,
    "unicorn/prefer-module": 1,
    "unicorn/prevent-abbreviations": [
      "warn",
      {
        checkFilenames: false,
      },
    ],
  },
};
