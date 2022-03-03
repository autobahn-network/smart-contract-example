const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Disperse", function () {
  it("should send BNB to multiple wallets", async function () {
    const [_, bob, lucy, harold] = await ethers.getSigners();
    const Disperse = await ethers.getContractFactory("Disperse");
    const disperse = await Disperse.deploy();
    await disperse.deployed();

    const oldBalances = {};
    for (const account of [bob, lucy, harold]) {
      oldBalances[account.address] = await account.getBalance();
    }

    const receipt = await disperse.disperseBNB(
      [bob.address, lucy.address, harold.address],
      [3, 33, 333],
      { value: 3 + 33 + 333 }
    );
    await receipt.wait();

    const newBalances = {};
    for (const account of [bob, lucy, harold]) {
      newBalances[account.address] = await account.getBalance();
    }

    expect(
      newBalances[bob.address].sub(oldBalances[bob.address]).toString()
    ).to.equal("3");
    expect(
      newBalances[lucy.address].sub(oldBalances[lucy.address]).toString()
    ).to.equal("33");
    expect(
      newBalances[harold.address].sub(oldBalances[harold.address]).toString()
    ).to.equal("333");
  });
});
