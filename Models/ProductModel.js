const mongoose = require('mongoose')

const Scheme = mongoose.Schema;

const productScheme = new Scheme({
    
    id:{
        type: Number,
        required: true,
        uniqe:true,
        trim:true
    },

    catagory:{
        type : String,
        required: true,
        trim:true,
    },

    type:{
        type: String,
        required:true,
        trim:true
    },

    price:{
        type: Number,
        require:true
    },

    discount:{
        type:Number,
        require:false
    },

    quantity:{
        type:Number,
        required:false
    },
    updateAt :{
        type: Date,
        require: false
    }   
    },
    {
        timestamps:true
    }
)

const Products = mongoose.model("product",productScheme)
module.exports = productsModel