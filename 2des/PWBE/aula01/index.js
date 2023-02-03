//Importações
const express = require("express");

//corpo
/* cons status = () => {console.log("Ta funcionando")} */ // uma função reduzida, em arrow function


const raiz = (req, res) => {
    res.send("backend funcionando");
}
const nome = (req, res) => {
    res.send("resposta");
}

const interacao = (req, res) => {
    let nome = req.query.nome;
    let idade = req.query.idade;
    res.send("Olá " + nome + ", você tem " + idade  + " anos")
}

//Config HTPP
const app = express();
app.get("/",raiz); //toda requisição que é feita precisa do .get
app.get("/interacao", interacao);
app.get("/link", nome);

//Teste no Console
app.listen(3000, ()=>{
    console.log("Respondendo na porta 3000.")
}); //Como estamos em desenvulvimento colocar acima de 1024, abaixo disso são as portas reservadas pelo SO
    //nodemom index.js (live server)