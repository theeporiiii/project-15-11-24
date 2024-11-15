const mongoose = require('mongoose');
const userSchema =mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    Role:{
        type:String,
        default:"user"
    },



})
const userModel=mongoose.model('logins',userSchema);
module.exports=userModel;