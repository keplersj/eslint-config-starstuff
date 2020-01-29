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

function isDevelopmentDep(depName) {
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
  return Boolean(
    isDep(depName) || isDevelopmentDep(depName) || isPeerDep(depName)
  );
}

module.exports = {
  isDep,
  isDevDep: isDevelopmentDep,
  isPeerDep,
  isAnyDep
};
