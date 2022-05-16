// Dependencies
require('dotenv').config()
const express = require('express')
const {PORT = 4000, MONGODB_URL} = process.env
const app = express()
const mongoose = require('mongoose')
// const session = require('express-session')
// const MongoStore = require('connect-mongo')
// const navLinks = require('./navLinks')

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
const { User } = require('./models')

//Hitting Routes
app.get('/', (req,res)=>{
    res.send('Hello World')
})

// app.use(
//     session({
//         // where to store the sessions in mongodb
//         store: MongoStore.create({ mongoUrl: "mongodb://localhost:27017/userpage" }),
//         // secret key is used to sign every cookie to say its is valid
//         secret: "super secret",
//         resave: false,
//         saveUninitialized: false,
//         // configure the experation of the cookie
//         cookie: {
//             maxAge: 1000 * 60 * 60 * 24 * 7 * 2, // two weeks
//         },
//     })
// );

// app.use(navLinks)
// app.use(function (req, res, next) {
//     res.locals.user = req.session.currentUser;
//     console.log(res.locals);
//     console.log(`Current user is ${res.locals.user}`)
//     next();
// });


//Login Route
app.get('/login', (req,res)=>{
    res.send('This is the login page')
})

app.post('/login', async function (req,res) {
    try{
        const foundUser = await db.User.findOne({email: req.body.email})
        if(!foundUser) return res.send('The password or the username is invalid')
        const match = await bcrypt.compare(req.body.password, foundUser.password)
        if(!match) return res.send('The password or the username is invalid')

        req.session.currentUser={
            id: foundUser._id,
            username: foundUser.username
        }
    }catch(err){
        console.log(err)
        req.err = err
        res.send(err)
    }
})

// Register

app.get('/register', (req,res)=>{
    res.send('This is the register page')
})

app.post('/register', async (req,res,next)=>{
    try{
        const foundUser = await User.exists({email:req.body.email})
        if(foundUser){
            return res.send('Already have account')
        }
        const salt = await bcrypt.genSalt(process.SALT_ROUNDS)
        console.log(salt)
        const hash = await bcrypt.hash(req.bpdy.password, salt)
        console.log(hash)
        req.body.password = hash
        const newUser = await User.create(req.body)
        return res.send('Return to login')
    }catch(error){
        console.log(error)
        req.error= error
        return next()
    }
})

app.get('/logout', async(req,res)=>{
    try{
        await req.session.destroy()
        console.log(req.session)
        return res.send('You are logged out!')
    } catch(error){
        console.log(error)
        return res.send(error)
    }
})

// User Crud
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

app.get('/userpage/:id', async(req,res)=>{
    try{
        res.json(await db.User.findById(req.params.id))
    }catch(error){
        res.status(400).json(error)
    }
})

app.put('/userpage/:id', async(req,res)=>{
    try{
        res.json(await db.User.findByIdAndUpdate(req.params.id,req.body))
    }catch(error){
        res.status(400).json(error)
    }
})

app.delete('/userpage/:id', async(req,res)=>{
    try{
        res.json(await db.User.findByIdAndRemove(req.params.id))
    }catch(error){
        res.status(400).json(error)
    }
})

//Reviews
app.get('/reviews', async(req,res)=>{
    try{
        res.json(await db.Review.find({}))
    }catch(error){
        res.status(400).json(error)
    }
})

app.post('/reviews', async(req,res, next)=>{
    try{
       res.json(await db.Review.create(req.body))

    }catch(error){
        console.log(error)
        req.error = error
        return next()
    }
})

app.put('/reviews/:id', async(req,res)=>{
    try{
        res.json(await db.Review.findByIdAndUpdate(req.params.id, req.body))
    }catch(error){
        res.status(400).json(error)
    }
})

app.delete('/reviews/:id', async(req,res)=>{
    try{
        res.json(await db.Review.findByIdAndRemove(req.params.id))
    }catch(error){
        res.status(400).json(error)
    }
})

//Favorites
app.get('/userpage/:id/favorites', async(req,res)=>{
    try{
        const foundUser = await db.User.findById(req.params.id)
        if(!foundUser) return res.send('Can not find user')
        res.json(await db.Favorite.find({}))
    }catch(error){
        res.status(400).json(error)
    }
})

app.post('/userpage/:id/favorites', async(req,res, next)=>{
    try{
        const foundUser = await db.User.findById(req.params.id)
        if(!foundUser) return res.send('Can not find user')
       res.json(await db.Favorite.create(req.body))

    }catch(error){
        console.log(error)
        req.error = error
        return next()
    }
})

app.put('/userpage/:id/favorites', async(req,res)=>{
    try{
        const foundUser = await db.User.findById(req.params.id)
        if(!foundUser) return res.send('Can not find user')
        res.json(await db.Favorite.findByIdAndUpdate(req.params.id, req.body))
    }catch(error){
        res.status(400).json(error)
    }
})

app.delete('/userpage/:id/favorites', async(req,res)=>{
    try{
        const foundUser = await db.User.findById(req.params.id)
        if(!foundUser) return res.send('Can not find user')
        res.json(await db.Favorite.findByIdAndRemove(req.params.id))
    }catch(error){
        res.status(400).json(error)
    }
})


//Friends
app.get('/userpage/:id/friends', async(req,res)=>{
    try{
        const foundUser = await db.User.findById(req.params.id)
        if(!foundUser) return res.send('Can not find user')
        res.json(await db.Friends.find({}))
    }catch(error){
        res.status(400).json(error)
    }
})

app.post('/userpage/:id/friends', async(req,res, next)=>{
    try{
        const foundUser = await db.User.findById(req.params.id)
        if(!foundUser) return res.send('Can not find user')
       res.json(await db.Friends.create(req.body))

    }catch(error){
        console.log(error)
        req.error = error
        return next()
    }
})

app.put('/userpage/:id/friends', async(req,res)=>{
    try{
        const foundUser = await db.User.findById(req.params.id)
        if(!foundUser) return res.send('Can not find user')
        res.json(await db.Friends.findByIdAndUpdate(req.params.id, req.body))
    }catch(error){
        res.status(400).json(error)
    }
})

app.delete('/userpage/:id/friends', async(req,res)=>{
    try{
        const foundUser = await db.User.findById(req.params.id)
        if(!foundUser) return res.send('Can not find user')
        res.json(await db.Friends.findByIdAndRemove(req.params.id))
    }catch(error){
        res.status(400).json(error)
    }
})

//Listening
app.listen(PORT,()=>console.log(`Listening on port:${PORT}`))