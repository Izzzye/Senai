class Cliente {

    constructor(i) {
        this.id = i.id
        this.nome = i.nome
        this.telefone = i.telefone
        this.email = i.email
        this.senha = i.senha
    }

    create() {
        return `INSERT INTO cliente VALUE(DEFAULT ,'${this.nome}','${this.telefone}','${this.email}', '${this.senha}')`
    }

    read() {
        if (this.id == undefined)
            return `SELECT id, nome, telefone, email FROM cliente`
        else
            return `SELECT id, nome, telefone, email  FROM cliente WHERE id = ${this.id}`
    }

    update() {
        return `UPDATE cliente SET nome = '${this.nome}', telefone = '${this.telefone}', email = '${this.email}', senha = '${this.senha}' WHERE id = ${this.id}`
    }

    delete() {
        return `DELETE FROM cliente WHERE id = ${this.id}`
    }
}

module.exports = Cliente 