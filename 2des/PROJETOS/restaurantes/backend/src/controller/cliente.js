const con = require('../dao/connect')
const Cliente = require('../models/cliente')

const teste = (req, res) => {
    res.json("Cliente Respondendo").end()
}

const criar = (req, res) => {
    let cliente = new Cliente(req.body)
    con.query(cliente.create(), (err, result) => {
        if (err == null)
            res.status(201).end()
        else
            res.status(500).json(err).end()
    })
}

const listar = (req, res) => {
    let cliente = new Cliente(req.params)
    con.query(cliente.read(), (err, result) => {
        if (err == null)
            res.json(result).end()
    })
}

const alterar = (req, res) => {
    let cliente = new Cliente(req.body)
    con.query(cliente.update(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(202).end()
        else
            res.status(404).end()
    })
}

const excluir = (req, res) => {
    let cliente = new Cliente(req.params)
    con.query(cliente.delete(), (err, result) => {
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