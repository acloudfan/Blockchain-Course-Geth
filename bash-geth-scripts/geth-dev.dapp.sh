#!/bin/bash

#Creates a private DEV Network

geth --dev --datadir "./data/dev" --rpc --rpcaddr "localhost" --rpcport "8545" --rpcapi "web3,eth,net,personal" --rpccorsdomain "*"