const { isDep, isDevDep, isPeerDep, isAnyDep } = require("./lib/deps");

module.exports = {
  extends: [
    "starstuff",
    (isDep("typescript") || isDevDep("typescript")) && "starstuff/typescript",
    isAnyDep("react") && "starstuff/react"
  ].filter(Boolean)
};
