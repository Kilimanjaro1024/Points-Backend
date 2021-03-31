const mongoose = require("../db/connection")
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: { type: String, required: true},
    points: [{
        payer: { type: String, required: true},
        points: { type: Number, require: true}
    }],
    transactions: [{
        type: Schema.Types.ObjectId,
        ref: "Transaction"
    }]
})

const User = mongoose.model("User", userSchema)
module.exports = User