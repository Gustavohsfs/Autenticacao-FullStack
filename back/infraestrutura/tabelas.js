class Tabelas {
    init(conexao) {
        this.conexao = conexao

        this.criarUsuarios()
    }

    criarUsuarios() {
        const sql = 'CREATE TABLE IF NOT EXISTS Usuarios (id_usuario int NOT NULL AUTO_INCREMENT, usuario varchar(50) NOT NULL, senha varchar(300) NOT NULL, PRIMARY KEY(id_usuario))'

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela Atendimentos criada com sucesso')
            }
        })
    }
}

module.exports = new Tabelas