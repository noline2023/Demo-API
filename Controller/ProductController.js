const productService = require("../Services/productService")
let filterdProducts = []

function getRandomFloat(min, max, decimals) {
    const str = (Math.random() * (max - min) + min).toFixed(decimals);
    return parseFloat(str);
}

getAllProducts = async ()=> {
    const product = await productService.getAll()
    return product
} 

getProductByID = async (id)=> {
   const product = await productService.getByID(id)
   return product
}

addProduct = async (p)=>{
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
addAllProducts = async (products)=>{ 
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

//    return await productService.addAll(filterdProducts)
    return null
}


module.exports = {getProductByID,addAllProducts,addProduct,getAllProducts}