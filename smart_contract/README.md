# Basic Ballot Project

This Ballot project demonstrates a basic Etereum testchain & Hardhat use case.
Sorry, cause of some time constraint initial commit is not complete user UI and SC compilation is remaing.
BallotTask.sol contains SC for ballot:
where for testing purposes ownership chan be changed by using "Changari" as a password
Ballot SC contains 3 stages (Created, Voting, Ended)
only owner is allowed to ban or add voters in first 2 stage.& only owner can change State of Ballot.
every voter is allowed to vote once.
and after Stage.Ended winning pool is revieled
