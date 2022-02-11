const Blockchain = require("./blockchain");
const BlockCrypto = require("./blockCrypto");

let cryptoCoin = new Blockchain();

console.log("CryptoCoin mining is progressing...");

cryptoCoin.addNewBlock(
    new BlockCrypto(2, "01/30/2022", {
        sender: "Edward Fernandez",
        recipient: "Wardvisual",
        quantity: 355,
    })
);

cryptoCoin.addNewBlock(
    new BlockCrypto(5, "01/30/2022", {
        sender: "constWardtz",
        recipient: "Wardvisual",
        quantity: 800,
    })
);

console.log(JSON.stringify(cryptoCoin, null, 4));