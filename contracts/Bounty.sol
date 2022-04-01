// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Bounty {
    bool public isBase;
    uint256 totalBounties;
    address public owner;

    struct BountySubmiter {
        address dao;
        string daoName;
        string description;
        string githubLink;
        uint256 bountyReward;
        string tokenPayout;
        uint256 timeLeft;
    }

    BountySubmiter[] bounties;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function.");
        _;
    }

    constructor() {
        isBase = true;
    }

    function initialize(address _owner) external {
        require(isBase == false, "Error: Base contract cannot initialize.");
        require(owner == address(0), "Error: Contract is already initialized.");
        console.log("contract initizialized by:", _owner);
        owner = _owner;
    }
}
