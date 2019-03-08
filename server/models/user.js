// require mongoose
const mongoose = require('mongoose')

// get instance of the Mongoose Schema
const Schema = mongoose.Schema

// Schema for the user data
const userSchema = new Schema({
    username: String,
    password: String
})

// creating a model from the Schema and exporting it
module.exports = mongoose.model('user', userSchema, 'users')