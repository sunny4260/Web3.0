// https://eth-goerli.g.alchemy.com/v2/1CLMqMyjGGNLhQM-e6RwgQ2CHCr6G2Hx

require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/1CLMqMyjGGNLhQM-e6RwgQ2CHCr6G2Hx",
      accounts: [
        "c69c3fe5fce2a5a00473db265ceca7fa85ea0b007cc84d328675664cb2651836",
      ],
    },
  },
};
