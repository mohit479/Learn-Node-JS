const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
required:true,
        unique:true
    },
    email:{
        type:String,
required:true,
        unique:true
    },
    password:{
        type:String
    },
    role:{
        type:String,
        enum:['user','artest'],
        default:'user'
    }

})

const userModel  =mongoose.model('User',userSchema)

module.exports =userModel;