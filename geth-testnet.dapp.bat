rem  MAKE SURE SOLIDITY Path is Correct
rem  On LINUX/MAC you may use $ which solc to find path to the compiler
rem geth --rpc --rpcaddr "localhost" --rpcport "8545" --rpcapi "web3,eth,net,personal" --rpccorsdomain "*" --datadir "./data" --solc "c:/Solidity/solc" --testnet 

Rem Starting v1.6 geth the --solc option is NO MORE SUPPORTED :(
geth --rpc --rpcaddr "localhost" --rpcport "8545" --rpcapi "web3,eth,net,personal" --rpccorsdomain "*" --datadir "./data"  --testnet 