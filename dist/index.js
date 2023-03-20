"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNetworkByName = exports.getNetworkByChainId = exports.networks = exports.networksMap = void 0;
var contracts_1 = __importDefault(require("./contracts"));
exports.networksMap = {
    'L1Dev': 'RolluxBedrockDev',
    'RolluxBedrockDev': 'L1Dev'
};
exports.networks = {
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
        contracts: contracts_1.default.l1_dev,
    },
    L2Dev: {
        rpcAddress: 'https://rpc-bedrock.rollux.com/',
        name: 'RolluxBedrockDev',
        explorerUrl: 'https://explorer.testnet.rollux.com',
        chainId: 57000,
        layer: 2,
        contracts: contracts_1.default.l2_dev,
    }
};
var getNetworkByChainId = function (chainId, networks) {
    var found = undefined;
    Object.keys(networks).forEach(function (element) {
        var network = networks[element];
        if (network.chainId === chainId && typeof found === 'undefined') {
            found = network;
        }
    });
    return found;
};
exports.getNetworkByChainId = getNetworkByChainId;
var getNetworkByName = function (name, networks) {
    var found = undefined;
    Object.keys(networks).forEach(function (element) {
        var network = networks[element];
        if (network.name === name && typeof found === 'undefined') {
            found = network;
        }
    });
    return found;
};
exports.getNetworkByName = getNetworkByName;
