class Produtos {

    constructor(i) {
        this.id = i.id
        this.nome = i.nome
        this.valor = i.valor
    }

    create() {
        return `INSERT INTO produtos VALUE('${this.id}','${this.nome}',${this.valor})`
    }

    read() {
        if (this.id == undefined)
            return `SELECT * FROM produtos`
        else
            return `SELECT * FROM produtos WHERE id = '${this.id}'`
    }

    update() {
        return `UPDATE produtos SET nome = '${this.nome}', valor = '${this.valor}' WHERE id = '${this.id}'`
    }

    delete() {
        return `DELETE FROM produtos WHERE id = '${this.id}'`
    }
}

module.exports = Produtos