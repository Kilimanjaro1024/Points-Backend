const express = require("express")
const router = express.Router()

const User = require("../models/userModel")
const Transaction = require("../models/transactionModel")

router.get("/", async (req, res) => {
    User.find({}).populate("transactions").then(allUsers => { 
        res.json(allUsers)
    }).catch((err) => res.json({ status: 400, err: err }))
})

router.put("/payout/:id", async (req, res) => {
    const transaction = req.body
    User.findById(req.params.id).then(user =>{
        Transaction.create(transaction).then(transaction => { 
            user.transactions.push(transaction);
        }).then(() => {
            console.log("hello")
            User.find({}).populate("transactions").populate("points").then(allUsers => {
                res.json(allUsers)
            }).catch(err => res.json({status: 400, err: err}))
        }).catch(err => res.json({status: 400, err: err}))

    })
    // Transaction.create({
    //     payer: "MILLER COORS",
    //     points: 1200,
    //   }).then((transaction) => {
    //     user.transactions.push(transaction);
    //     if (
    //       user.points.some(
    //         (pointPayer) => pointPayer.payer === transaction.payer
    //       )
    //     ) {
    //       console.log("false");
    //       User.findOneAndUpdate(
    //         {
    //           _id: user._id,
    //           "points.id": user.points.findIndex((payer) => {
    //             return payer.payer === transaction.payer;
    //           }),
    //         },
    //         { $set: { "points.$.points": user.points[user.points.findIndex((payer) => {
    //           return payer.payer === transaction.payer;
    //         })].points + transaction.points } },
    //         { new: true },
    //         (err, doc) => {
    //           if (err) {
    //             console.log("ERROR");
    //           }
    //           console.log(doc);
    //         }
    //       );
    //     } else {
    //       user.points.push({
    //         payer: transaction.payer,
    //         points: transaction.points,
    //       });
    //       console.log("true");
    //       console.log("Add a new payer value");
    //     }
    //   })
}) 

//spend points route
router.post("/spend", async (req, res) => {
    
})

module.exports = router