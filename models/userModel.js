const mongoose = require("../db/connection")
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: { type: String, required: true},
    points: { type: Number, required: true},
    transactions: [{
        type: Schema.Types.ObjectId,
        ref: "Transaction"
    }]
})

const User = mongoose.model("User", userSchema)
module.exports = User