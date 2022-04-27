import React, { useContext } from "react";
//import { AiFillPlayCircle } from "react-icons/ai";
const Ballotpage = () => {

  const vote  = () => {

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
            

        </div>
      </div>
      </div>
      </div>
    );
}


export default Ballotpage;


