// requiring installed packages
const express = require('express')
const jwt = require('jsonwebtoken')
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

// method to verify token
function verifyToken(req, res, next) {
    // check if 'Authorization:' key is not present as part of header
    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorized request')
    }
    // if key present extract the token value
    let token = req.headers.authorization.split(' ')[1]
    // if no token present
    if (token === 'null') {
        return res.status(401).send('Unauthorized request')
    }
    // if token present, verify using JWT
    let payload = jwt.verify(token, 'tokenKey')
    // if no payload
    if (!payload) {
        return res.status(401).send('Unauthorized request')
    }
    // if everything present
    req.userId = payload.subject
    next()
}

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
            // make playload object to contain signup id
            let payload = { subject: signupUser._id }
            // assign a json web token to the user
            let token = jwt.sign(payload, 'tokenKey')
            // send status 200 and signup user token object
            res.status(200).send({ token })
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
            // if username and password match
            else {
                // make playload object to contain login id
                let payload = { subject: user._id }
                // assign a json web token to the user
                let token = jwt.sign(payload, 'tokenKey')
                // send status 200 and the user token object
                res.status(200).send({ token })
            }
        }
    })
})

// pass in verifyToken as the second argument
// only runs if verifyToken is successful
router.get('/personal', verifyToken, (req, res) => {
    let personal = [
        {
            "id": "1",
            "name": "Comic 1",
            "description": "Marvel",
            "date": "2012-04-23T18:25:43.511Z"
        }
    ]
    res.json(personal)
})

// export router
module.exports = router
