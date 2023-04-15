const productService = require("../Services/productService")
let filterdProducts = require('../Assets/products')

function getRandomFloat(min, max, decimals) {
    const str = (Math.random() * (max - min) + min).toFixed(decimals);
    return parseFloat(str);
}

const getAllProducts = async ()=> {
    const product = await productService.getAll()
    return product
} 

const getProductByID = async (id)=> {
   const product = await productService.getByID(id)
   return product
}

const updateProductQuantity = async (productID) =>{
    let res = await productService.getByID(productID)
    let quantity = parseInt(res.quantity)+1
    res.quantity= quantity
    if (res.quantity>0){
        const result = await productService.update(productID,{quantity:quantity})
        return true
    }
    else{
        await productService.remove(productID)
        return false
    }

    
}


const addProduct = async (p)=>{
    let amount = getRandomFloat(1,10,0)
    let = product = {
        _id: p.id,
        name: p.productDisplayName,
        img: p.img,
        catagory: p.subCategory,
        type: p.articleType,
        price: p.price,
        size: p.size,
        quantity: amount,
        updatedAt: new Date().toDateString()
    }
    return await productService.add(product)
}

// == ! Warning ! Do not use this function for we Cant restore the changes yet 
const addAllProducts = async (products)=>{ 
//     products.forEach(p => {
//         let amount = getRandomFloat(1,10,0)
//         filterdProducts.push({
//             id: p.id,
//             name: p.productDisplayName,
//             img: p.img,
//             catagory: p.subCategory,
//             type: p.articleType,
//             price: p.price,
//             size: p.size,
//             quantity: amount,
//             updatedAt: new Date().toDateString()
//         })
//     });

//    const respo = await productService.addAll(filterdProducts)
    return null
}
// addAllProducts(filterdProducts);

const updateProduct = async (id,product) =>{
    return await productService.update(id,product)
}

const removeProduct = async (id) =>{
    return await productService.remove(id)
}


module.exports = {getProductByID,addAllProducts,addProduct,getAllProducts,updateProduct,removeProduct,updateProductQuantity}