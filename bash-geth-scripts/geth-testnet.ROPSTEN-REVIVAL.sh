#!/bin/bash
# NOT APPLICABLE for the --dev

# Clean the data directory before running the command | you may use geth --data removedb
# #1 Try this command first - if it does not work try #2

geth --identity "MyTestNode" --datadir "./data" --testnet --fast --bootnodes "enode://20c9ad97c081d63397d7b685a412227a40e23c8bdc6688c6f37e97cfbc22d2b4d1db1510d8f61e6a8866ad7f0e17c02b14182d37ea7c3c8b9c2683aeb6b733a1@52.169.14.227:30303,enode://6ce05930c72abc632c58e2e4324f7c7ea478cec0ed4fa2528982cf34483094e9cbc9216e7aa349691242576d552a2a56aaeae426c5303ded677ce455ba1acd9d@13.84.180.240:30303"

# #2 Two step process
# Step 1 - run the following command (Needs to be done once for initial sync)
# $  geth --testnet --fast --nodiscover

# Step 2 - attach to geth instance - Run following commands in the console
# > admin.addPeer('enode://6ce05930c72abc632c58e2e4324f7c7ea478cec0ed4fa2528982cf34483094e9cbc9216e7aa349691242576d552a2a56aaeae426c5303ded677ce455ba1acd9d@13.84.180.240:30303')
# > admin.addPeer('enode://20c9ad97c081d63397d7b685a412227a40e23c8bdc6688c6f37e97cfbc22d2b4d1db1510d8f61e6a8866ad7f0e17c02b14182d37ea7c3c8b9c2683aeb6b733a1@52.169.14.227:30303')

# AFTER Synchronozation is complete = You can use the regular script : geth-testnet.DAPP

    