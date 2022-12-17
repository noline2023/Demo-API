const genericService = require("../Services/genericService")
const Order = require("../Models/OrderHistoryModel")
const Purcheses = require("../Models/StorePurcheses") 
const playBeep = require("../Assets/beep")
const orderService = genericService(Order);
const purchesesService =genericService(Purcheses)
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

    let idArray = []
    idArray.push(order._id)
    order_id = uuidv4.v4()

    newOrder = {
        _id: order_id,
        productID: idArray,
        updateAt: new Date().toDateString()
    }
    const addOrderPromise = await orderService.add(newOrder);
    const purchesPromise = await purchesesService.add({_id:order._id})
    return purchesPromise
}

const checkItemPayed = async (productID)=>{
    const res = await purchesesService.getByID(productID)
    if(res){
        console.log(res)
        return "true"
    }
    else{
        playBeep()
    }
}

const removeOrder = async(id)=>{
    return await orderService.remove(id)
}

module.exports = {getAllOrders,getOrderByID,addOrder,removeOrder,checkItemPayed}