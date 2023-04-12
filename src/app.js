const express = require("express")
const cors = require('cors')
require('dotenv').config()

const productRouter = require('./products/products.controllers')

//const { port } = require('../config')

const db = require('./utils/database')
//const initModels = require('./models/initModels')
const app = express()

const PORT = process.env.PORT || 3000

db.authenticate()
    .then(() => console.log('Database Authenticated!'))
    .catch(err => console.log(err))

db.sync()
    .then(() => console.log('Database Synced!'))
    .catch(err => console.log(err))
    
// initModels()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.json({
        message: 'Server OK', 
        myMessage: process.env.MESSAGE, 
        myPort: process.env.PORT
    })
})

//  app.use('/products', productRouter)

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
})