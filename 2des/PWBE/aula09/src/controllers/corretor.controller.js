const con = require("../dao/connect");

const adicionar = (req, res) => {
    const { nome, matricula, senha, salario } = req.body;

    let query = `INSERT INTO corretores VALUES(DEFAULT, '${nome}', '${matricula}', '${senha}', ${salario})`;

    con.query(query, (err, response) => {
        if(err == undefined){
            res.status(201).json(response).end();
        }else{
            res.status(400).json(err).end();
        }
    });
}

const listar =(req, res) =>{
    const query = "SELECT * FROM corretores";

    con.query(query, (err, response) =>{
        if(err == undefined){
            res.status(200).json(response).end();
        }else{
            res.satus(400).json(err).end();
        }
    })
}

module.exports = {
    adicionar,
    listar
}