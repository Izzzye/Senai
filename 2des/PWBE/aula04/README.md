# 2. Padrão de desenvolvimento MVC
- 2.1. Definição
- 2.2. Aplicabilidade
- 2.3. Design patterns
# Primeiros Patterns
- GOF (Gangue dos 4)
	- Criação
	- Estrutura
	- Comportamento
# Continuação projeto Escola (Exemplo)
- <img src="lousa.jpg">
- <img src="der_escola.png">

- Criando Script de criação e população do banco de dados com dados de teste:
```SQL
-- Script SQL de criação e população do banco de dados Escola
drop database if exists escola;
create database escola charset=UTF8 collate utf8_general_ci;
use escola;
-- Script DDL de Criação das tabelas e relacionamentos
create table professor(
    id integer not null primary key auto_increment,
    nome varchar(50) not null,
    especialidade varchar(50)
);
create table aluno(
    ra varchar(10) not null primary key,
    nome varchar(50) not null,
    nascto Date not null,
    id_turma integer not null
);
create table turma(
    id integer not null primary key auto_increment,
    nome varchar(30) not null,
    abreviacao varchar(5) not null
);
alter table aluno add foreign key (id_turma) references turma(id);
create table leciona(
    id_prof integer not null,
    id_turma integer not null,
    foreign key (id_prof) references professor(id)
    on delete cascade on update cascade,
    foreign key (id_turma) references turma(id)
    on delete cascade on update cascade
);
-- Script DML Popular o Banco de dados com dados para Testes
insert into professor values
(default, "Reenye", "Mobile"),
(default, "Wellington", "Banco de Dados"),
(default, "Ivo", "Matemática");
insert into turma values
(null,"Desenvolvimento de Sistemas","2DES"),
(null,"Desenvolvimento de Sistemas","3DES"),
(null,"Eletrônica","1EA"),
(null,"Eletrônica","3EA");
insert into aluno values
('ra01','Camacho','2000-04-02',1),
('ra02','Karen','2005-05-12',1),
('ra03','Cyro','1984-08-13',2),
('ra04','Beatriz','2002-01-05',2),
('ra05','Matheus Belli','2001-10-12',3),
('ra06','Rafael Tiepo','2001-10-12',3),
('ra07','Alexandre','2001-12-12',4),
('ra08','Gustavo','2000-05-03',4);
insert into leciona values
(1,1),
(1,2),
(2,1),
(2,2),
(3,3),
(3,4);
select * from professor;
select * from turma;
select * from aluno;
select * from leciona;
```
- NodeJS "./server.js"
```JavaScript 
const express = require('express')
const router = require('./src/routes/routes')
const app = express()
app.use(express.json())
app.use('/',router)
app.listen(3000,()=>{
    console.log("Respondendo na porta 3000")
})
```

- NodeJS "./src/routes/routes.js"
```JavaScript
const express = require("express");
const router = express.Router();
const Alunos = require('../controllers/alunos');
router.get('/', Alunos.teste);
router.get('/alunos', Alunos.listar);
module.exports = router
```

- NodeJS "./src/controllers/alunos.js"
```JavaScript
const con = require('../dao/connect')
const teste = (req, res)=>{
    res.json("Escola Respondendo").end()
}
const listar = (req,res)=>{
    con.query('SELECT * FROM aluno',(result, err)=>{
        if(err == null){
            res.json(result).end();
        }else{
            res.json(err).end();
        }
    })
}
module.exports = {
    teste,
    listar
}
```

- NodeJS "./src/dao/connect.js"
```JavaScript
const mysql = require('mysql')
const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'escola'
});
module.exports = con;
```