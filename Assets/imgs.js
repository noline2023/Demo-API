let parser = require('csv-parser-sync-plus-promise')
const result = [];
let filterdProducts=[]
const sizes = ["S","M","L","XL"]

let a=parser.readCsvSync(__dirname+'/images.csv')
for(let i = 0 ;i < a.length ; i+=250){
    filterdProducts.push(a[i])
} 

module.exports = filterdProducts


