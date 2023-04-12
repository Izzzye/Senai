class Categoria {

    constructor(i) {
        this.id = i.id
        this.nome = i.nome
    }

    create() {
        return `INSERT INTO categoria VALUE(DEFAULT ,'${this.nome}')`
    }

    read() {
        if (this.id == undefined)
            return `SELECT * FROM categoria`
        else
            return `SELECT * FROM categoria WHERE id = ${this.id}`
    }

    update() {
        return `UPDATE categoria SET nome = '${this.nome}' WHERE id = ${this.id}`
    }

    delete() {
        return `DELETE FROM categoria WHERE id = ${this.id}`
    }
}

module.exports = Categoria 