const conexao = require("../infraestrutura/conexao");
const executaQuery = require('../infraestrutura/query')
const bcrypt = require('bcrypt')

class Cadastro {
    adicionarUsuario(cadastro, res) {
        const sql = "INSERT INTO usuarios SET?";

        conexao.query(sql, cadastro, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                const id = resultados.insertId
                res.status(201).json({ ...cadastro, id})
            }
        })
    }

    listarUsuarios(res) {
        const sql = 'SELECT * FROM usuarios'

        conexao.query(sql, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    async login(usuario, senha) {
        const sql = "SELECT * FROM usuarios WHERE usuario = ?"

        const results = await executaQuery(sql, usuario)
        console.log(results)
        return bcrypt.compare(senha, results[0].senha)
    }

    async getId(usuario) {
        const sql = "SELECT id_usuario FROM usuarios WHERE usuario = ?"

        const id = await executaQuery(sql, usuario)
        //console.log(id)
        return id
    }

}

module.exports = new Cadastro
