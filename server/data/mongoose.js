const mongoose = require('mongoose')
const env= require("dotenv").config()
mongoose.set("strictQuery", true);
const URL= `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASS}@cluster0.0hqmqmc.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(URL, {
}).then(()=>{
    console.log("mongoose connected");
}).catch((e)=>{
    console.log(e);
})
