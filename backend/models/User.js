const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:[true,'first name cannot be empty']
    },
    lastName:{
        type:String,
        required:[true, 'last name cannot be empty']
    },
    username:{
        type:String,
        required:[true, 'Must enter a username'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'Don`t leave password empty']
    },
},
{
    timestamps:true

})

const User = mongoose.model('User', userSchema)

module.exports = User