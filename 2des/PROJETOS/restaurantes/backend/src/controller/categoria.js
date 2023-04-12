const con = require('../dao/connect')
const Categoria = require('../models/categoria')

const teste = (req, res) => {
    res.json("Categoria Respondendo").end()
}

const criar = (req, res) => {
    let categoria = new Categoria(req.body)
    con.query(categoria.create(), (err, result) => {
        if (err == null)
            res.status(201).end()
        else
            res.status(500).json(err).end()
    })
}

const listar = (req, res) => {
    let categoria = new Categoria(req.params)
    con.query(categoria.read(), (err, result) => {
        if (err == null)
            res.json(result).end()
    })
}

const alterar = (req, res) => {
    let categoria = new Categoria(req.body)
    con.query(categoria.update(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(202).end()
        else
            res.status(404).end()
    })
}

const excluir = (req, res) => {
    let categoria = new Categoria(req.params)
    con.query(categoria.delete(), (err, result) => {
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