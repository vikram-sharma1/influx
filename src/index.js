
    const express = require('express')

    const connect = require('./configs/db')

    const itemMasterController = require('./controller/itemmaster.controller')


    const app = express()

    app.use(express.json())


    app.use('', itemMasterController)


    const port = process.env.PORT || 3001

    app.listen(port,async()=>{
        try {
            
            await connect()
            console.log('listening on', port)

        } 
        catch (error) {
            console.log('error:', error.message)
            
        }
    })