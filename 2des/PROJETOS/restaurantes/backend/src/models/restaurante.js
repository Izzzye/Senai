class Restaurante {

    constructor(i) {
        this.id = i.id
        this.nome = i.nome
        this.categoriaId = i.categoriaId
        this.endereco = i.endereco
    }

    create() {
        return `INSERT INTO restaurante VALUE(DEFAULT ,'${this.nome}',${this.categoriaId},'${this.endereco}')`
    }

    read() {
        if (this.id == undefined)
            return `SELECT * FROM restaurante`
        else
            return `SELECT * FROM restaurante WHERE id = ${this.id}`
    }

    update() {
        return `UPDATE restaurante SET nome = '${this.nome}', categoriaId = ${this.categoriaId}, endereco = '${this.endereco}' WHERE id = ${this.id}`
    }

    delete() {
        return `DELETE FROM restaurante WHERE id = ${this.id}`
    }
}

module.exports = Restaurante 