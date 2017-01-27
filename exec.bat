rem Just for executing the JS within the geth client

geth   --exec "loadScript('./web3api/%1')" attach "http://localhost:8545"