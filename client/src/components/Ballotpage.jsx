import React, { useContext } from "react";
//import { AiFillPlayCircle } from "react-icons/ai";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);
const Ballotpage = () => {

  const vote  = () => {

  } 
  const addVoter = () => {

  }
  const banVoter = () => {

  }
  const changeOwner = () => {

  }
    return(
      <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-black  py-1">
            Vote your opnion <br /> 
          </h1>
          <p className="text-left mt-5 text-black font-light md:w-9/12 w-11/12 text-base">
          Twitter Acquisition Good for Blockchain Ecosystem
          </p>
          <Input placeholder="true or false" name="addressTo" type="text" handleChange={() => {}} />
          <button
              type="button"
              onClick={vote}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              
              <p className="text-white text-base font-semibold">
                Vote True/False
              </p>
            </button>
        </div>
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
      </div>
        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
        <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-right blue-glassmorphism">
            <h1>Add Voters</h1>
            <Input placeholder="Voter Address" name="addressTo" type="text" handleChange={() => {}} />
            <Input placeholder="Voter Name" name="voterName" type="text" handleChange={() => {}} />
            <button
                  type="button"
                  onClick={addVoter}
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                >
                  Add Voter
                </button>
        </div>
      </div>
      <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
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


