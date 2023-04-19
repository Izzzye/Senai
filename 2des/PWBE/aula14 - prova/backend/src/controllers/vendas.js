const con = require('../dao/connect')
const Vendas = require('../models/vendas')

const teste = (req, res) => {
    res.json("Vendas Funfando").end()
}

const criar = (req, res) => {
    let vendas = new Vendas(req.body)
    con.query(vendas.create(), (err, result) => {
        if (err == null)
            res.status(201).end()
        else
            res.status(500).json(err).end()
    })
}

const listar = (req, res) => {
    let vendas = new Vendas(req.params)
    con.query(vendas.read(), (err, result) => {
        if (err == null)
            res.json(result).end()
    })
}

const alterar = (req, res) => {
    let vendas = new Vendas(req.body)
    con.query(vendas.update(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(202).end()
        else
            res.status(404).end()
    })
}

const excluir = (req, res) => {
    let vendas = new Vendas(req.params)
    con.query(vendas.delete(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(204).end()
        else
            res.status(404).end()
    })
}

const vendas = (req, res) =>{
    let vendas = new Vendas(req.params)
    con.query(vendas.vendas(), (err, result) => {
        if (err == null)
            res.json(result).end()
    })
}

const totalVendas = (req, res) => {
    let vendas = new Vendas(req.params)
    con.query(vendas.totalVendas(), (err, result) => {
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
    vendas,
    totalVendas
}