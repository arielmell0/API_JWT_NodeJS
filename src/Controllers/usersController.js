const UserModel = require('../Models/UserModel')
const bcrypt = require('bcrypt')

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

    // criando senha
    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)

    // criando usuario
    const user = new UserModel({
        name,
        email,
        password: passwordHash
    })

    try {
        await user.save()

        res.status(201).json({ message: 'Usuário criado com sucesso!' })
    } catch (error) {
        console.log(error)
        res.status(500).jason({ message:  'Ops, ocorreu um erro no servidor!' })
    }
}]