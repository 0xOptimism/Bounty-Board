// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Bounty {
    uint256 totalBounties;

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
}
