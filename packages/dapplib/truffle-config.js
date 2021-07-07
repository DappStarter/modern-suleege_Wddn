require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope kite bone tooth tissue rifle stick million grace depth equal genius'; 
let testAccounts = [
"0x8b69fd88d5245d727c2d09f7c9ab76e34baca4da49799babcdbbc53fed6c172c",
"0x946f7ab17f365f4786b215c77cb44a4ff0f4231da719bac692febf809ad8a4c5",
"0x826727228f3ed3332b0a8b404242d0d64b9cc4f7c3034a13cf184b1d4a915a19",
"0x003c1b4a44f058fadb2e464b62cd9b97c72941faf12f2ec4dbeef0697ca1282c",
"0x4263f6fe918e33c64971d48861e8086fcc25e6a5a03a094793cba12b96ab7b25",
"0x8416420b01f5961c29a856a04b24a2e5c0aee9a71e6359ff4cf663610ded60e6",
"0x0713d74c4d95417484993bf9a80d73a210d9cc74411904eea9aa8d110998d5c4",
"0xebbb1cb0a1784f41d4ea9ce6344bb82e53d2b3ca72e128800d20bd60e72da252",
"0x87e7b4c67bf3a057656484867c25fed7a3604386efb0cd28e7b619ebc21e5c03",
"0x831072fa28f2ba199a065420e2fd7f519ad22415d04cc05636279b90e93ae3f0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

