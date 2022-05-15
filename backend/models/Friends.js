const mongoose = require('mongoose')

const friendsSchema = new mongoose.Schema({
    list:{
        type:Number,
        default:0,
        min:0
    },
    user:{
        type: mongoose.Types.ObjectId,
        ref:'User'
    }
},{timestamps:true})

const Friends = mongoose.model('Friends', friendsSchema)

module.exports = Friends