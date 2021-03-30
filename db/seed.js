const Transaction = require('../models/transactionModel')
const User = require('../models/userModel')

User.find({}).remove(() => {
    Transaction.find({}).remove(() => {
        let user1 = User.create({
            name: "clayton",
            points: 3000
        }).then(user => {
            Promise.all([
                Transaction.create({
                    payer: "DANNON",
                    points: 400
                }).then(transaction => {
                    user.transactions.push(transaction)
                }),
                Transaction.create({
                    payer: "MILLER COORS",
                    points: 1200
                }).then(transaction => {
                    user.transactions.push(transaction)
                }),
                Transaction.create({
                    payer: "DANNON",
                    points: -300
                }).then(transaction => {
                    user.transactions.push(transaction)
                }),
                Transaction.create({
                    payer: "UNILEVER",
                    points: 600
                }).then(transaction => {
                    user.transactions.push(transaction)
                }),
                Transaction.create({
                    payer: "MILLER COORS",
                    points: 1000
                }).then(transaction => {
                    user.transactions.push(transaction)
                })
            ]).then(() => {
                user.save()
            })
        })
        let user2 = User.create({
            name: "ashlie",
            points: 400
        }).then(user => {
            Promise.all([
                Transaction.create({
                    payer: "MILLER COORS",
                    points: 500
                }).then(transaction => {
                    user.transactions.push(transaction)
                }),
                Transaction.create({
                    payer: "MILLER COORS",
                    points: -300
                }).then(transaction => {
                    user.transactions.push(transaction)
                }),
                Transaction.create({
                    payer: "DANNON",
                    points: 200
                }).then(transaction => {
                    user.transactions.push(transaction)
                })
            ]).then(() => {
                user.save()
            })
        })
    })
})