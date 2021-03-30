require("dotenv").config();
const express = require('express')
const app = express()
const {PORT = 3000, NODE_ENV = "development" } = process.env
const logger = require("morgan");
const cors = require("cors");
const corsOptions = require("./configs/cors.js");

const studentController = require("./controllers/studentController")

app.use(express.urlencoded({extended:false}))
NODE_ENV === "production" ? app.use(cors(corsOptions)) : app.use(cors());
app.use(express.json())
app.use(logger("dev"));

app.get("/", (req,res) => {
    res.json({
        status: 200,
        message: "Welcome to Points-Backend"
    })
})

app.use('students', studentController)

app.listen(PORT, () => {
    console.log(`Express sever listening on port ${PORT}`)
})
