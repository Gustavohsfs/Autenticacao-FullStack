const jwt = require('jsonwebtoken')
const SECRET = 'testetoken'

   module.exports = async function verifyJWT(req, res, next) {
    const token = req.headers['x-access-token']
   
    jwt.verify(token, SECRET, (erro, decoded) => {
        if(erro) {
            return res.status(401).json(erro)
        } else {
            req.id_usuario = decoded.id_usuario
            next()
        }
        })
}