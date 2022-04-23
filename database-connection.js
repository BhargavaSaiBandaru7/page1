const mongoose= require("mongoose");
const db=mongoose.connect('mongodb://localhost:27017/?serverSelectionTimeoutMS=5000&connectTimeoutMS=10000')
    .then(()=>{
        console.log('connected to database');
    })
    .catch(()=>{
        console.log('connection failed')
    });
module.exports=db
