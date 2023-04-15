const fs = require('fs'); 
const parse = require('csv-parser');
const imgs = require("./imgs")
let parser = require('csv-parser-sync-plus-promise')
const result = [];
const filterdProducts=[]
const sizes = ["S","M","L","XL"]

function getRandomFloat(min, max, decimals) {
    const str = (Math.random() * (max - min) + min).toFixed(decimals);
    return parseFloat(str);
}

let a=parser.readCsvSync(__dirname+'/products2.csv')

for(let i = 0 ;i < a.length ; i+=250){
    a[i].size = sizes[Math.floor(sizes.length*Math.random())]
    a[i].price = getRandomFloat(5,100,2)
    a[i].img = imgs[i/250].link
    filterdProducts.push(a[i])
} 




module.exports = filterdProducts