const con = require('../dao/connect')
const Restaurante = require('../models/restaurante')

const teste = (req, res) => {
    res.json("Restaurante Respondendo").end()
}

const criar = (req, res) => {
    let restaurante = new Restaurante(req.body)
    con.query(restaurante.create(), (err, result) => {
        if (err == null)
            res.status(201).end()
        else
            res.status(500).json(err).end()
    })
}

const listar = (req, res) => {
    let restaurante = new Restaurante(req.params)
    con.query(restaurante.read(), (err, result) => {
        if (err == null)
            res.json(result).end()
    })
}

const alterar = (req, res) => {
    let restaurante = new Restaurante(req.body)
    con.query(restaurante.update(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(202).end()
        else
            res.status(404).end()
    })
}

const excluir = (req, res) => {
    let restaurante = new Restaurante(req.params)
    con.query(restaurante.delete(), (err, result) => {
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