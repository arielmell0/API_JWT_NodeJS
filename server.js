require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const app = express()
const port = 3000

// Open Route - Public Route
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Bem vindo à nossa API!' })
})

app.listen(port, () => {
    console.log(`Servidor iniciado em http://localhost:${port}`)
})