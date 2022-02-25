const router = require('express').Router()

//Controllers
const usersController = require('../Controllers/usersController')

// Registrar usuário
router.post('/user', usersController.userRegister)

module.exports = router