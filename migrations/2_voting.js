const votting = artifacts.require("votting");

module.exports = function(deployer) {
  deployer.deploy(votting);
};
