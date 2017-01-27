/**
 * Demo script that initiates a transaction to send ethers 
 * from account at index=0 to account on index=1
 * If the account is not explicitly unlocked the transaction will fail
 * To run the script successfully use the --unlock option
 * 
 * Following will fail because the account is locked
 * geth   --verbosity "0" --datadir "./data" --testnet --exec "loadScript('./scripts/send.unlock.js')" attach
 * 
 * Following will go through
 *  geth   --unlock "0" --password "password.txt" --verbosity "0" --datadir "./data" --testnet --exec "loadScript('./scripts/send.unlock.js')"   attach
 * 
 * Check balance
 * 
 */

transferEthers = function(){
    sender = personal.listAccounts[0]; // Same as eth.coinbase
    receiver = personal.listAccounts[1];

    // Send 0.1 ether from sender to receiver account
    // The value to be trasferred should be in wei
    amount = web3.toWei(0.001,"ether");

    // Call send to transfer 0.1 ether from account 0 to account 1

    addr = eth.sendTransaction({from:sender, to:receiver, value: amount})

    console.log("Address=",addr);

    // In a single line
    // personal.unlockAccount(eth.coinbase,"password")
    // eth.sendTransaction({from:personal.listAccounts[0], to:personal.listAccounts[1], value: web3.toWei(0.1,"ether")})

    // web3.eth.sendTransaction({from:sender, to:receiver, value: amount},function(error, result){
    //     console.log("Err=",error);
    //     console.log("Result=",result)
    // })
}
