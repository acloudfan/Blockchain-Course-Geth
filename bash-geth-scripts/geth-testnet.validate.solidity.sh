#!/bin/bash

geth   --exec "loadScript('./web3api/validateSolidity.js')" attach "http://localhost:8545"