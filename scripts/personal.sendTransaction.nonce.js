/**
 * Shows the use of personal.sendTransaction with nonce
 * ** Nonce is a running counter associated with the account
 * ** Every transaction has a nonce
 * ** If the nonce is skipped then the transaction is set aside i.e., goes to the queue
 * ** This queue is on the geth client and a maximum of 64 transactions can be queued (per doc)
 * ** This is part of the ethereum protocol 
 * 
 * To run this script:
 * 1. Attach to the running geth node
 * 2. Type the lines (or cut/paste) to interactive console OR
 * 2. Type & hit enter >>  loadScript("./scripts/personal.sendTransaction.nonce.js")
 */
from = personal.listAccounts[0]
to = personal.listAccounts[1]

// Convert 0.001 ethers to Wei
amount = web3.toWei(0.001,"ether");

// Transaction object

// Set the nonce higher than the max nonce for your account
my_nonce=10
// Set the data string in hex
my_data="0xABCDEF"

txn = {
    from: from,
    to: to,
    amount: amount,
    nonce: my_nonce,
    data: my_data
}

// Send the transaction
addr = personal.sendTransaction(txn, "password")

// Print to cnsole
console.log('Transaction created: ', addr)