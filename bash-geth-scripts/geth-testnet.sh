#!/bin/bash
#  DO NOT FORGET TO REPLACE --testnet if you are using --dev
#  To connect to RINKEBY replace --testnet with --rinkeby

geth --testnet --identity "MyTestNode" --datadir "./data"  --verbosity "4" --fast
