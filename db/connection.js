require("dotenv").config()
const mongoose = require("mongoose")
const DB = mongoose.connection
const config = { useUnifiedTopology: true, useNeUrlParser: true }
const { MONGODBURI } = process.env

mongoose.connect(MONGODBURI , config)

DB.on("open", () => console.log("You are connected to Mongo"))
    .on("close", () => console.log("You are disconnected from Mongo"))
    .on("error", () => console.log(err))

module.exports = mongoose