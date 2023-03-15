const con = require('../dao/connect')

const teste = (req, res) => {
    res.json('Back Respondendo').end()
}

const criar = (req, res) => {
    const {tarefa} = req.body

    con.query(`INSERT INTO tarefas VALUES(DEFAULT, '${tarefa}' ) `, (err, result) => {
        if (err == null)
            res.status(201).end()
        else
            res.status(500).json(err).end()
    })
}

const listar = (req, res) => {
    con.query(`SELECT * FROM tarefas`, (err, result) => {
        if (err == null)
            res.json(result).end()
    })
}

module.exports = {
    teste,
    criar,
    listar
}