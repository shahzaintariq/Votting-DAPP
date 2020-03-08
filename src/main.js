
var web3 = new Web3('HTTP://127.0.0.1:8545')

var abi = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "Candidate",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "Vote",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        }
      ],
      "name": "addCandidate",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "getCandidateData",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_candidateId",
          "type": "uint256"
        }
      ],
      "name": "vote",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "result",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
  ]

var contractAddress = '0xC72e33Bbe1b711d374d27D5DD9e2FE9F30B20478';

var contract = new web3.eth.Contract(abi,contractAddress);

function addSomeCandidate(_id,_name){
  contract.methods.addCandidate(_id,_name).send( 
    {
      from: '0x4A6c7E8a3524FF7Edcd40452A8A86909335D3321',
      gas: 4600000 
    }
  ).then((r) => {console.log(r)})

}

var cand = []
var Ids = []
function fetchData(_id) {
    var table = document.getElementById('mytable');
    var row = table.insertRow(1);
    var id = row.insertCell(0);
    var n = row.insertCell(1);
    var vote = row.insertCell(2);

    contract.methods.getCandidateData(_id).call().then( function(r){
      id.innerHTML = r[0];
      n.innerHTML = r[1];
      vote.innerHTML = r[2];
      cand.push(r[1]);
      Ids.push(r[0]);
    })
}
fetchData(1);
fetchData(2);

function loadDataForDropList() {  
  var data = document.querySelectorAll('a');
  tempid = 0;
  for(i=0; i<cand.length; i++){
    data[i].innerHTML = cand[i];
  }
}

resultBtn = document.getElementById('result')
function resultF() {
  console.log(contract.methods.result().send({from: "0x4A6c7E8a3524FF7Edcd40452A8A86909335D3321"}).then( (r) => {console.log(r)}))
  contract.methods.result().call().then( (r) => {console.log(`Result Of Election : ${r}`)})
}