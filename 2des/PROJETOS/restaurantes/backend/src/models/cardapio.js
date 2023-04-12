class Cardapio {

    constructor(i) {
        this.id = i.id
        this.restauranteId = i.restauranteId
        this.descricao = i.descricao
        this.valor = i.valor
    }

    create() {
        return `INSERT INTO cardapio VALUE(DEFAULT ,${this.restauranteId},'${this.descricao}', ${this.valor})`
    }

    read() {
        if (this.id == undefined)
            return `SELECT * FROM cardapio`
        else
            return `SELECT * FROM cardapio WHERE id = ${this.id}`
    }

    update() {
        return `UPDATE cardapio SET restauranteId = ${this.restauranteId}, descricao = '${this.descricao}', valor = ${this.valor} WHERE id = ${this.id}`
    }

    delete() {
        return `DELETE FROM cardapio WHERE id = ${this.id}`
    }
}

module.exports = Cardapio 