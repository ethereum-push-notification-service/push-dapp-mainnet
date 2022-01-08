// environmental configurations for the dapp for different environments
const config = {
    apiUrl: "https://backend-mainnet.epns.io/apis", //the right backend URL to be used
    allowedNetworks: [
        1, //for eth
        137 //for polygon
    ],
    coreContractChain: 1, //the chain id of the network which the core contract relies on
    coreRPC: "https://mainnet.infura.io/v3/TZCWZ8YCQDH4THP54865SDGTG3XXY8ZAQU"
};

export default config;