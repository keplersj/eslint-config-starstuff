const { isDep, isDevDep, isPeerDep, isAnyDep } = require("./lib/deps");

module.exports = {
  extends: [
    "starstuff",
    (isDep("typescript") || isDevDep("typescript")) && "starstuff/typescript",
    isAnyDep("react") && "starstuff/react",
    isDevDep("jest") && "starstuff/jest",
    isAnyDep("react-dom") && "starstuff/react-dom"
  ].filter(Boolean)
};