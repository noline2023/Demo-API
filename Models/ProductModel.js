const mongoose = require('mongoose')

const Scheme = mongoose.Schema;

const productScheme = new Scheme({
    
    _id:{
        type: Number,
        required: true,
        uniqe:true,
        trim:true
    },

    name:{
        type:String,
        required:true
    },
    
    img:{
        type:String,
        required:false,
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

    size:{
        type:String,
        require:true,
        trim:true
    },

    discription:{
        type:String,
        require:false,
        trim:true
    },

    discount:{
        type:Number,
        require:false
    },

    quantity:{
        type:Number,
        required:true
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

const Products = mongoose.model("Product",productScheme)
module.exports = Products