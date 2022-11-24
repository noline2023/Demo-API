const mongoose = require('mongoose')

const Scheme = mongoose.Schema;

const userScheme = new Scheme({

    userName:{
        type:String,
        required:true,
        unique : true,
        trim : true,
        minlength:5,
    },

    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength:8
    },
    
    password: {
        type : String,
        required:true ,
        trim: true,
        minlength: 6
    },

    isAdmin: {
        type:Boolean,
        default: false
    },
    },
    {
        timestamps:true
    }
)

const User = mongoose.model("User",userScheme)
module.exports = User;
