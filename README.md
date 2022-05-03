# Basic Ballot Project

This Ballot project demonstrates a basic Etereum testchain & Hardhat use case.
Sorry, cause of some time constraint initial commits are not complete user UI and SC compilation is remaining.

BallotTask.sol contains SC for ballot deployed on Ropsten testnet 

Test Contract at:"https://gist.github.com/Mukul601/0cd616d2ab1ae0505accd15762e4d669"

Contract Address: "0x53b5633737427a8dFE9F8B545121e171aED7D2E0"

check Contract Address at: "https://ropsten.etherscan.io/address/0x53b5633737427a8dFE9F8B545121e171aED7D2E0"


where for testing purposes ownership chan be changed by using "Changari" as a password  if the voting is already started or the Account starting the voting poll will get the ownership

Ballot SC contains 3 stages (Created, Voting, Ended)
only owner is allowed to ban or add voters in first 2 stage & only owner can change State of Ballot.

every voter is allowed to vote once.
and after Stage.Ended winning pool is revieled

We are using vite for react.js package and tailwind CSS
