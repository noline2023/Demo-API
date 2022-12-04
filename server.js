const express = require('express')
const swaggerUI = require("swagger-ui-express")
const swaggerJsDoc = require('swagger-jsdoc')
const bodyParser = require("body-parser");
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
api.use(cors())
api.use(bodyParser.json())
api.use(express.json())
const PORT = process.env.PORT || 5000

// Routers 
const productRouter = require("./Route/ProductRouter")
const orderRouter = require("./Route/OrderRouter")
api.use("/product",productRouter)
api.use("/order",orderRouter)


api.get("/",(req,res) => {
    res.send("Hello World")
})


api.listen(PORT , ()=>{
    console.log(` Api is listening on PORT ${PORT} `)
})
