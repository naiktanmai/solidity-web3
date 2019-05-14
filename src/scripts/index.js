import Web3 from "web3";

var web3 = new Web3(
  new Web3.providers.HttpProvider(
    "https://ropsten.infura.io/v3/2e0f688331e64d468b72191ad95d9f3b"
  )
);

const BN = web3.utils.BN;

const contract = web3.eth.Contract(
  [
    {
      constant: false,
      inputs: [
        {
          name: "w",
          type: "uint256"
        },
        {
          name: "h",
          type: "uint256"
        }
      ],
      name: "rectangle",
      outputs: [
        {
          name: "s",
          type: "uint256"
        },
        {
          name: "p",
          type: "uint256"
        }
      ],
      payable: true,
      stateMutability: "payable",
      type: "function"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          name: "caller",
          type: "address"
        }
      ],
      name: "Called",
      type: "event"
    }
  ],
  "0xdd9be91a1d79524753e6cc7d41f0ebbd24dd1f74"
);

contract.methods
  .rectangle(2, 3)
  .call()
  .then(data => {
    console.log(data);

    console.log(web3.utils.hexToAscii(data.p._hex));
    console.log(web3.utils.hexToAscii(data.s._hex));
  })
  .catch(err => console.error(err));
