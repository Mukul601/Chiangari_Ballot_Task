
const main = async () => {
  const BallotTask = await hre.ethers.getContractFactory("BallotTask");
  const ballotTransactions = await BallotTask.deploy();

  await ballotTransactions.deployed();

  console.log("BallotTask address: ", ballotTransactions.address);
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