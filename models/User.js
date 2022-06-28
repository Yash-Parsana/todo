const mongoose = require("mongoose")

const userSchema=new mongoose.Schema({
    
    username: {
        type: String,
        required:true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        required:true
    },
    avatar: {
        type: String,
    }
})

module.exports=mongoose.model('user',userSchema)