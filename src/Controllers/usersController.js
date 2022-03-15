const UserModel = require('../Models/UserModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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
        return res.status(422).json({ message: 'As senhas devem ser iguais' })
    }

    const userExists = await UserModel.findOne({ email: email })

    if(userExists) {
        return res.status(422).json({ message: 'Por favor, utilize outro e-mail.' })
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
        res.status(500).jason({ message: 'Ops, ocorreu um erro no servidor!' })
    }
}

exports.userLogin = async(req, res) => {
    const { email, password } = req.body

    // Validações
    if(!email) {
        return res.status(422).json({ message: 'O email é obrigatório!'} )
    }

    if(!password) {
        return res.status(422).json({ message: 'A senha é obrigatório!'} )
    }

    const user = await UserModel.findOne({ email: email })

    if(!user) {
        return res.status(422).json({ message: 'E-mail não cadastrado.' })
    }

    const checkPassword = await bcrypt.compare(password, user.password)

    if(!checkPassword) {
        return res.status(422).json({ message: 'Senha inválida.' })
    }

    try {
        const secret = process.env.SECRET

        const token = jwt.sign(
            {
                id: user._id
            },
            secret
        )
        
        res.status(200).json({ message: 'Autenticação realizada com sucesso!', token })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Ops, ocorreu um erro no servidor!' })
    }
}

// Rota privada para procurar usuário (somente consegue encontrar quem estiver logado consegue acessar)
exports.findUser = async(req, res) => {
    const id = req.params.id

    const user = await UserModel.findById(id, '-password') // -password filtra para a senha n vir no get

    if(!user) {
        return res.status(404).json({ message: 'Usuário não encontrado!' })
    } 

    res.status(200).json(user)
}

exports.checkToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if(!token) {
        return res.status(401).json({ message: "Acesso negado!" })
    }

    try {
        const secret = process.env.SECRET

        jwt.verify(token, secret)

        next()
    } catch (error) {
        res.status(400).json({ message: "Token inválido" })
    }
}