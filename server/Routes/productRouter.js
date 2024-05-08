const express=require('express')
const productData = require('../models/product_schema')
const productRouter=express.Router()
// -----------------ADD PRODUCT-----------------------------------------
productRouter.post('/add_product',async(req,res)=>{
    
    const data = {
        name:req.body.name,
        description:req.body.description,
        photo: req.body.photo,
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

module.exports=productRouter