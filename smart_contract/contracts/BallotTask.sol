//SPDX-License-Identifier: Unlicense

pragma solidity >=0.7.0 <0.9.0;

//import '@openzeppelin/contracts/security/ReentrancyGuard.sol'

contract BallotTask {
    event votingStage(string currentstage);
    event voterBaned(address voterB, string voterN);
    event voterAdded(address voterA, string voterN);

    struct vote {
        address voterAddress;
        bool choice;
    }
    struct voter {
        string voterName;
        // uint voted;
        bool weight;
        bool eligible;
    }
    uint256 private TrueCount = 0;
    uint256 public totalVoter = 0;
    uint256 public totalVote = 0;
    uint256 public totalBanAddress = 0;
    
    address public ballotOwnerAddress;
    string public ballotName;
    string public finalResult = "not declared";

    mapping(uint256 => vote) private votes;
    mapping(address => voter) public voterRegister;

    enum State {
        Created,
        Voting,
        Ended
    }
    State public state;

    bool internal locked;

    modifier noReentrancy() {
        require(!locked, "no reentrancy");
        locked = true;
        _;
        locked = false;
    }

    modifier condition(bool _condition) {
        require(_condition);
        _;
    }

    modifier onlyOwner() {
        require(
            msg.sender == ballotOwnerAddress,
            "Sorry, only owner is allowed to make changes"
        );
        _;
    }

    modifier inState(State _state) {
        require(state == _state, "Not in required State");
        _;
    }

    constructor() {
        ballotOwnerAddress = msg.sender;
        state = State.Created;
    }

    function changeOwner(string memory password) public {
        require(
            keccak256(abi.encodePacked(password)) ==
                keccak256(abi.encodePacked("Chingari"))
        );
        ballotOwnerAddress = msg.sender;
    }

    function addVoter(address _voterAddress, string memory _voterName)
        public
        onlyOwner
        noReentrancy
    {
        require(
            !voterRegister[_voterAddress].weight == true,
            "The voter is already registered"
        );
        voter memory v;
        v.voterName = _voterName;
        v.weight = true;
        v.eligible = true;
        voterRegister[_voterAddress] = v;
        totalVoter++;
        emit voterAdded(_voterAddress, _voterName);
    }

    function banVoter(address _voterAddress, string memory _voterName)
        public
        onlyOwner
        inState(State.Voting)
        noReentrancy
    {
        require(
            !voterRegister[_voterAddress].weight == false,
            "The voter is already baned"
        );
        voter memory v;
        v.voterName = _voterName;
        v.eligible = false;
        voterRegister[_voterAddress] = v;
        totalBanAddress++;
        emit voterBaned(_voterAddress, _voterName);
    }

    function startVote(string memory _ballotName)
        public
        inState(State.Created)
        //onlyOwner
    {
        changeOwner("Chingari");
        state = State.Voting;
        ballotName = _ballotName;
        emit votingStage("Voting Started");
    }

    function doVote(bool _choice)
        public
        inState(State.Voting)
        noReentrancy
        returns (bool weight)
    {
        require(voterRegister[msg.sender].weight == true);
        require(voterRegister[msg.sender].eligible == true);
        bool found = true;
        voterRegister[msg.sender].weight = false;
        voterRegister[msg.sender].eligible = false;
        vote memory v;
        v.voterAddress = msg.sender;
        v.choice = _choice;
        if (_choice) {
            TrueCount++;
        }
        votes[totalVote] = v;
        totalVote++;
        found = false;

        return found;
    }

    function endVote() public inState(State.Voting) onlyOwner {
        state = State.Ended;
        if (2*TrueCount > totalVote){
            finalResult = "true";
        }else if (2*TrueCount == totalVote){
            finalResult = "draw";
        }else{
            finalResult = "false";
        }
        emit votingStage("Voting Ended");
    }
}
