const mongoose = require('mongoose')


const RegisterSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const RegisterModel = mongoose.model("registers", RegisterSchema) //"registers" collection name LoginSignup database name
module.exports = RegisterModel