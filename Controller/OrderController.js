const genericService = require("../Services/genericService")
const Order = require("../Models/OrderHistoryModel")
const orderService = genericService(Order);
const uuidv4 = require("uuid")

const getAllOrders = async ()=> {
    const product = await orderService.getAll()
    return product
} 

const getOrderByID = async (id)=> {
   const product = await orderService.getByID(id)
   return product
}

//TODO: #10 After order complete - Update product quantity

const addOrder = async (order)=>{
    newOrder = {
        _id: order._id,
        order_id: uuidv4.v4(),
        updateAt: new Date().toDateString()
    }
   return await orderService.add(newOrder)
}


const removeOrder = async(id)=>{
    return await orderService.remove(id)
}

module.exports = {getAllOrders,getOrderByID,addOrder,removeOrder}