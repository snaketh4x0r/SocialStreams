# Introduction

with this dapp we have tokenized time of people and added it on AMM market so people can buy or trade it.People can redeem your time by streaming equal amounts of tokens back to person 
since this are social tokens they are binded to your twitter account so people can buy your social tokens and redeem it for your time by streaming it back to you by just entering your twitter name.

**plz check asset folder for screenshots**

To know about time tokenization with ethereum
https://medium.com/@jschiarizzi/i-tokenized-my-time-and-made-it-an-asset-you-can-buy-trade-4457708a2520

To know more about social tokens(you can create your own using roll btw)
https://tryroll.com/#:~:text=The%20Roll%20network%20mints%20branded,token%20under%20the%20ERC20%20standard.

https://www.coindesk.com/roll-wants-to-take-power-from-youtube-with-cryptos-for-content-creators

to know about Sablier protocol
https://sablier.finance/

On clicking stream button a successful stream is created on matic network

it calls the stream method of sablier contract to create stream
https://docs.sablier.finance/streams#create-stream

a transaction of successful stream on matic testnet
https://explorer.testnet2.matic.network/tx/0xc8ac70d956797b339898a224d66c78cb171dae09f75a80e81bc8932c692d0ba4/token_transfers

Protocols used are 

Uniswap 0x24A511435E0b5dE3AA1aD6f773A3D7e03A08dE00
Sablier 0xA677D8e7DC0a906be79Fa077C0212a246837b6aE

Both are deployed on matic testnetv2
all contracts mentioned in contract_addresses.txt are verified on matic testnetv2
only uniswap contracts are not verified as during time of writing this matic explorer(blockscout) doesn't supports vyper contract verification.


Since uniswap prevents all tokens from showing from frontend so you have to input token address in search bar to find the token to buy
![image](https://github.com/snaketh4x0r/SocialStreams/blob/master/assets/soc3.PNG "image")

Then buy the token
currently you can only stream to teddy so enter teddy and start streaming
![image](https://github.com/snaketh4x0r/SocialStreams/blob/master/assets/streaming%20to%20teddy.PNG "image")

Due to limitations of ERC20 you have to first click on approve to allow token transfers
so approve+stream


# Contracts 

All contracts are minimal in nature

uniswap and sablier contracts are used with custom address registry contract

current contracts are not to be used in production because they skip safety features required for production built

To compile the contracts
requirements
Node.js 
truffle 
vyper 
truffle-hdwallet-provider

1.git clone the repo
2. cd socialstreams
3.truffle compile
4.truffle migrate


## Frontend

front end is developed using react
so 
1.git clone repo
2. cd repo
3. cd client
4. npm install
5. npm start



