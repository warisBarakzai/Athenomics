require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  contracts_directory: "./src/contracts",
  contracts_build_directory: "./src/abi",
  networks: {
    ropsten: {
      provider: function(){
        return new HDWalletProvider(
          process.env.MNEMONIC, 
          'https://ropsten.infura.io/${process.env.INFURA_API_KEY}'
        )
      },
      gasPrice: 2500000000,
      network_id: 3
    },
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    develop: {
      port: 8545
    }
  },
  solc:{
    optimizer:{
      enabled: true,
      runs: 200
    }
  }
};
