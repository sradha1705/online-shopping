const express = require('express')
const multer=require('multer')
const productData = require('../models/product_schema')
const productRouter = express.Router()


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../public/images/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

let upload = multer({ storage });

// ---------------------------------ADD PRODUCT-----------------------------------------
productRouter.post('/add_product',upload.single('photo'), async (req, res) => {
    console.log(req.file);

    const data = {
        name: req.body.name,
        quantity: req.body.quantity,
        description: req.body.description,
        photo:  req.file.filename,
        price: req.body.price,
    }
    const product = await productData(data).save()
    if (product) {
        return res.status(200).json({
            succces: true,
            error: false,
            message: 'DATA ADDED SUCCESSFULLY',
            data: data
        })
    }
})
//------------------------------------VIEW PRODUCT-----------------------------------------------

productRouter.get('/viewproduct', async (req, res) => {
    await productData.find().then((data) => {
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
            message: ' DATA NOT FOUND'
        })
    })
})

// ---------------------------VIEW SINGLE PRODUCT------------------------------------------------
// productRouter.get('/view_single_product/:id', async (req, res) => {
//     const data = {
//         name: req.query.name,
//         quantity: req.body.quantity,
//         description: req.query.description,
//         photo: req.query.photo,
//         price: req.query.price,
//     }
    
//     await productData.findOne({ _id: req.params.id }).then((data) => {
//         res.status(200).json({
//             succces: true,
//             error: false,
//             message: 'DATA RETRIVED SUCCESSFULLY',
//             data: data
//         })
//     }).catch((error) => {
//         res.status(400).json({
//             success: false,
//             error: true,
//             message: ' DATA NOT FOUND'
//         })
//     })
// })
// ----------------------------UPDATE PRODUCT-------------------------------------
productRouter.get('/updateproduct/:id', async (req, res) => {


    try {
        const data = {
            name: req.query.name,
            quantity: req.body.quantity,
            description: req.query.description,
            photo: req.query.photo,
            price: req.query.price,
        }

        console.log(req.params.id);
        await productData.updateOne({ _id: req.params.id }, { $set: data }).then((data) => {
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
                error: error
            })
        })
    } catch (error) {
        console.log('Error found');
    }
})

// ----------------------------DELETE PRODUCT-------------------------------------
productRouter.get('/deleteproduct/:id', async (req, res) => {

    try {

        await productData.deleteOne({ _id: req.params.id }).then((data) => {

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

module.exports = productRouter