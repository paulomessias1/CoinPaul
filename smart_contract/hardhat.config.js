require ('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/t63cBaMIKKxeUE01IlTxIO2sXq8WG2Ll',
      accounts: [ 'a5af5782c41c670d070cdbfbcbd3b63cb1cefc0e244855772ed718c2a3634424' ]
    }
  }
}