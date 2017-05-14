pragma solidity ^0.4.6;
contract MyContract {

  uint   num;
                
  event NumberSetEvent(address indexed caller, uint oldNum, uint newNum);
  event NumberDoubled(address indexed caller,uint oldNum, uint newNum);

   function getNum()  returns (uint n) {
     return num;
  }
               
   function setNum(uint n) {
      uint old = num;
      num=n;
      NumberSetEvent(msg.sender,old,num);
   }

   function setDouble() {
      uint old = num;
      num=n;
      NumberDoubled(msg.sender,old,num);
   }
               
   function MyContract(uint x){num=x;}
}