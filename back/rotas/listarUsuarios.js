const Usuarios = require('../models/function')
const verifyJWT = require('../middleware/verifyJWT')
module.exports = app => {
    app.get('/usuario', verifyJWT, (req, res) => {

        Usuarios.listarUsuarios(res)
    })
}