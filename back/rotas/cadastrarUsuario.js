const Cadastro = require('../models/function')
const bcrypt = require('bcrypt')

module.exports = app => {
    app.post('/usuario/cadastro', async (req, res) => {

        const senhaHash = await bcrypt.hash(req.body.senha, 12)
        const { usuario } = req.body

        Cadastro.adicionarUsuario({ usuario, senha: senhaHash }, res)
})
}