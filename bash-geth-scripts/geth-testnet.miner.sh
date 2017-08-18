#!/bin/bash
#  DO NOT FORGET TO REPLACE --testnet if you are using --dev

#  Do not forget to change the etherbase account

geth --testnet --datadir "./data"  --mine --minerthreads "4" --extradata "ACloudFan.com" --etherbase "0x09f651352530526d2a78ecb268ec7f0a60d1b219" console
