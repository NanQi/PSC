传销币
---

这是一个可燃烧、增发和暂停的ERC20代币，源码完全照搬`openzeppelin-solidity`，主要用于在`etherscan`中验证合约。

1. 依赖环境

* truffle4
* nodejs

2. 怎么运行

从git克隆代码后，运行:
```
npm i
```

修改`contracts\PSCToken.sol`文件最后代币信息
``` 
/**
 * @title Pyramid Selling Coin
 * @dev https://github.com/NanQi/PSC
 */
contract PSCToken is StandardToken, BurnableToken, MintableToken, PausableToken {
  string public name = "Pyramid Selling Coin";
  string public symbol = 'PSC';
  uint public decimals = 8;
  uint public INITIAL_SUPPLY = 3600000000 * 100000000;

  constructor() public {
    totalSupply_ = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }
}
```

编译合约：

```
npm run build
```
或
```
truffle compile
```

部署合约：
```
truffle migrate
```
测试网或主网需要做相应配置，

部署到`rinkeby`：

当前目录添加文件`.secret`，写入助记词
```
truffle migrate --network rinkeby
```