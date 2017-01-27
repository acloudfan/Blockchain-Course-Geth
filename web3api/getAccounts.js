/**
 * Get the accounts from the connected node
 * ASync        web3.eth.accounts
 * Sync         web3.eth.getAccounts(callback)
 */

console.log('tester')
accounts = web3.eth.accounts

//console.log("Sync eth.accounts=", JSON.stringify(accounts))

dat = JSON.stringify(accounts)

console.log(dat)