const router = require('express').Router()

//Controllers
const usersController = require('../Controllers/usersController')

// Registrar usuário
router.post('/auth/register', usersController.userRegister)

// Login usuário
router.post('/auth/login', usersController.userLogin)

module.exports = router