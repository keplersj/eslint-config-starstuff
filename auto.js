const { isDep, isDevDep, isAnyDep } = require("./lib/deps");

module.exports = {
  extends: [
    ".",
    (isDep("typescript") || isDevDep("typescript")) && "./typescript",
    isAnyDep("react") && "./react",
    isDevDep("jest") && "./jest",
    isAnyDep("react-dom") && "./react-dom",
  ].filter(Boolean),
};
