const mongoose = require("../db/connection")
const Schema = mongoose.Schema

const studentSchema = new Schema({
    name: { type: String, required: true}
})

const Student = mongoose.model("Student", studentSchema)
module.exports = Student