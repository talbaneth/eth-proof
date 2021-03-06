#! /usr/bin/env node
require('merkle-patricia-tree');
var Web3 = require('web3');
var EP  = require('./index')
const rlp = require('rlp');
// var chainDataPath = '/Users/zacharymitton/Library/Ethereum/geth/chaindata'
// var recentBlockHash = 'c7b427ed2e0fcc24474437e676625186abefb4328d0807c2c36edb78c2d54082'

var eP = new EP(
  "https://rinkeby.infura.io/v3/d178aecf49154b12be98e68e998cfb8d"
)

var userArgs = process.argv.slice(2);
var command = userArgs[0];
console.log('COMMAND', command);
switch(command){
  case "getTransactionProof":
    var txHash = userArgs[1]
    eP.getTransactionProof(txHash).then((result)=>{
    var str = rlp.encode(result.value).toString('hex');
        console.log("tx: " + str);
    var str1 = rlp.encode(result.parentNodes).toString('hex');
        console.log("parentNodes: " + str1);
console.log('result path ' + result.path.toString('hex'));

   console.log("tx root " + rlp.encode(result.header[4]).toString('hex'));
     // console.log(EP.transaction(result.path, result.value, result.parentNodes, result.header, result.blockHash));
    })
    break;
    case "getReceiptProof":
    var txHash = userArgs[1]
    eP.getReceiptProof(txHash).then((result)=>{
    var str = rlp.encode(result.value).toString('hex');

    console.log("tx: " + str);
    var str1 = rlp.encode(result.parentNodes).toString('hex');
        console.log("parentNodes: " + str1);
console.log('result path ' + result.path.toString('hex'));

   console.log("tx root " + rlp.encode(result.header[4]).toString('hex'));
     // console.log(EP.transaction(result.path, result.value, result.parentNodes, result.header, result.blockHash));
    })
    break;
}

