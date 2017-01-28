/**
 * Get the accounts from the connected node
 * ASync        web3.eth.accounts
 * Sync         web3.eth.getAccounts(callback)
 * 
 * To execute this script in console
 * > exec getAccounts.js
 */


accounts = web3.eth.accounts

//console.log("Sync eth.accounts=", JSON.stringify(accounts))

console.log('\nSync Call')
console.log("Result=",JSON.stringify(accounts))

// Async call 
web3.eth.getAccounts(function(error, result){
    console.log("\nAsync Call");
    if(error){
        console.log('Error=',JSON.stringify(error));
    } else {
        console.log('Result=',JSON.stringify(result));
    }
});