const express=require('express')
const loginData = require('../models/login_schema')
const loginRouter=express.Router()


loginRouter.post('/login_data', async (req, res) => {

    const oldUser = await loginData.findOne({ 'username': req.body.username })

    if (!oldUser) {
        return res.status(400).json({
            success: false,
            error: true,
            message: 'USER NOT FOUND'
        })
    }
    if (oldUser.password === req.body.password) {
        return res.status(200).json({
            succces: true,
            error: false,
            message: 'LOGIN SUCCESS',
            data: oldUser
        })
    }
    else {
        res.status(400).json({
            success: false,
            error: true,
            message: 'INCORRECT PASSWORD'
        })
    }
})

module.exports=loginRouter
