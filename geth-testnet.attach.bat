Rem This command is good on windows
geth  attach "//./pipe/geth.ipc"

Rem On UNIX/Linux/Mac the geth.ipc is created under the data directory
Rem To use comment command above & uncomment command below

Rem geth attach "./data/geth.ipc"