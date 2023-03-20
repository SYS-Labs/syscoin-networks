"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ethers_1 = require("ethers");
var contractsDev = {
    l1_dev: {
        AddressManager: '0xf2ad472ade2009Ef5eeb26B7fe27BA9fd27dE46A',
        L1CrossDomainMessenger: '0x51ac8093D762BBD17C8d898634916dAc14e1BCC1',
        L1StandardBridge: '0x39CadECd381928F1330D1B2c13c8CAC358Dce65A',
        StateCommitmentChain: ethers_1.ethers.constants.AddressZero,
        CanonicalTransactionChain: ethers_1.ethers.constants.AddressZero,
        BondManager: ethers_1.ethers.constants.AddressZero,
        OptimismPortal: '0x61200B9fcBB421aFD0Bb5A732fe48ec98482E39C',
        L2OutputOracle: '0x63D297aa3feCbf6eEdE0aCd15B0308B9C8379afb',
    },
    l2_dev: {
        L2ToL1MessagePasser: '0x4200000000000000000000000000000000000016',
        DeployerWhitelist: '0x4200000000000000000000000000000000000002',
        L2CrossDomainMessenger: '0x4200000000000000000000000000000000000007',
        GasPriceOracle: '0x420000000000000000000000000000000000000F',
        L2StandardBridge: '0x4200000000000000000000000000000000000010',
        SequencerFeeVault: '0x4200000000000000000000000000000000000011',
        OptimismMintableERC20Factory: '0x4200000000000000000000000000000000000012',
        L1BlockNumber: '0x4200000000000000000000000000000000000013',
        L1Block: '0x4200000000000000000000000000000000000015',
        LegacyERC20ETH: '0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000',
        WETH9: '0x4200000000000000000000000000000000000006',
        GovernanceToken: '0x4200000000000000000000000000000000000042',
        LegacyMessagePasser: '0x4200000000000000000000000000000000000000',
        L2ERC721Bridge: '0x4200000000000000000000000000000000000014',
        OptimismMintableERC721Factory: '0x4200000000000000000000000000000000000017',
        ProxyAdmin: '0x4200000000000000000000000000000000000018',
        BaseFeeVault: '0x4200000000000000000000000000000000000019',
        L1FeeVault: '0x420000000000000000000000000000000000001a',
    },
};
exports.default = contractsDev;
