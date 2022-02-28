const router = require('express').Router()

const { append } = require('express/lib/response')
//Controllers
const usersController = require('../Controllers/usersController')

// Registrar usuário
router.post('/auth/register', usersController.userRegister)

// Login usuário
router.post('/auth/login', usersController.userLogin)

// Buscar usuario por id (rota privada, só para quem possui o token)
router.get('/users/:id', usersController.checkToken, usersController.findUser)

module.exports = router