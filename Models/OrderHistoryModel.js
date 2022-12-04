const mongoose = require('mongoose')

const Scheme = mongoose.Schema;

const orderScheme = new Scheme({
    
    _id:{
        type: Number,
        required: true,
        uniqe:true,
        trim:true
    },

    order_id:{
        type:String,
        require:true,
        uniqe:true,
        trim:true,
    },

    updateAt :{
        type: Date,
        require: false
    }   

    },

    {
        timestamps:true
    },
    
)

const Order = mongoose.model("DBorder",orderScheme)
module.exports = Order