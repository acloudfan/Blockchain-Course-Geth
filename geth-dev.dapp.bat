Rem Creates a private DEV Network

geth --dev --datadir "./data" --rpc --rpcaddr "localhost" --rpcport "8545" --rpcapi "web3,eth,net,personal" --rpccorsdomain "*"