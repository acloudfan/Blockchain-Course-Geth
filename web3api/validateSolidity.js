/**
 * Cimpiles the solidity contract code to validate the Solidity compiler setup
 */
var sampleSolidityCode = "pragma solidity ^0.4.5; contract MyContract { uint   num;event NumberSetEvent(address indexed caller, uint oldNum, uint newNum);function getNum()  returns (uint n) {return num;} function setNum(uint n) {uint old = num;num=n;NumberSetEvent(msg.sender,old,num);}function MyContract(uint x){num=x;}}"


var contract = eth.compile.solidity(sampleSolidityCode)

console.log(contract)