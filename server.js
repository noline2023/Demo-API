const express = require('express')
const app = express()
const dotenv = require("dotenv")
const cors = require("cors")
dotenv.config()
require('./Services/DB')()
const PORT = process.env.PORT || 5000

app.get("/",(req,res) => {
    res.send("Hello World")
})


app.listen(PORT , ()=>{
    console.log(` Api is listening on PORT ${PORT} `)
})
