const con = require('../dao/connect');
const Tarefa = require('../models/tarefa');

const app = (req, res) =>{
    con.query(new Tarefa(req.body).read(),(err, result) =>{
        if(err == null){
            res.render('index', {titulo: 'Tarefas a Fazer', dados: result });
        } else {
            res.render('erro', {err:err});
        }
    })
}

const excluir = (req,res) =>{
    con.query(new Tarefa(req.params).del(), (err, result)=>{
        if(result.affectedRows > 0)
            res.redirect('/')
        else
            res.render('erro', { err: err})
    })
}

module.exports ={
    app,
    excluir
}