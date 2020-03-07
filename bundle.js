(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
    // //var Web3 = require('web3')
    // var web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545/'));



    //     web3.eth.defaultAccount = web3.eth.accounts[0];

    //     var abi =[
	// 		{
	// 			"inputs": [],
	// 			"stateMutability": "nonpayable",
	// 			"type": "constructor"
	// 		},
	// 		{
	// 			"anonymous": false,
	// 			"inputs": [
	// 				{
	// 					"indexed": false,
	// 					"internalType": "uint256",
	// 					"name": "",
	// 					"type": "uint256"
	// 				},
	// 				{
	// 					"indexed": false,
	// 					"internalType": "string",
	// 					"name": "",
	// 					"type": "string"
	// 				}
	// 			],
	// 			"name": "Candidate",
	// 			"type": "event"
	// 		},
	// 		{
	// 			"inputs": [
	// 				{
	// 					"internalType": "uint256",
	// 					"name": "_candidateId",
	// 					"type": "uint256"
	// 				}
	// 			],
	// 			"name": "Vote",
	// 			"outputs": [
	// 				{
	// 					"internalType": "bool",
	// 					"name": "",
	// 					"type": "bool"
	// 				}
	// 			],
	// 			"stateMutability": "nonpayable",
	// 			"type": "function"
	// 		},
	// 		{
	// 			"inputs": [
	// 				{
	// 					"internalType": "uint256",
	// 					"name": "_id",
	// 					"type": "uint256"
	// 				},
	// 				{
	// 					"internalType": "string",
	// 					"name": "_name",
	// 					"type": "string"
	// 				}
	// 			],
	// 			"name": "addCandidate",
	// 			"outputs": [
	// 				{
	// 					"internalType": "bool",
	// 					"name": "",
	// 					"type": "bool"
	// 				}
	// 			],
	// 			"stateMutability": "nonpayable",
	// 			"type": "function"
	// 		},
	// 		{
	// 			"inputs": [],
	// 			"name": "result",
	// 			"outputs": [
	// 				{
	// 					"internalType": "string",
	// 					"name": "",
	// 					"type": "string"
	// 				}
	// 			],
	// 			"stateMutability": "view",
	// 			"type": "function"
	// 		}
	// 	]
    //    var contractAddress = '0x692a70D2e424a56D2C6C27aA97D1a86395877b3A';
	// var contract = new web3.eth.Contract(abi,contractAddress);

	// console.log(contract)
},{}]},{},[1]);
