const mongoose = require('mongoose');

const Scheme = mongoose.Schema;

const purchesesScheme = new Scheme({
    
    _id:{
        type:Number,
        require:true,
        uniqe:true,
        trim:true,
    },
 
    },

    {
        timestamps:true
    },
    
)

const Purcheses = mongoose.model("StorePurcheses",purchesesScheme)
module.exports = Purcheses