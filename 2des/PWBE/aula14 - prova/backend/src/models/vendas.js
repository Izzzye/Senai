class Vendas {

    constructor(i) {
        this.id = i.id
        this.data = i.data
        this.quantidade = i.quantidade
        this.produtoId = i.produtoId
        this.vendedorId = i.vendedorId
    }

    create() {
        return `INSERT INTO vendas VALUE('${this.id}','${this.data}',${this.quantidade}, ${this.produtoId}, ${this.vendedorId})`
    }

    read() {
        if (this.id == undefined)
            return `SELECT * FROM vendas`
        else
            return `SELECT * FROM vendas WHERE id = '${this.id}'`
    }

    update() {
        return `UPDATE vendas SET data = '${this.data}', quantidade = ${this.quantidade}, produtoId = ${this.produtoId}, vendedorId = ${this.vendedorId} WHERE id = '${this.id}'`
    }

    delete() {
        return `DELETE FROM vendas WHERE id = '${this.id}'`
    }

    vendas() {
        return `SELECT ve.data, p.nome AS nomeProduto, v.nome AS nomeVendedor
        FROM vendas ve
        INNER JOIN produtos p ON ve.produtoId = p.id
        INNER JOIN vendedores v ON ve.vendedorId = v.id`
    }

    totalVendas() {
        return `SELECT SUM(quantidade * valor) AS valorTotal
        FROM vendas
        INNER JOIN produtos ON vendas.produtoId = produtos.id`
    }
}

module.exports = Vendas