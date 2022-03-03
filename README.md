# Smart Contract example for the Autobahn Network

## What is the Autobahn Network?

The Autobahn Network is an optimistic rollup for BNB chain. For more information visit the [Autobahn Network website](https://autobahn.network).

## Setup and Introduction

This example project uses [hardhat](https://hardhat.org/) for the deployment process. If you don't know hardhat yet, we highly recommend walking through their awesome [tutorial](https://hardhat.org/tutorial/) first.

Run `npm install` to install all required dependencies. NodeJS 16 is requested as a minimum version. If you can't install 16 but have a lower version you can try to reduce the version number in the `package.json` file and install from there.

## Run tests

We've added an example test case just to show how tests work in general. You can run the test via `npm run test`.

## Deploy

To deploy to the Autobahn Network use the following command:

`npx hardhat deploy --network autobahn`

You must set the private key that should be used for deploying as an environment variable (`export PRIVATE_KEY=<your-private-key>`).

### Contract Verification

To verify the code on the [Autobahn Network explorer](https://explorer.autobahn.network) navigate to the detail page of your depoyed contract which should be `explorer.autobahn.network/address/<address-of-your-contract>/contracts`. Select the "Standard Input JSON" verification method and use the JSON from the `deploments` directory. You can see an example of a verified contract [here](https://explorer.autobahn.network/address/0x9ad93DDcc6dede028Fdc99a1c7D24b3505056Ef5/contracts).

## Contract Interaction from CLI

Sometimes it can be useful to interact with a contract from the CLI. We recommend to work with hardhat tasks for that. The file `tasks/disperse.js` shows an example task which accepts some arguments and then interacts with the `Disperse.sol` example contract.
