const mongoose = require("mongoose")
const DB = mongoose.connection
const config = { useUnifiedTopology: true, useNeUrlParser: true }

mongoose.connect("mongodb+srv://1207:1207@cluster0.g8p4x.mongodb.net/Test?retryWrites=true&w=majority" , config)

DB.on("open", () => console.log("You are connected to Mongo"))
    .on("close", () => console.log("You are disconnected from Mongo"))
    .on("error", () => console.log(err))

module.exports = mongoose