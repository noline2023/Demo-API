const genericService = require("../Services/genericService")
const Order = require("../Models/OrderHistoryModel")
const orderService = genericService(Order);


const getAllOrders = async ()=> {
    const product = await orderService.getAll()
    return product
} 

const getOrderByID = async (id)=> {
   const product = await orderService.getByID(id)
   return product
}

const addOrder = async (order)=>{
    return await orderService.add(order)
}


const removeOrder = async(id)=>{
    return await orderService.remove(id)
}

module.exports = {getAllOrders,getOrderByID,addOrder,removeOrder}