import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { BallotTaskContext } from '../context/BallotTaskContext';

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)} //{handleChange(e, name); addVoter(e, name);}}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);
const Ballotpage = () => {
const { connectWallet, currentAccount, proposalData, isLoading,  setProposalData, handleChange, startVoting, trueCount,/* voterData, changeVoterData, AddVoters*/ } = useContext(BallotTaskContext);
  

  const handleSubmit  = (e) => {
    const {proposal} = proposalData;

    e.preventDefault();

    if(!proposal) return;

    startVoting();

  } 

  const EndVoting  = () => {

  } 

  const vote  = () => {

  } 

  const addVoter  = () => {

  } /*
  const addVoter = (e) => {
    const {voterAddress, voterName} = voterData;
    e.preventDefault();
    if(!voterAddress || !voterName) return;
    AddVoters();
  }*/
  const banVoter = () => {

  }
  const changeOwner = () => {

  }
    return(
      <div className="flex w-full justify-center items-center">
      <div className="flex w-full justify-center items-center">
       <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
         <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
         <div className="flex w-full justify-center items-center">
         {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>
          )}
          </div>
         
        
           <h1 className="text-3xl sm:text-5xl text-black  py-1">
            Vote your opnion  <br /> 
           </h1>
           <p className="text-left mt-5 text-black font-light md:w-9/12 w-11/12 text-base">
           Twitter Acquisition Good for Blockchain Ecosystem
           </p>
           <Input placeholder="true or false" name="addressTo" type="text" handleChange={() => {}} />
           <button
              type="button"
              onClick={vote}
              className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
            >
            
              <p className="text-black w-full hover:bg-[#3d4f7c] rounded-full cursor-pointer">
                Vote True/False
              </p>
           
              
            </button>
            <p className="text-black w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer">
                Total No. of Voters
              </p>
              <p className="text-black w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer">
                Banned Voters
              </p>
              <p className="text-black w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer">
                Total votes for true
              </p>
              <div className="flex w-full justify-center items-center">
        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
        <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-right blue-glassmorphism">
            
            <h1>Start a poll</h1>
            <Input placeholder="Topic" name="proposal" type="text" handleChange={handleChange} />
            <button
                  type="button"
                  onClick={handleSubmit}
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                >
                  Start Voting
                </button>
        </div>
        </div>
        </div>

        </div>
        </div>
        </div>
        <div className="flex w-full justify-center items-center">
        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
        <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-right blue-glassmorphism">
            <h1>Change Ownership</h1>
            <Input placeholder="Password" name="addressTo" type="text" handleChange={() => {}} />
            
            <button
                  type="button"
                  onClick={changeOwner}
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                >
                  Transfer Ownership
                </button>
        </div>
        <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-right blue-glassmorphism">
            <h1>Add Voters</h1>
            <Input placeholder="Voter Address" name="voterAddress" type="text" handleChange={() => {}} />
            <Input placeholder="Voter Name" name="voterName" type="text" handleChange={() => {}} />
            <button
                  type="button"
                  onClick={addVoter}
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                >
                  Add Voter
                </button>
        </div>
        <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-right blue-glassmorphism">
            <h1>Ban Voters</h1>
            <Input placeholder="Voter Address" name="addressTo" type="text" handleChange={() => {}} />
            <Input placeholder="Voter Name" name="voterName" type="text" handleChange={() => {}} />
            <button
                  type="button"
                  onClick={banVoter}
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                >
                  Ban Voter
                </button>
        </div>
      </div>
      
      </div>
      </div>
      
    );
}


export default Ballotpage;