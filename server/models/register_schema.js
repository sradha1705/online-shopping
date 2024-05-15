const mongoose = require('mongoose')
const reg_schema = new mongoose.Schema({
    loginid: {
        type: mongoose.Types.ObjectId,ref:'login_tbs'
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