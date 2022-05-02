import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

export const BallotTaskContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const ballottaskContract = new ethers.Contract(contractAddress, contractABI, signer);
   
    return ballottaskContract;
  };

export const BallotTaskProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState("");
    const [proposalData, setProposalData] = useState({proposal: ''});
    const [isLoading, setIsLoading] = useState(false);
    //const [password, setPassword] = useState();
    const [voterData, setVoterData] = useState({voterAddress: '',voterName: ''});

    const [trueCount, setTrueCount] = useState(localStorage.getItem("trueCount"));

    //setTrueCount(await ethereum.request({ method: "eth_accounts" }));
    
    const handleChange = (e, name) => {
        setProposalData((prevState) => ({...prevState, [name]: e.target.value }));
    }

   // const changeVoterData = (e, name) => {
    //    setVoterData((prevState) => ({...prevState, [name]: e.target.value }));
   // }
    //const [, set] = useState();
    // useState [connectedAccount, setconnectedAccount] = useState(initialState)
   


    const checkIfWalletIsConnect = async () => {
        try {
          if (!ethereum) return alert("Please install MetaMask.");
    
          const accounts = await ethereum.request({ method: "eth_accounts" });
          console.log(accounts);
    
          if (accounts.length) {
            setCurrentAccount(accounts[0]);
    
          //  getAllTransactions();
          } else {
            console.log("No accounts found");
          }
        } catch (error) {
          console.log(error);
          throw new Error("No ethereum object");
        } 
      };

      const connectWallet = async () => {
        try {
          if (!ethereum) return alert("Please install MetaMask.");
    
          const accounts = await ethereum.request({ method: "eth_requestAccounts", });
    
           getcurrentAccount(accounts[0]);
          window.location.reload();
        } catch (error) {
          console.log(error);
    
          throw new Error("No ethereum object");
        }
      };

      const startVoting = async () => {
          try {
            if (!ethereum) return alert("Please install MetaMask.");
            const {proposal} = proposalData;
            const ballottaskContract = getEthereumContract();

            /*await ethereum.request({
                method: 'eth_startVote',
                
            });*/

            const ballottaskHash = await ballottaskContract.startVote(proposal);

            setIsLoading(true);
            console.log(`Loding - ${ballottaskHash.hash}`);
            await ballottaskHash.wait();
            setIsLoading(false);
            console.log(`Voting Started - ${ballottaskHash.hash}`);

          } catch (error) {
            console.log(error);
    
            throw new Error("No ethereum object");
              
          }
      }
/*
      const AddVoters = async () => {
        try {
          if (!ethereum) return alert("Please install MetaMask.");
          const {voterAddress, voterName} = voterData;
          const ballottaskContract = getEthereumContract();

          const ballottaskHash = await ballottaskContract.addVoter(voterAddress, voterName);
          await ballottaskHash.wait();
        } catch (error) {
          console.log(error);
  
          throw new Error("No ethereum object");
            
        }

      const transferOwnership = async () => {
        try {
            
          if (!ethereum) return alert("Please install MetaMask.");
            const {password} = passwordData;
            const ballottaskContract = getEthereumContract();
            const ballottaskHash = await ballottaskContract.startVote(proposal);

            setIsLoading(true);
            console.log(`Loding - ${ballottaskHash.hash}`);
            await ballottaskHash.wait();
            setIsLoading(false);
            console.log(`Voted for ${proposal} - ${ballottaskHash.hash}`);

        } catch (error) {
          console.log(error);
  
          throw new Error("No ethereum object, sorry can't vote");
            
        }

     /* const startVoting = async () => {
        try {
          if (!ethereum) return alert("Please install MetaMask.");
            
        } catch (error) {
          console.log(error);
  
          throw new Error("No ethereum object");
            
        }
    } */


      useEffect(() => {
        checkIfWalletIsConnect();
      }, []);
    
      

    return (
        <BallotTaskContext.Provider
          value={{ connectWallet, currentAccount, proposalData, setProposalData, handleChange,
            startVoting, isLoading, trueCount, /*changeVoterData, voterData, AddVoters*/
            
          }}
        >
          {children}
        </BallotTaskContext.Provider>
      );
}
