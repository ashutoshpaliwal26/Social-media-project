const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : String,
    email : String, 
    password : String,
    phone_no : Number, 
    age : Number,
    username : String,
    bio : String,
    profileUrl : String,
    following : Number,
    followers  : Number,
    post : Number
    
})

const Users = mongoose.model('users', userSchema);

module.exports = Users;