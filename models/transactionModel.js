const mongoose = require("../db/connection")
const Schema = mongoose.Schema

const transactionSchema = new Schema({
    payer: { type: String, required: true},
    points: { type: Number, required: true},
    timestamp: { type: Date, default: Date.now }
})

const Transaction = mongoose.model("Transaction", transactionSchema)
module.exports = Transaction