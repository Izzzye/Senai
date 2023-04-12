class Avaliacao {

    constructor(i) {
        this.id = i.id
        this.restauranteId = i.restauranteId
        this.clienteId = i.clienteId
        this.data = i.data
        this.nota = i.nota
        this.descricao = i.descricao
    }

    create() {
        return `INSERT INTO avaliacao VALUE(${this.id}, ${this.restauranteId}, ${this.clienteId}, curdate(), ${this.nota}, '${this.descricao}')`
    }

    read() {
        if (this.id == undefined)
            return `SELECT * FROM avaliacao`
        else
            return `SELECT * FROM avaliacao WHERE id = ${this.id}`
    }

    update() {
        return `UPDATE avaliacao SET restauranteId = ${this.restauranteId}, clienteId = ${this.clienteId}, data = curdate(), nota = ${this.nota}, descricao = '${this.descricao}' WHERE id = ${this.id}`
    }

    delete() {
        return `DELETE FROM avaliacao WHERE id = ${this.id}`
    }
}

module.exports = Avaliacao 