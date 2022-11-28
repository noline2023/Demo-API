const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const  connectDB = () => {

    const uri  = process.env.DATA_BASE_URI
    mongoose.connect(uri)
    
    mongoose.connection.once('open',()=>{
        console.log("Data Base Connection Astablished")
    })
    
}


module.exports = connectDB
