const hre = require("hardhat");

const main = async () => {
  const bountyContractFactory = await hre.ethers.getContractFactory(
    "contracts/Bounty.sol:Bounty"
  );
  const bountyContract = await bountyContractFactory.deploy();
  await bountyContract.deployed();

  console.log("bountyContract address: ", bountyContract.address);

  const cloneContractFactory = await hre.ethers.getContractFactory(
    "contracts/CloneFactory.sol:CloneFactory"
  );
  const cloneFactoryContract = await cloneContractFactory.deploy(
    "0xdd2fd4581271e230360230f9337d5c0430bf44c0"
  );

  await cloneFactoryContract.deployed();
  console.log("Clone Factory contract address: ", cloneFactoryContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
