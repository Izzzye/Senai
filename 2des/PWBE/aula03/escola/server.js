//npm init -y (inicia o projeto)
//npm i express (instala o framework express que meio que faz o back funcionar)

const express = require('express') // traz o express pra várievel 

const app = express() // habilita todos os verbos do express

const router = require('./src/routes/routes')

app.use(express.json()) // habilita a função json
app.use(router)

app.listen(3000, () =>{  // ouve os verbos get post put delete 
    console.log('BackEnd Ativo.');   //mostra que o programa está funcionando
})