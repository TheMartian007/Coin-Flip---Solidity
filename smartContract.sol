// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;


contract smart{
    string public ans;

    function randomNum() private view returns (uint){
        return uint(keccak256(abi.encodePacked(block.timestamp, block.difficulty, msg.sender))) % 2;
    }
    function result() public{
        if(randomNum() == 0) ans = "Heads";
        else ans = "Tails";
    }
}