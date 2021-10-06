module.exports = {
  extends: [".", "plugin:react/recommended", "prettier/react"],
  settings: {
    react: {
      version: "detect", // React version. "detect" automatically picks the version you have installed.
    },
  },
  plugins: ["react-hooks"],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "unicorn/prevent-abbreviations": [
      "warn",
      {
        // Do not warn for terms normal in the React ecosystem.
        replacements: {
          ref: false,
          props: false,
        },
      },
    ],
  },
};
