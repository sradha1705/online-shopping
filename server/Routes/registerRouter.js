const express = require('express')
const regData = require('../models/register_schema')
const { log } = require('console')
const loginData = require('../models/login_schema')
const regRouter = express.Router()
// -------------ADD DATA----------------------------------------------------------------------------
regRouter.post('/add_reg', async (req, res) => {

    const oldName = await regData.findOne({ 'username': req.body.username })

    if (oldName) {
        return res.status(200).json({
            succces: true,
            error: false,
            message: 'USERNAME ALREADY EXIST '
        })
    }
    console.log(oldName);
    const oldemail = await regData.findOne({ 'email': req.body.email })

    if (oldemail) {
        return res.status(200).json({
            succces: true,
            error: false,
            message: 'EMAIL ALREADY EXIST '
        })
    }
    const oldphone = await regData.findOne({ 'phone': req.body.phone })

    if (oldphone) {
        return res.status(200).json({
            succces: true,
            error: false,
            message: 'PHONENUMBER ALREADY EXIST  '
        })
    }
    const logintb = {
        username: req.body.username,
        password: req.body.password,
        role: 'user',
        status: '0'
    }
    const logindetails = await loginData(logintb).save()

    const data = {
        loginid: logindetails._id,
        phone: req.body.phone,
        email: req.body.email,
        gender: req.body.gender,
        address: req.body.address
    }
    const reg = await regData(data).save()
    if (reg) {
        return res.status(200).json({
            succces: true,
            error: false,
            message: 'DATA ADDED SUCCESSFULLY',
            data: data
        })
    }
})
//----------------------------------VIEW DATA--------------------------------------------------

regRouter.get('/viewreg', async (req, res) => {
    await regData.find().then((data) => {
        res.status(200).json({
            succces: true,
            error: false,
            message: 'DATA RETRIVED SUCCESSFULLY',
            data: data
        })
    }).catch((error) => {
        res.status(400).json({
            success: false,
            error: true,
            message: 'DATA NOT FOUND'
        })
    })
})

// --------------------------------------UPDATE DATA-----------------------------------------------

regRouter.get('/updateuser/:id', async (req, res) => {
    try {
        const data = {
            username: req.query.username,
            password: req.query.password,
            phone: req.query.phone,
            email: req.query.email,
            gender: req.query.gender,
            address: req.query.address
        }
        console.log(req.params.id);
        await regData.updateOne({ _id: req.params.id }, { $set: data }).then((data) => {
            console.log(data);
            if (data.modifiedCount == 0) {
                return res.status(200).json({
                    success: true,
                    error: false,
                    message: 'DATA ALREADY UPDATED'
                })
            }
            else {
                return res.status(400).json({
                    success: false,
                    error: true,
                    message: 'DATA UPDATED'
                })
            }
        }).catch((error) => {
            return res.status(400).json({
                success: false,
                error: true,
                message: 'DATA NOT UPDATED',
                error: error
            })
        })
    } catch (error) {
        console.log('ERROR FOUND');
    }
})
//----------------------------------------DELETE DATA---------------------------------------------
regRouter.get('/deleteuser/:id', async (req, res) => {

    try {

        await regData.deleteOne({ _id: req.params.id }).then((data) => {

            if (data.deletedCount == 0) {
                return res.status(200).json({
                    success: true,
                    error: false,
                    message: 'NO DATA TO DELETE'
                })
            }
            else {
                return res.status(400).json({
                    success: false,
                    error: true,
                    message: 'DATA DELETED'
                })
            }

        }).catch((error) => {
            return res.status(400).json({
                success: false,
                error: true,
                message: 'DATA NOT FOUND'
            })
        })
    } catch (error) {
        console.log('ERROR FOUND');
    }
})

module.exports = regRouter