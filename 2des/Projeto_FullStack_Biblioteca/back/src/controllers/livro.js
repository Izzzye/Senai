const con = require('../dao/connect')
const Livro = require('../models/livro')

const teste = (req, res) => {
    res.json("Back Respondendo").end()
}

const criar = (req, res) => {
    let livro = new Livro(req.body)
    con.query(livro.create(), (err, result) => {
        if (err == null)
            res.status(201).end()
        else
            res.status(500).json(err).end()
    })
}

const listar = (req, res) => {
    let livro = new Livro(req.params)
    con.query(livro.read(), (err, result) => {
        if (err == null)
            res.json(result).end()
    })
}

const alterar = (req, res) => {
    let livro = new Livro(req.body)
    con.query(livro.update(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(202).end()
        else
            res.status(404).end()
    })
}

const excluir = (req, res) => {
    let livro = new Livro(req.params)
    con.query(livro.delete(), (err, result) => {
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