const express = require('express')
const feedbackData = require('../models/feedback_schema')
const feedbackRouter = express.Router()
//-----------------------ADD MESSAGE--------------------------------------------------------------------

feedbackRouter.post('/add_data', async (req, res) => {

    const data = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message
    }
    const feedbackmsg = await feedbackData(data).save()
    if (feedbackmsg) {
        return res.status(200).json({
            succces: true,
            error: false,
            message: 'DATA ADDED SUCCESSFULLY',
            data: data
        })
    }
})
//----------------------VIEW DATA------------------------------------------------

feedbackRouter.get('/view_feedback', async (req, res) => {
    await feedbackData.find().then((data) => {
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
module.exports = feedbackRouter