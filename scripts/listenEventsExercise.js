// 1. Create the contract object by passing the ABI Definition of sample contract
// var contractObject = web3.eth.contract([{"constant":false,"inputs":[],"name":"getNum","outputs":[{"name":"n","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"n","type":"uint256"}],"name":"setNum","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"x","type":"uint256"}],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"caller","type":"address"},{"indexed":true,"name":"oldNum","type":"bytes32"},{"indexed":true,"name":"newNum","type":"bytes32"}],"name":"NumberSetEvent","type":"event"}])


var contractObject = web3.eth.contract(COPY & PASTE ABI DEFINITION FROM WORKBENCH)


// 2. Create an instance of the contract by passing address of the contract
//    Copy the address from the TheDapps.com workbench app if that is what you used to deploy
//    COPY THE ADDRESS of your deployed contract


contractInstance = contractObject.at("COPY PASTE ADDRESS OF CONTRACT - HERE");

// This is the ASynchronous version
// contractObject.at("0x66027c218cb47fe81ab80075a073c72e99808745", function(error, result){contractInstance=result});;//PASTE ADDRESS HERE")

// 3. Make a get Call


contractInstance.getNum.call()

// 4. Lets setup a event watcher
//    Watcher will recieve an event every time the setNum is called with num=7

myEventCallbackFunc = function(error, result){console.log("Event for num Receieved",JSON.stringify(result))}

event = contractInstance.NumberSetEvent({"newNum":"0x0000000000000000000000000000000000000000000000000000000000000007"},{"fromBlock": "latest"})

event.watch(myEventCallbackFunc)

// 5. Use the workbench DAPP to send transaction OR use the following

contractInstance.setNum.sendTransaction(5,{"from":eth.coinbase});

// 6. Stop watching

event.stopWatching()
