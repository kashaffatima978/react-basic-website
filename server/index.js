const express = require('express');
const app = express();
const mongoose=require("mongoose");
const serviceRouter = require('./serviceRouter');

mongoose.connect("mongodb://localhost:27017/portfolio").then(()=>{
console.log("connection made")}).catch(()=>{console.log("connection denied")});
    

app.use('/services', serviceRouter);


app.listen(5000, ()=>{
    console.log('app is running on port 5000')
})