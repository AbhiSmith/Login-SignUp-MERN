const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const RegisterModel = require('./model/Register')


const app = express()
app.use(express.json())
app.use(cors());

// login Api check user
app.post("/login", (req, res)=>{
    const {email, password} = req.body;
    RegisterModel.findOne({email: email})
    .then(user=> {
        if(user){
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("Incorrect Password")
            }
        }else{
            res.json("No record found")
        }
    })
    .catch(err => res.json(err))
})

//Api for regitation
app.post("/register", (req, res)=>{
   RegisterModel.create(req.body)
   .then(registers => res.json(registers))
   .catch(err => res.json(err))
})


// Dta base connection
mongoose.connect('mongodb://127.0.0.1:27017/LoginSignup')
    .then((c) => console.log("Database connection success full "))
    .catch((e)=> console.log(e));

// const connectdb = () => {   
// };





app.listen(3001, () =>{
    console.log("server is listen on port no 3001")
})