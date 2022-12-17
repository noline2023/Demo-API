const express =require('express')
const router = express.Router()
const productController = require("../Controller/ProductController")
const orderController = require("../Controller/OrderController")
/**
 * @swagger
 * tags:
 *  name: Order History
 *  description: The Orders Api
 */

/**
 * @swagger
 * /order:
 *      get:
 *          summary: Returns All Orders
 *          tags: [Order History]
 *          description: Returns All Object in Document
 *          responses:
 *              200:
 *                  descroption: Success
 */
router.get("/", async (req,res)=>{
    const result = await orderController.getAllOrders()
    res.json(result)
})

/**
 * @swagger
 * /order/{id}:
 *      get:
 *          summary: Get order By ID
 *          tags: [Order History]
 *          parameters:
 *              - in: path
 *                name: id
 *                required: true
 *          responses:
 *              200:
 *                  descroption: Success
 */
router.get("/:id", async (req,res)=>{
    const result = await orderController.getOrderByID(req.params.id)
    res.json(result)
})

/**
 * @swagger
 * /order/item/{id}:
 *      get:
 *          summary: Check if the item is in the store Purcheses History
 *          tags: [Order History]
 *          parameters:
 *              - in: path
 *                name: id
 *                required: true
 *          responses:
 *              200:
 *                  descroption: Success
 */

router.get("/item/:id",async(req,res)=>{
    const result = await orderController.checkItemPayed(req.params.id);
    res.send(result)

})

/**
 * @swagger
 * /order/add:
 *      post:
 *          summary: ADD Order
 *          tags: [Order History] 
 *          responses:
 *              200:
 *                  descroption: Success
 */
router.post("/add", async (req,res)=>{
    let status;
    let error;
    try{    
        const order =  await orderController.addOrder(req.body)
        const updated = await productController.updateProductQuantity(req.body._id)
        res.sendStatus(200)
    }
    catch(err){
        res.sendStatus(400)
    }




})

/**
 * @swagger
 * /order/delete/{id}:
 *      delete:
 *          summary: Get Order By ID
 *          tags: [Order History]
 *          parameters:
 *              - in: path
 *                name: id
 *                required: true
 *          responses:
 *              200:
 *                  descroption: Success
 */
router.delete("/delete/:id", async (req,res)=>{
    result = await orderController.removeOrder(req.params.id)
    res.send(result)
})

module.exports = router