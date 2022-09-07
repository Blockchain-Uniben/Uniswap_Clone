const { expect } = require("chai");
const { BigNumber } = require("ethers");
const { ethers } = require("hardhat");

describe("Testing contracts", function () {
    // List of dummy addresses
    let deployer, addr1, addr2, addr3;

    // Variables to help creates instances
    let tokenFactory, token
    let exchangeFactory, exchange

    // Null address
    let zeroAddress = "0x0000000000000000000000000000000000000000";
  
    beforeEach(async function () {
        // Get the signers
        [deployer, addr1, addr2, addr3] = await ethers.getSigners()

        // Initialize contracts
        tokenFactory = await ethers.getContractFactory("Token");
        token = await tokenFactory.deploy(100000000000000);

        // exchangeFactory = await ethers.getContractFactory("Exchange");
        // exchange = await exchangeFactory.deploy(10000000000000);
    });

    //tests all the getter values when the contract is deployed.
    describe("Testing Getters", function() {
        it("Should get name", async () => {
            expect(await token.name()).to.equal("ChainSwap");
        });
        
        it("Should get symbol", async () => {
            expect(await token.symbol()).to.equal("BU_Chain");
        });
    });

    //tests all the setter values when the contract is deployed.
    describe("Testing Setters", function() {
    });

})
