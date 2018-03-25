pragma solidity ^0.4.6;
contract MyContract {

  uint   num;
                
  event NumberSetEvent(address indexed caller, uint oldNum, uint newNum);
  event NumberDoubled(address indexed caller,uint oldNum, uint newNum);

   function getNum() public returns (uint) {
     return num;
  }
               
   function setNum(uint newNum) public {
      uint old = num;
      num=newNum;
      NumberSetEvent(msg.sender,old,num);
   }

   function setDouble() public {
      uint old = num;
      num=n;
      NumberDoubled(msg.sender,old,num);
   }
               
   function MyContract(uint x) public {
      num=x;
   }
}
