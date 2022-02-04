const repositorio = require('../models/function')
const jwt = require('jsonwebtoken')
const SECRET = 'testetoken'

module.exports = app => {
    app.post('/usuario/login/', async (req, res) => {

        const usuario = req.body.usuario
        const senha = req.body.senha

        const id = await repositorio.getId(usuario)
        const resultado = await repositorio.login(usuario, senha)

        if (resultado) {
            const token = jwt.sign({ id_usuario: id }, SECRET, { expiresIn: 300 })
            res.status(200).json({user: usuario ,message: 'usuario autenticado', token })
        } else {
            res.status(200).json({ message: 'usuario ou senha incorreto' })
        }
    })
}