const mongoose = require('mongoose')

const UserModel = mongoose.model('User', {
    name: String,
    email: String,
    password: String
})

module.exports = UserModel