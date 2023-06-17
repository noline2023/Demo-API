
const io = require("socket.io")(3000,{
    cors:{
        origin: ["http://localhost:8080"],
    }
})


io.on("connection", socket =>{
    console.log(socket.id)
})

const EmitProductIDToSocket = (id)=>{
    io.emit('product-id',id)
}

module.exports = EmitProductIDToSocket