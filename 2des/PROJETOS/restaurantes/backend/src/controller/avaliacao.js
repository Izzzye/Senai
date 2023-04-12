const con = require('../dao/connect')
const Avaliacao = require('../models/avaliacao')

const teste = (req, res) => {
    res.json("avaliacao Respondendo").end()
}

const criar = (req, res) => {
    let avaliacao = new Avaliacao(req.body)
    con.query(avaliacao.create(), (err, result) => {
        if (err == null)
            res.status(201).end()
        else
            res.status(500).json(err).end()
    })
}

const listar = (req, res) => {
    let avaliacao = new Avaliacao(req.params)
    con.query(avaliacao.read(), (err, result) => {
        if (err == null)
            res.json(result).end()
    })
}

const alterar = (req, res) => {
    let avaliacao = new Avaliacao(req.body)
    con.query(avaliacao.update(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(202).end()
        else
            res.status(404).end()
    })
}

const excluir = (req, res) => {
    let avaliacao = new Avaliacao(req.params)
    con.query(avaliacao.delete(), (err, result) => {
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