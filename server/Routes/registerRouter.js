const express = require('express')
const regData = require('../models/register_schema')
const { log } = require('console')
const loginData = require('../models/login_schema')
const { default: mongoose } = require('mongoose')
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


regRouter.get('/view_user_reg', async (req, res) => {
    await regData.aggregate ([
        {
          '$lookup': {
            'from': 'login_tbs', 
            'localField': 'loginid', 
            'foreignField': '_id', 
            'as': 'user'
          }
        }, 
        {
          '$unwind': {
            'path': '$user'
          }
        },
         {
          '$group': {
            '_id': '$_id', 
            'phone': {
              '$first': '$phone'
            }, 
            'email': {
              '$first': '$email'
            }, 
            'gender': {
              '$first': '$gender'
            }, 
            'address': {
              '$first': '$address'
            }, 
            'username': {
              '$first': '$user.username'
            }
          }
        }
    ]).then((data) => {
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
// --------------------------VIEW SINGLE USER---------------------------
regRouter.get('/view_singledata/:id', async (req, res) => {

    const login_id = req.params.id
    await regData.aggregate([
        {
            '$lookup': {
                'from': 'login_tbs',
                'localField': 'loginid',
                'foreignField': '_id',
                'as': 'user'
            }
        },
        {
            '$unwind': '$user'
        },
        {
            '$match': {
                loginid: new mongoose.Types.ObjectId(login_id)
            }
        },
        {
            '$group': {
                '_id': '$_id',
                'phone': { '$first': '$phone' },
                'email': { '$first': '$email' },
                'gender': { '$first': '$gender' },
                'address': { '$first': '$address' },
                'loginid': { '$first': '$loginid' },
                'username': { '$first': '$user.username' }
            }
        }
    ]).then((data) => {
        return res.status(200).json({
            succces: true,
            error: false,
            message: 'data retrived successfully',
            data: data
        })
    }).catch((error) => {
        return res.status(400).json({
            success: false,
            error: true,
            message: 'data not found'
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
        const regData = await loginData.updateOne({ _id: req.params.id }, { $set: { username: req.body.username } })
        const logData = await userregData.updateOne({ loginid: req.params.id }, { $set: data })

        if (regData || logData) {
            return res.status(200).json({
                success: false,
                error: true,
                message: 'DATA UPDATED',
                regData: regData,
                logData: logData
            })
        }
        else {
            return res.status(400).json({
                succces: false,
                error: true,
                message: 'DATA UPDATION FAILED',
                regData: regData,
                logData: logData
            })
        }

    } catch (error) {

        return res.status(500).json({
            succces: false,
            error: true,
            message: 'INTERNAL SERVER ERROR',
            errorMessage: error.message
        })
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