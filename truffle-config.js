var HDWalletProvider = require("truffle-hdwallet-provider");

// const getEnv = env => {
//   const value = process.env[env];
//   if (typeof value === 'undefined') {
//     throw new Error(`${env} has not been set.`);
//   }
//   return value;
// };
// const mnemonic = getEnv('ETH_WALLET_MNEMONIC');
// const liveNetwork = getEnv('ETH_LIVE_NETWORK');

module.exports = {
  contracts_directory: "./src/contracts",
  contracts_build_directory: "./src/abi",
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    develop: {
      port: 8545
    },
    ropsten: {
      provider: ()=> new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/" + liveNetwork),
      network_id: 3,
      gas: 4000000      //make sure this gas allocation isn't over 4M, which is the max
    },
    // live: {
    //   provider: () => new HDWalletProvider(mnemonic, liveNetwork),
    //   network_id: liveNetworkId,
    // }
  }
};
