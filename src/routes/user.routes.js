const express = require('express')
const router = express.Router()
const UserControllerClass = require('../controllers/user.controller')

const UserController = new UserControllerClass();
router.post('/login', UserController.login)

router.post('/register', UserController.register)

module.exports = router