# Syscoin Networks (details for npm and yarn)

This package provides a list of default smart contract addresses and official RPC/explorer URLs for the different layers of the Syscoin modular blockchain. The information is regularly updated to ensure that it remains accurate and up-to-date.

## Installation

You can install Syscoin Networks via npm by running the following command:

```bash
yarn add syscoin-networks@https://github.com/SYS-Labs/syscoin-networks
```

## Usage

You can import the package and use the following for reference:

```js
const syscoinNetworks = require('syscoin-networks')
await syscoinNetworks.getNetworkByChainId(ChainID, syscoinNetworks.networks)
```

## Credits

Syscoin Networks is based on code from [Syscoin Bridge app](https://github.com/syscoin/syscoin-bridge).
