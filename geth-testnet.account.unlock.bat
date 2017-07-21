Rem  DO NOT FORGET TO REPLACE --testnet if you are using --dev

geth  --testnet --verbosity "0" --datadir "./data"  --exec "loadScript('./scripts/send.unlock.js')" --unlock "0" console