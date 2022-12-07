const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;


const blockSchema = new mongoose.Schema({

    symbol: {
        type: String,
    },

    name: {
        type: String,

    },
    marketCapUsd: {
        type: String,
    },
    priceUsd: {
        type: String,

    }


}, { timestamps: true })



module.exports = mongoose.model("blockchain", blockSchema)