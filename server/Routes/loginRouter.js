const express=require('express')
const loginData = require('../models/login_schema')
const loginRouter=express.Router()


loginRouter.post('/login_data', async (req, res) => {

    const oldUser = await loginData.findOne({ 'username': req.body.username })

    if (!oldUser) {
        return res.status(400).json({
            success: false,
            error: true,
            message: 'user not found'
        })
    }
    if (oldUser.password === req.body.password) {
        return res.status(200).json({
            succces: true,
            error: false,
            message: 'login success',
            data: oldUser
        })
    }
    else {
        res.status(400).json({
            success: false,
            error: true,
            message: 'incorrect password'
        })
    }
})

module.exports=loginRouter
