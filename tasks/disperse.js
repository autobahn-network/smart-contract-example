require("@nomiclabs/hardhat-web3");
const fs = require("fs");

task("disperse")
  .addParam("contract", "Disperse contract address")
  .addParam("total", "The total amount to be dispersed")
  .addParam("filename", "Filename to read the addresses and amounts from")
  // total could also be calculated but this solution was quicker for the example ;-)
  .setAction(async ({ contract, filename, total }) => {
    const disperseData = await fs.readFileSync(filename, "utf-8");
    const disperseDataLines = disperseData.split("\n").filter((l) => l !== "");
    const disperseAddresses = disperseDataLines.map((l) => l.split(",")[0]);
    const disperseAmounts = disperseDataLines.map((l) => l.split(",")[1]);
    if (disperseAddresses.length !== disperseAmounts.length) {
      throw new Error("Array should have same length");
    }
    const disperse = await hre.ethers.getContractAt("Disperse", contract);
    const receipt = await disperse.disperseBNB(
      disperseAddresses,
      disperseAmounts,
      { value: total }
    );
    await receipt.wait();
    console.info(`Dispersed with TX: ${receipt.hash}`);
  });
