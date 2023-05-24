const express = require('express')
const router = express.Router()
const { handleRegister } = require('../controller/registerController')

router.post('/', handleRegister)

module.exports = router