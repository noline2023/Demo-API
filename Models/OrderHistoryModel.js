const mongoose = require('mongoose');
const Products = require('./ProductModel');

const Scheme = mongoose.Schema;

const orderScheme = new Scheme({
    

    _id:{
        type:String,
        require:true,
        uniqe:true,
        trim:true,
    },

    productID:{
        type:[Number],
        require:true,
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