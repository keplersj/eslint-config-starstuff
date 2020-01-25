const readPkgUp = require("read-pkg-up");

function getManifest() {
  const { packageJson } = readPkgUp.sync();

  return packageJson;
}

function isDep(depName) {
  return Boolean(
    getManifest().dependencies && getManifest().dependencies[depName]
  );
}

function isDevDep(depName) {
  return Boolean(
    getManifest().devDependencies && getManifest().devDependencies[depName]
  );
}

function isPeerDep(depName) {
  return Boolean(
    getManifest().peerDependencies && getManifest().peerDependencies[depName]
  );
}

function isAnyDep(depName) {
  return Boolean(isDep(depName) || isDevDep(depName) || isPeerDep(depName));
}

module.exports = {
  isDep,
  isDevDep,
  isPeerDep,
  isAnyDep
};
