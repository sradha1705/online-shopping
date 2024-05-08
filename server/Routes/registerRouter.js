const express=require('express')
const regData = require('../models/register_schema')
const { log } = require('console')
const regRouter=express.Router()

regRouter.post('/add_reg', async (req, res) => {

    const oldName = await regData.findOne({ 'username': req.body.username })

    if (oldName) {
        return res.status(200).json({
            succces: true,
            error: false,
            message: 'username already exist'
        })
    }
    
    console.log(oldName);
    const oldemail = await regData.findOne({ 'email': req.body.email })

    if (oldemail) {
        return res.status(200).json({
            succces: true,
            error: false,
            message: 'email already exist'
        })
    }
    const oldphone = await regData.findOne({ 'phone': req.body.phone })

    if (oldphone) {
        return res.status(200).json({
            succces: true,
            error: false,
            message: 'phone already exist'
        })
    }

    const data = {
        username:req.body.username,
        password:req.body.password,
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
            message: 'data added successfully',
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
            message: 'data retrived successfully',
            data: data
        })
    }).catch((error) => {
        res.status(400).json({
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
            username:req.query.username,
            password:req.query.password,
            phone: req.query.phone,
            email: req.query.email,
            gender: req.query.gender,
            address: req.query.address
        }
       console.log( req.params.id);
        await regData.updateOne({ _id: req.params.id }).then((data) => {
            console.log(data);
            if (data.modifiedCount == 0) {
                return res.status(200).json({
                    success: true,
                    error: false,
                    message: 'data already updated'
                })
            }
            else {
                return res.status(400).json({
                    success: false,
                    error: true,
                    message: 'data updated'
                })
            }

        }).catch((error) => {
            return res.status(400).json({
                success: false,
                error: true,
                message: 'data not found',
                error:error
            })
        })
    } catch (error) {
        console.log('Error found');
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
                    message: 'no data to delete'
                })
            }
            else {
                return res.status(400).json({
                    success: false,
                    error: true,
                    message: 'data deleted'
                })
            }

        }).catch((error) => {
            return res.status(400).json({
                success: false,
                error: true,
                message: 'data not found'
            })
        })
    } catch (error) {
        console.log('Error found');
    }
})

module.exports=regRouter