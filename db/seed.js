const Transaction = require("../models/transactionModel");
const User = require("../models/userModel");

User.find({}).remove(() => {
  Transaction.find({}).remove(() => {
    let user1 = User.create({
      name: "clayton",
    }).then((user) => {
      Promise.all([
        Transaction.create({
          payer: "DANNON",
          points: 400,
        }).then((transaction) => {
          user.transactions.push(transaction);
          if (
            user.points.some(
              (pointPayer) => pointPayer.payer === transaction.payer
            )
          ) {
            console.log("false");
            User.findOneAndUpdate(
              {
                _id: user._id,
                "points.id": user.points.findIndex((payer) => {
                  return payer.payer === transaction.payer;
                }),
              },
              { $set: { "points.$.points": user.points[user.points.findIndex((payer) => {
                return payer.payer === transaction.payer;
              })].points + transaction.points } },
              { new: true },
              (err, doc) => {
                if (err) {
                  console.log("ERROR");
                }
                console.log(doc);
              }
            );
          } else {
            user.points.push({
              payer: transaction.payer,
              points: transaction.points,
            });
            console.log("true");
            console.log("Add a new payer value");
          }
        }),
        Transaction.create({
          payer: "MILLER COORS",
          points: 1200,
        }).then((transaction) => {
          user.transactions.push(transaction);
          if (
            user.points.some(
              (pointPayer) => pointPayer.payer === transaction.payer
            )
          ) {
            console.log("false");
            User.findOneAndUpdate(
              {
                _id: user._id,
                "points.id": user.points.findIndex((payer) => {
                  return payer.payer === transaction.payer;
                }),
              },
              { $set: { "points.$.points": user.points[user.points.findIndex((payer) => {
                return payer.payer === transaction.payer;
              })].points + transaction.points } },
              { new: true },
              (err, doc) => {
                if (err) {
                  console.log("ERROR");
                }
                console.log(doc);
              }
            );
          } else {
            user.points.push({
              payer: transaction.payer,
              points: transaction.points,
            });
            console.log("true");
            console.log("Add a new payer value");
          }
        }),
      ]).then(() => {
        user.save();
      });
    });
  });
});
