const mongoose = require('mongoose')
const login_table = new mongoose.Schema({
    username: {
        type: String, require: true
    },
    password: {
        type: String, require: true
    } ,
    role: {
        type: String, require: true
    } ,
    status: {
        type: String, require: true
    } 
})
var loginData = mongoose.model('login_tb', login_table)
module.exports = loginData