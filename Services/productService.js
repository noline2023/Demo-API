const Product = require("../Models/ProductModel")
const genericService = require("./genericService")
const productService = genericService(Product)


module.exports = productService