// https://eth-ropsten.alchemyapi.io/v2/uQ8iv6vqekNr6FlLfSKnEPRuyj94AJwP
//6267fcc47846d066e67e13ebe54919ba71ee3faa8ca37f1ad53eee5ecb274924
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/uQ8iv6vqekNr6FlLfSKnEPRuyj94AJwP',
      accounts: ['6267fcc47846d066e67e13ebe54919ba71ee3faa8ca37f1ad53eee5ecb274924'],
    },
  },
};