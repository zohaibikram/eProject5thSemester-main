const express = require('express')
const {getUserProfile,loginUser,registerUser} = require('../controllers/authController')
const jwt = require('jsonwebtoken')

const router = express.Router()


router.post('/register',registerUser)

router.post('/login',loginUser)

router.get('/me',getUserProfile)

module.exports = router