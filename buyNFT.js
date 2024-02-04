const Web3 = require('web3');

// 连接到以太坊节点
const web3 = new Web3('');

// 合约地址和ABI
const contractAddress = '';
const contractABI = []
// 创建合约实例
const contract = new web3.eth.Contract(contractABI, contractAddress);

// 构建交易参数
const buyERC1155Data = {
  from: '', // 发送者地址
  gasPrice: web3.utils.toWei('2.5', 'gwei'), // 燃气价格
};

// 调用合约的BuyERC1155方法
contract.methods.buyERC1155().send(buyERC1155Data)
  .on('transactionHash', (hash) => {
    console.log(`Transaction hash: ${hash}`);
  })
  .on('confirmation', (confirmationNumber, receipt) => {
    if (confirmationNumber === 1) {
      console.log(`Transaction confirmed in block ${receipt.blockNumber}`);
    }
  })
  .on('error', (error) => {
    console.error(`Transaction error: ${error.message}`);
  });
