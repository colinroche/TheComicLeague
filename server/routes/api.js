// requiring installed packages
const express = require('express')
// setting instance 
const router = express.Router()

//import user model
const User = require('../models/user')

const mongoose = require('mongoose')

// declaring connection string to the database
const db = "mongodb://user1:password123@ds115094.mlab.com:15094/projectdb"

// connect to the database
mongoose.connect(db, err => {
    if (err) {
        console.error('Error!' + err)
    } else {
        console.log('Connected to mongodb')
    }
})

// get request
router.get('/', (req, res) => {
    res.send('From API route')
})

// post request to the endpoint signup
router.post('/signup', (req, res) => {
    // extract the user info from the request body
    let userData = req.body
    // create user model from user data for mongoose
    let user = new User(userData)
    // save user data into the database
    user.save((error, signupUser) => {
        if (error) {
            console.log(error)
        } else {
            // send status 200 and details of the signup user
            res.status(200).send(signupUser)
        }
    })
})

// post request to the endpoint login
router.post('/login', (req, res) => {
    // extract the user info from the request body
    let userData = req.body

    // check if username exists in the database and return it
    User.findOne({ username: userData.username }, (error, user) => {
        if (error) {
            console.log(error)
        } else {
            // if there is no matching user found in the database
            if (!user) {
                res.status(401).send('Invalid User')
            }
            // if user is found, check if passwords match
            else if (user.password !== userData.password) {
                res.status(401).send('Invalid Password')
            }
            // if username and password match send login user details
            else {
                res.status(200).send(user)
            }
        }
    })
})

// export router
module.exports = router
