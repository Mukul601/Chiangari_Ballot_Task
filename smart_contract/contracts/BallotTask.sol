//SPDX-License-Identifier: Unlicense

pragma solidity >=0.7.0 <0.9.0;

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
    uint256 private countResult = 0;
    uint256 public finalResult = 0;
    uint256 public totalVoter = 0;
    uint256 public totalVote = 0;
    uint256 public totalBanAddress = 0;

    address public ballotOwnerAddress;
    string public ballotName;
    string public proposal;

    mapping(uint256 => vote) private votes;
    mapping(address => voter) public voterRegister;

    enum State {
        Created,
        Voting,
        Ended
    }
    State public state;

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

    constructor(string memory _ballotName, string memory _proposal) {
        ballotOwnerAddress = msg.sender;
        ballotName = _ballotName;
        proposal = _proposal;
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
        inState(State.Created)
        onlyOwner
    {
        //require(voterRegister[_voterAddress].weight = false);
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
    {
        voter memory v;
        v.voterName = _voterName;
        v.weight = false;
        v.eligible = false;
        voterRegister[_voterAddress] = v;
        totalBanAddress++;
        totalVoter++;
        emit voterBaned(_voterAddress, _voterName);
    }

    function startVote() public inState(State.Created) onlyOwner {
        state = State.Voting;
        emit votingStage("Voting Started");
    }

    function doVote(bool _choice)
        public
        inState(State.Voting)
        returns (bool voted)
    {
        bool found = false;
        require(voterRegister[msg.sender].weight = true);

        voterRegister[msg.sender].weight = false;
        vote memory v;
        v.voterAddress = msg.sender;
        v.choice = _choice;
        if (_choice) {
            countResult++;
        }
        votes[totalVote] = v;
        totalVote++;
        found = true;

        return found;
    }

    function endVote() public inState(State.Voting) onlyOwner {
        state = State.Ended;
        finalResult = countResult;
        emit votingStage("Voting Ended");
    }
}
