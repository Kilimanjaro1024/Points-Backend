const express = require("express")
const router = express.Router()

const Transaction = require("../models/transactionModel")
const User = require("../models/userModel")

router.get("/", async (req, res) => {
    Transaction.find({}).then(allTransactions => { 
        res.json(allTransactions)
    }).catch((err) => res.json({ status: 400, err: err }))
})



module.exports = router