//SPDX-License-Identifier: Unlicense

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

import "hardhat/console.sol";

contract USTToken is ERC20 {

    constructor(string memory name, string memory symbol) ERC20(name, symbol) {
        _mint(msg.sender, 10000 * (10 ** 18));
        console.log("Deploying token ", name);
    }

    function faucet (address recipient , uint amount) external {
      _mint(recipient, amount);
      console.log("Sending '%s' tokens to '%s'", amount, recipient);
    }
}


