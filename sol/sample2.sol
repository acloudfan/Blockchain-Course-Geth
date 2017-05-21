pragma solidity ^0.4.6;
contract MyContract {

  uint   num;
                
  event NumberSetEvent(address indexed caller, uint oldNum, uint newNum);
  event NumberDoubled(address indexed caller,uint oldNum, uint newNum);

   function getNum()  returns (uint) {
     return num;
  }
               
   function setNum(uint newNum) {
      uint old = num;
      num=newNum;
      NumberSetEvent(msg.sender,old,num);
   }

   function setDouble() {
      uint old = num;
      num=n;
      NumberDoubled(msg.sender,old,num);
   }
               
   function MyContract(uint x){num=x;}
}