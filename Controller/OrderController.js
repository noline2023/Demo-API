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

module.exports = {getAllOrders,getOrderByID}