// Nabunomics artifact represents Genome addition and transactions
var Athenomics = artifacts.require("./Athenomics.sol");

// Directive to deploy the contract
module.exports = function(deployer) {
	deployer.deploy(Athenomics);
};