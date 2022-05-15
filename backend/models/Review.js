const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    rating:{
        type:Number,
        default:5,
        min:1,
        max:5
    },
    content:{
        type: String,
        required:[true, `Can't leave blank`]
    },
    user:{
        type: mongoose.Types.ObjectId,
        ref:'User'
    }
},{timestamps:true})

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review