require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const REACT_APP_ALCHEMY_API_URL = process.env.REACT_APP_ALCHEMY_API_URL;
const REACT_APP_PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: REACT_APP_ALCHEMY_API_URL,
      accounts: [REACT_APP_PRIVATE_KEY],
    },
  },
};