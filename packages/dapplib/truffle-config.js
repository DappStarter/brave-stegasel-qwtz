require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski strong riot night umbrella inflict clock army genre'; 
let testAccounts = [
"0x57ce4fbf8b6d4c1d59e0ef6b458b5228d0e59b0f0eaf39bec0c4f380e27aec1c",
"0xabf1acb000e4aa30932f0a72a163a9c45dcea2c2cbdd77ea82f39adb5a2f6702",
"0x47b1aada32db3ccf98f340dd5ec5486a1fffb4da3bcabffe32f68c56750ee8dc",
"0x5f111bc0b05535f52a433b8ce8a66db4a16d3c72e972e25c83cc607dbf01e5df",
"0x457fa9c1414b75aea56ac4cc7068167ef4fadf821c5664e12e9cde0ea3b7e038",
"0xe318a0ca9a1e52b5533e552864be8d7fc2f1aa18275e0ba7a66b62a5523e60cd",
"0xf82a6744fe54651b9e9580e1d1b8b4dd6b4cfb507fc2d1c45ea9140bd7d63e0c",
"0xf04fb16899712dfc8d8a9af3aba44e09db8cf27b86b6dc7a9e41c54056e48168",
"0x0dbf799fc9afa5d2db1f54d1548cc158bb0332b5a1159430ea34261196a279ef",
"0xe0574e27a7d48cf2eb453cd6b40ddc35ec3c5fdc14a66a87d1993f0bed44d9a0"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


