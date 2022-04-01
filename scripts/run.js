const hre = require("hardhat");

const main = async () => {
  const bountyContractFactory = await hre.ethers.getContractFactory(
    "contracts/Bounty.sol:Bounty"
  );
  const bountyContract = await bountyContractFactory.deploy();
  await bountyContract.deployed();
  // await bountyContract.initialize(bountyContract.address);

  console.log("bountyContract address: ", bountyContract.address);

  const cloneContractFactory = await hre.ethers.getContractFactory(
    "contracts/CloneFactory.sol:CloneFactory"
  );

  const cloneFactoryContract = await cloneContractFactory.deploy(
    bountyContract.address
  );

  console.log("the clone2", await cloneFactoryContract._clone());
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
