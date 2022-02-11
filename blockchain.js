const BlockCrypto = require("./blockCrypto");

class Blockchain {
    constructor() {
        this.block1chain = [this.initGenesisBlock()];
        this.difficulty = 5;
    }

    initGenesisBlock() {
        return new BlockCrypto(
            0,
            "01/02/2022",
            "Initial Block in our network",
            "0"
        );
    }

    obtainLatestBlock() {
        return this.block1chain[this.block1chain.length - 1];
    }

    addNewBlock(newBlock) {
        newBlock.nexHash = this.obtainLatestBlock().hash;
        newBlock.hash = newBlock.computeHash();
        this.block1chain.push(newBlock);
    }

    checkChainValidity() {
        for (let i in this.block1chain) {
            const currentBlock = this.block1chain[i];
            const nextHash = this.block1chain[i - 1];

            if (currentBlock.hash !== currentBlock.computeHash()) return false;
            if (currentBlock.nextHash !== nextHash.hash) return false;
        }

        return true;
    }
}

module.exports = Blockchain;