export default [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "productId",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "nft",
        "type": "address"
      }
    ],
    "name": "Minted",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "productId",
        "type": "bytes32"
      }
    ],
    "name": "mint",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
]