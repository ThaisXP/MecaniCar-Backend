const mongoose = require("mongoose");

require("dotenv").config();

mongoose.set("strictQuery", true);

async function main() {
    await mongoose.connect(
        `mongodb+srv://${process.env.MONGODB_DB}:<${process.env.SECRET_KEY}>@cluster0.fnfdlcv.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log("Conectado com sucesso!");
}

main().catch((err) => console.log(err));

module.exports = main();