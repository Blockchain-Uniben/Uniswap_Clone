// SPDX-License-Identifier: MIT

pragma solidity >=0.5.5  <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    constructor(uint256 initialSupply) ERC20("ChainSwap", "BU_Chain") {
        _mint(msg.sender, initialSupply);
    }
}
