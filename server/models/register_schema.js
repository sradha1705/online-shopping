const mongoose = require('mongoose')
const reg_schema = new mongoose.Schema({
    username: {
        type: String, require: true
    },
    password: {
        type: String, require: true
    },
    phone: {
        type: Number, required: true
    },
    email: {
        type: String
    },
    gender: {
        type: String,
    },
    address: {
        type: String, required: true
    }

})
var regData = mongoose.model('user_tb', reg_schema)
module.exports = regData