const { response } = require("express");
const con = require("../dao/connect");

const listar = (req, res) => {
    let query = "SELECT * FROM imoveis";
    
    con.query(query, (err, response) => {
        if(err == undefined){
            res.status(200).json(response).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const buscar = (req,res) => {
    const { info } = req.params;

    let query = `SELECT * FROM imoveis WHERE codigo LIKE '%${info}%' OR endereco LIKE '%${info}%'`;

    con.query(query, (err, response) => {
        if(err == undefined){
            res.status(200).json(response).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const adicionar = (req, res) => {
    const {corretor_id, codigo, endereco, valorVenda, valorAluga, status_id} = req.body;

    valorVenda = (valorVenda != undefined ) ? valorVenda : 0;
    valorAluga = (valorAluga != undefined ) ? valorAluga : 0;

    let query = `INSERT INTO imoveis VALUES (DEFAULT, ${corretor_id}, "${codigo}", "${endereco}", ${valorVenda}, ${valorAluga}, ${status_id});`
    
}

module.exports ={
    listar,
    buscar
}