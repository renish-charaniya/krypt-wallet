require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten:{
      url: 'https://eth-ropsten.alchemyapi.io/v2/UvyzItcczWpmDCgB3J-jgedYpzeVcRqp',
      accounts: ['e6d38679ef6485561f77bb6f4e690fd0eb0d219311cc2f918b74fe72c245fdf4']
    }
  }
}