const express = require('express')
const swaggerUI = require("swagger-ui-express")
const swaggerJsDoc = require('swagger-jsdoc')
const dotenv = require("dotenv")
const cors = require("cors")
dotenv.config()
require('./Services/DB')() // Connect to DB

// ===== Setting Swagger ===== //
const options ={
    definition:{
        openapi:"3.0.0",
        info:{
            title:"Demo Store",
            version:"1.0.0",
            description:"Simulating the Store DB API"
        },
        servers:[
            {
                url:"http://localhost:5000"
            }
        ]
    },
    apis:["./Route/*.js"]
}
const specs = swaggerJsDoc(options)

const api = express()
api.use("/api-docs",swaggerUI.serve,swaggerUI.setup(specs))
const PORT = process.env.PORT || 5000

// Routers 
const productRouter = require("./Route/ProductRouter")
api.use("/product",productRouter)


api.get("/",(req,res) => {
    res.send("Hello World")
})


api.listen(PORT , ()=>{
    console.log(` Api is listening on PORT ${PORT} `)
})
