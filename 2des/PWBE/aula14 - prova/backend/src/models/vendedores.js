class Vendedores {

    constructor(i) {
        this.id = i.id
        this.nome = i.nome
        this.matricula = i.matricula
    }

    create() {
        return `INSERT INTO vendedores VALUE('${this.id}','${this.nome}',${this.matricula})`
    }

    read() {
        if (this.id == undefined)
            return `SELECT * FROM vendedores`
        else
            return `SELECT * FROM vendedores WHERE id = '${this.id}'`
    }

    update() {
        return `UPDATE vendedores SET nome = '${this.nome}', matricula = '${this.matricula}' WHERE id = '${this.id}'`
    }

    delete() {
        return `DELETE FROM vendedores WHERE id = '${this.id}'`
    }

    comissao() {
        return `SELECT v.nome AS nomeVendedor, v.matricula, SUM(p.valor * ve.quantidade) AS totalVendas, 
        (SUM(p.valor * ve.quantidade) * 0.05) AS comissao
        FROM vendas ve
        INNER JOIN produtos p ON ve.produtoId = p.id
        INNER JOIN vendedores v ON ve.vendedorId = v.id
        GROUP BY ve.vendedorId`
    }

}

module.exports = Vendedores