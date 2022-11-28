const express =require('express')
const router = express.Router()
const products = require("../Assets/products")
const productController = require("../Controller/ProductController")
/**
 * @swagger
 * tags:
 *  name: Products
 *  description: The Products Api
 */

/**
 * @swagger
 * /product:
 *      get:
 *          summary: Returns All Products
 *          tags: [Products]
 *          description: Returns All Object in Document
 *          responses:
 *              200:
 *                  descroption: Success
 */

router.get("/", async (req,res)=>{
    const result = await productController.getAllProducts()
    res.json(result)
})

/**
 * @swagger
 * /product/{id}:
 *      get:
 *          summary: Get Product By ID
 *          tags: [Products]
 *          parameters:
 *              - in: path
 *                name: id
 *                required: true
 *          responses:
 *              200:
 *                  descroption: Success
 */

router.get("/:id", async (req,res)=>{
    const result = await productController.getProductByID(req.params.id)
    res.json(result)
})

/**
 * @swagger
 * /product/add:
 *      post:
 *          summary: ADD Product
 *          tags: [Products] 
 *          responses:
 *              200:
 *                  descroption: Success
 */

router.post("/add", async (req,res)=>{
    const product = await productController.addProduct(products[2])
    res.send(product)
})


/**
 * @swagger
 * /product/addAll:
 *      post:
 *          summary: ADD Multiple Products
 *          tags: [Products]
 *          responses:
 *              200:
 *                  descroption: Success
 */

router.post("/addAll", async (req,res)=>{
    res.send("ADDING Array of PRODUCTS")
    productController.addAllProducts(products)
})

/**
 * @swagger
 * /product/update/{id}:
 *      put:
 *          summary: Get Product By ID
 *          tags: [Products]
 *          parameters:
 *              - in: path
 *                name: id
 *                required: true
 *          responses:
 *              200:
 *                  descroption: Success
 */


router.put("/update/:id", async (req,res)=>{
    res.send(`UPDATING ${req.params.id}`)
})

/**
 * @swagger
 * /product/delete/{id}:
 *      delete:
 *          summary: Get Product By ID
 *          tags: [Products]
 *          parameters:
 *              - in: path
 *                name: id
 *                required: true
 *          responses:
 *              200:
 *                  descroption: Success
 */

router.delete("/delete/:id", async (req,res)=>{
    result = await productController.removeProduct(req.params.id)
    res.send(result)
})

module.exports = router