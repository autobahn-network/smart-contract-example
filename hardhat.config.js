require("@nomiclabs/hardhat-waffle");
require("hardhat-deploy");
require("./tasks/disperse");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const networks = {
  hardhat: {},
};

if (process.env.PRIVATE_KEY) {
  networks.autobahn = {
    url: "https://autobahn-rpc.com",
    accounts: [process.env.PRIVATE_KEY],
  };
}

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
  networks,
  solidity: "0.8.4",
};
