
const express = require('express')

const AddItem = require('../model/itemmaster.model')
const userCart = require('../model/usercart.model')

const router = express.Router()



router.post('/additemmaster', async (req,res) => {

    try {
        const item = await AddItem.create(req.body)

        return res.send(item)

    } 
    catch (error) {
        return res.send(error.message)
    }

})

// router.post('/:id', async (req,res) => {

//     try {
//         const itemSingle = await AddItem.findById(req.body.)

//         return res.send(item)

//     } 
//     catch (error) {
//         return res.send(error.message)
//     }

// })


router.get('/getitemmaster', async(req,res)=>{

    try {
        
        const itemData = await AddItem.find().lean().exec()
        return res.send(itemData)

    } 
    catch (error) {
        return res.send(error.message)
    }

})

module.exports = router

