const con = require('../dao/connect')
const Produtos = require('../models/produtos')

const teste = (req, res) => {
    res.json("Vendas Funfando").end()
}

const criar = (req, res) => {
    let produtos = new Produtos(req.body)
    con.query(produtos.create(), (err, result) => {
        if (err == null)
            res.status(201).end()
        else
            res.status(500).json(err).end()
    })
}

const listar = (req, res) => {
    let produtos = new Produtos(req.params)
    con.query(produtos.read(), (err, result) => {
        if (err == null)
            res.json(result).end()
    })
}

const alterar = (req, res) => {
    let produtos = new Produtos(req.body)
    con.query(produtos.update(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(202).end()
        else
            res.status(404).end()
    })
}

const excluir = (req, res) => {
    let produtos = new Produtos(req.params)
    con.query(produtos.delete(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(204).end()
        else
            res.status(404).end()
    })
}

module.exports = {
    teste,
    criar,
    listar,
    alterar,
    excluir
}