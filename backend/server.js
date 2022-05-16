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

//Models
const db = require('./models')

//Hitting Routes
app.get('/', (req,res)=>{
    res.send('Hello World')
})

app.get('/login', (req,res)=>{
    res.send('This is the login page')
})

// Create User
app.get('/users', async (req,res)=>{
    try{
        res.json(await db.User.find({}))
    }catch(error){
        res.status(400).json(error)
    }
})

app.post('/users', async(req,res)=>{
    try{
        res.json(await db.User.create(req.body))
    }catch(error){
        res.status(400).json(error)
    }
})

//Listening
app.listen(PORT,()=>console.log(`Listening on port:${PORT}`))