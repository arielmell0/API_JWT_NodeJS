const UserModel = require('../Models/UserModel')

exports.userRegister = async(req, res) => {
    const { name, email, password, confirmPassword } = req.body

    // Validações
    if(!name) {
        return res.status(422).json({ message: 'O nome é obrigatório!'} )
    }

    if(!email) {
        return res.status(422).json({ message: 'O email é obrigatório!'} )
    }

    if(!password) {
        return res.status(422).json({ message: 'A senha é obrigatório!'} )
    }

    if(password !== confirmPassword) {
        res.status(422).json({ message: 'As senhas devem ser iguais' })
    }

    const userExists = await UserModel.findOne({ email: email })

    if(userExists) {
        res.status(422).json({ message: 'Por favor, utilize outro e-mail.' })
    }
}