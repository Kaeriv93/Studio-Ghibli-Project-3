// Dependencies
require('dotenv').config()
const express = require('express')
const {PORT = 4000, MONGODB_URL} = process.env
const app = express()
const mongoose = require('mongoose')

//Import middleware
const cors = require('cors')
const morgan = require('morgan')

//Mongo Connections
mongoose.connect(MONGODB_URL)

mongoose.connection
.on('open', ()=> console.log('You are connected to mongoose'))
.on('close', ()=> console.log('You are disconnected from mongoose'))
.on('error',(error)=> console.log(error))

//Middleware
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

//Hitting Routes
app.get('/', (req,res)=>{
    res.send('Hello World')
})

//Listening
app.listen(PORT,()=>console.log(`Listening on port:${PORT}`))