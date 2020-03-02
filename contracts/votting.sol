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
        temp = candidate(_id,_name,0);
        candidates[_id] = temp;
        return true
    }


}