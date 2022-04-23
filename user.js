const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    usrname:String,
    userage:String,
    usermail:String,
    userpn:String,
    usercomments:String


});

module.exports=mongoose.model('User',userSchema)