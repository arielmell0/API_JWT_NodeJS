const router = require('express').Router()

//Controllers
const usersController = require('../Controllers/usersController')

// Registrar usuário
router.post('/auth/register', usersController.userRegister)

module.exports = router