const express = require('express')
const app = express()
const PORT = 3000
const logger = require("morgan");

app.use(logger("dev"));

app.get("/", (req,res) => {
    res.json({
        status: 200,
        message: "Welcome to Points-Backend"
    })
})

app.listen(PORT, () => {
    console.log(`Express sever listening on port ${PORT}`)
})
