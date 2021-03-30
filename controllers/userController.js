const express = require("express")
const router = express.Router()

const User = require("../models/userModel")

router.get("/", async (req, res) => {
    User.find({}).populate("transactions").then(allUsers => { 
        res.json(allUsers)
    }).catch((err) => res.json({ status: 400, err: err }))
})

module.exports = router