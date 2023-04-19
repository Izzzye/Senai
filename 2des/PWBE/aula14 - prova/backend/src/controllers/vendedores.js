const con = require('../dao/connect')
const Vendedores = require('../models/vendedores')

const teste = (req, res) => {
    res.json("Vendas Funfando").end()
}

const criar = (req, res) => {
    let vendedores = new Vendedores(req.body)
    con.query(vendedores.create(), (err, result) => {
        if (err == null)
            res.status(201).end()
        else
            res.status(500).json(err).end()
    })
}

const listar = (req, res) => {
    let vendedores = new Vendedores(req.params)
    con.query(vendedores.read(), (err, result) => {
        if (err == null)
            res.json(result).end()
    })
}

const alterar = (req, res) => {
    let vendedores = new Vendedores(req.body)
    con.query(vendedores.update(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(202).end()
        else
            res.status(404).end()
    })
}

const excluir = (req, res) => {
    let vendedores = new Vendedores(req.params)
    con.query(vendedores.delete(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(204).end()
        else
            res.status(404).end()
    })
}

const comissao = (req, res) =>{
    let comissao = new Vendedores(req.params)
    con.query(comissao.comissao(), (err, result) => {
        if (err == null)
            res.json(result).end()
    })
}

module.exports = {
    teste,
    criar,
    listar,
    alterar,
    excluir,
    comissao
}