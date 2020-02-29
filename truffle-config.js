/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * truffleframework.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like truffle-hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

const HDWalletProvider = require('truffle-hdwallet-provider');
const mnemonic = ""; //add your mnenomic here
module.exports = {
    networks: {
      development: {
       host: "127.0.0.1",     // Localhost (default: none)
       port: 9545,            // Standard Ethereum port (default: none)
       network_id: "*",       // Any network (default: none)
      },
      maticTestnet: {
        provider: () => new HDWalletProvider(mnemonic, `https://testnetv3.matic.network`),
        network_id: "*",       
        gas: 8000000,    
        gasPrice: '0x0',    
        confirmations: 2,   
        timeoutBlocks: 200,  
        skipDryRun: true     
      },
      maticBetaMainnet: {
        provider: () => new HDWalletProvider(mnemonic, `https://betav2.matic.network`),
        network_id: "*",
        gas: 8000000,
        confirmations: 2, 
        timeoutBlocks: 200, 
        skipDryRun: true
      }
    }
};