pragma solidity 0.6.1;

contract votting{
    struct candidate{
        uint id;
        string name;
        uint voted;
    }

    mapping(uint => candidate) candidates;

    mapping(address => bool) voters;

    function addCandidate(uint _id,string memory _name) public returns(bool){
        candidates[_id] = candidate(_id,_name,0);
        return true;
    }

    function Vote(uint _candidateId) public returns(bool){
        require(voters[msg.sender] != false,"you have already voted");
        require(_candidateId > 0);

        voters[msg.sender] = true;
        candidates[_candidateId].voted++;

        return true;
    }


}