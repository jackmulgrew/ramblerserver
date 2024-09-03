const express = require('express')

//controller functions
const { signupUser, loginUser } = require('../controllers/userController')


const userRoutes = express.Router()

// login route
userRoutes.post('/login', loginUser)

// signup route
userRoutes.post('/signup', signupUser)

module.exports = userRoutes