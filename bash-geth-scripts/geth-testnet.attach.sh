#!/bin/bash
# This command is good on windows
# geth  attach "//./pipe/geth.ipc"

# On UNIX/Linux/Mac the geth.ipc is created under the data directory
geth attach "./data/geth.ipc"