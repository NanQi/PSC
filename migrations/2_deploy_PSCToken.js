const PSCToken = artifacts.require("PSCToken");

module.exports = function(deployer) {
  deployer.deploy(PSCToken)
};
