const mongoose = require('mongoose')
const product_schema = new mongoose.Schema({
    name: {
        type: String, require: true
    },
    description: {
        type: String, require: true
    },
    photo: {
        type: String, 
    },
    price: {
        type: String, 
    },
  

})
var productData = mongoose.model('product_tb', product_schema)
module.exports = productData