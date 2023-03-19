import contractsDev from "./contracts";
export var networksMap = {
    'L1Dev': 'RolluxBedrockDev',
    'RolluxBedrockDev': 'L1Dev'
};
export var networks = {
    L1: {
        rpcAddress: 'https://rpc.tanenbaum.io',
        name: 'sysNeVM',
        explorerUrl: 'https://tanenbaum.io',
        chainId: 5701,
        layer: 1,
        contracts: {}
    },
    L1Dev: {
        rpcAddress: 'https://rpc.tanenbaum.io',
        name: 'L1Dev',
        explorerUrl: 'https://tanenbaum.io',
        chainId: 5700,
        layer: 1,
        contracts: contractsDev.l1_dev,
    },
    L2Dev: {
        rpcAddress: 'https://rpc-bedrock.rollux.com/',
        name: 'RolluxBedrockDev',
        explorerUrl: 'https://explorer.testnet.rollux.com',
        chainId: 57000,
        layer: 2,
        contracts: contractsDev.l2_dev,
    }
};
export var getNetworkByChainId = function (chainId, networks) {
    var found = undefined;
    Object.keys(networks).forEach(function (element) {
        var network = networks[element];
        if (network.chainId === chainId && typeof found === 'undefined') {
            found = network;
        }
    });
    return found;
};
export var getNetworkByName = function (name, networks) {
    var found = undefined;
    Object.keys(networks).forEach(function (element) {
        var network = networks[element];
        if (network.name === name && typeof found === 'undefined') {
            found = network;
        }
    });
    return found;
};